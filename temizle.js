const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
.setName("temizle")
.setDescription("Mesaj siler")
.addIntegerOption(o =>
o.setName("sayi").setRequired(true)
)
.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

async execute(interaction) {

const amount = interaction.options.getInteger("sayi");

await interaction.channel.bulkDelete(amount, true);

interaction.reply({ content: `${amount} mesaj silindi`, ephemeral: true });
}
};