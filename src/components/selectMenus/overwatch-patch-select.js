const { EmbedBuilder } = require("discord.js");
const chalk = require('chalk');
module.exports = {
    data: {
        name: `overwatch-patch-select`,
        month: 0 || Date.month,
        year: 0 || Date.year,
        arr: []
    },
    async execute(interaction, client) {
        await interaction.deferReply();
        const notes = (this.data.arr);
        patch = interaction.values[0];

        const embed = new EmbedBuilder()
            .setTitle(notes[patch].title)
            .setURL(`https://overwatch.blizzard.com/en-us/news/patch-notes/live/${this.data.year}/${this.data.month}/${notes[patch].anchor}`)
            .setAuthor({
                iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Blizzard_Entertainment_Logo_2015.svg/800px-Blizzard_Entertainment_Logo_2015.svg.png',
                name: '©2022 BLIZZARD ENTERTAINMENT, INC. ALL RIGHTS RESERVED.',
                url: 'https://www.blizzard.com/en-us/'
            })
            .setImage(`https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Overwatch_2_logo.svg/512px-Overwatch_2_logo.svg.png`);

            for(const i in notes[patch].section)
            {
                var val = null;

                if(notes[patch].section[i].description != '')
                {
                    //console.log(notes[patch].section[i].description);
                    val = notes[patch].section[i].description
                }
                else if(notes[patch].section[i].updates[0].updates != '')
                {
                    console.log(notes[patch].section[i].updates[0].updates.length);
                    val = notes[patch].section[i].updates[0].updates <= 1024 ? notes[patch].section[i].updates[0].updates : "**_A limitation by discord on number of allowed characters has been reached, please see the website to view this information._**";
                }

                
            embed.addFields({
                name: notes[patch].section[i].subtitle,
                value: val
            })

            }

        await interaction.followUp({
            content: 'Overwatch Patch Notes:',
            embeds: [embed]
        },
        console.log(chalk.green(`Successfully retrieved patch notes for ${this.data.year}/${this.data.month}`)));
    }
}