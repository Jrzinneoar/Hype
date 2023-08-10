require("moment-duration-format");
const db = require("quick.db");
const moment = require("moment");
const Discord = require('discord.js')

const {Temp,Visible} = require('../script/vips')
async function contcall(client,oldMember,newMember){
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
 // try{
  if (oldMember.bot === true) return;

 

    let oldVoice = oldMember.channelId; 
  
    let newVoice = newMember.channelId;
    if(oldMember.channelId===null){
    let tc1 = db.get(`voicechannel_${newMember.guild.id}_${newMember.channelId}`) 

    if (tc1 === true)return; 

    let sistelevel = db.get(`voicesystem_${newMember.guild.id}`);
    if(sistelevel === null)  return;
  }
    else if(newMember.channelId===null){
    let tc1 = db.get(`voicechannel_${oldMember.guild.id}_${oldMember.channelId}`) 

    if (tc1 === true)return; 

    let sistelevel = db.get(`voicesystem_${oldMember.guild.id}`);
    if(sistelevel === null)  return;
}




    if(newMember.selfMute === true || newMember.serverMute === true){
   
  
  const tempo =  db.get(`call_${newMember.guild.id}_${newMember.id}`)

  if(tempo !== null){
    let tempcalllog = db.get(`tempcalllog_${newMember.guild.id}`)

  const start = new Date().getTime(); 
    
  const diff = Math.abs(tempo - start);

  if(tempcalllog !== null){
    let id = db.fetch(`logmembercall_${newMember.guild.id}`)
    if(!id) return;
    var canal = client.channels.cache.get(id)
    const hooks1 = await canal.fetchWebhooks();
    let webhook1 = hooks1.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
    if(webhook1 === undefined )canal.createWebhook('Bot Log')
  
    
    let sistelevel = db.get(`membercalljoin_${newMember.guild.id}`);
    if(sistelevel === null)  return;
    var embed = new Discord.MessageEmbed()
    .setTitle(` Sistema de log de tempcall ${client.user.username} `)
    .setColor("ffffff")
    .setTimestamp()
    .setDescription(`<@${newMember.id}> fez um total de **${moment.duration(diff).format(`Y[ Anos], M[ Meses], W[ Semanas], D[ Dias], H[ Horas], m [Minutos] [e] s[ Segundos]`)}** em call.`)
    const hooks = await canal.fetchWebhooks();
    let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
    webhook.send({
      username: client.user.username,
      avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
     embeds: [embed]
      });

  }
  const tempo2 = Math.ceil(diff / 1000) 
  db.delete(`call_${newMember.guild.id}_${newMember.id}`)
  db.add(`tempocall_${newMember.guild.id}_${newMember.id}`, tempo2)
  db.set(`infos_canal_${newMember.guild.id}_${newMember.id}`, null) 
  }
    }else if(newMember.selfMute === false){
   
  if (oldVoice == null) { 

    let sisteanti = db.get(`rolecalll_${newMember.guild.id}`);
    if (sisteanti !== null) {
      let temvip = db.all().filter(data => data.ID.startsWith(`cgsrolesadv_${newMember.guild.id}_`)).sort((a, b) => b.data - a.data);
      for (let i = 0; i < temvip.length; i++) {

        if(temvip[i].ID.startsWith(`cgsrolesadv_${newMember.guild.id}_`)) {
          

          if(newMember.member.roles.cache.find(r => r.id == temvip[i].ID.split("_")[2])){
if(await Temp(newMember.guild,newMember.channel))return;
            db.set(`call_${newMember.guild.id}_${newMember.id}`, new Date().getTime())
            db.set(`infos_canal_${newMember.guild.id}_${newMember.id}`, `{
          "canal": "${newMember.channelId}"
            }`) 

            return;

          }
        }
      }

    }else{
      if(await Temp(newMember.guild,newMember.channel))return;
      db.set(`call_${newMember.guild.id}_${newMember.id}`, new Date().getTime())
      db.set(`infos_canal_${newMember.guild.id}_${newMember.id}`, `{
    "canal": "${newMember.channelId}"
      }`) 

    }


		
  
		
  } else if (newVoice == null) { 
  
    
    const tempo =  db.get(`call_${newMember.guild.id}_${newMember.id}`)
    if(tempo !== null){
      let tempcalllog = db.get(`tempcalllog_${newMember.guild.id}`)
    const start = new Date().getTime(); 
  
    const diff = Math.abs(tempo - start); 
    if(tempcalllog !== null){
      let id = db.fetch(`logmembercall_${newMember.guild.id}`)
      if(!id) return;
      var canal = client.channels.cache.get(id)
      const hooks1 = await canal.fetchWebhooks();
      let webhook1 = hooks1.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
      if(webhook1 === undefined )canal.createWebhook('Bot Log')
    
      
      let sistelevel = db.get(`membercalljoin_${newMember.guild.id}`);
      if(sistelevel === null)  return;
      var embed = new Discord.MessageEmbed()
      .setTitle(` Sistema de log de tempcall ${client.user.username} `)
      .setColor("ffffff")
      .setTimestamp()
      .setDescription(`<@${newMember.id}> fez um total de **${moment.duration(diff).format(`Y[ Anos], M[ Meses], W[ Semanas], D[ Dias], H[ Horas], m [Minutos] [e] s[ Segundos]`)}** em call.`)
      const hooks = await canal.fetchWebhooks();
      let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
      webhook.send({
        username: client.user.username,
        avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
       embeds: [embed]
        });
  
    }
    const tempo2 = Math.ceil(diff / 1000) 
db.delete(`call_${newMember.guild.id}_${newMember.id}`)
    db.add(`tempocall_${newMember.guild.id}_${newMember.id}`, tempo2) 
    db.set(`infos_canal_${newMember.guild.id}_${newMember.id}`, null) 
 
  
    }
  }else if(oldVoice == newVoice){
    const tempo =  db.get(`call_${newMember.guild.id}_${newMember.id}`)
    if(tempo)return;
 
    let sisteanti = db.get(`rolecalll_${newMember.guild.id}`);
    if (sisteanti !== null) {
      let temvip = db.all().filter(data => data.ID.startsWith(`cgsrolesadv_${newMember.guild.id}_`)).sort((a, b) => b.data - a.data);
      for (let i = 0; i < temvip.length; i++) {

        if(temvip[i].ID.startsWith(`cgsrolesadv_${newMember.guild.id}_`)) {
          

          if(newMember.member.roles.cache.find(r => r.id == temvip[i].ID.split("_")[2])){
            if(await Temp(newMember.guild,newMember.channel))return;
            db.set(`call_${newMember.guild.id}_${newMember.id}`, new Date().getTime())
            db.set(`infos_canal_${newMember.guild.id}_${newMember.id}`, `{
          "canal": "${newMember.channelId}"
            }`) 

     return;

          }
        }
      }
 }else{
      if(await Temp(newMember.guild,newMember.channel))return;
      db.set(`call_${newMember.guild.id}_${newMember.id}`, new Date().getTime())
      db.set(`infos_canal_${newMember.guild.id}_${newMember.id}`, `{
    "canal": "${newMember.channelId}"
      }`) 

    }


   }else if(oldVoice !== newVoice){



    
    const tempo =  db.get(`call_${newMember.guild.id}_${newMember.id}`)
 
    if(tempo !== null){
      let tempcalllog = db.get(`tempcalllog_${newMember.guild.id}`)
    const start = new Date().getTime(); 
  
    const diff = Math.abs(tempo - start); 
    if(tempcalllog !== null){
      let id = db.fetch(`logmembercall_${newMember.guild.id}`)
      if(!id) return;
      var canal = client.channels.cache.get(id)
      const hooks1 = await canal.fetchWebhooks();
      let webhook1 = hooks1.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
      if(webhook1 === undefined )canal.createWebhook('Bot Log')
    
      
      let sistelevel = db.get(`membercalljoin_${newMember.guild.id}`);
      if(sistelevel === null)  return;
      var embed = new Discord.MessageEmbed()
      .setTitle(`Sistema de log de tempcall ${client.user.username} `)
      .setColor("ffffff")
      .setTimestamp()
      .setDescription(`<@${newMember.id}> fez um total de **${moment.duration(diff).format(`Y[ Anos], M[ Meses], W[ Semanas], D[ Dias], H[ Horas], m [Minutos] [e] s[ Segundos]`)}** em call.`)
      const hooks = await canal.fetchWebhooks();
      let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
      webhook.send({
        username: client.user.username,
        avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
       embeds: [embed]
        });
  
    }
    const tempo2 = Math.ceil(diff / 1000) 
db.delete(`call_${newMember.guild.id}_${newMember.id}`)
    db.add(`tempocall_${newMember.guild.id}_${newMember.id}`, tempo2) 
    db.set(`infos_canal_${newMember.guild.id}_${newMember.id}`, null) 
 
  
    }


    let sisteanti = db.get(`rolecalll_${newMember.guild.id}`);
    if (sisteanti !== null) {
      let temvip = db.all().filter(data => data.ID.startsWith(`cgsrolesadv_${newMember.guild.id}_`)).sort((a, b) => b.data - a.data);
      for (let i = 0; i < temvip.length; i++) {

        if(temvip[i].ID.startsWith(`cgsrolesadv_${newMember.guild.id}_`)) {
          

          if(newMember.member.roles.cache.find(r => r.id == temvip[i].ID.split("_")[2])){
            if(await Temp(newMember.guild,newMember.channel))return;
            db.set(`call_${newMember.guild.id}_${newMember.id}`, new Date().getTime())
            db.set(`infos_canal_${newMember.guild.id}_${newMember.id}`, `{
          "canal": "${newMember.channelId}"
            }`) 

     return;

          }
        }
      }
 }else{
      if(await Temp(newMember.guild,newMember.channel))return;
      db.set(`call_${newMember.guild.id}_${newMember.id}`, new Date().getTime())
      db.set(`infos_canal_${newMember.guild.id}_${newMember.id}`, `{
    "canal": "${newMember.channelId}"
      }`) 

    }





   }
    }
 //}catch(e){
   // return;}
  }
  async function joineleave(client,oldMember,newMember){
    let checkmanu = db.get(`manutençaocheck`)
    if(checkmanu != null )return;
 
 try{
    if (oldMember.bot === true) return;
    
    let oldVoice = oldMember.channelId; 
  
    let newVoice = newMember.channelId;
 
    if(oldMember.channelId===null){
 
  let sistelevel = db.get(`voicesystem_${newMember.guild.id}`);
  if(sistelevel === null)  return;
    }
  else if(newMember.channelId===null){
 
  
  let sistelevel = db.get(`voicesystem_${oldMember.guild.id}`);
  if(sistelevel === null)  return;
  }
  
  if(newMember.guild.id !== newMember.guild.id) return
    let id = db.fetch(`logmembercall_${newMember.guild.id}`)
  if(!id) return;
  var canal = client.channels.cache.get(id)
  const hooks1 = await canal.fetchWebhooks();
  let webhook1 = hooks1.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
  if(webhook1 === undefined )canal.createWebhook('Bot Log')

    if (oldVoice == null) { 
  let sistelevel = db.get(`membercalljoin_${newMember.guild.id}`);
  if(sistelevel === null)  return;
  var embed = new Discord.MessageEmbed()
  .setTitle("Tráfego de voz ")
  .setColor("ffffff")
  .setTimestamp()
  .setDescription(`<@${newMember.id}> entrou no canal de voz \`${newMember.guild.channels.cache.get(newVoice).name}\`.`)
  const hooks = await canal.fetchWebhooks();
  let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
  webhook.send({
    username: client.user.username,
    avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
   embeds: [embed]
    });
  
    } else if (newVoice == null) {
  let sistelevel = db.get(`membercallleft_${newMember.guild.id}`);
  if(sistelevel === null)  return;
  var embed = new Discord.MessageEmbed()
  .setTitle("Tráfego de voz ")
  .setColor("ffffff")
  .setTimestamp()
  .setDescription(`<@${oldMember.id}> saiu do canal de voz \`${oldMember.guild.channels.cache.get(oldVoice).name}\`.`)
  const hooks = await canal.fetchWebhooks();
  let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
  webhook.send({
    username: client.user.username,
    avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
   embeds: [embed]
    });
  
  
    }
  }catch(e){
    return;}
  }
  async function vipautoesconder(client,oldMember, newMember){

    let checkmanu = db.get(`manutençaocheck`)
    if(checkmanu != null )return;
   // try{
    if (oldMember.bot === true) return;
  
   
  
      let oldVoice = oldMember.channelId; 
    
      let newVoice = newMember.channelId;


      if(oldVoice==null){
        if(await Visible(newMember.guild,newMember.channel)){
if(newMember.channel.members.size>0){
  newMember.channel.permissionOverwrites.edit(newMember.guild.roles.everyone, {
    VIEW_CHANNEL: null
     })
}
        }
      }else if(newVoice==null){
        if(await Visible(oldMember.guild,oldMember.channel)){
          if(oldMember.channel.members.size==0){
            oldMember.channel.permissionOverwrites.edit(oldMember.guild.roles.everyone, {
              VIEW_CHANNEL: false
               })
          }
                  }

                }else if(newVoice!==oldVoice){
                  if(await Visible(oldMember.guild,oldMember.channel)){
                    if(oldMember.channel.members.size==0){
                      oldMember.channel.permissionOverwrites.edit(oldMember.guild.roles.everyone, {
                        VIEW_CHANNEL: false
                         })
                    }
                           
                              
                            }else if(await Visible(newMember.guild,newMember.channel)){

                              if(newMember.channel.members.size>0){
                              newMember.channel.permissionOverwrites.edit(newMember.guild.roles.everyone, {
                                VIEW_CHANNEL: null
                                 })
                                }
                           
                            }
      }
  }
  async function mutecall(client ,oldMember, newMember) {
    let oldVoice = oldMember.channelId; 
  
    let newVoice = newMember.channelId;

    if(oldVoice==null){
       
  if(!db.get(`usersmutedcall_${newMember.guild.id}_${newMember.id}`))return;

 
     let calc = new Date() -  Date.parse(db.get(`usersmutedcall_${newMember.guild.id}_${newMember.id}`).date)

     
     let time = db.get(`usersmutedcall_${newMember.guild.id}_${newMember.id}`).timemute - calc

   
     if(time === 0||time.toString().includes('-')){
      
    
     let member = newMember.guild.members.cache.get(newMember.id)
     if(member.voice.channel){
       member.voice.setMute(false)
       db.delete(`usersmutedcall_${newMember.guild.id}_${member.id}`)
   }
  }else{
    let member = newMember.guild.members.cache.get(newMember.id)
    if(member.voice.channel){
    
      member.voice.setMute(true)
    }
  }
}else if(newVoice== null){
  if(!db.get(`usersmutedcall_${oldMember.guild.id}_${oldMember.id}`))return;


 let calc = new Date() -  Date.parse(db.get(`usersmutedcall_${oldMember.guild.id}_${oldMember.id}`).date)

 
 let time = db.get(`usersmutedcall_${oldMember.guild.id}_${oldMember.id}`).timemute - calc


 if(time === 0||time.toString().includes('-')){
  

 let member = oldMember.guild.members.cache.get(newMember.id)
 if(member.voice.channel){
   member.voice.setMute(false)
   db.delete(`usersmutedcall_${oldMember.guild.id}_${member.id}`)
}
}else{
  let member = oldMember.guild.members.cache.get(newMember.id)
  if(member.voice.channel){
    

    member.voice.setMute(true)
  }
}
}else{
  if(!db.get(`usersmutedcall_${oldMember.guild.id}_${oldMember.id}`))return;


 let calc = new Date() -  Date.parse(db.get(`usersmutedcall_${oldMember.guild.id}_${oldMember.id}`).date)

 
 let time = db.get(`usersmutedcall_${oldMember.guild.id}_${oldMember.id}`).timemute - calc


 if(time === 0||time.toString().includes('-')){
  

 let member = oldMember.guild.members.cache.get(newMember.id)
 if(member.voice.channel){
   member.voice.setMute(false)
   db.delete(`usersmutedcall_${oldMember.guild.id}_${member.id}`)
}
}else{
  let member = oldMember.guild.members.cache.get(newMember.id)
  if(member.voice.channel){

    member.voice.setMute(true)
  }
}
  
}
  }
module.exports = async (client ,oldMember, newMember) => {
  mutecall(client ,oldMember, newMember)
  contcall(client,oldMember,newMember)
  joineleave(client,oldMember,newMember)
  vipautoesconder(client,oldMember, newMember)
 
}
