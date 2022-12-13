const chalk = require("chalk");
const axios = require("axios");
const fs = require("fs");
const { EmbedBuilder } = require("@discordjs/builders");
const { json } = require("express");
const e = require("express");
const MongoClient = require("mongodb").MongoClient;

module.exports = {
  name: "onGenerateImage",
  async execute(interaction, client) {
    console.log(chalk.yellow(`Executing event '${this.name}'`));

    var encodedParams = new URLSearchParams();
    encodedParams.append(
      "prompt",
      `${interaction.options.getString("prompt")}`
    );
    encodedParams.append("guidance", "7.5");
    encodedParams.append("width", "512");
    encodedParams.append("sampler", "ddim");
    encodedParams.append("height", "512");
    encodedParams.append("steps", "50");

    var options = {
      method: "POST",
      url: "https://dezgo.p.rapidapi.com/text2image",
      responseType: "arraybuffer",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": `${process.env.API_KEY}`,
        "X-RapidAPI-Host": "dezgo.p.rapidapi.com",
      },
      data: encodedParams,
    };

    var embed = new EmbedBuilder();
    var fileName = Date.now().toString();

    try {
        try {
            var response = await axios.request(options)
                .then(function (response) {
                    return response;
                })
                .catch(function (error) {
                    console.error(error);
                });
    
                var headers = await response.headers;
                var arrayBuffer = await response.data;
                var buffer = await Buffer.from(arrayBuffer);
                fs.writeFile(`./src/images/generated/${fileName}.png`, '', (err) => {
                    if(err) {
                        console.error(chalk.red(`ERROR: [${error}]`));
                    }
                })
                fs.createWriteStream(`./src/images/generated/${fileName}.png`).write(buffer);

                  MongoClient.connect(process.env.databaseToken, function (error, db) {
                        if (error) console.error(chalk.red(`ERROR: [${error}]`));

                        var dbo = db.db('discord');
                        var query = { _id: interaction.user.id};

                        dbo.collection('AiGenerated').findOne(query, async function(error, result) {
                            if (error) console.error(chalk.red(`ERROR: [${error}]`));
                            
                            db.close();
                            
                            if(result != null) {
                                MongoClient.connect(process.env.databaseToken, function(error, db) {
                                    if (error) console.error(chalk.red(`ERROR: [${error}]`));

                                    var dbo = db.db('discord');
                                    var myQuery = { _id: interaction.user.id};
                                    var newValues = { $set: {count: result.count + 1}};

                                    dbo.collection('AiGenerated').updateOne(myQuery, newValues, function(error, res) {
                                        if (error) console.error(chalk.red(`ERROR: [${error}]`));

                                        console.log(JSON.stringify(res));
                                        db.close();
                                    });
                                });
                            } else {
                                MongoClient.connect(process.env.databaseToken, function(error, db) {
                                    if (error) console.error(chalk.red(`ERROR: [${error}]`));

                                    var dbo = db.db('discord');
                                    var myObj = {_id: interaction.user.id, name: interaction.user.username, count: 1};
                                dbo.collection('AiGenerated').insertOne(myObj, function(error, res) {
                                    if (error) console.error(chalk.red(`ERROR: [${error}]`));
                                    
                                    console.log(JSON.stringify(res));
                                    db.close();
                                });
                                })
                            }

                            let count = result ? { name:`${interaction.user.username}`, value: `Has generated ${result.count + 1} images`} : { name:`${interaction.user.username}`, value: `Has generated 1 images`};
                            try {
                                await embed.setTitle(`${interaction.options.getString("prompt")}`);
                                await embed.setDescription(`AI Generated Image file name: **${fileName}**\n__Automatically moved to bot channel in 5 minutes__`);
                                await embed.setColor(0x18e1ee);
                                await embed.setImage(`attachment://${fileName}.png`);
                                await embed.setFields(
                                    { name:"Cost:", value: `${headers['x-credits-cost']} credits`},
                                    //result.count != null ? { name:`${interaction.user.username}`, value: `Has generated ${result.count + 1} images`} : { name:`${interaction.user.username}`, value: `Has generated 1 images`}
                                    count
                                    );
                                
                                await embed.setFooter({
                                    iconURL: client.user.displayAvatarURL(),
                                    text: `Remaining balance: ${headers['x-ratelimit-credits-remaining']}/${headers['x-ratelimit-credits-limit']} : ${Math.floor(headers['x-ratelimit-credits-remaining']/100)} images remaining.`
                                });
                            } catch (error) {
                                console.error(chalk.red(`ERROR: [${error}]`));
                            }

                            console.log(chalk.green(`Event '${this.name}' executed successfully`));
                            await interaction.followUp({
                                content: `AI Generated image of:`,
                                embeds: [embed],
                                files: [`./src/images/generated/${fileName}.png`]
                              })

                        });
                  });

                
        } catch (error) {
            console.error(chalk.red(`ERROR: [${error}]`));
        }
                    
            setTimeout(function () {
                embed.setDescription(`AI Generated Image file name: **${fileName}**`);
                const channel = client.guilds.cache.get(interaction.guildId).channels.cache.find(ch => ch.name === 'bot');
                channel.send({
                    content: `AI Generated image of:`,
                    embeds: [embed],
                    files: [`./src/images/generated/${fileName}.png`]
                })  
                interaction.deleteReply();
            }, 300000);

    } catch (error) {
        console.error(chalk.red(`ERROR: [${error}]`));
    }
    
  
  },
};
