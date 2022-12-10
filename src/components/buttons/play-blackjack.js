module.exports = {
    data: {
        name: 'play-blackjack'
    },
    async execute(interaction, client) {
        await interaction.followUp({
            content: `Testing`
        });
    }
}