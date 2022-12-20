const { Configuration, OpenAIApi } = require("openai");
const chalk = require('chalk');

module.exports = {
    name:   'onDalleGeneration',
    async execute(interaction, client) {
        console.log(chalk.yellow(`Executing event '${this.name}'`));
        const configuration = new Configuration({
            apiKey: `${process.env.OPENAI_API_KEY}`
          });
          const openai = new OpenAIApi(configuration);
          const response = await openai.createImage({
            prompt: `${interaction.options.getString('prompt')}`,
            n: 1,
            size: "1024x1024",
          });
          image_url = response.data.data[0].url;     
        try {

            await interaction.followUp(`${image_url}`)     
            console.log(chalk.green(`Event '${this.name}' executed successfully`));
        } catch (error) {
            console.error(chalk.red(`ERROR: [${error}]`));
        }
    }
}
