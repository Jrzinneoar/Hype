const Discord = require("discord.js");

module.exports = {
  nome: "invite",
  coolwdon:2000,
  alternativas: ["convite"],
  run: async  (client, message, args) => {
  	

  const embed = new Discord.MessageEmbed()
    .setColor("#5fa5e3")
    .setThumbnail("https://cdn.discordapp.com/attachments/1131208162880536666/1135662375463301262/20230731_165638.png")
    .setTitle('Meus Convites')
.setDescription(`**Click em [Bot/Suporte](https://discord.gg/7JEVszkn) para entrar no meu server de suporte\n Click em [Dashboard](https://embreve) para mim configurar**`)  
 .setTimestamp()
await message.reply({embeds:[embed]})
  
  }
};
