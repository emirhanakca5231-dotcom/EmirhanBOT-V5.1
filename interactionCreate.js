const Guild = require("../models/Guild");
console.log("commands klasörü bulunamadı, atlanıyor.")
}

module.exports = {
name: "interactionCreate",

async execute(interaction, client) {

try {

/* =========================
   SLASH COMMAND SYSTEM
========================= */

if (interaction.isChatInputCommand()) {

const command = client.commands.get(interaction.commandName);

if (!command)
return interaction.reply({
content: "Komut bulunamadı",
ephemeral: true
});

return command.execute(interaction, client);
}

/* =========================
   BUTTON SYSTEM (TICKET vb.)
========================= */

if (interaction.isButton()) {

/* 🎫 TICKET AÇ */
if (interaction.customId === "ticket_open") {

const channel = await interaction.guild.channels.create({
name: `ticket-${interaction.user.username}`,
permissionOverwrites: [
{
id: interaction.guild.id,
deny: ["ViewChannel"]
},
{
id: interaction.user.id,
allow: ["ViewChannel", "SendMessages", "ReadMessageHistory"]
}
]
});

channel.send(`🎫 Ticket açıldı: ${interaction.user}`);

return interaction.reply({
content: "Ticket oluşturuldu",
ephemeral: true
});
}

/* 📌 BURAYA BAŞKA BUTTONLAR EKLENİR
   (tepki rol, panel vs.)
*/

}

/* =========================
   MODAL SYSTEM (ileride)
========================= */

if (interaction.isModalSubmit()) {

// Örnek kullanım alanı (başvuru, kayıt vs)

return;
}

} catch (err) {

console.log("Interaction Error:", err);

if (!interaction.replied) {
interaction.reply({
content: "Bir hata oluştu",
ephemeral: true
});
}

}

}
};