const Discord = require("discord.js")
const db = require("quick.db")
const { default_prefix } = require("../../config.json");

module.exports = {
  nome: "tp",
  coolwdon:9000,
  alternativas: ["tp"],
  run: async   (client, message, args) => {
    

    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
  
  

  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Para executar este comando precisa a permissão \`gerenciar cargos\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

  if (!message.member.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[limite]})

  const ad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Não é possível executar este o comando, preciso da permissão de \`gerenciar cargos\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
if(!message.guild.me.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[ad]})


let sisteanti = db.get(`rolecalll_${message.guild.id}`);
if (sisteanti == null) {
const ad = new Discord.MessageEmbed()
.setColor('ffffff')
.setDescription(`Sistema de cargo de contagem em call está desabilitado ative o para poder executar esse comando!`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
return  message.reply({embeds:[ad]})
}

    let method = args[0]
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])


  

  
    if(method != "info" && method != "delete" && method != "deleteall" && method != "add") {
 

   const usagerr = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setTitle("Tente novamente")
   .setDescription(`Use o comando : \`${prefix}tp <delete|deleteall|add|info> <cargo> !\``)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
 
  return  message.reply({embeds:[usagerr]})  

}


if (method == "deleteall"){
    let temvip = db.all().filter(data => data.ID.startsWith(`cgsrolesadv_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Não encontrei cargo de contagem em call na minha database !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if(temvip.length===0) return  message.reply({embeds:[limite]})
 
    for (let i = 0; i < temvip.length; i++) {
 
  
  if(temvip[i].ID.startsWith(`cgsrolesadv_${message.guild.id}_`)) {
  
db.delete(`cgsrolesadv_${message.guild.id}_${temvip[i].ID.split("_")[2]}`)
  

  
  }
    }
  
    

    const a = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setTitle("Cargos REMOVIDOS!")
    .setDescription(`O cargos foram removidos com sucesso `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   return  message.reply({embeds:[a]})

}
if (method == "delete") {
    if(!role) { 
    const noch = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Por favor mencione um cargo !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
  return  message.reply({embeds:[noch]})
  
  }
   
  let check = db.get(`cgsrolesadv_${message.guild.id}_${role.id}`)
  const checkembed = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Não encontrei esse cargo de contagem em call na minha database !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
 
  if(check === null )return  message.reply({embeds:[checkembed]})
  
  db.delete(`cgsrolesadv_${message.guild.id}_${role.id}`)
  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setTitle("Cargo REMOVIDO!")
  .setDescription(`O cargo foi removido com sucesso `)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 return  message.reply({embeds:[limite]})
   
   
  
    
}


if(method == "info") {
    let temvip = db.all().filter(data => data.ID.startsWith(`cgsrolesadv_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Não encontrei cargos de contagem em calls na minha database !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if(temvip.length===0) return  message.reply({embeds:[limite]})
 
    
    let content = ``
    for (let i = 0; i < temvip.length; i++) {
 
  
  if(temvip[i].ID.startsWith(`cgsrolesadv_${message.guild.id}_`)) {
  
  
  
  content += ` <@&${temvip[i].ID.split("_")[2]}> Level: \`${temvip[i].data.replace("\"","").replace("\"","")}\`\n`
  
  
  }
    }
  
  
    const embed = new Discord.MessageEmbed()
    .setColor('ffffff')
  .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTitle(`Cargos de contagem em call !`)
    .setDescription(content)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
   message.reply({embeds:[embed]})
}



if (method == "add") {


    if(!role) { 
    const norh = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Por favor mencione um cargo !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
  return  message.reply({embeds:[norh]})
  
  }

   
  
  let temvip = db.all().filter(data => data.ID.startsWith(`cgsrolesadv_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`A lista de cargos de contagem em call está cheia. Use ${prefix}to delete para deletar.`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  if (temvip.length >= 30 ) return  message.reply({embeds:[limite]})
   
  const permacime = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`O cargo mencionado é **igual** ou **maior** que o meu!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  if( message.guild.me.roles.highest.position <=  role.position) return message.reply({embeds:[permacime]})
  if( await message.guild.fetchOwner().then((data)=>data.id) !==  message.member.id){
  const notacime = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`O cargo mencionado é **igual** ou **maior** que o seu!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  if ( role.position >=  message.member.roles.highest.position) {
    if (message.author.id) return message.reply({embeds:[notacime]})
    }
}
  
    
 db.set(`cgsrolesadv_${message.guild.id}_${role.id}`, true) 
   
    
  const sucess = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setTitle(`Cargo ADICIONADO!`)
    .setDescription(`O cargo ${role} foi adicionado com sucesso `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
   message.reply({embeds:[sucess]})

}





  }
}
