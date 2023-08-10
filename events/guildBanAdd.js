const Discord = require("discord.js");
const db = require("quick.db");



async function logban(client,guild){

  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;


 try{

    let sistelevel = db.get(`banu_${guild.guild.id}`);
 
    if(sistelevel === null)  return;
   
  
    
  if(guild.guild.id !== guild.guild.id) return
    let id = db.fetch(`logban_${guild.guild.id}`)
  if(!id) return;
  var canal = client.channels.cache.get(id)
  const hooks1 = await canal.fetchWebhooks();
  let webhook1 = hooks1.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
  if(webhook1 === undefined )canal.createWebhook('Bot Log')
  const log = await guild.guild.fetchAuditLogs({
    type: "MEMBER_BAN"
  }).then(audit => audit.entries.first())
   
  let razao = log.reason
if(razao == null ) razao = 'A razão não foi inserida'

const user = log.executor
const member = log.target
var embed = new Discord.MessageEmbed()
.setTitle(` Membro Banido `)
.setColor("ffffff")
.setTimestamp()
.setDescription(`${member.tag}(${member.id}) foi banido por \n${user.tag}(${user.id})\nMotivo : ${razao}  `)

const hooks = await canal.fetchWebhooks();
let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
webhook.send({
  username: client.user.username,
  avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
 embeds: [embed]
});

}catch(e){
return;}

}

async function antipriv(client,guild){
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
  try{
  let sistelevel = db.get(`antibanpriv_${ guild.guild.id}`);
  
  if(sistelevel === null)  return;

  const log = await guild.guild.fetchAuditLogs({
    type: "MEMBER_BAN_ADD"
  }).then(audit => audit.entries.first())

const user = log.executor
let usergt =  guild.guild.members.cache.get(user.id)
if(usergt.user.bot){
  if(!db.get(`bloqbot_${guild.guild.id}`)){
    return;
  }
}
if( guild.guild.me.roles.highest.position <=  usergt.roles.highest.position) return;
if(user.id === await guild.guild.fetchOwner().then((data)=>data.id)) return;
if(client.user.id === user.id) return;
//target
usergt.ban({days: 7,reason: `Sistema de anti privatização de ban ${client.user.username}|Motivo:${user.tag}(${user.id}) tentou privatizar um banimento`}); 
}catch(e){
 return;}
}

module.exports = async(client,guild) => {

  logban(client,guild)

  antipriv(client,guild)

}