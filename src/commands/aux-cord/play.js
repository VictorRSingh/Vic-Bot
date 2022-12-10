const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
      .setName('aux-play')
      .setDescription('plays the song')
      .addStringOption(title => 
          title.setName('title')
            .setDescription('Name of the song or link')
            .setRequired(true))
            .addStringOption(artist => 
              artist.setName('artist-band')
                .setDescription('Name of the artist or band (optional)')),
  async execute(interaction)  {
    const string = interaction.options.data[1] != undefined ? `${interaction.options.data[1].value} - ${interaction.options.data[0].value}` : `${interaction.options.data[0].value}`;
    const guild = interaction.guild;
    const member = guild.members.cache.get(interaction.member.user.id);
    const voiceChannel = member.voice.channel;
    const client = interaction.client;
    const queue = client.distube.getQueue(interaction.guild);
    
    if(!voiceChannel)
    {
      await interaction.reply({
        content: `Must be in a voice channel to use this command.`,
        ephemeral: true
      })
    }
    else 
    {
      await interaction.client.distube.on('playSong', (queue, song) => {
        console.log("playing song " + song.name);
        console.log(queue.songs.length);
        const embed = new EmbedBuilder() 
        .setTitle(song.name)
        .setURL(song.url)
        .setDescription(song.formattedDuration)
        .setColor(0x18e1ee)
        .setImage(song.thumbnail)
        .setTimestamp(Date.now())
        .setAuthor({
            iconURL: interaction.user.displayAvatarURL(),
            name: interaction.user.tag
        })
        interaction.channel.send({embeds: [embed]});
      });
      
      if(queue === undefined)
      {
        client.distube.emit('addSong');
        interaction.client.distube.play(voiceChannel, string, {
          member: member,
          textChannel: interaction.channel,
          message: false
        })
        await interaction.reply(`Searching for ${string}..`);
      } else 
      {
        await interaction.reply({
          content: 'Please add songs via the /add command instead.',
          ephemeral: true
        })
      }

    }
    }
}