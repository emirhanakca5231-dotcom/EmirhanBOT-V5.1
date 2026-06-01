const { SlashCommandBuilder } = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
.setName("rol_bilgi")
.setDescription("Rol bilgisi gösterir")
.addRoleOption(o =>
o.setName("rol").setRequired(true)
),

async execute(interaction) {

const role = interaction.options.getRole("rol");

interaction.reply({

content: `
Rol: ${role.name}
Üye sayısı: ${role.members.size}
ID: ${role.id}
`

});

}
};