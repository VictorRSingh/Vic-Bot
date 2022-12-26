const { Configuration, OpenAIApi } = require("openai");
const { MongoClient } = require("mongodb");
const chalk = require("chalk");

module.exports = {
  name: "onVicBotMention",
  async execute(message, client) {
    console.log(chalk.yellow(`Executing event '${this.name}'`));
    const configuration = new Configuration({
      apiKey: `${process.env.OPENAI_API_KEY}`,
    });
    const openai = new OpenAIApi(configuration);
    let prompt = message.content.replace(`${client.user} `, "");
    prompt = `${message.author.username}: ${prompt}\n`;

    const db = new MongoClient(process.env.databaseToken);

    try {
      const database = db.db("discord");
      const collection = database.collection("VicBotResponses");

      const query = { _id: message.author.id };

      const options = {
        projection: { _id: 1, name: 1, prompt: 1 },
      };

      const result = await collection.findOne(query, options);

      if (result) {
        //console.log(result.prompt)
        prompt = result.prompt + " " + prompt;
        await collection.updateOne(query, { $set: { prompt: prompt } });
      } else {
        //console.log('no prompt');
        await collection.insertOne({
          _id: message.author.id,
          name: message.author.tag,
          prompt: prompt,
        });
      }

      // console.log(prompt);

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 256,
        temperature: 0,
        n: 1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [`${message.author.username}:`, " AI:"],
      });

      const reply = response.data.choices[0].text;
      var formatted = reply;
      if (formatted[0] === "?") {
        formatted[0] = " ";
      }
      if (formatted.includes("AI: ")) {
        formatted = formatted.replace("AI: ", "");
      }
      if (formatted != "" && message.author.id != "351653863188856835") {
        message.channel.send(formatted);
      }

      //console.log(formatted.trimStart())

      try {
        const database = db.db("discord");
        const collection = database.collection("VicBotResponses");

        const query = { _id: message.author.id };

        await collection.updateOne(query, {
          $set: { prompt: prompt + "AI: " + formatted.trimStart() + "\n" },
        });
      } catch (error) {
        console.error(chalk.red(`ERROR: [${error}]`));
      } finally {
        await db.close();
      }
    } catch (error) {
      console.error(chalk.red(`ERROR: [${error}]`));
    } finally {
      await db.close();
    }
    console.log(chalk.green(`Event '${this.name}' executed successfully`));
  },
};

// async function getResponse(prompt) {
//   const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: prompt,
//       max_tokens: 2048,
//       temperature: 0,
//       n: 1,
//   });
//   previousResponse = response.text;
//   return response.text;
// }
