const Discord = require("discord.js");
const { dev,default_prefix } = require('../../config.json');
const db = require('quick.db')
const rgx = /^(?:<@!?)?(\d+)>?$/;

module.exports = {
  nome: "blacklistguild",
  alternativas: ["blacklistguild"],
  run: async  (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
		

    if (!dev.includes(message.author.id)) {
  const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Ops, apenas meus desenvolvedores podem utilizar este comando!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  return message.reply({embeds:[usagerr]})
  }
if(args[0]== 'add'){
   
    const guildId = args[1];
    if (!rgx.test(guildId)){


       const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`**Por Favor forneça um id valido.**`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  return message.reply({embeds:[usagerr]})
    }
  
    const guild = message.client.guilds.cache.get(guildId);
    if (!guild){

           const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`**Não encontrei esse sevidor. Verifique o ID fornecido.**`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  return message.reply({embeds:[usagerr]})
    }

    const reason = args.slice(2).join(" ")
    if(!reason){


  const ad = new Discord.MessageEmbed()
  .setColor('000000')
  .setDescription(`Lembres-se de colocar um motivo. `)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return message.reply({embeds:[ad]})
    }
  if(reason.length > 1000) {

    const ad = new Discord.MessageEmbed()
    .setColor('000000')
    .setDescription(`Você não pode definir um motiva com mais de 1.000 caracteres.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})
   }

    await guild.leave();
 db.set(`blacklistguild_${guild.id}`,{servername:guild.name,serverid:guild.id,authortag:message.author.tag,authorid:message.author.id,razao:reason})
       const embed = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`**O server ${guild.name}(${guild.id}) foi adicionado a blacklist com sucesso**`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
   message.reply({embeds:[embed]})

  let msg = new Discord.MessageEmbed()
    
  .setAuthor(`${client.user.username} Guild Blacklist`,'attachment://exclmaocaoroxo.gif')  
.setColor('#000000')
.setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`** Servidor Adicionado a Blacklist:\nㅤNome: \`${guild.name}\` \nㅤID: \`${guild.id}\` \n | Adicionado Por:\nㅤTag: \`${message.author.tag}\` \nㅤID: \`${message.author.id}\` \n  | Motivo:** \nㅤ${reason}`)
.setTimestamp()

  client.channels.cache.get('1131208183621365771').send({embeds:[msg]})  
  
   
}else if(args[0]== 'remove'){
 const guildId = args[1];
    if (!rgx.test(guildId)){


       const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`**Por Favor forneça um id valido.**`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  return message.reply({embeds:[usagerr]})
    }
  let dbtest = db.get(`blacklistguild_${guildId}`)
if (!dbtest){

           const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`**Este sevidor. Não esta em minha blacklist.**`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  return message.reply({embeds:[usagerr]})

  
    }
    const reason = args.slice(2).join(" ")
    if(!reason){


  const ad = new Discord.MessageEmbed()
  .setColor('000000')
  .setDescription(`Lembres-se de colocar um motivo. `)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return message.reply({embeds:[ad]})
    }
  if(reason.length > 1000) {

    const ad = new Discord.MessageEmbed()
    .setColor('000000')
    .setDescription(`Você não pode definir um motiva com mais de 1.000 caracteres.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})
   }

const embed = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`**O server ${dbtest.servername}(${dbtest.serverid}) foi removido da blacklist com sucesso**`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
   message.reply({embeds:[embed]})


  let msg = new Discord.MessageEmbed()
    
  .setAuthor(`${client.user.username} Guild Blacklist`,'attachment://exclmaocaoroxo.gif')  
.setColor('#000000')
.setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**Servidor Removido da Blacklist:\nㅤNome: \`${dbtest.servername}\` \n ID: \`${dbtest.serverid}\` \n | Removido Por:\nㅤTag: \`${message.author.tag}\` \nㅤID: \`${message.author.id}\` \n | Motivo:** \nㅤ${reason}`)
.setTimestamp()

  client.channels.cache.get('1131208183621365771').send({embeds:[msg]})  
  db.delete(`blacklistguild_${guildId}`)
}else if(args[0]== 'info'){
  const guildId = args[1];
     if (!rgx.test(guildId)){
 
 
        const usagerr = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setDescription(`**Por Favor forneça um id valido.**`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   
   return message.reply({embeds:[usagerr]})
     }
   let dbtest = db.get(`blacklistguild_${guildId}`)
 if (!dbtest){
 
            const usagerr = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setDescription(`**Este sevidor. Não esta em minha blacklist.**`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   
   return message.reply({embeds:[usagerr]})
 
   
     }

     let msg = new Discord.MessageEmbed()
    
.setAuthor(`${client.user.username} Guild Blacklist`,'attachment://exclmaocaoroxo.gif')  
.setColor('#000000')
.setDescription(`** Servidor:\nㅤNome: \`${dbtest.servername}\` \nㅤID: \`${dbtest.serverid}\` \n | Author:\nㅤTag: \`${dbtest.authortag}\` \nㅤID: \`${dbtest.authorid}\` \n | Motivo:** \nㅤ${dbtest.razao}`)
.setTimestamp()

return message.reply({embeds:[msg]})

 
}else{

       const usagerr = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setTitle("Tente novamente")
   .setDescription(`Use o comando : \`${prefix}blacklistguild <add|info|remove> <id do server> !\``)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
 
  return  message.reply({embeds:[usagerr]})
}
  }
};