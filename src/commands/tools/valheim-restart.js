const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("valheim-restart")
    .setDescription("Used to restart the Valheim server!"),
  async execute(interaction, client) {
    await interaction.deferReply();
    client.emit('onValheimRestart', interaction, client);
  },
};
