const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Get weather info for everyone')
    ,
    async execute(interaction, client) {
        await interaction.deferReply()
        client.emit('onGetWeather', interaction, client);
    }
}