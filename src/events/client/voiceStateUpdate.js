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
    if (newState) {
        //console.log('new');
      if (newState.member.id != client.user.id) {
        if (newState.channel) {
          connection = joinVoiceChannel({
            channelId: newState.channel.id,
            guildId: newState.member.guild.id,
            adapterCreator: newState.guild.voiceAdapterCreator,
            selfDeaf: false,
          });

          connection.receiver.speaking.on("start", async (userId) => {
           try {
                await transcriber.listen(connection.receiver, userId, client.users.cache.get(userId))
                  .then(async (data) => {
                    if (!data.transcript.text) return;
        
                    var text = data.transcript.text;
                    var user = data.user;
                    console.log(`${user.username}: ${text}`);
        
                    if(text) {
                        if (text.toLowerCase().includes("remedy")) {
                           // console.log("Hey There Im Remdy");
                            //await newState.channel.send({content: text});
                            await client.emit('onVicBotVoice', newState.channel, text, client);
                          }
                    }
                  });
                } catch (error) {
                  console.error(chalk.red(`ERROR: [${error}]`));
                }

            });
        }
      }
    }

    if(oldState) {
        if(oldState.channel != null) {
            console.log(oldState.channel.members.size)
            if(oldState.channel.members.size == 1) {
                if(connection) {
                    connection.destroy();
                }
            }
        }
    }
    console.log(chalk.green(`Event '${this.name}' executed successfully`));
  },
};
