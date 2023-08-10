const Discord = require("discord.js")
const db = require("quick.db")
const ms = require('ms')
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "cargoperm",
  coolwdon:8000,
  alternativas: ["cargoperm"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;


    
  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Para executar este comando precisa a permissão \`Administrador\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  if (!message.member.permissions.has("ADMINISTRATOR")) return  message.reply({embeds:[limite]})
   
  const ad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`<:block:918884825652420698> <:W_aaaaBR:844415186474500166>Não é possível executar este o comando, preciso da permissão de \`admininistrador\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    if(!message.guild.me.permissions.has("ADMINISTRATOR")) return  message.reply({embeds:[ad]})

    
let roles = message.guild.roles.cache.get(args[0]) || message.mentions.roles.first()

if(!roles) { 
    const norh = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`<:e_fixadoTDN:844359619886579732> <:W_aaaaBR:844415186474500166>Por favor mencione um cargo !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
  return  message.reply({embeds:[norh]})
  
  }


  let banperm = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  let kickperm = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  let advperm = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
 let muteperm = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
 let lockperm = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)

 if(banperm) banperm = `Ligado`
 else banperm = `Desligado`
 if(kickperm) kickperm = `Ligado`
 else kickperm = `Desligado`
 if(advperm) advperm = `Ligado`
 else advperm = `Desligado`
 if(muteperm) muteperm = `Ligado`
 else muteperm = `Desligado`
 if(lockperm) lockperm = `Ligado`
 else lockperm = `Desligado`

 const seilaaaaaaaaa = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setAuthor(`Sistema de permissão - ${client.user.username}`)
  .setDescription(`**Cargo: ${roles}**\n\n<a:1_:1132093814278983800> Permissão de ban: ${banperm}\n<a:2_:1132093884705558628> Permissão de kick: ${kickperm}\n<a:3_:1132093954070945934> Permissão de adv: ${advperm}\n<a:4_:1132094036753260544> Permissão de mute: ${muteperm}\n<a:5_:1132094083733672017> Permissão de lock: ${lockperm}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
//
let butao1 = new Discord.MessageButton()
.setEmoji('<a:1_:1132093814278983800>')
.setStyle("SECONDARY")
.setCustomId("butao1")

let butao2 =  new Discord.MessageButton()
.setEmoji('<a:2_:1132093884705558628>')
.setStyle("SECONDARY")
.setCustomId("butao2")
let butao3 =  new Discord.MessageButton()
.setEmoji('<a:3_:1132093954070945934>')
.setStyle("SECONDARY")
.setCustomId("butao3")
let butao4 =  new Discord.MessageButton()
.setEmoji('<a:4_:1132094036753260544>')
.setStyle("SECONDARY")
.setCustomId("butao4")
let butao5 =  new Discord.MessageButton()
.setEmoji('<a:5_:1132094083733672017>')
.setStyle("SECONDARY")
.setCustomId("butao5")


const row = new Discord.MessageActionRow()
row.addComponents([butao1,butao2,butao3,butao4,butao5])


message.reply({embeds:[seilaaaaaaaaa],components:[row]}).then(msg => {
setTimeout(()=>{msg.delete()},180000)

const inf = (interaction) => interaction.user.id == message.member.id

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(r,u) =>{
switch (r.customId) {
case 'butao1':
r.deferUpdate()
if(banperm == `Ligado`){
  db.delete(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
  mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
  lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)
 
 if(banpermv1) banperm = `Ligado`
 else banperm = `Desligado`
 if(kickpermv1) kickperm = `Ligado`
 else kickperm = `Desligado`
 if(advpermv1) advperm = `Ligado`
 else advperm = `Desligado`
 if(mutepermv1) muteperm = `Ligado`
 else muteperm = `Desligado`
 if(lockpermv1) lockperm = `Ligado`
 else lockperm = `Desligado`
 

 const seilaaaaaaaaa = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setAuthor(`Sistema de permissão-${client.user.username}`)
  .setDescription(`**Cargo: ${roles}**\n\n<a:1_:1132093814278983800> Permissão de ban: ${banperm}\n<a:2_:1132093884705558628> Permissão de kick: ${kickperm}\n<a:3_:1132093954070945934> Permissão de adv: ${advperm}\n<a:4_:1132094036753260544> Permissão de mute: ${muteperm}\n<a:5_:1132094083733672017> Permissão de lock: ${lockperm}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

  r.message.edit({embeds:[seilaaaaaaaaa]})

}else if(banperm == `Desligado`){

db.set(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`,true)
banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)

if(banpermv1) banperm = `Ligado`
else banperm = `Desligado`
if(kickpermv1) kickperm = `Ligado`
else kickperm = `Desligado`
if(advpermv1) advperm = `Ligado`
else advperm = `Desligado`
if(mutepermv1) muteperm = `Ligado`
else muteperm = `Desligado`
if(lockpermv1) lockperm = `Ligado`
else lockperm = `Desligado`


const seilaaaaaaaaa = new Discord.MessageEmbed()
.setColor('ffffff')
.setAuthor(`Sistema de permissão-${client.user.username}`)
.setDescription(`**Cargo: ${roles}**\n\n<a:1_:1132093814278983800> Permissão de ban: ${banperm}\n<a:2_:1132093884705558628> Permissão de kick: ${kickperm}\n<a:3_:1132093954070945934> Permissão de adv: ${advperm}\n<a:4_:1132094036753260544> Permissão de mute: ${muteperm}\n<a:5_:1132094083733672017> Permissão de lock: ${lockperm}`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})

}
break;
case 'butao2':
r.deferUpdate()
if(kickperm == `Ligado`){
  db.delete(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
  mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
  lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)
 
 if(banpermv1) banperm = `Ligado`
 else banperm = `Desligado`
 if(kickpermv1) kickperm = `Ligado`
 else kickperm = `Desligado`
 if(advpermv1) advperm = `Ligado`
 else advperm = `Desligado`
 if(mutepermv1) muteperm = `Ligado`
 else muteperm = `Desligado`
 if(lockpermv1) lockperm = `Ligado`
 else lockperm = `Desligado`
 

 const seilaaaaaaaaa = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setAuthor(`Sistema de permissão-${client.user.username}`)
  .setDescription(`**Cargo: ${roles}**\n\n<a:1_:1132093814278983800> Permissão de ban: ${banperm}\n<a:2_:1132093884705558628> Permissão de kick: ${kickperm}\n<a:3_:1132093954070945934> Permissão de adv: ${advperm}\n<a:4_:1132094036753260544> Permissão de mute: ${muteperm}\n<a:5_:1132094083733672017> Permissão de lock: ${lockperm}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})

}else if(kickperm == `Desligado`){

db.set(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`,true)
banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)

if(banpermv1) banperm = `Ligado`
else banperm = `Desligado`
if(kickpermv1) kickperm = `Ligado`
else kickperm = `Desligado`
if(advpermv1) advperm = `Ligado`
else advperm = `Desligado`
if(mutepermv1) muteperm = `Ligado`
else muteperm = `Desligado`
if(lockpermv1) lockperm = `Ligado`
else lockperm = `Desligado`


const seilaaaaaaaaa = new Discord.MessageEmbed()
.setColor('ffffff')
.setAuthor(`Sistema de permissão-${client.user.username}`)
.setDescription(`**Cargo: ${roles}**\n\n<a:1_:1132093814278983800> Permissão de ban: ${banperm}\n<a:2_:1132093884705558628> Permissão de kick: ${kickperm}\n<a:3_:1132093954070945934> Permissão de adv: ${advperm}\n<a:4_:1132094036753260544> Permissão de mute: ${muteperm}\n<a:5_:1132094083733672017> Permissão de lock: ${lockperm}`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

r.message.edit({embeds:[seilaaaaaaaaa]})

}
break;
case 'butao3':
r.deferUpdate()
if(advperm == `Ligado`){
  db.delete(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
  banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
  mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
  lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)
 
 if(banpermv1) banperm = `Ligado`
 else banperm = `Desligado`
 if(kickpermv1) kickperm = `Ligado`
 else kickperm = `Desligado`
 if(advpermv1) advperm = `Ligado`
 else advperm = `Desligado`
 if(mutepermv1) muteperm = `Ligado`
 else muteperm = `Desligado`
 if(lockpermv1) lockperm = `Ligado`
 else lockperm = `Desligado`
 

 const seilaaaaaaaaa = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setAuthor(`Sistema de permissão-${client.user.username}`)
  .setDescription(`**Cargo: ${roles}**\n\n<a:1_:1132093814278983800> Permissão de ban: ${banperm}\n<a:2_:1132093884705558628> Permissão de kick: ${kickperm}\n<a:3_:1132093954070945934> Permissão de adv: ${advperm}\n<a:4_:1132094036753260544> Permissão de mute: ${muteperm}\n<a:5_:1132094083733672017> Permissão de lock: ${lockperm}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})

}else if(advperm == `Desligado`){

db.set(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`,true)
banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)

if(banpermv1) banperm = `Ligado`
else banperm = `Desligado`
if(kickpermv1) kickperm = `Ligado`
else kickperm = `Desligado`
if(advpermv1) advperm = `Ligado`
else advperm = `Desligado`
if(mutepermv1) muteperm = `Ligado`
else muteperm = `Desligado`
if(lockpermv1) lockperm = `Ligado`
else lockperm = `Desligado`


const seilaaaaaaaaa = new Discord.MessageEmbed()
.setColor('ffffff')
.setAuthor(`Sistema de permissão-${client.user.username}`)
.setDescription(`**Cargo: ${roles}**\n\n<a:1_:1132093814278983800> Permissão de ban: ${banperm}\n<a:2_:1132093884705558628> Permissão de kick: ${kickperm}\n<a:3_:1132093954070945934> Permissão de adv: ${advperm}\n<a:4_:1132094036753260544> Permissão de mute: ${muteperm}\n<a:5_:1132094083733672017> Permissão de lock: ${lockperm}`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})


}
break;
case 'butao4':
r.deferUpdate()
if(muteperm == `Ligado`){
  db.delete(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
  banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
  mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
  lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)
 
 if(banpermv1) banperm = `Ligado`
 else banperm = `Desligado`
 if(kickpermv1) kickperm = `Ligado`
 else kickperm = `Desligado`
 if(advpermv1) advperm = `Ligado`
 else advperm = `Desligado`
 if(mutepermv1) muteperm = `Ligado`
 else muteperm = `Desligado`
 if(lockpermv1) lockperm = `Ligado`
 else lockperm = `Desligado`
 

 const seilaaaaaaaaa = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setAuthor(`Sistema de permissão-${client.user.username}`)
  .setDescription(`**Cargo: ${roles}**\n\n<a:1_:1132093814278983800> Permissão de ban: ${banperm}\n<a:2_:1132093884705558628> Permissão de kick: ${kickperm}\n<a:3_:1132093954070945934> Permissão de adv: ${advperm}\n<a:4_:1132094036753260544> Permissão de mute: ${muteperm}\n<a:5_:1132094083733672017> Permissão de lock: ${lockperm}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

  r.message.edit({embeds:[seilaaaaaaaaa]})

}else if(muteperm == `Desligado`){

db.set(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`,true)
banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)

if(banpermv1) banperm = `Ligado`
else banperm = `Desligado`
if(kickpermv1) kickperm = `Ligado`
else kickperm = `Desligado`
if(advpermv1) advperm = `Ligado`
else advperm = `Desligado`
if(mutepermv1) muteperm = `Ligado`
else muteperm = `Desligado`
if(lockpermv1) lockperm = `Ligado`
else lockperm = `Desligado`

const seilaaaaaaaaa = new Discord.MessageEmbed()
.setColor('ffffff')
.setAuthor(`Sistema de permissão-${client.user.username}`)
.setDescription(`**Cargo: ${roles}**\n\n<a:1_:1132093814278983800> Permissão de ban: ${banperm}\n<a:2_:1132093884705558628> Permissão de kick: ${kickperm}\n<a:3_:1132093954070945934> Permissão de adv: ${advperm}\n<a:4_:1132094036753260544> Permissão de mute: ${muteperm}\n<a:5_:1132094083733672017> Permissão de lock: ${lockperm}`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})


}
break;
case 'butao5':
r.deferUpdate()
if(lockperm == `Ligado`){
  db.delete(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)
  banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
  kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
  advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
  mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
  lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)
 
 if(banpermv1) banperm = `Ligado`
 else banperm = `Desligado`
 if(kickpermv1) kickperm = `Ligado`
 else kickperm = `Desligado`
 if(advpermv1) advperm = `Ligado`
 else advperm = `Desligado`
 if(mutepermv1) muteperm = `Ligado`
 else muteperm = `Desligado`
 if(lockpermv1) lockperm = `Ligado`
 else lockperm = `Desligado`
 

 const seilaaaaaaaaa = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setAuthor(`Sistema de permissão-${client.user.username}`)
  .setDescription(`**Cargo: ${roles}**\n\n<a:1_:1132093814278983800> Permissão de ban: ${banperm}\n<a:2_:1132093884705558628> Permissão de kick: ${kickperm}\n<a:3_:1132093954070945934> Permissão de adv: ${advperm}\n<a:4_:1132094036753260544> Permissão de mute: ${muteperm}\n<a:5_:1132094083733672017> Permissão de lock: ${lockperm}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})

}else if(lockperm == `Desligado`){

db.set(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`,true)
 banpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"BAN_MEMBERS"`)
 kickpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"KICK_MEMBERS"`)
 advpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"ADV_MEMBERS"`)
 mutepermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"MUTE_MEMBERS"`)
 lockpermv1 = db.get(`cargosperm_${message.guild.id}_${roles.id}_"LOCK_MEMBERS"`)

if(banpermv1) banperm = `Ligado`
else banperm = `Desligado`
if(kickpermv1) kickperm = `Ligado`
else kickperm = `Desligado`
if(advpermv1) advperm = `Ligado`
else advperm = `Desligado`
if(mutepermv1) muteperm = `Ligado`
else muteperm = `Desligado`
if(lockpermv1) lockperm = `Ligado`
else lockperm = `Desligado`

const seilaaaaaaaaa = new Discord.MessageEmbed()
.setColor('ffffff')
.setAuthor(`Sistema de permissão-${client.user.username}`)
.setDescription(`**Cargo: ${roles}**\n\n<a:1_:1132093814278983800> Permissão de ban: ${banperm}\n<a:2_:1132093884705558628> Permissão de kick: ${kickperm}\n<a:3_:1132093954070945934> Permissão de adv: ${advperm}\n<a:4_:1132094036753260544> Permissão de mute: ${muteperm}\n<a:5_:1132094083733672017> Permissão de lock: ${lockperm}`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


  r.message.edit({embeds:[seilaaaaaaaaa]})


}
break;
}
})
})


  }
}