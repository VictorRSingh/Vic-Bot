const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('generate-dalle')
        .setDescription('Generates an image using magic!')
        .addStringOption(options =>
                options.setName('prompt')
                .setDescription('Be Descriptive!')
                .setRequired(true)),
    async execute(interaction, client) {
        await interaction.deferReply();

        client.emit('onDalleGeneration', interaction, client)
    }
}
