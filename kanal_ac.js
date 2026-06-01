const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
.setName("kanal_aç")
.setDescription("Kanalı açar")
.setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

async execute(interaction) {

await interaction.channel.permissionOverwrites.edit(
interaction.guild.roles.everyone,
{ SendMessages: true }
);

interaction.reply("Kanal açıldı");
}
};