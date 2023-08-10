const Discord = require("discord.js")
const db = require("quick.db")
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "gifban",
  coolwdon:8000,
  alternativas: ["gifban"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    

let image = args.join(" ")

if(message.attachments.first() === undefined){

  let embed = new Discord.MessageEmbed()

  .setDescription(`Este arquivo está incorreto. Mande um arquivo válido como GIF!  `)
  .setColor("#ffffff")
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

if(!image.includes('.gif')) return message.reply({embeds:[embed]}) 


db.set(`gifban_${message.member.id}`,image)
let embed1 = new Discord.MessageEmbed()

.setDescription(`Bangif setado com sucesso!`)
.setColor("#ffffff")
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return message.reply({embeds:[embed1]}) 
}else{
 



 image = message.attachments.first().url
let embed = new Discord.MessageEmbed()

    .setDescription(`Este arquivo está incorreto. Mande um arquivo válido como GIF!  `)
    .setColor("#ffffff")
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
   
if(!message.attachments.first().contentType == "imagem/gif") return message.reply({embeds:[embed]}) 
db.set(`gifban_${message.member.id}`,image)
let embed1 = new Discord.MessageEmbed()

.setDescription(`Bangif setado com sucesso!`)
.setColor("#ffffff")
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

 return message.reply({embeds:[embed1]}) 
}
  }
}