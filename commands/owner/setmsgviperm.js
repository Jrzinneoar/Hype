
const Discord = require("discord.js")
const db = require("quick.db")
const { dev, default_prefix } = require('../../config.json');
module.exports = {

  
    nome: "setmsgviperm",
    alternativas: ["setmsgviperm"],
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
   .setDescription(`Use o comando : \`${prefix}blacklist <add|remove> <user> !\``)
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


    db.set(`authorize_${User.id}`,true)

    let blacklistedEmbed = new Discord.MessageEmbed()
    .setColor('000000')
    .setDescription('Agora o **' + User.tag + ' esta na minha lista**')
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))

    .setFooter(message.client.user.username, message.client.user.displayAvatarURL())

    message.reply({embeds:[blacklistedEmbed]})
    


    
}

if (method == "remove") {
    let noUser = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({
    dynamic: true
    }))

    .setDescription('Mencione um usuario valido')
  

if (!User) return message.reply({embeds:[noUser]})

let checkingBlacklisted = db.fetch(`authorize_${User.id}`)
if(checkingBlacklisted === null){
    let alreadyBlacklisted = new Discord.MessageEmbed()
    .setColor('000000')

    .setDescription('Este usuario não esta na minha lista!')
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
    .setFooter(message.client.user.username, message.client.user.displayAvatarURL())

return message.reply({embeds:[alreadyBlacklisted]})
}



db.delete(`blacklist_${User.id}`)
    let blacklistedEmbed = new Discord.MessageEmbed()
    .setColor('000000')
    .setDescription('Agora o **' + User.tag + ' não  esta mais na minha lista**')
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))

    .setFooter(message.client.user.username, message.client.user.displayAvatarURL())

    message.reply({embeds:[blacklistedEmbed]})



    
    


}


    }
}




  



