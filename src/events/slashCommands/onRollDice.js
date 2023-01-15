/*********************************************************************************************** 
 Vic Bot Event: onRollDice
 Author: Victor Singh
 Date: 2023-01-14
 Purpose: To simulate a dice roll of a D6 or D20.
************************************************************************************************/

const { EmbedBuilder } = require("discord.js");

const cron = require('node-cron');
        // ┌────────────── second (optional)
        // │ ┌──────────── minute
        // │ │ ┌────────── hour
        // │ │ │ ┌──────── day of month
        // │ │ │ │ ┌────── month
        // │ │ │ │ │ ┌──── day of week
        // │ │ │ │ │ │
        // │ │ │ │ │ │
        // * * * * * *


module.exports = {
    name: 'onRollDice',
    async execute(interaction, client) {

        // Get option called dice which is a key-value pair of a value of the max dice size
    let max = interaction.options.getString("dice");

    const image = max == "6" ? "https://i.giphy.com/media/5xtDarpTZP1hgRgReLK/giphy.gif" : "https://media.tenor.com/9-kJ6wVClJoAAAAC/neverwinter-d20.gif"

    //Create embed with dice details and gif from Giphy
      const d6Embed = new EmbedBuilder()
        .setTitle("Dice")
        .setDescription("Rolling the dice")
        .setColor(0x18e1ee)
        .setImage(image)
        .setTimestamp(Date.now())
        .setAuthor({
          name: interaction.user.tag,
          iconURL: interaction.user.displayAvatarURL(),
        });

        try {
            // Follow up with embed
      await interaction.followUp({
        embeds: [d6Embed],
        fetchReply: true,
      });
    
      // Start a timer using node-cron to run the statement inside after 3 seconds.
      const timer = cron.schedule(`*/3 * * * * *`, async () => {
        await interaction.editReply({
            embeds: [
              d6Embed.setDescription(
                // Return the dice roll
                `You rolled a ${Math.floor(Math.random() * Number(max) + 1)}`
              ),
            ],
          });

          //Since node-cron doesnt have a scheduleOnce option, we stop the timer after the script executes so it doesnt change the dice roll after 3 seconds
          timer.stop();
      });
        } catch (error) {
            
        }
    }
}