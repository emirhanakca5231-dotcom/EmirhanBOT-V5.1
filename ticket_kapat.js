const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
.setName("ticket_kapat")
.setDescription("Ticket kapatır")
.setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

async execute(interaction) {

await interaction.channel.delete();

}
};