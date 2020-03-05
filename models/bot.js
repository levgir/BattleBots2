const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const botSchema = new Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true },
  history: String,
  wins: { type: Number, required: true },
  losses: { type: Number, required: true },
});

const Bot = mongoose.model("Bot", botSchema);

module.exports = Bot;
