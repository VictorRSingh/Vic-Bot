const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const path = require("path");
const app = express();

app.use(express.json());


//Discord Bot 
const { token, databaseToken } = process.env;
const { connect } = require('mongoose');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { DisTube } = require('distube');
const fs = require('fs');
const { Guilds, GuildMessages, MessageContent, GuildVoiceStates, GuildMembers, } = GatewayIntentBits;
const client = new Client({ intents: [Guilds, GuildMessages, MessageContent, GuildVoiceStates, GuildMembers] });
const chalk = require('chalk');

module.exports = client;

client.distube = new DisTube(client, {
    leaveOnStop: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
    
})
module.exports = client.distube;

client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.commandArray = [];
client.color = 0x18e1ee;

(async () => {
    await connect(databaseToken).catch(console.error);

    app.listen(8080);
    console.log(chalk.green('Listening on port 8080'));
})();

const functionFolder = fs.readdirSync('./src/functions');

for(const folder of functionFolder)
{
    const functionFiles = fs.readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
    for (const file of functionFiles) require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();
client.handleComponents();

client.login(token);


app.get('/api/', (req, res) => {
    res.sendFile(path.join(__dirname, '/api/index.html'));
});
