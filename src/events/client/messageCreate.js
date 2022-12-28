const moment = require("moment");
const fetch = require("node-fetch");
const chalk = require("chalk");
const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = {
  name: "messageCreate",
  async execute(message, client) {

    const voiceChannel = message.member?.voice.channel;

    if (message.author.bot || !message.guild) return;
    const created = moment(message.createdAt).format("DD/MM/YY");
    if (message.content.toLowerCase() === "leg?") {
      message.reply("Letter League?");
    } else if (message.content.toLowerCase() === "oi") {
      replies = [
        "oi",
        "yoy yoy",
        "b-oi",
        "roo",
        "Travis dat you?",
        "https://tenor.com/view/mad-dog-hi-gif-12336961",
        "https://tenor.com/view/oi-billy-butcher-karl-urban-the-boys-hey-gif-26043536",
        "Smat 3:16: For god said, oi, let there be 'Cord ",
      ];

      message.reply(replies[Math.floor(Math.random() * replies.length)]);
    } else if (message.content === "ayman is awesome") {
      message.reply("Eh we think hes alright");
    } else if (message.content.split(" ").length === 2) {
      let queries = ["kanye", "drake", "kratos", "pepe", "gif"];
      let splitMessage = message.content.split(" ");
      
      queries.some(query => {
        
        if (splitMessage.length === 2) {
          if (splitMessage[0] === query || splitMessage[1] === query) {
            console.log(chalk.yellow(`Getting a gif for ${message.content}`));

            const gif = async () => {
              const results = await fetch(
                `https://tenor.googleapis.com/v2/search?media_filter=gif&random=true&q=${splitMessage[0]}+${splitMessage[1]}&key=${process.env.tenor_key}&client_key=my_test_app&limit=30`
              ).then((res) => res.json());
              reply = results.results[Math.floor(Math.random(49))].media_formats.gif.url;
              console.log(chalk.green(`replying with ${reply}`));  
              message.channel.send(reply);
            }

            gif();

            return true
          }
        }
      });
    } else if (message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") {
      return false;
    } else if (message.mentions.has(client.user.id)) {
      client.emit('onVicBotMention', message, client);
    } 
  },
};
