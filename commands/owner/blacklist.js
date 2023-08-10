
const Discord = require("discord.js")
const db = require("quick.db")
const { dev, default_prefix } = require('../../config.json');
module.exports = {

  
    nome: "blacklist",
    alternativas: ["blacklist"],
    run: async  (client, message, args) => {
   
        let prefix = db.get(`prefix_${message.guild.id}`)
        if(prefix === null) prefix = default_prefix;
            

    if (!dev.includes(message.author.id)) {
    const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Ops, apenas meus desenvolvedores podem utilizar este comando!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    return  message.reply({embeds:[usagerr]})
    }

    let splitarg = args.join(" ").split(" ")
    let method = splitarg[0]

    let User =  message.mentions.users.first()   || client.users.cache.get(args[1])


    
if(method != "add" && method != "remove"&& method != "info" ) {

    const usagerr = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setTitle("Tente novamente")
   .setDescription(`Use o comando : \`${prefix}blacklist <add|info|remove> <user> !\``)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
 
  return  message.reply({embeds:[usagerr]})
 
 }

    if (method == "add") {
    let noUser = new Discord.MessageEmbed()
    .setColor('000000')

    .setAuthor(message.author.username, message.author.displayAvatarURL({
    dynamic: true
    }))

    .setDescription('Mencione um usuario valido')
   
    if (!User) return message.reply({embeds:[noUser]})
 if(dev.includes(User.id)) {
       let noUser = new Discord.MessageEmbed()
    .setColor('000000')

    .setAuthor(message.author.username, message.author.displayAvatarURL({
    dynamic: true
    }))

    .setDescription('Você não pode adicionar um desenvolvedor em minha blacklist!')


    return message.reply({embeds:[noUser]})
 }
    let checkingBlacklisted = db.fetch(`blacklist_${User.id}`)
    
    if(checkingBlacklisted !== null){
    let alreadyBlacklisted = new Discord.MessageEmbed()
    .setColor('000000')
    .setDescription('Este usuario ja esta na minha blacklist!')
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
    
    .setFooter(message.client.user.username, message.client.user.displayAvatarURL())

    return message.reply({embeds:[alreadyBlacklisted]})
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

    db.set(`blacklist_${User.id}`,{authortag:message.author.tag,authorid: message.author.id , razao:reason})

    let blacklistedEmbed = new Discord.MessageEmbed()
    .setColor('000000')
    .setDescription('Agora o **' + User.tag + ' esta na minha blacklist**')
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))

    .setFooter(message.client.user.username, message.client.user.displayAvatarURL())

    message.reply({embeds:[blacklistedEmbed]})
    


    let msg = new Discord.MessageEmbed()
    
    .setAuthor(`${client.user.username} User Blacklist`,'attachment://exclmaocaoroxo.gif')  
  .setColor('#000000')
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setDescription(`** Usuário Adicionado a Blacklist:\nㅤTag: \`${User.tag}\` \nㅤID: \`${User.id}\` \ | Adicionado Por:\nㅤTag: \`${message.author.tag}\` \nㅤID: \`${message.author.id}\` \n  | Motivo:** \nㅤ${reason}`)
.setTimestamp()

    client.channels.cache.get('1131208183621365771').send({embeds:[msg]})  
    
}

if (method == "remove") {
    let noUser = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({
    dynamic: true
    }))

    .setDescription('Mencione um usuario valido')
  

if (!User) return message.reply({embeds:[noUser]})

let checkingBlacklisted = db.fetch(`blacklist_${User.id}`)
if(checkingBlacklisted === null){
    let alreadyBlacklisted = new Discord.MessageEmbed()
    .setColor('000000')

    .setDescription('Este usuario não esta na minha blacklist!')
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
    .setFooter(message.client.user.username, message.client.user.displayAvatarURL())

return message.reply({embeds:[alreadyBlacklisted]})
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
.setDescription(`Você não pode definir um motivo com mais de 1.000 caracteres.`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
return message.reply({embeds:[ad]})
}
db.delete(`blacklist_${User.id}`)
    let blacklistedEmbed = new Discord.MessageEmbed()
    .setColor('000000')
    .setDescription('Agora o **' + User.tag + ' não  esta mais na minha blacklist**')
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))

    .setFooter(message.client.user.username, message.client.user.displayAvatarURL())

    message.reply({embeds:[blacklistedEmbed]})


    
    let msg = new Discord.MessageEmbed()
    
    .setAuthor(`${client.user.username} User Blacklist`,'attachment://exclmaocaoroxo.gif')  
  .setColor('#000000')
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setDescription(`**Usuário Removido da Blacklist:\n Tag: \`${User.tag}\` \nㅤID: \`${User.id}\` \n  | Removido Por:\nㅤTag: \`${message.author.tag}\` \nㅤID: \`${message.author.id}\` \n  | Motivo:** \nㅤ${reason}`)
.setTimestamp()

    client.channels.cache.get('1131208183621365771').send({embeds:[msg]})  
    
    


}
if (method == "info") {
  let noUser = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({
    dynamic: true
    }))

    .setDescription('Mencione um usuario valido')
  

if (!User) return message.reply({embeds:[noUser]})

let checkingBlacklisted = db.fetch(`blacklist_${User.id}`)
if(checkingBlacklisted === null){
    let alreadyBlacklisted = new Discord.MessageEmbed()
    .setColor('000000')

    .setDescription('Este usuario não esta na minha blacklist!')
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
    .setFooter(message.client.user.username, message.client.user.displayAvatarURL())

return message.reply({embeds:[alreadyBlacklisted]})
}


let msg = new Discord.MessageEmbed()
    
.setAuthor(`${client.user.username} User Blacklist Info`,'attachment://exclmaocaoroxo.gif')  
.setColor('#000000')
.setDescription(`**Usuário:\nㅤTag: \`${User.tag}\` \n ID: \`${User.id}\` \n  | Author:\nㅤTag: \`${checkingBlacklisted.authortag}\` \nㅤID: \`${checkingBlacklisted.authorid}\` \n | Motivo:** \nㅤ${checkingBlacklisted.razao}`)
.setTimestamp()

return message.reply({embeds:[msg]})




}
    }
}




  



