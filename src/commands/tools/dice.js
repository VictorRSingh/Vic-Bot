/*********************************************************************************************** 
 Vic Bot Slash Command: roll-dice
 Author: Victor Singh
 Date: 2023-01-14
 Purpose: To simulate a dice roll of a D6 or D20.
************************************************************************************************/

const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roll-dice")
    .setDescription("Rolls a 6 or 20 sided die")
    .addStringOption((options) =>
      options
        .setName("dice")
        .setDescription("choose a dice to roll")
        .setRequired(true)
        .addChoices({ name: "d20", value: "20" }, { name: "d6", value: "6" })),

    async execute(interaction, client) {
    await interaction.deferReply();

    client.emit('onRollDice', interaction, client)
  }
};
