const { SlashCommandBuilder } = require("discord.js");
const Client = require('ssh2').Client;
const chalk = require('chalk')
module.exports = {
  data: new SlashCommandBuilder()
    .setName("valheim-restart")
    .setDescription("Used to restart the Valheim server!"),
  async execute(interaction, client) {
    await interaction.reply('Restarting Valheim Server, _Updates will post here_');
    client.emit('onValheimRestart', interaction, client);
  },
};
