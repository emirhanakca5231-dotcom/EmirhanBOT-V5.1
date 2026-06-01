const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const Guild = require("../../models/Guild");
console.log("commands klasörü bulunamadı, atlanıyor.")
}

module.exports = {
data: new SlashCommandBuilder()
.setName("log_kanal_ayarla")
.setDescription("Log kanalını ayarlar")
.addChannelOption(o => o.setName("kanal").setRequired(true))
.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

async execute(interaction) {

let data = await Guild.findOne({ guildID: interaction.guild.id });

if (!data) data = await Guild.create({ guildID: interaction.guild.id });

data.logs.log = interaction.options.getChannel("kanal").id;

await data.save();

interaction.reply("Log kanalı ayarlandı");

}
};