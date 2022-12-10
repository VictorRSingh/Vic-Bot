const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('database')
        .setDescription('Generate an AI image of a text prompt.')
    ,
    async execute(interaction, client) {
        await interaction.deferReply()
        client.emit('onIncreaseGeneratedCount', interaction, client);
    }
}