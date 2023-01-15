/*********************************************************************************************** 
 Vic Bot Slash Command: generate-dalle
 Author: Victor Singh
 Date: 2023-01-14
 Purpose: To produce an AI generated image of a prompt given using OpenAI Dalle 2
************************************************************************************************/

const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('generate-dalle')
        .setDescription('Generates an image using magic!')
        .addStringOption(options =>
                options.setName('prompt')
                .setDescription('Be Descriptive!')
                .setRequired(true)),
    async execute(interaction, client) {
        await interaction.deferReply();

        client.emit('onDalleGeneration', interaction, client)
    }
}
