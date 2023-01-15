const { Configuration, OpenAIApi } = require("openai");
const chalk = require("chalk");
const { EmbedBuilder } = require("discord.js");

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

    image_url = response.data.data[0].url;

    // Create an embed to send to Discord
    const embed = new EmbedBuilder()
      .setTitle("Dalle Generated Image")
      .setDescription(`${interaction.options.getString("prompt")}`)
      .setColor(0x18e1ee)
      .setImage(image_url)
      .setTimestamp(Date.now())
      .setAuthor({
        name: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL(),
      });
      

    try {
      console.log(response.data);
      await interaction.followUp({ embeds: [embed] });
    } catch (error) {
      console.error(chalk.red(`ERROR: [${error}]`));
    }
  },
};
