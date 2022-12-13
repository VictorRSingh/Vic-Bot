const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timer')
        .setDescription('creates a timer')
        .addStringOption(options => 
                options.setName('length')
                .setDescription('How long you want the timer to run for in seconds')
                .setRequired(true)
                .addChoices(
                )),
    async execute(interaction, client) {
        await interaction.deferReply();
        client.emit('onSetReminder', interaction, client);
    }
}