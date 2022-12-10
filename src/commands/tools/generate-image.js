const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('generate-image')
        .setDescription('Generate an AI image of a text prompt.')
        .addStringOption(options => 
                options.setName('prompt')
                .setDescription('Type in your prompt, be descriptive')
                .setRequired(true))
    ,
    async execute(interaction, client) {
        await interaction.deferReply()
        client.emit('onGenerateImage', interaction, client);
    }
}