
const Discord = require("discord.js")
const db = require("quick.db")
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "levelup",
  coolwdon:8000,
  alternativas: ["levelup"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    

    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Para executar este comando precisa a permissão \`gerenciar canais\` e \`gerenciar servidor\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if (!message.member.permissions.has("MANAGE_CHANNELS")||!message.member.permissions.has("MANAGE_GUILD")) return  message.reply({embeds:[limite]})
 
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Não é possível executar este o comando, preciso da permissão de e \`gerenciar servidor\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MANAGE_CHANNELS")||!message.guild.me.permissions.has("MANAGE_GUILD")) return  message.reply({embeds:[ad]})

  let method = args[0]


if(method != "on" && method != "off") {
  const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setTitle("<:fechar:918747498984665108> Tente novamente")
  .setDescription(`Use o comando : \`${prefix}levelup <on|off> !\``)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 return  message.reply({embeds:[usagerr]}) 

 }

    if (method == "off") {
  let sistemadelevel = db.get(`sistelevel_${message.guild.id}`);
  if (sistemadelevel == null) {
    const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`O sistema de level up já está desabilitado!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   return  message.reply({embeds:[usagerr]}) 
  
 }
  db.delete(`sistelevel_${message.guild.id}`) 
  const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Sistema de level up desabilitado com sucesso !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   return  message.reply({embeds:[usagerr]}) 
 
}




if (method == "on") {
  let sistemadelevel = db.get(`sistelevel_${message.guild.id}`);
  if (sistemadelevel == 'on') {
    const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`O sistema de level up já está habilitado!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   return  message.reply({embeds:[usagerr]}) 
  
 }




    db.set(`sistelevel_${message.guild.id}`, 'on') 
    const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Sistema de level up habilitado com sucesso !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   return  message.reply({embeds:[usagerr]}) 
  

}







  }
}
