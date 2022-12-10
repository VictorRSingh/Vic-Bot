const { Schema, model } = require('mongoose');
const guildSchema = new Schema({
    _id: Schema.Types.ObjectId,
    id: String,
    name: String,
    icon: { type: String, required: false }
});

module.exports = model("Guilds", guildSchema);