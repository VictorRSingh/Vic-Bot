const {
  joinVoiceChannel,
  getVoiceConnection,
  VoiceConnectionStatus,
} = require("@discordjs/voice");
const Transcriber = require("discord-speech-to-text");
const transcriber = new Transcriber("7KLMXJW3ULAGLMIDGYN6LQWV7HR67ME5");
const chalk = require("chalk");

module.exports = {
  name: "voiceStateUpdate",
  once: true,
  connection: null,
  async execute(oldState, newState, client) {

  },
};