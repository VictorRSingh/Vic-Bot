const Discord = require('discord.js')
module.exports = {
  data: new Discord.SlashCommandBuilder()
    .setName('help')
    .setDescription('Retrieves a list of commands available'),
    async execute(interaction) {
      const client = interaction.client;
      await interaction.reply({
        content: 'Current available commands:\n',
        embeds: [
          new Discord.EmbedBuilder()
            .setTitle('Commands')
            .setDescription(client.commands
              .map(cmd => `\`${cmd.data.name}\``).join(', '))
            .setColor(client.color)
        ]
      })
  }
}
