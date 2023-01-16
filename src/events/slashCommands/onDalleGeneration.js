/*********************************************************************************************** 
 Vic Bot Event: onDalleGeneration
 Author: Victor Singh
 Date: 2023-01-14
 Purpose: To produce an AI generated image of a prompt given using OpenAI Dalle 2
************************************************************************************************/

const { Configuration, OpenAIApi } = require("openai");
const chalk = require("chalk");
const { EmbedBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "onDalleGeneration",
  async execute(interaction, client) {

    // Using openai's API we can generate an image and get the url from the response
    const configuration = new Configuration({
      apiKey: `${process.env.OPENAI_API_KEY}`,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: `${interaction.options.getString("prompt")}`,
      n: 1,
      size: "1024x1024",
    });

    var image_url = response.data.data[0].url;
    var fileName = Date.now().toString();

    fs.writeFile(`./src/images/generated/${fileName}`, '', (error) => {
      if(error) {
          console.error(chalk.red(`ERROR: [${error}]`));
      }
  })
  fs.createWriteStream(`./src/images/generated/${fileName}`).write(image_url);

  fs.readFile(`./src/images/generated/${fileName}`, 'utf8', (error, data) => {

    if (error) {
      console.error(chalk.red(`ERROR: [${error}]`));
    }

  image_url = data;
  });
  console.log(image_url);
    // Create an embed to send to Discord
    const embed = new EmbedBuilder()
      .setTitle("Dalle Generated Image")
      .setDescription(`${interaction.options.getString("prompt")}`)
      .setColor(0x18e1ee)
      .setImage(`${image_url}`)
      .setTimestamp(Date.now())
      .setAuthor({
        name: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL(),
      });


    try {
      //console.log(response.data);
      await interaction.followUp({ embeds: [embed] });
    } catch (error) {
      console.error(chalk.red(`ERROR: [${error}]`));
    }
  },
};
