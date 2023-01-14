const { SlashCommandBuilder } = require('discord.js');
const {
    joinVoiceChannel,
    getVoiceConnection,
    VoiceConnectionStatus,
  } = require("@discordjs/voice");

module.exports = {
    connection: null,
    data: new SlashCommandBuilder()
        .setName('join-voice')
        .setDescription('return latency statistics!'),
    async execute(interaction, client) {
        const channel = interaction.member.voice.channel.id;
        //console.log(channel);
        // If interaction wasnt from a voice channel
        if(!channel) {return await interaction.reply({content:"You must be in a voice channel to use this command", ephemeral: true})};

        const connection =  joinVoiceChannel({
            channelId: channel,
            guildId: interaction.guildId,
            adapterCreator: interaction.channel.guild.voiceAdapterCreator,
            selfDeaf: false
        });

        if(connection) {
            await interaction.reply({content:"I joined the voice channel", ephemeral: true})
        } else {
            await interaction.reply({content:"I couldn't join the voice channel", ephemeral: true})
        }
    }
}
