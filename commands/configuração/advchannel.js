const Discord = require("discord.js")
const db = require("quick.db")
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "advchannel",
  coolwdon:15000,
  alternativas: ["adchannel"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Para executar este comando precisa a permissão \`gerenciar canais\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return  message.reply({embeds:[limite]})
 
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Não é possível executar este o comando, preciso da permissão de \`gerenciar canais\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return  message.reply({embeds:[ad]})
  let method = args[0]
  let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])


   
if(method != "info" && method != "delete" && method != "add") {
 
  
   const usagerr = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setTitle(" Tente novamente")
   .setDescription(`Use o comando : \`${prefix}advchannel <delete|add|info> <canal> !\``)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
 
  return  message.reply({embeds:[usagerr]})
  }

    if (method == "delete") {

  let chx = db.get(`advchannel_${message.guild.id}`);
  if (chx == null) {
    const limite = new Discord.MessageEmbed()
.setColor('ffffff')

.setDescription(`Este servidor não tem nenhum canal de **" advchannel "** setado!`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[limite]})
 }
db.delete(`advchannel_${message.guild.id}`) 


const limite = new Discord.MessageEmbed()
.setColor('ffffff')
.setTitle("Canal REMOVIDO!")
.setDescription(`O canal foi removido com sucesso `)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply(limite)
}


if(method == "info") {

   let chx = db.get(`advchannel_${message.guild.id}`);


  if (chx == null) {
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
  
    .setDescription(` Este servidor não tem nenhum canal de **" advchannel "** setado!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   return  message.reply(limite)
  }
  const limite = new Discord.MessageEmbed()
.setColor('ffffff')

.setDescription(`O canal atual de **" advchannel "** é o <#${chx}> !`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[limite]})

}

if (method == "add") {
    
    if(!channel) { 
  const noch = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Por favor mencione um canal !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
    return  message.reply({embeds:[noch]})
  
    }
  
  
    const textch = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Por favor mencione um canal de texto válido !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if(channel.type!== 'GUILD_TEXT') return  message.reply(textch)
 
    db.set(`advchannel_${message.guild.id}`, channel.id)
    
  const sucess = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setTitle(`Canal ADICIONADO!`)
  .setDescription(`O canal ${channel} foi adicionado com sucesso `)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
 message.reply({embeds:[sucess]})

}







  }
}
