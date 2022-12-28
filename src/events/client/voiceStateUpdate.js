const {
  joinVoiceChannel,
  getVoiceConnection,
  VoiceConnectionStatus,
} = require("@discordjs/voice");
const Transcriber = require("discord-speech-to-text");
const transcriber = new Transcriber("NIP2FPLVXCH4TEM7HV6A3AX3OLCOUDPN");

module.exports = {
  name: "voiceStateUpdate",
  connection: null,
  async execute(oldState, newState, client) {

    if (newState) {
        console.log('new');
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
                  .then((data) => {
                    if (!data.transcript.text) return;
        
                    var text = data.transcript.text;
                    var user = data.user;
                    //console.log(`${user.username}: ${text}`);
        
                    if(text) {
                        if (text.includes("Remedy")) {
                           // console.log("Hey There Im Remdy");
                            newState.channel.send({content: text});
                            client.emit('onVicBotVoice', newState.channel, text, client);
                          }
                    }
                  });
                } catch (error) {
                    console.log(error);
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
  },
};
