const { default_prefix } = require("../config.json")
const db = require('quick.db')
const ms = require('ms')
const Discord = require('discord.js')
const path = require('path')
var lt = require('long-timeout')

async function status(client){
 
  
    
try{
  i = 0;
  
    client.user
    .setStatus("dnd")
    let activities = [
  `Utilize ${default_prefix}help para obter ajuda!`,
  `Hype`
    ]  
    client.user.setActivity(`${activities[i++ % activities.length]}`, {type: "PLAYING"})

  }catch(e){
    return;}

}
async function statusinterval(client){
  
try{


  i = 0;
  setInterval(() =>{ 
    client.user
    .setStatus("dnd")
    let activities = [
  `Utilize ${default_prefix}help para obter ajuda!`,
  `Hype`
    ]  
    client.user.setActivity(`${activities[i++ % activities.length]}`, {type: "PLAYING"})}, 50000);


  }catch(e){
    return;}
}

async function vips(client){
  try{


 

    client.guilds.cache.forEach(guild => {
 
  
  
  
 
    
   let vipdb = db.all().filter(data => data.ID.startsWith(`newvips_${guild.id}_`)).sort((a, b) => b.data - a.data);
  
  
  let vips = vipdb.length
  

  for (let i = 0; i < vips; i++) {
    let dados = db.get(vipdb[i].ID)
  
    if(dados.duration != 'PERM'){
    let calc = new Date() - Date.parse(dados.vipdate)
     
    let time = Number(dados.duration) - calc


    if(time === 0||time.includes('-')){
   
      let user = guild.members.cache.get(vipdb[i].ID.split("_")[2])
    
    
      if(dados.canal){
        guild.channels.cache.get(dados.canal).delete()
      }
      if(dados.cargo){
        guild.roles.cache.get(dados.cargo).delete()
      }
      db.delete(`newvips_${guild.id}_${user.id}`)
      let vir = db.get(`vips_${guild.id}_"${dados.vipname}"`)
      if(vir.cargo){
       
      user.roles.remove(vir.cargo) 
      }
  
      }else{
        lt.setTimeout(function() {
          let user = guild.members.cache.get(vipdb[i].ID.split("_")[2])
    
    
          if(dados.canal){
            guild.channels.cache.get(dados.canal).delete()
          }
          if(dados.cargo){
            guild.roles.cache.get(dados.cargo).delete()
          }
          db.delete(`newvips_${guild.id}_${user.id}`)
          let vir = db.get(`vips_${guild.id}_"${dados.vipname}"`)
          if(vir.cargo){
           
          user.roles.remove(vir.cargo) 
          }
    }, time)
        }}
      }
  
   
  
   
   
   
   
   
  
  });    
   

}catch(e){
  return;}
}
async function mutecall(client){

 // try{
  
  
  
   
  
      client.guilds.cache.forEach(guild => {
   
    
    
    
   
      
     let vipdb = db.all().filter(data => data.ID.startsWith(`usersmutedcall_${guild.id}_`)).sort((a, b) => b.data - a.data);
    
    
    let vips = vipdb.length
    
     for (let i = 0; i < vips; i++) {

     if(vipdb[i].ID.startsWith(`usersmutedcall_`)) {
      
    let calc = new Date() -  Date.parse(db.get(vipdb[i].ID).date)
   
    
    let time = db.get(vipdb[i].ID).timemute - calc
  
  
    if(time === 0||time.toString().includes('-')){
   
    let member = guild.members.cache.get(vipdb[i].ID.split("_")[2])
    if(member.voice.channel){
      member.voice.setMute(false)
      db.delete(`usersmutedcall_${guild.id}_${member.id}`)
  }
    const unmuteembed = new Discord.MessageEmbed()
    .setTitle(`Sistema de Punições | ${client.user.username}`)
  
  .setColor('#ffffff')
  .setDescription(`**Usuário Desmutado:\nㅤTag: \`${member.user.tag}\` \nㅤID: \`${member.user.id}\` \nMotivo:** \nㅤtempo de punição expirada.`)
   
  
   
  .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
  .setTimestamp()
  if(db.get(vipdb[i].ID).timemute !== 0 ){
  
  var canal = guild.channels.cache.get(db.get(`punichannel_${guild.id}`))
  if (!canal) {
  
  
  
  } else {
  
  canal.send({embeds:[unmuteembed]})
  
  
  }}
    }else{
 
      
      lt.setTimeout(function() {
        db.delete(vipdb[i].ID)
        let member = guild.members.cache.get(vipdb[i].ID.split("_")[2])
        if(member.voice.channel){
          member.voice.setMute(false)
          db.delete(`usersmutedcall_${guild.id}_${member.id}`)
      }
        const unmuteembed = new Discord.MessageEmbed()
        .setTitle(`Sistema de Punições | ${client.user.username}`)
      
      .setColor('#ffffff')
      .setDescription(`** Usuário Desmutado:\nTag: \`${member.user.tag}\` \nID: \`${member.user.id}\` \n Motivo:** \nㅤtempo de punição expirada.`)
       
      
       
      .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
      .setTimestamp()
     
      var canal = guild.channels.cache.get(db.get(`punichannel_${guild.id}`))
      if (!canal) {
      
      
      
      } else {
      
      canal.send({embeds:[unmuteembed]})
      
      
      }
  }, time)
      }
    
     
    
     
     
     
     }
     }
    
    });    
     
  
//  }catch(e){
  //  return;}
  
  }
