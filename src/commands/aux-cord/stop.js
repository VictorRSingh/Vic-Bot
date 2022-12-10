const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aux-stop')
        .setDescription('stops the music'),
    async execute(interaction) {
        const queue = interaction.client.distube.getQueue(interaction.guild);
        if (!queue) await interaction.channel.send({
            content:`There is nothing in the queue right now!`,
            ephemeral: true})
        queue.stop()
        await interaction.reply('Stopping the music');
    }
}