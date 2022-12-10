const fs = require('fs');
const chalk = require('chalk');

module.exports = (client) => {
    client.handleScheduler = async () => {
        const eventFolder = fs.readdirSync(`./src/scheduler`);
        for(const folder of eventFolder) {
            const schedulerFiles = fs
            .readdirSync(`./src/scheduler/${folder}`)
            .filter(file => file.endsWith(".js"));
            
    switch(folder) {
        case 'tasks':
            break;
        default:
            break;
        }
        }
    }
}