async function mute(client){

try{



 

    client.guilds.cache.forEach(guild => {
 
  
  
  
 
    
   let vipdb = db.all().filter(data => data.ID.startsWith(`usersmuted_${guild.id}_`)).sort((a, b) => b.data - a.data);
  
  
  let vips = vipdb.length
  
   for (let i = 0; i < vips; i++) {
  
   if(vipdb[i].ID.startsWith(`usersmuted_`)) {
    
  let calc = new Date() -  Date.parse(db.get(vipdb[i].ID).date)
 
  
  let time = db.get(vipdb[i].ID).timemute - calc


  if(time === 0||time.toString().includes('-')){
   
 
  let member = guild.members.cache.get(vipdb[i].ID.split("_")[2])
  let muterole = guild.roles.cache.find(x => x.name === `${client.user.username} Mute`)
  member.roles.remove(muterole)
  const unmuteembed = new Discord.MessageEmbed()
  .setTitle(`Sistema de Punições | ${client.user.username}`)

.setColor('#ffffff')
.setDescription(`**Usuário Desmutado:\nㅤTag: \`${member.user.tag}\` \nID: \`${member.user.id}\` \nMotivo:** \nㅤtempo de punição expirada.`)
 

 
.setThumbnail(member.user.displayAvatarURL({dynamic : true}))
.setTimestamp()
db.delete(`usersmuted_${guild.id}_${member.id}`)

var canal = guild.channels.cache.get(db.get(`punichannel_${guild.id}`))
if (!canal) {



} else {

canal.send({embeds:[unmuteembed]})


}
  }else{
    lt.setTimeout(function() {
      db.delete(vipdb[i].ID)
      let member = guild.members.cache.get(vipdb[i].ID.split("_")[2])
      let muterole = guild.roles.cache.find(x => x.name === `${client.user.username} Mute`)
      member.roles.remove(muterole)
      const unmuteembed = new Discord.MessageEmbed()
      .setTitle(`Sistema de Punições | ${client.user.username}`)
    
    .setColor('#ffffff')
    .setDescription(`**Usuário Desmutado:\nㅤTag: \`${member.user.tag}\` \nㅤID: \`${member.user.id}\` \n Motivo:** \nㅤtempo de punição expirada.`)
     
    
     
    .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
    .setTimestamp()
    db.delete(`usersmuted_${guild.id}_${member.id}`)
    var canal = guild.channels.cache.get(db.get(`punichannel_${guild.id}`))
    if (!canal) {
    
    
    
    } else {
    
    canal.send({embeds:[unmuteembed]})
    
    
    }
}, time)
    }
  
   
  
   
   
   
   }
   }
  
  });    
   

}catch(e){
  return;}

}
async function dBbackup(client){
  try{

  setInterval(() => {
    let attachment = new Discord.MessageAttachment(path.join(__dirname, '../json.sqlite'), "json.sqlite");
  client.channels.cache.get('1131208183621365771').send({files:[attachment]})  
 }, 1800000 );


}catch(e){
  return;}
}




async function invites(client){
 

  client.guilds.cache.forEach(async guild => {
  

   if(guild.me.permissions.has("MANAGE_CHANNELS")&&guild.me.permissions.has("VIEW_AUDIT_LOG")&&guild.me.permissions.has("MANAGE_GUILD")&&guild.me.permissions.has("MANAGE_WEBHOOKS")){
    guild.invites.fetch()
    .then(async invites =>{ 

      client.invites.set(guild.id,invites)

      var gi = client.invites.get(guild.id);
     if(guild.vanityURLCode != null){



     
  gi.set(guild.vanityURLCode,await guild.fetchVanityData());
    client.invites.set(guild.id, gi)

    

    }

  

    })

  }

 
  })
   

}

module.exports =async  (client) => {
 
  invites(client)
  status(client)
  statusinterval(client)
  vips(client)
  mute(client)
  dBbackup(client)
  mutecall(client)

}

 