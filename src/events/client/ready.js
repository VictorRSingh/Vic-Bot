const chalk = require('chalk');

module.exports = {
    name: 'ready',
    once: 'true',
    async execute(interaction, client) {
        const bot = client.user.tag;
        console.log(chalk.green(`\nReady ` + chalk.blue(bot) +  ` is logged in and online.\n`));
    }
}