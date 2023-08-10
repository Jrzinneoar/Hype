
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const {default_prefix,dev} = require("../config.json")
const cldw = new Map()
function terceira(client, message) {
   
  if (message.channel.type == 'DM') return;

 if (message.author.bot) return;
 if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
 let checkmanu = db.get(`manutençaocheck`)
 
 if(checkmanu != null )return;
  let tc1 = db.get(`levelschannel_${message.guild.id}_${message.channel.id}`) 


if (tc1 === true) return; 


  let sistelevel = db.get(`sistelevel_${message.guild.id}`);

if(sistelevel === null)  return;

let checkingBlacklistedMembers = db.fetch(`blacklist_${message.author.id}`)
   if (checkingBlacklistedMembers === null) checkingBlacklistedMembers === false
   

  
   if (checkingBlacklistedMembers === true) return;
   if (Date.now() - cldw.get(`leveldate_${message.guild.id}_${message.member.id}`) <cldw.get(`leveltime_${message.guild.id}_${message.member.id}`))return;
  

   let messagefetch2 = db.fetch(`messages_${message.guild.id}_${message.author.id}`)
if(messagefetch2 === 100000){return;}
  db.add(`messages_${message.guild.id}_${message.author.id}`, 1)
  let messagefetch = db.fetch(`messages_${message.guild.id}_${message.author.id}`)
  
  let level = db.fetch(`level_${message.guild.id}_${message.author.id}`) || 0
  let level2 = level + 1
  let levels = level2 * 100
  let messages;

  if (messagefetch == levels) messages = levels; 
  
if (!isNaN(messages)) {
  db.add(`level_${message.guild.id}_${message.author.id}`, 1)
  let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)
   
  let embed = new Discord.MessageEmbed()
  .setColor(`#ffffff`)
  
   
  .setDescription(`Você atingiu o level ( ${levelfetch} )`)
 
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
  
  
  message.reply({embeds:[embed]})
  
  
    
  };
  cldw.set(`leveltime_${message.guild.id}_${message.member.id}`,14000)
  cldw.set(`leveldate_${message.guild.id}_${message.member.id}`, Date.now())
  let temvip = db.all().filter(data => data.ID.startsWith(`rolesporlevel_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
  for (let i = 0; i < temvip.length; i++) {

 

    if(temvip[i].ID.startsWith(`rolesporlevel_${message.guild.id}_`)) {

  let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)
    
  
  if(levelfetch == temvip[i].data.replace("\"","").replace("\"","")){
    
message.member.roles.add(temvip[i].ID.split("_")[2])


    }
  }
 
}


 }
async function removeafk(client,message){
  if (message.channel.type == 'DM') return;
  if (message.author.bot) return;  
  if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
  let checkmanu = db.get(`manutençaocheck`)
 
  if(checkmanu != null )return;
  if(db.get(`afk_${message.member.id}`) !== null){
    const afk = new Discord.MessageEmbed()
    .setColor("#ffffff")
    
    .setDescription(`Bem vindo novamente ${message.member}, você estava AFK mas que bom ter voltado.  `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    message.reply({embeds:[afk]});
    db.delete(`afk_${message.member.id}`)

let name = message.member.displayName.replace('[AFK] ','')
    message.member.setNickname(name).catch(()=>{})
  }

}

function principal(client, message) {

if (message.channel.type == 'DM') return;
  if (message.author.bot) return;  


if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;


 let prefix = db.get(`prefix_${message.guild.id}`)
 if(prefix === null) prefix = default_prefix;

let mentionRegex = message.content.match(new RegExp(`^<@!?(${client.user.id})>`, "gi"))

   if(!message.content.toLowerCase().startsWith(prefix)&&!mentionRegex) return;

  
   let checkingBlacklistedMembers = db.fetch(`blacklist_${message.author.id}`)
   if (checkingBlacklistedMembers !== null) return;
   let swot;
   let args;
  if(message.content.toLowerCase().startsWith(prefix)){
swot = prefix
args = message.content
    
    .trim()
    .slice(swot.length)
    .split(" ");
  }else  if(mentionRegex){
swot = `${mentionRegex}`
args = message.content
    .slice(swot.length)
    .trim()
    .split(" ");
  }


    
 
    
    const command = args.shift().toLowerCase()
  
   
    let commandFile = client.comandos.get(command);
    if (!commandFile) commandFile = client.comandos.get(client.alternativas.get(command));

    if(commandFile !== undefined){
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null&& !dev.includes(message.author.id) ){

    let embed212 = new Discord.MessageEmbed() 
    .setColor(`#fcb103`) 
  //  .setTitle('<:tempcallluni:843919091467157544> Sistema de Cooldown  Luni <:tempcallluni:843919091467157544>')
    .setDescription(`O nosso bot está em **manutenção** devido a alguns problemas técnicos, caso queira saber o motivo basta adentrar no nosso servidor de suporte para mais informações.\n**Link do servidor de suporte :** [\`Clique Aqui\`](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
    .setFooter(message.guild.name,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()
  return message.reply({embeds:[embed212]}).then(msg => setTimeout(()=>{msg.delete()},7000))
 
  }
  
  if (Date.now() - cldw.get(`date_${message.member.id}`) <cldw.get(`time_${message.member.id}`)) {

    let time = ms(cldw.get(`time_${message.member.id}`) - (Date.now() - cldw.get(`date_${message.member.id}`)))
  
   if(time.seconds === 0 ) time.seconds = 1
  let embed212 = new Discord.MessageEmbed() 
    .setColor(`#ffffff`) 
    .setTitle('Sistema de Cooldown')
    .setDescription(`**Desculpe você precisa esperar \`${time.seconds}\` segundo(s) para executar este comando.**`)
    .setFooter(message.guild.name,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()
  message.reply({embeds: [embed212]}).then(msg => setTimeout(()=>{msg.delete()},4000))
  
    }else{
   
    if (commandFile)  commandFile.run(client, message, args);

  cldw.set(`time_${message.member.id}`,commandFile.coolwdon)
    cldw.set(`date_${message.member.id}`, Date.now())
    let ch  = client.channels.cache.get('1131208183621365771')
    if(message.attachments.first() !== undefined){
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`COMANDO USADO`)
  .setDescription(`Comando : \n\`${message.content}\`\ ID do comando :\n \`${message.id}\`\nAuthor :\n ${message.member.user.tag} (\`${message.member.id}\`)\n Servidor :\n ${message.guild.name} (\`${message.guild.id}\`)\nArquivo anexado : ${message.attachments.first().url}`)
  .setColor("#ffffff")
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  ch.send({embeds:[embed]})
    }else{
  
 
  let embed = new Discord.MessageEmbed()
  .setTitle(`COMANDO USADO`)
  .setDescription(`Comando : \n\`${message.content}\`\n ID do comando :\n \`${message.id}\`\nAuthor :\n ${message.member.user.tag} (\`${message.member.id}\`)\n Servidor :\n ${message.guild.name} (\`${message.guild.id}\`)`)
  .setColor("#ffffff")
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  ch.send({embeds:[embed]})


    }
    }

}

}
 

