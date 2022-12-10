const chalk = require('chalk');

module.exports = {
    name: 'connecting',
    execute(client) {
        console.log(chalk.green("[Database Status]: Connecting."));
    },
}