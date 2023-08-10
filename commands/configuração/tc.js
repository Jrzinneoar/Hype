
const Discord = require("discord.js")
const db = require("quick.db")
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "tc",
  coolwdon:8000,
  alternativas: ["tc"],
  run: async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
  
    
    
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Para executar este comando precisa a permissão \`gerenciar canais\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply({embeds:[limite]})
 
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Não é possível executar este o comando, preciso da permissão de \`gerenciar canais\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return  message.reply({embeds:[ad]})
    let sisteanti = db.get(`voicesystem_${message.guild.id}`);
    if (sisteanti == null) {
  const ad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Sistema de voz está desabilitado ative o para poder executar esse comando!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
 return  message.reply({embeds:[ad]})
}
let method = args[0]
let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])


 
if(method != "info" && method != "delete" && method != "deleteall" && method != "add") {
   const usagerr = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setTitle("Tente novamente")
   .setDescription(`Use o comando : \`${prefix}tc <delete|deleteall|add|info> <canal> !\``)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
 
  return  message.reply({embeds:[usagerr]})  
  } else if (method == "deleteall") { 
    
  let temvip = db.all().filter(data => data.ID.startsWith(`voicechannel_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Não encontrei canais de voz na minha database !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  if(temvip.length===0) return  message.reply({embeds:[limite]})
   
  for (let i = 0; i < temvip.length; i++) {
   
    
    if(temvip[i].ID.startsWith(`voicechannel_${message.guild.id}_`)) {
    
db.delete(`voicechannel_${message.guild.id}_${temvip[i].ID.split("_")[2]}`)
    
 
    
    }
  }
    
  
  
  const a = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setTitle("Canais REMOVIDOS!")
  .setDescription(`O canais foram removidos com sucesso `)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
 return  message.reply({embeds:[a]})
    }
    else if (method == "delete") {
  if(!channel) { 
    const noch = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Por favor mencione um canal !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
  return  message.reply({embeds:[noch]})
  
  }
   
  let check = db.get(`levelschannel_${message.guild.id}_${channel.id}`)
  const checkembed = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Não encontrei esse canal de voz na minha database !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
 
  if(check === null )return  message.reply({embeds:[checkembed]})
  
  db.delete(`voicechannel_${message.guild.id}_${channel.id}`)
  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setTitle("Canal REMOVIDO!")
  .setDescription(`O canal foi removido com sucesso `)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 return  message.reply({embeds:[limite]})
   
  
  
}



else if(method == "info") {
  let temvip = db.all().filter(data => data.ID.startsWith(`voicechannel_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Não encontrei canais que não contam tempo na minha database !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

  if(temvip.length===0) return  message.reply({embeds:[limite]})
   
  
  let content = ``
  for (let i = 0; i < temvip.length; i++) {
   

    if(temvip[i].ID.startsWith(`voicechannel_${message.guild.id}_`)) {
    
    
    
    content += ` <#${temvip[i].ID.split("_")[2]}>\n`

    
    }
  }


  const embed = new Discord.MessageEmbed()
  .setColor('ffffff')
.setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTitle(`Canais que não contam tempo !`)
  .setDescription(content)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
 message.reply({embeds:[embed]})


}

else if (method == "add") {



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
    .setDescription(`Por favor mencione um canal de voz válido !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if(channel.type!== 'GUILD_VOICE') return  message.reply({embeds:[textch]})
 
    
    let temvip = db.all().filter(data => data.ID.startsWith(`voicechannel_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`A lista de canais de voz está cheia. Use ${prefix}tc delete para deletar.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if (temvip.length >= 30 ) return  message.reply({embeds:[limite]})
 
    
    let ch = db.get(`voicechannel_${message.guild.id}_${channel.id}`) 
    const cdch = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Este canal já está na lista como canal de voz`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

    if(ch !== null) return  message.reply({embeds:[cdch]})
   
  
   db.set(`voicechannel_${message.guild.id}_${channel.id}`, true) 
 
  
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

