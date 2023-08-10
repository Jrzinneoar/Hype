
const Discord = require("discord.js")
const db = require("quick.db")
const { dev,default_prefix } = require('../../config.json');
module.exports = {

  
    nome: "ativemanu",
    alternativas: ["ativemanu"],
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




    let method = args[0]


    if(method != "on" && method != "off") {
    const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setTitle("Tente novamente")
    .setDescription(`Use o comando : \`${prefix}ativemanu <on|off> !\``)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    return  message.reply({embeds:[usagerr]}) 
    
 }
    
    if (method == "off") {
  let sistemadelevel = db.get(`manutençaocheck`);
  if (sistemadelevel == null) {
    const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`O sistema de manutenção já está desabilitado!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    return  message.reply({embeds:[usagerr]}) 
  
 }
    db.delete(`manutençaocheck`) 
    const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Sistema de manutenção desabilitado com sucesso !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    return  message.reply(usagerr) 
    
    }
    
    
    
    
    if (method == "on") {
    let sistemadelevel = db.get(`manutençaocheck`);
    if (sistemadelevel == 'on') {
    const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`O sistema de manutenção já está habilitado!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    return  message.reply({embeds:[usagerr]}) 
    
    }
    
    
    
    
    db.set(`manutençaocheck`, 'on') 
    const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Sistema de manutenção habilitado com sucesso !`)
  //  aqui e o texto que fica dentro tlg ? 
//  pra pegar o nome do server 
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    //isso aqui e uma embed 
    return  message.reply({embeds:[usagerr]}) 
    
    
    }


    }
}




  



