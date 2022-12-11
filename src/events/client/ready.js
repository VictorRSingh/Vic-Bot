const chalk = require("chalk");
const fs = require('fs');

module.exports = {
  name: "ready",
  once: "true",
  async execute(interaction, client) {
    const bot = client.user.tag;
    console.log(
      chalk.green(`\nReady ` + chalk.blue(bot) + ` is logged in and online.`)
    );

    const eventFolder = fs.readdirSync(`./src/events`);
    for(const folder of eventFolder) {
        const eventFiles = fs
        .readdirSync(`./src/events/${folder}`)
        .filter(file => file.endsWith(".js"));

      switch (folder) {
        case "scheduler":
          for (const file of eventFiles) {
            const task = require(`../${folder}/${file}`);
            task.execute(client);
            console.log(chalk.green(`\nScheduling ` + chalk.blue(file) + ` to be executed.\n`));
          }
      }
    }
  },
};