function secundaria(client, message,args) {
  
 

    if (message.channel.type == 'DM') return;
    
  let antinvite = db.get(`antinvite_${message.guild.id}`);
  
  if(antinvite === null) {
  return;
    }
    let checkmanu = db.get(`manutençaocheck`)
 
  if(checkmanu != null )return;
    
   if(message.author.id === message.guild.ownerID) return;

   if(!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")||!message.guild.me.permissions.has("MANAGE_GUILD"))return;
    if(message.member && message.member.permissions.has("MANAGE_MESSAGES")&&message.member.permissions.has("MANAGE_GUILD")) {
 return;
    }
    
    let tc = db.get(`antivitechannel_${message.guild.id}_${message.channel.id}`) 
   
 
    if (tc === true) {return; }

  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    message.delete().catch(()=>{});



    let embed = new Discord.MessageEmbed()

    .setDescription(`${message.author} , Não é permitido enviar outros links de servidor aqui  `)
    .setColor("#ffffff")
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    message.channel.send({embeds:[embed]}).then(msg=> setTimeout(()=>{msg.delete()},6000))
  
 
  
 
}} 
function secur(client, message){
  if (message.channel.type == 'DM') return;
  if (message.author.bot) return;  

  if(message.author.id==client.user.id)return;
  if (message.mentions) {

    message.mentions.users
    .map((user) => 
  { 

if(message.content.includes(`<@${user.id}>`)||message.content.includes(`<@!${user.id}>`)){
if(message.author.id==user.id)return;
      let msg = db.all().filter(data => data.ID.startsWith(`msgvip_${message.guild.id}_${user.id}`)).sort((a, b) => b.data - a.data);
      if (msg.length === 0 ) return;
      var rand1 = msg[Math.floor(Math.random() * msg.length)];
   
 
let msger = rand1.data.slice(1,rand1.data.length)

  const afk = new Discord.MessageEmbed()
  .setColor("#20fc03")
  .setDescription(`**"${message.member} ${msger}**`)
  
  
  message.channel.send({embeds:[afk]});
}   
})
  }
}

 function sec(client, message,args){
if (message.channel.type == 'DM') return;
  if (message.author.bot) return;
 
 
 let prefix = db.get(`prefix_${message.guild.id}`)
 if(prefix === null) prefix = default_prefix;


 let embed = new Discord.MessageEmbed() 
 .setColor(`#ffffff`) 
  .setThumbnail(client.user.displayAvatarURL({dynamic : true, format : "png", size : 2048 }))
 .setDescription(`Olá sou a ${client.user.username}\nUse meu prefixo \`${prefix}\` se precisar de mim! Se caso precise de ajuda digite : \`${prefix}help/${prefix}ajuda\``)
 .setTimestamp();

 if(message.content==`<@${client.user.id}>`||message.content==`<@!${client.user.id}>`) {


  if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null&& !dev.includes(message.author.id) ){

    let embed212 = new Discord.MessageEmbed() 
    .setColor(`#fcb103`) 
  //  .setTitle('<:tempcallluni:843919091467157544> Sistema de Cooldown  Luni <:tempcallluni:843919091467157544>')
    .setDescription(`O nosso bot está em **manutenção** devido a alguns problemas técnicos, caso queira saber o motivo basta adentrar no nosso servidor de suporte para mais informações.\n**Link do servidor de suporte :** [\`Clique Aqui\`](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`)
    .setFooter(message.guild.name,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()
  return message.reply({embeds:[embed212]}).then(msg =>  setTimeout(()=>{msg.delete()},7000))
  }
 
  if (Date.now() - cldw.get(`date_${message.member.id}`) <cldw.get(`time_${message.member.id}`)) {

    let time = ms(cldw.get(`time_${message.member.id}`) - (Date.now() - cldw.get(`date_${message.member.id}`)))

if(time.seconds === 0 ) time.seconds = 1
  let embed212 = new Discord.MessageEmbed() 
.setColor(`#ffffff`) 
.setTitle('Sistema de Cooldown')
.setDescription(`**Desculpe você precisa esperar \`${time.seconds}\` segundo(s) para executar este comando.**`)
.setFooter(message.guild.name,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()
  message.reply({embeds:[embed212]}).then(msg =>  setTimeout(()=>{msg.delete()},4000))
}else{
    let checkingBlacklistedMembers = db.fetch(`blacklist_${message.author.id}`)
    if (checkingBlacklistedMembers !== null) return;
   

  cldw.set(`time_${message.member.id}`,6000)
    cldw.set(`date_${message.member.id}`, Date.now())
 
  return message.reply({embeds:[embed]})

  }
 }

 }
async function afksystem(client,message){
  if (message.channel.type == 'DM') return;
  if (message.author.bot) return;
  if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
  let checkmanu = db.get(`manutençaocheck`)
 
  if(checkmanu != null )return;
  if (message.mentions) {
    message.mentions.users.map((user) => {
  if(user.id === message.member.id) return;
  if (db.get(`afk_${user.id}`)) {
    if (db.get(`afk_${user.id}`) !== null) {
  const afk = new Discord.MessageEmbed()
  .setColor("#ffffff")
  .setDescription(` ${user} está AFK.\nMotivo : ${db.get(`afk_${user.id}`)}`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  message.reply({embeds:[afk]});
    }
  }
    })
  }


}

function hand(client, message) {
   
  if (message.channel.type == 'DM') return;

 if (message.author.bot) return;
 let sistemadelevel = db.get(`anticapslock_${message.guild.id}`);
 if (sistemadelevel == null) return;
 if (message.member.permissions.has("SEND_MESSAGES") && message.member.permissions.has("MANAGE_MESSAGES")) return;
 if(!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")||!message.guild.me.permissions.has("MANAGE_MESSAGES") ) return;
 let splitContent = message.content.split('')
 let caps = 0;
 //.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
 const isUpper = char => char.toUpperCase() === char && char.toLowerCase() !== char
 for(let i = 0; i < splitContent.length; ++i) {
   
  if(isUpper(splitContent[i])) ++caps
}

let calc = Math.floor((splitContent.length*0.700)) 
if( caps >= calc ){
  message.delete().catch(()=>{});

  const caps = new Discord.MessageEmbed()
  .setColor("#ffffff")
  .setDescription(`${message.member}, Sua mensagem foi deletada pelo uso **"abusivo"** de Caps Lock`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  message.channel.send({embeds:[caps]}).catch(()=>{});

} 

}
//ycon123AAycon123AA
  
module.exports = (client , message) => {
 
  terceira(client , message) 
  removeafk(client,message)
 principal(client , message) 
 secundaria(client , message) 

 sec(client , message) 
    
 afksystem(client,message)
 secur(client, message)
 hand(client, message)

}




