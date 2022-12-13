const chalk = require('chalk');
const cron = require('node-cron');

module.exports = {
    name:   'onSetReminder',
    async execute(interaction, client) {
        console.log(chalk.yellow(`Executing event '${this.name}'`));
        
        try {

            let length = interaction.options.getString('length');

            if (length > 0 & length <= 604800) {
                let time = {
                    hour: 0,
                    minute: 0,
                    seconds: 0 
                }
    
                time.hour = Math.floor(length / 3600);
                time.hour > 0  ? length = length - (time.hour * 3600) : null;
                time.minute = Math.floor(length / 60)
                time.seconds = time.minute >= 1 ? length = length - (time.minute * 60) : length;
                
                console.log(`Expects to run a timer for ${time.hour > 0 ? `${time.hour} hour(s)` : ''} ${time.minute > 1 ? `${time.minute} minute(s)` : ''} ${time.seconds > 1 ? `${time.seconds} seconds(s)` : ''} `);
                interaction.followUp('Testing');
            } else {
                interaction.followUp('Reminder cannot exceed a week');
            }

        } catch (error) {
            console.error(chalk.red(`ERROR: [${error}]`));
        }
    }
}