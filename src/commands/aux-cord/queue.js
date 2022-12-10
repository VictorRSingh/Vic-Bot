const { SlashCommandBuilder } = require("discord.js")
const { execute } = require("./stop")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aux-queue')
        .setDescription('Returns the queue for music.'),
    async execute(interaction) {
        const client = interaction.client;
        const queue = client.distube.getQueue(interaction.guild);
        if (!queue) await interaction.channel.send({
            content: `There is nothing playing!`,
            ephemeral: true
        })
        const q = queue.songs
        .map((song, i) => `${i === 0 ? 'Playing:' : `${i}.`} ${song.name} - \`${song.formattedDuration}\``)
        .join('\n');

        await interaction.reply({
            content: `**Music Queue**\n${q}`,
            ephemeral: true
        })
    }
}