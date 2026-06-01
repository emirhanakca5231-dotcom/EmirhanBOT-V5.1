const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
.setName("kanal_kilitle")
.setDescription("Kanalı kilitler")
.setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

async execute(interaction) {

await interaction.channel.permissionOverwrites.edit(
interaction.guild.roles.everyone,
{ SendMessages: false }
);

interaction.reply("Kanal kilitlendi");
}
};