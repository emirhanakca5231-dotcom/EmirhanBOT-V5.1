const mongoose = require("mongoose");

const GuildSchema = new mongoose.Schema({

guildID: String,

logs: {
ticket: String,
log: String,
abone: String
}

});

module.exports = mongoose.model("Guild", GuildSchema);