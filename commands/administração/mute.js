const Discord = require("discord.js")
const ms = require("ms")
const db = require("quick.db")
var lt = require('long-timeout')
const {findMember} = require('../../script/utils')
const { default_prefix } = require("../../config.json");
const {fetchRolePerm} = require('../../script/permission')
module.exports = {
  nome: "mute",
  coolwdon:13000,
  alternativas: ["mute"],
  run: async (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
  
     

    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Para executar este comando precisa a permissão \`gerenciar cargos\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();

    if(!await fetchRolePerm(message,message.member,"MUTE_MEMBERS")){
    if (!message.member.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[limite]})}
 
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Não é possível executar este o comando, preciso da permissão de \`gerenciar cargos\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[ad]})
    const muteRole =

    message.guild.roles.cache.find((r) => r.name === `${client.user.username} Mute`) ||
    (await message.guild.roles.create({

    name: `${client.user.username} Mute`,
    permissions: [],
  
  reason: `Sistema de Punição ${client.user.username}`,
    }));
   
    let filtro = message.guild.channels.cache
  
    filtro.forEach(x => {

    x.permissionOverwrites.edit( muteRole.id, { "SEND_MESSAGES": false })

    })

    var name = args.join(' ').trim();
    
    var member  = await findMember(message, name);



 let notuser = new Discord.MessageEmbed()
				
			
 .setDescription(`Mencione um usuário existente.`)
 .setColor('ffffff')

 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();

 if (!member) return message.reply({embeds:[notuser]})


 if(db.get(`usersmuted_${message.guild.id}_${member.id}`)){

 let notuser = new Discord.MessageEmbed()
				
			
 .setDescription(`Este usuário já está mutado! `)
 .setColor('ffffff')

 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();

 return message.reply({embeds:[notuser]})}
 if (member === message.member){ 

  const ad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Você não pode se mutar!    `)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return message.reply({embeds:[ad]})}
  if (member.id === await message.guild.fetchOwner().then((data)=>data.id)){ 

    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Você não pode mutar a posse do servidor.    `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:ad})}

   
  if(member.user.id === client.user.id) { 

    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(` Você não pode usar este comando em mim.    `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})}
    if(await message.guild.fetchOwner().then((data)=>data.id) !== message.member.id){
     
   
   
  const ad = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setDescription(` Você não pode mutar um membro com cargo superior ao seu ou igual ao seu   `)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   if( message.member.roles.highest.position <=  member.roles.highest.position) return message.reply({embeds:[ad]})
    
    }
    
  if( message.guild.me.roles.highest.position <=  member.roles.highest.position) {
    
   const ad = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setDescription(`<O cargo do membro mencionado é maior ou igual ao meu. `)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   return message.reply({embeds:[ad]})
   

 
  }

    
  const vad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Quando irá expirar espirar a punição do usuário?\nUse o formato de **(time [s/m/h/d])**`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
 let vaco =await message.reply({embeds:[vad]})
  
  const filter = (m) =>m.author.id === message.author.id
  const collector1 = message.channel.createMessageCollector({  filter , time : 90000}); 

  collector1.on("collect", async(collected) => { 
  let time = collected.content
 if (!isNaN(ms(time))){ 
vaco.delete()

  const vad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Qual sera o motivo da punição?\n__Obs : __ Caso não queira informar use **"pular"**`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 let sacu =await message.channel.send({embeds:[vad]})
 collector1.stop(true)
 
  
  const filter = (m) =>m.author.id === message.author.id
  const collector = message.channel.createMessageCollector({  filter , time : 90000}); 

  collector.on("collect", collected => { 

    if(collected.content.length > 1000) {

      const ad = new Discord.MessageEmbed()
      .setColor('ffffff')
      .setDescription(`Você não pode definir um motivo de mute com mais de 1.000 caracteres.\nTente novamente!`)
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
      return collected.reply({embeds:[ad]})
    
     }
sacu.delete()
		 collector.stop(true)
     let reason;
     if(collected.content.toLowerCase() == 'pular'){

      reason = "Motivo não inserido"
     }else{
      reason = collected.content
     }

     

    
if(reason.length > 1000) {

  const ad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Você não pode definir um motivo de mute com mais de 1.000 caracteres.`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return collected.reply({embeds:[ad]})

 }
 let gif = db.get(`gifmute_${message.member.id}`)
 if(gif === null) gif =''

const muteembed = new Discord.MessageEmbed()
  .setTitle(`Sistema de Punições | ${client.user.username}`)

  .setColor('#ffffff')
  .setDescription(`** Usuário Mutado:\nㅤTag: \`${member.user.tag}\` \nㅤID: \`${member.user.id}\` \nㅤTempo: **\`${time}\`** \n | Author do Mute:\nㅤTag: \`${message.author.tag}\` \nㅤID: \`${message.author.id}\` \n  | Motivo:** \nㅤ${reason}`)
  .setImage(gif)
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setTimestamp()
  
const unmuteembed = new Discord.MessageEmbed()
.setTitle(`Sistema de Punições | ${client.user.username}`)

.setColor('#ffffff')
.setDescription(`**Usuário Desmutado:\nㅤTag: \`${member.user.tag}\` \nㅤID: \`${member.user.id}\` \n | Motivo:** \nㅤtempo de punição expirada.`) 

 
.setThumbnail(member.user.displayAvatarURL({dynamic : true}))
.setTimestamp()
  
  member.roles.add(muteRole.id) 
  member.user.send({embeds:[muteembed]})
  collected.reply({embeds:[muteembed]})
db.set(`usersmuted_${message.guild.id}_${member.id}`,{date:new Date(),timemute:ms(time)})

var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
if (!canal) {



} else {

canal.send({embeds:[muteembed]})


}
lt.setTimeout(function() {
db.delete(`usersmuted_${message.guild.id}_${member.id}`)
member.roles.remove(muteRole.id)
var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
if (!canal) {
  
} else {

  canal.send({embeds:[unmuteembed]})
  member.user.send({embeds:[unmuteembed]})
 
}}, ms(time))


  })


  }else{
    const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setTitle("Tente novamente")
    .setDescription(`Formato de tempo invalido \nUse o formato de **(time [s/m/h/d])** `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   return   collected.reply({embeds:[usagerr]})
  }
  })


  
  var time = args[1];

  if(!time || isNaN(ms(time))){ 
  
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Você não mencionou o tempo, forma de usar **(time [s/m/h/d])**`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})}
 

 let reason = args.slice(2).join(" ")
 if(!reason) reason = "Motivo não inserido"


    
if(reason.length > 1000) {

    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Você não pode definir um motivo de mute com mais de 1.000 caracteres.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})
  
   }

 const muteembed = new Discord.MessageEmbed()
    .setTitle(`Sistema de Punições | ${client.user.username}`)
 
    .setColor('#ffffff')
    .setDescription(`**Usuário Mutado:\nㅤTag: \`${member.user.tag}\` \nㅤID: \`${member.user.id}\` \nㅤTempo: **\`${time}\`** \n | Author do Mute:\nㅤTag: \`${message.author.tag}\` \nㅤID: \`${message.author.id}\` \n | Motivo:** \nㅤ${reason}`)
 
  .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTimestamp()
    
 const unmuteembed = new Discord.MessageEmbed()
 .setTitle(`Sistema de Punições | ${client.user.username}`)
 
 .setColor('#ffffff')
 .setDescription(`**Usuário Desmutado:\nㅤTag: \`${member.user.tag}\` \nㅤID: \`${member.user.id}\` \n Tempo mutado:\nTempo: **\`${time}\`** \n| Motivo:** \nㅤtempo de punição expirada.`)
   
 
   
 .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
 .setTimestamp()
    
    member.roles.add(muteRole.id) 
 message.reply({embeds:[muteembed]})
 db.set(`usersmuted_${message.guild.id}_${member.id}`,{date:new Date(),timemute:ms(time)})

 var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
 if (!canal) {



 } else {

  canal.send({embeds:[muteembed]})
 
 
}
lt.setTimeout(function() {
db.delete(`usersmuted_${message.guild.id}_${member.id}`)
  member.roles.remove(muteRole.id)
 var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
 if (!canal) {
    
  } else {

    canal.send({embeds:[unmuteembed]})
   
   
  }}, ms(time))
*/
    }
  }