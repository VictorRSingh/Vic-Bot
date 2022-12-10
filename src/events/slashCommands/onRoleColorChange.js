const chalk = require('chalk');
const { Colors } = require('discord.js');

module.exports = {
    name:   'onRoleColorChange',
    async execute(interaction, client) {
        console.log(chalk.yellow(`Executing event '${this.name}'`));
        
        try {
            let role = await interaction.member.roles.highest;
            choice = interaction.options.data[0].value;
            role.setColor(Colors[choice]);
            
            await interaction.followUp({
                content: `Changed the color of ${role} to ${choice}`
            }),
            console.log(chalk.green(`Event '${this.name}' executed successfully`));
        } catch (error) {
            console.error(chalk.red(`ERROR: [${error}]`));
        }
    }
}