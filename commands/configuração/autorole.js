const Discord = require("discord.js")
const db = require("quick.db")
const { default_prefix } = require("../../config.json");

module.exports = {
  nome: "autorole",
  coolwdon:11000,
  alternativas: ["autorole"],
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
  
   


    let method = args[0]
 
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])




    
    if(method != "info" && method != "delete" && method != "add") {
  
   const usagerr = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setTitle(" Tente novamente")
   .setDescription(`Use o comando : \`${prefix}autorole <delete|add|info> <cargo> !\``)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
 
  return  message.reply({embeds:[usagerr]})
}


if (method == "delete") {


  if (rhx == null) {
    const limite = new Discord.MessageEmbed()
.setColor('ffffff')

.setDescription(`Este servidor não tem nenhum cargo de **" autorole "** setado!`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[limite]})
 }
db.delete(`autorole_${message.guild.id}`) 


const limite = new Discord.MessageEmbed()
.setColor('ffffff')
.setTitle("Cargo REMOVIDO!")
.setDescription(`O cargo foi removido com sucesso `)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[limite]})
}


if(method == "info") {
  let rhx = db.get(`autorole_${message.guild.id}`);




if (rhx == null) {
  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')

  .setDescription(`Este servidor não tem nenhum cargo de **" autorole "** setado!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 return  message.reply({embeds:[limite]})
}
const limite = new Discord.MessageEmbed()
.setColor('ffffff')

.setDescription(`O cargo atual de **" autorole "** é o <@&${rhx}> !`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

return  message.reply({embeds:[limite]})

}

if (method == "add") {

  if(!role) { 
    const noch = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Por favor mencione um cargo !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
  return  message.reply({embeds:[noch]})

  }

    
  const permacime = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(` O cargo mencionado é **igual** ou **maior** que o meu!`)
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
   
  db.set(`autorole_${message.guild.id}`, role.id)
  
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
