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
            {name: 'Charlie', day: '09', month: '01'},
            {name: 'Brandon', day: '06', month: '03'},
            {name: 'Brendan', day: '24', month: '03'},
            {name: 'Ayman', day: '03', month: '04'},
            {name: 'Victor', day: '13', month: '07'},
            {name: 'Travis', day: '14', month: '09'},
            {name: 'Aaron', day: '06', month: '11'},
            {name: 'Tammie', day: '10', month: '12'}
        ]
        
        for(const birthday in birthdays) {
            const channel = client.channels.cache.get('1033239111412219946');
            cron.schedule(`59 59 23 ${birthdays[birthday].day} ${birthdays[birthday].month} *`, () => {
                channel.send(`Happy birthday ${birthdays[birthday].name}`);
            }, {
                scheduled: true, 
                timezone: "Canada/Eastern"
            })
        }        
    }
}
