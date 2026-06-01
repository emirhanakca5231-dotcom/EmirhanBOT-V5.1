const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, PermissionFlagsBits } = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
.setName("ticket_panel")
.setDescription("Ticket paneli oluşturur")
.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

async execute(interaction) {

const embed = new EmbedBuilder()
.setTitle("🎫 Destek Sistemi")
.setDescription("Ticket açmak için butona bas")
.setColor("Blue");

const button = new ButtonBuilder()
.setCustomId("ticket_open")
.setLabel("Ticket Aç")
.setStyle(ButtonStyle.Success);

const row = new ActionRowBuilder().addComponents(button);

await interaction.channel.send({
embeds: [embed],
components: [row]
});

interaction.reply({ content: "Panel kuruldu", ephemeral: true });

}
};