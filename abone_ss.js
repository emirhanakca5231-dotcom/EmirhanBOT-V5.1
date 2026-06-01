const { SlashCommandBuilder } = require("discord.js");
const Guild = require("../../models/Guild");
console.log("commands klasörü bulunamadı, atlanıyor.")
}

module.exports = {
data: new SlashCommandBuilder()
.setName("abone_ss")
.setDescription("Abone SS gönderir")
.addAttachmentOption(o =>
o.setName("ss").setDescription("Ekran görüntüsü").setRequired(true)
),

async execute(interaction) {

const data = await Guild.findOne({ guildID: interaction.guild.id });

if (!data?.logs?.abone)
return interaction.reply({ content: "Kanal ayarlı değil", ephemeral: true });

const channel = interaction.guild.channels.cache.get(data.logs.abone);

const attachment = interaction.options.getAttachment("ss");

if (!attachment.contentType?.startsWith("image"))
return interaction.reply({ content: "Sadece görsel gönderebilirsin", ephemeral: true });

channel.send({
content: `📸 Abone SS | ${interaction.user.tag}`,
files: [attachment.url]
});

interaction.reply({ content: "SS gönderildi", ephemeral: true });

}
};