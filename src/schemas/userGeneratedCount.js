const { Schema, model } = require('mongoose');
const userGeneratedCount = new Schema({
    _id: Schema.Types.ObjectId,
    id: String,
    name: String,
    count: Number
});

module.exports = model("userGeneratedCount", userGeneratedCountSchema);