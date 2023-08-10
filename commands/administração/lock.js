const db = require("quick.db")
const { default_prefix } = require("../../config.json");
const Discord = require('discord.js')
const {fetchRolePerm} = require('../../script/permission')
module.exports = {
    nome: "lock",
    coolwdon:18000,
    alternativas: ["lock"],
    run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Para executar este comando precisa a permissão \`gerenciar canais\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
      if(!await fetchRolePerm(message,message.member,"LOCK_MEMBERS")){
      if (!message.member.permissions.has("MANAGE_CHANNELS")) return  message.reply({embeds:[limite]})}
 
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Não é possível executar este o comando, preciso da permissão de \`gerenciar canais\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return  message.reply({embeds:[ad]})

    
   
   
    const snd = new Discord.MessageEmbed()
    .setColor('ffffff')
  
    .setDescription(` O canal já esta** bloqueado !**   `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    if(!message.channel.rolePermissions(message.guild.roles.everyone).has('SEND_MESSAGES'))   return message.reply({embeds:[snd]})
    message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
  SEND_MESSAGES: false
   }).then(() => {
  
   

    })
    const sndd = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setTitle(`Canal BLOQUEADO!    `)
    .setDescription(`O canal foi bloqueado  com sucesso por : ${message.author}    `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[sndd]});
 
}
}