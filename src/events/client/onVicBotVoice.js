const { Configuration, OpenAIApi } = require("openai");
const { MongoClient } = require("mongodb");
const chalk = require("chalk");

module.exports = {
  name: "onVicBotVoice",
  async execute(channel, message, client) {
    console.log(chalk.yellow(`Executing event '${this.name}'`));
    const configuration = new Configuration({
      apiKey: `${process.env.OPENAI_API_KEY}`,
    });
    const openai = new OpenAIApi(configuration);
    let prompt = message.replace(`Remedy `, "");
    prompt = `Remedy: ${prompt}\n`;

    const db = new MongoClient(process.env.databaseToken);

    try {
      const database = db.db("discord");
      const collection = database.collection("VicBotResponses");

      const query = { _id: '0' };

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
          _id: '0',
          name: 'Remedy',
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
        stop: [`Remedy:`, " AI:"],
      });

      const reply = response.data.choices[0].text;
      var formatted = reply;
      if (formatted[0] === "?") {
        formatted[0] = " ";
      }
      if (formatted.includes("AI: ")) {
        formatted = formatted.replace("AI: ", "");
      }
      if (formatted != "") {
        channel.send(formatted);
      }

      //console.log(formatted.trimStart())

      try {
        const database = db.db("discord");
        const collection = database.collection("VicBotResponses");

        const query = { _id: '0' };

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
