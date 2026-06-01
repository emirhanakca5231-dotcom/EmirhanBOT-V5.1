const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
.setName("unban")
.setDescription("Yasak kaldırır")
.addStringOption(o =>
o.setName("id").setRequired(true)
)
.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

async execute(interaction) {

const id = interaction.options.getString("id");

await interaction.guild.members.unban(id);

interaction.reply(`Ban kaldırıldı: ${id}`);
}
};