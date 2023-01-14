const { SlashCommandBuilder } = require('discord.js')
const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave-voice')
        .setDescription('Tells to bot to leave the channel'),
        async execute(interaction, client) {
            await interaction.deferReply({ephemeral: true})
            //console.log(interaction.guildId);

            const map = await interaction.guild.voiceStates.cache;
            var voiceChannel = null;
            var connection = null;

            map.forEach((state, guildI) => {
                voiceChannel = state.channelId;
            })

            if(!voiceChannel) {return await interaction.followUp({content: "I am not in a voice channel", ephemneral: true})};

            connection =  joinVoiceChannel({
                channelId: voiceChannel,
                guildId: interaction.guildId,
                adapterCreator: interaction.channel.guild.voiceAdapterCreator,
                selfDeaf: false
            });

            connection.destroy();

            return await interaction.followUp({content: "I have left the voice channel", ephemneral: true})
        }
}