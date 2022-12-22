const { SlashCommandBuilder } = require("discord.js");
const net = require("net");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rcon-test")
    .setDescription("A Test for rcon to Valheim server!"),
  async execute(interaction, client) {
    await interaction.deferReply();

    const cli = net.createConnection(
      {
        host: "127.0.0.1",
        port: 2456,
      },
      () => {
        console.log('Connected')
      }
    );
  },
};
