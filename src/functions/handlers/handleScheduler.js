const fs = require("fs");
const chalk = require("chalk");

module.exports = (client) => {

    client.handleScheduler = async () => {

        const eventFolder = fs.readdirSync(`./src/events`);
        for(const folder of eventFolder) {
            const eventFiles = fs
            .readdirSync(`./src/events/${folder}`)
            .filter(file => file.endsWith(".js"));
    
          switch (folder) {
            case "scheduler":
              for (const file of eventFiles) {
                const task = require(`../../events/${folder}/${file}`);
                task.execute(client);
                console.log(chalk.green(`\nScheduling ` + chalk.blue(file) + ` to be executed.\n`));
              }
          }
        }
    }
};
