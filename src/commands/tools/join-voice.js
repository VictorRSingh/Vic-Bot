const { SlashCommandBuilder } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");
const Transcriber = require("discord-speech-to-text");
const transcriber = new Transcriber("7KLMXJW3ULAGLMIDGYN6LQWV7HR67ME5");
const chalk = require("chalk");

module.exports = {
  connection: null,
  data: new SlashCommandBuilder()
    .setName("join-voice")
    .setDescription("Asks the bot to join the voice channel and listens for commands"),
  async execute(interaction, client) {
    await interaction.deferReply({ephemeral: true});
    const channel = interaction.member.voice.channel;
    //console.log(channel);
    // If interaction wasnt from a voice channel
    if (!channel) {
      return await interaction.followUp({
        content: "You must be in a voice channel to use this command",
        ephemeral: true,
      });
    }

    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: interaction.guildId,
      adapterCreator: interaction.channel.guild.voiceAdapterCreator,
      selfDeaf: false,
    });

    await interaction.followUp({
      content: "I joined the voice channel",
      ephemeral: true,
    });

    console.log(chalk.yellow("Remedy is listen to the voice chat"));

    if (!connection) {
      return await interaction.followUp({
        content: "I couldn't join the voice channel",
        ephemeral: true,
      });
    }
    connection.receiver.speaking.on("start", async (userId) => {
      try {
        await transcriber
          .listen(connection.receiver, userId, client.users.cache.get(userId))
          .then(async (data) => {
            if (!data.transcript.text) return;

            var text = data.transcript.text;
            var user = data.user;
            console.log(`${user.username}: ${text}`);

            if (text) {
              if (text.toLowerCase().includes("remedy")) {
                await client.emit(
                  "onVicBotVoice",
                  interaction.channel,
                  text,
                  client
                );
              }
            }
          });
      } catch (error) {
        console.error(chalk.red(`ERROR: [${error}]`));
      }
    });
  },
};
