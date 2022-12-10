const chalk = require('chalk');
const { ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js')
module.exports = {
    name:   'onPlayGame',
    async execute(interaction, client) {
        console.log(chalk.yellow(`Executing event '${this.name}'`));
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('play-blackjack')
                .setLabel('Play Blackjack')
                .setStyle(ButtonStyle.Primary),
        );
       try {
            await interaction.followUp({
                content: 'Choose a game',
                components: [row]
            });
            console.log(chalk.green(`Event '${this.name}' executed successfully`));
        } catch (error) {
            console.error(chalk.red(`ERROR: [${error}]`));
        }
    }
}