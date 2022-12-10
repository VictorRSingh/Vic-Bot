const { SlashCommandBuilder } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aux-leave')
        .setDescription('removes the bot from voice'),
    async execute(interaction) {
        //console.log(interaction.client.distube.voices);
        interaction.client.distube.voices.leave(interaction.guild.id);
        await interaction.reply({
            content: 'I have left the voice channel.',
            ephemeral: true
        });
    }
}