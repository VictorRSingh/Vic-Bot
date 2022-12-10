const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
const Canvas = require('@napi-rs/canvas');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mock')
        .setDescription('MoCk ThEm.'),
    async execute(interaction, client) {
        await interaction.deferReply({
            fetchReply: true
        });

        const messages = await interaction.channel.messages.fetch(true);
        const message = Array.from(messages.values());
        const text = message[1].content.toLowerCase();

        const canvas = Canvas.createCanvas(275, 192);
        const context = canvas.getContext('2d');
        const background = await Canvas.loadImage('C:/Code Apps/Vic Bot/src/images/mock/spongebob.jpg');

        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        const reply = text.split('').map((value, index) => index % 2? value.toLowerCase() : value.toUpperCase()).join('');

        // Use the helpful Attachment class structure to process the file for you
        const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'spongebob.jpg' });
	
        await interaction.followUp({
            content: `${reply}`,
            ephemeral: true,
            files: [attachment]
        });
    }
}

const applyText = (canvas, text) => {

    const context = canvas.getContext('2d');

    // Declare a base size of the font
    let fontSize = 70;

    do {
        // Assign the font to the context and decrement it so it can be measured again
        context.font = `${fontSize -= 10}px sans-serif`;
        // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (context.measureText(text).width > canvas.width - 300);

    // Return the result to use in the actual canvas
    return context.font;

};