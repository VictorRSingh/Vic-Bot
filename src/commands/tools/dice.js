const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js')

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('roll-dice')
        .setDescription('Rolls a 6 or 20 sided die')
        .addStringOption(options =>
                options.setName('dice')
                .setDescription('choose a dice to roll')
                .setRequired(true)
                .addChoices(
                    { name: 'd20', value: '20'},
                    { name: 'd6', value: '6'}
                )),
        
    async execute(interaction) {
        let max = interaction.options.getString('dice');
        console.log(max);
       if(max == '6')
       {
            const d6 = new EmbedBuilder() 
            .setTitle('Dice')
            .setDescription('Rolling the d6')
            .setColor(0x18e1ee)
            .setImage('https://i.giphy.com/media/5xtDarpTZP1hgRgReLK/giphy.gif')
            .setTimestamp(Date.now())
            .setAuthor({
                name: interaction.user.tag,
                iconURL: interaction.user.displayAvatarURL()
            });
        await interaction.reply({
            embeds: [d6], fetchReply: true});
        const wait = require('util').promisify(setTimeout);
        await wait(2000);
        await interaction.editReply({
            embeds: [d6.setDescription(`You rolled a ${Math.floor((Math.random() *Number(max)))}`)]
        });
       } else if(max == '20')
       {
        const d20 = new EmbedBuilder() 
        .setTitle('Dice')
        .setDescription('Rolling the d20')
        .setColor(0x18e1ee)
        .setImage('https://media.tenor.com/9-kJ6wVClJoAAAAC/neverwinter-d20.gif')
        .setTimestamp(Date.now())
        .setAuthor({
            name: interaction.user.tag,
            iconURL: interaction.user.displayAvatarURL()
        });
    await interaction.reply({
        embeds: [d20], fetchReply: true});
    const wait = require('util').promisify(setTimeout);
    await wait(2000);
    await interaction.editReply({
        embeds: [d20.setDescription(`You rolled a ${Math.floor((Math.random() * Number(max)))}`)]
    });
       }
    }
}