const fs = require("fs");
const chalk = require("chalk");

module.exports = (client) => {
  client.handleScheduler = async () => {
    const eventFolder = fs.readdirSync(`./src/scheduler`);
    for (const folder of eventFolder) {
      const schedulerFiles = fs
        .readdirSync(`./src/scheduler/${folder}`)
        .filter((file) => file.endsWith(".js"));

      switch (folder) {
        case "tasks":
          for (const file of schedulerFiles) {
            const task = require(`../../scheduler/${folder}/${file}`);
            client.on(task.name, (...args) => 
            task.execute(...args, client)
            );
          }

      }
    }
  };
};
