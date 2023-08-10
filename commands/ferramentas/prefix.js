const db = require("quick.db")
const Discord =require('discord.js')
const { default_prefix } = require("../../config.json")

module.exports = {
  nome: "prefix",
   coolwdon:7000,
  alternativas: ["prefix"],
  run: async  (client, message, args) => {
    
  
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Para executar este comando precisa a permissão \`gerenciar servidor\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if (!message.member.permissions.has("MANAGE_GUILD")) return  message.reply({embeds:[limite]})
 if(!args[0]) {
  let setch = new Discord.MessageEmbed()
				
			
  .setDescription(`Digite o prefixo que deseja inserir no bot `)
  .setColor('ffffff')
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  
  
  return message.reply({embeds:[setch]})
 }
    if(args[1]) {
  let setch = new Discord.MessageEmbed()
				
			
  .setDescription(`O prefixo não pode conter espaços`)
  .setColor('ffffff')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  
  
  return message.reply({embeds:[setch]})
    
    }
 if(args[0].length > 5) {
   let setch = new Discord.MessageEmbed()
				
			
.setDescription(`Você não pode enviar prefixos com mais de **5 caracteres** ! Tente novamente`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();



return message.reply(setch)
 
    }
    if(args.join("") === default_prefix) {
  db.delete(`prefix_${message.guild.id}`)
  if(args[0].length > 5) {
    let setch = new Discord.MessageEmbed()
     
   
 .setDescription(`Prefixo redefinido com sucesso ! `)
 .setColor('ffffff')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 
 
 
 return message.reply({embeds:[setch]})
  }
    }
    db.set(`prefix_${message.guild.id}`, args[0])
    let setch = new Discord.MessageEmbed()
     
   
    .setDescription(`Prefixo do BOT definido com sucesso para : \`${args[0]}\` `)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    
    
    return message.reply({embeds:[setch]})
  
  }

}
