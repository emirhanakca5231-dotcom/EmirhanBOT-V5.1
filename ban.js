const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
.setName("ban")
.setDescription("Üyeyi banlar")
.addUserOption(o =>
o.setName("uye").setRequired(true)
)
.addStringOption(o =>
o.setName("sebep")
)
.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

async execute(interaction) {

const user = interaction.options.getUser("uye");
const reason = interaction.options.getString("sebep") || "Sebep yok";

const member = await interaction.guild.members.fetch(user.id).catch(() => null);

if (!member)
return interaction.reply({ content: "Kullanıcı bulunamadı", ephemeral: true });

await member.ban({ reason });

interaction.reply(`${user.tag} banlandı`);
}
};