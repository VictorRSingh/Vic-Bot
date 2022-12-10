const chalk = require('chalk');
var cron = require('node-cron');
module.exports = {
    name: 'birthday',
    once: 'true',
    async execute(client) {
        // ┌────────────── second (optional)
        // │ ┌──────────── minute
        // │ │ ┌────────── hour
        // │ │ │ ┌──────── day of month
        // │ │ │ │ ┌────── month
        // │ │ │ │ │ ┌──── day of week
        // │ │ │ │ │ │
        // │ │ │ │ │ │
        // * * * * * *

        var birthdays = [
            {name: 'test', day: '09', month: '12'},
            {name: 'Tammie', day: '10', month: '12'}
        ]
        
        for(const birthday in birthdays) {
            cron.schedule(`35 23 ${birthdays[birthday].day} ${birthdays[birthday].month} *`, () => {
                console.log(`Happy birthday ${birthdays[birthday].name}`);
                console.log(client);
                client.channels.cache.fetch('1033239111412219946').then(channel => {
                    channel.send('Testing');
                })
            }, {
                scheduled: true, 
                timezone: "Canada/Eastern"
            })
        }
        
        console.log(chalk.blue(`${this.name} `) + chalk.green(` task running`));
        
    }
}
