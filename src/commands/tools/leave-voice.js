const { SlashCommandBuilder } = require('discord.js')
const { getVoiceConnection } = require("@discordjs/voice");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave-voice')
        .setDescription('Tells to bot to leave the channel'),
        async execute(interaction, client) {
            console.log(interaction.guildId);
            const connection = getVoiceConnection({
                guildId: interaction.guildId
            })

            console.log(connection);
        }
}