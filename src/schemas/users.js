const { Schema, model, default: mongoose } = require('mongoose');
const guildSchema = new Schema({
    guildId: String,
    id: String,
    bot: Boolean,
    username: String,
    discriminator: String,
    avatar: String,
});

module.exports = model("Users", guildSchema);