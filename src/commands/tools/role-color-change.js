const { SlashCommandBuilder, Colors } = require('discord.js');
const chalk = require('chalk');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('role-color-change')
        .setDescription('Change the color of your highest role.')
        .addStringOption(options => {
                options.setName('color')
                .setDescription('Choose a color to change too')
                .setRequired(true)
                
                var counter = 0
                for(const [key, value] of Object.entries(Colors)) {
                    counter++;
                    if(counter < 25)
                    {
                        //console.log(`${counter}: ${key}: ${value}`);
                        options.addChoices({
                            name: `${key}`,
                            value: `${key}`
                        })
                    }
                }
                return options;
        }
    ),

    async execute(interaction, client) {
    try {
        await interaction.deferReply();
        await client.emit('onRoleColorChange', interaction, client);
    } catch (error) {
        console.error(error);
    }
    }
}