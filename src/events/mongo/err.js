const chalk = require('chalk');

module.exports = {
    name: 'err',
    execute(client) {
        console.log(
            chalk.red(`[Database ERROR] an error has occured with the connection:\n${err}`)
        );
    },
}