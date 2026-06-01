const Guild = require("../models/Guild");
console.log("commands klasörü bulunamadı, atlanıyor.")
}

module.exports = {
name: "messageDelete",

async execute(message) {

if (!message.guild) return;

const data = await Guild.findOne({ guildID: message.guild.id });
if (!data?.logs?.log) return;

const channel = message.guild.channels.cache.get(data.logs.log);
if (!channel) return;

channel.send(`🗑 Mesaj silindi: ${message.content}`);
}

};