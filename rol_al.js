const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
.setName("rol_al")
.setDescription("Rol alır")
.addUserOption(o =>
o.setName("uye").setRequired(true)
)
.addRoleOption(o =>
o.setName("rol").setRequired(true)
)
.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),

async execute(interaction) {

const member = interaction.options.getMember("uye");
const role = interaction.options.getRole("rol");

await member.roles.remove(role);

interaction.reply("Rol alındı");
}
};