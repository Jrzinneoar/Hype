const Discord = require('discord.js'); 
const db = require('quick.db')
const {fetchRolePerm} = require('../../script/permission')
module.exports = {
    nome: "unban",
 coolwdon:8000,
    alternativas: ["unban"],
    run: async (client, message, args) => {
    
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Para executar este comando precisa a permissão \`ban membros\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if(!await fetchRolePerm(message,message.member,"BAN_MEMBERS")){
    if (!message.member.permissions.has("BAN_MEMBERS")) return  message.reply({embeds:[limite]})}
 
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Não é possível executar este o comando, preciso da permissão de \`ban membros\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("BAN_MEMBERS")) return  message.reply({embeds:[ad]})
    const member = args[0];
    let ban = await message.guild.bans.fetch();
    


    if (!member) {

    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
   
    .setDescription(` Mencione um ID de um usuário válido!  `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
     return message.reply({embeds:[ad]})
    }
     if (!ban.get(member)) {
    
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
   
    .setDescription(`Este usuário não está banido.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
     return message.reply({embeds:[ad]})
    }

 
    message.guild.bans.fetch().then(bans => {
   message.guild.members.unban(member)
    })
    
    const ad2 = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`O usuário ${ban.get(member).user.username}#${ban.get(member).user.discriminator}(${ban.get(member).user.id}) foi desbanido com sucesso! `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
     message.reply({embeds:[ad2]})
     var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
     if (!canal) {
     } else {  canal.send({embeds:[ad2]})
     }

    }
}
