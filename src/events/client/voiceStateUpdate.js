const {
  joinVoiceChannel,
  getVoiceConnection,
  VoiceConnectionStatus,
} = require("@discordjs/voice");
const Transcriber = require("discord-speech-to-text");
const transcriber = new Transcriber("NIP2FPLVXCH4TEM7HV6A3AX3OLCOUDPN");
const chalk = require("chalk");

module.exports = {
  name: "voiceStateUpdate",
  once: true,
  connection: null,
  async execute(oldState, newState, client) {
    console.log(chalk.yellow(`Executing event '${this.name}'`));
    console.log(chalk.green(`Event '${this.name}' executed successfully`));
  },
};
