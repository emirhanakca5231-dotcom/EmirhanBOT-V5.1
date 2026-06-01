const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
.setName("yavaş_mod")
.setDescription("Slowmode ayarlar")
.addIntegerOption(o =>
o.setName("süre").setRequired(true)
)
.setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

async execute(interaction) {

const sec = interaction.options.getInteger("süre");

await interaction.channel.setRateLimitPerUser(sec);

interaction.reply(`${sec} saniye slowmode`);
}
};