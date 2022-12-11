const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const chalk = require('chalk');

module.exports = (client) => {
    client.handleCommands = async() => {
        const commandFolders = fs.readdirSync('./src/commands');
        for(const folder of commandFolders)
        {
            const commandFiles = fs
            .readdirSync(`./src/commands/${folder}`)
            .filter((file) => file.endsWith(".js"))
        const { commands, commandArray } = client;
        for(const file of commandFiles) {
            const command = require(`../../commands/${folder}/${file}`);
            commands.set(command.data.name, command);
            commandArray.push(command.data.toJSON());
            console.log(chalk.blue(`Command: `) + chalk.yellow(`${command.data.name} `) + chalk.green(`has been passed through the handler`));
        }
    }

    const clientId = '1033239998327160842';
    const guildId = '1033239110778900518';
    const cord = '469340335148105728'
    const rest = new REST({ version: 9 }).setToken(process.env.token);
    try {

            console.log("Started refreshing applications (/) commands.");

        rest.put(Routes.applicationGuildCommands(clientId, guildId), {
            body: client.commandArray,
        }).then(() => {
            console.log(chalk.green(`Successfully reloaded application (/) commands on ${guildId}.`));
        }).catch((error) => {
            console.log(error)
        });
        
        rest.put(Routes.applicationGuildCommands(clientId, cord), {
            body: client.commandArray,
        }).then(() => {
            console.log(chalk.green(`Successfully reloaded application (/) commands on ${guildId}.`));
        }).catch((error) => {
            console.log(error)
        });

    } catch(error) {
        console.error(error);
    }
    };
};