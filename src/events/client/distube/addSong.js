module.exports = {
    name: 'addSong',
    async execute(interaction, client) {
        interaction.client.distube.on('addSong', (queue, song) =>
		interaction.reply(
			`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,

	))
    }
    
}