const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('games')
        .setDescription('Play a game')
    ,
    async execute(interaction, client) {
        await interaction.deferReply({
            ephemeral: true
        });
        
        client.emit('onPlayGame', interaction, client);
    }
        
}