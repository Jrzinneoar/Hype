const db = require("quick.db");
const numberreaplce = require('custom-translate')
const Timeout = require('smart-timeout')
const Discord = require('discord.js')
function countador(client, member) {
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
 
  let conty = db.get(`contadorstatus_${member.guild.id}`);
  if(conty === null){
    return;
}
  let ashx = db.get(`countchannel_${member.guild.id}`);
 if(ashx === null){
  return;
}
   let numbertype = db.get(`numbertype_${member.guild.id}`)
  ;
    
  
 try{
  

   let count = member.guild.memberCount

   if(numbertype == null || numbertype == 0){
  const numberstyle = {
 0:'<a:0_:1132093745131692103>',
 1:'<a:1_:1132093814278983800>',
 2:'<a:2_:1132093884705558628>',
 3:' <a:3_:1132093954070945934> ',
4:'<a:4_:1132094036753260544> ',
5:'<a:5_:1132094083733672017> ',
6:'<a:6_:1132094166046888006>',
7:'<a:7_:1132094236058198088>',
8:'<a:8_:1132094342610309233>',
9:'<a:9_:1132094391666872360>'

     

  };
   
  count = numberreaplce.letterTrans(`${count}`, numberstyle)
    }else if(numbertype ==1 ){

  const numberstyle = {
0:'<a:zblakkc0:1132095436778385479>', 
1:'<a:zblakkc1:1132095477588955196>',
2:'<a:zblakkc2:1132095599550926998>',
3:'<a:zblakkc3:1132095658959065098>',
4:'<a:zblakkc4:1132095765171408939>',
5:'<a:zblakkc5:1132095814878101674>',
6:'<a:zblakkc6:1132095878476337272>',
7:'<a:zblakkc7:1132096018213777518>' ,
8:'<a:zblakkc8:1132096224758083644>' ,
9:'<a:zblakkc9:1132096110790455367>'

    };
 
    count = numberreaplce.letterTrans(`${count}`, numberstyle)
    }
    else if(numbertype ==2 ){

  const numberstyle = {
 0:'<a:number_0:1132142717137338499>',
1:'<a:number_1:1132143088823975958>',
2:'<a:number_2:1132142994775081001>' ,
3:'<a:number_3:1132143138996228226>',
4:'<a:number_4:1132143209301155860>', 
5:'<a:number_5:1132143270852579398>',
6:'<a:number_6:1132143353526497341>',
7:'<a:number_7:1132143402792796170>',
8:'<a:number_8:1132143467896774686>',
9:'<a:number_9:1132143523601330227>'
    };
 
    count = numberreaplce.letterTrans(`${count}`, numberstyle)
    }
    else if(numbertype ==3 ){

  const numberstyle = {
0:'<a:D_0tkf:1132144840839286805>',
1:'<a:D_1tkf:1132144914810015884>', 
2:'<a:D_2tkf:1132144978903187569>', 
3:'<a:D_3tkf:1132145035454988388>', 
4:'<a:D_4tkf:1132145108851105893>', 
5:'<a:D_5tkf:1132145155856662568>',
6:'<a:D_6tkf:1132145234734764112>',
 7:'<a:D_7tkf:1132145311125602425>', 
8:'<a:D_8tkf:1132145357774667928>', 
9:'<a:D_9tkf:1132145415282757734>'
    };
 
    count = numberreaplce.letterTrans(`${count}`, numberstyle)
    }
    else if(numbertype ==4 ){

  const numberstyle = {
 0:'<a:red0:1132295657999319150>',
1:'<a:red1:1132295741159784458>',
2:'<a:red2:1132295836160757801>', 
3:'<a:red3:1132296172678172840>',
 4:'<a:red4:1132296225555746856>', 
5:'<a:red5:1132296285530116107>',
 6:'<a:red6:1132296369651073105>',
 7:'<a:red7:1132296439633027143>',
8:'<a:red8:1132296487053840474>', 
9:'<a:red9:1132296566909194312>'

    };
 
   
    count = numberreaplce.letterTrans(`${count}`, numberstyle)
    
    }

    let txt = db.get(`textcount_${member.guild.id}`)
    if(txt == null) txt =count
else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)


let timerement = 360000


if(client.countdown.get(member.guild.id) !== 0 && client.countdown.get(member.guild.id) !== undefined){ timerement = 360000-client.countdown.get(member.guild.id).remaining()

  client.countdown.get(member.guild.id).clear()
}


client.countdown.set(member.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));


  
}catch(e){
  return;}
  

}
async function mute(client,member){
  try{
if(db.get(`usersmuted_${message.guild.id}_${member.id}`)){

  let muterole = member.guild.roles.cache.find(x => x.name === `${client.user.username} Mute`)
  member.roles.add(muterole)
}
}catch(e){
  return;}
}



function autorole(client, member) {
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;

try{
    let role = db.get(`autorole_${member.guild.id}`);

    let cargo = member.guild.roles.cache.get(role);
   
    if(role === null)
    {
    return;
    };
    member.roles.add(cargo); 
  }catch(e){
    return;}
}


async function antibot(client, member) {
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
 try{
  let ashx = db.get(`antibot_${member.guild.id}`);
   
  if(ashx === null){
  return;
  };

 if(member.user.bot === true) {
   
  const log = await member.guild.fetchAuditLogs({
    type: 'BOT_ADD'
  }).then(audit => audit.entries.first())
 if(log.executor.id == member.guild.ownerID)return;
  member.kick([`Sistema de Antibots ${client.user.username}`])

} 
}catch(e){
  return;}
  
}

async function invitelog(client, member){
  

  if(member.guild.id !== member.guild.id) return
  let sistelevel23 = db.get(`memberjoin_${member.guild.id}`);
  

 if(sistelevel23 === null)  return;

  const cachedInvites = client.invites.get(member.guild.id);

  const zhwe = await member.guild.invites.fetch();
  client.invites.set(member.guild.id, zhwe);
 
  if(member.guild.vanityURLCode != null){
  
   var gi = client.invites.get(member.guild.id);
  gi.set(member.guild.vanityURLCode,await member.guild.fetchVanityData());
    client.invites.set(member.guild.id, gi);
  }
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
  const newInvites = await client.invites.get(member.guild.id);

 const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses);

 if(usedInvite == undefined){
  let id = db.fetch(`logmemberjoin_${member.guild.id}`)
  if(!id) return;
   var canal = client.channels.cache.get(id)
   const hooks1 = await canal.fetchWebhooks();
   let webhook1 = hooks1.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
   if(webhook1 === undefined )canal.createWebhook('Bot Log')
   const embed = await new Discord.MessageEmbed()
   .setColor("#5fa5e3")
   .setTitle(` Entrada`)
  .setDescription(`${member} (${member.user.tag})\n ${Math.floor((new Date() - member.user.createdAt) / 86400000)} dias no Discord\n  Não foi possível encontrar quem o convidou`)
  const hooks = await canal.fetchWebhooks();
     let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
     webhook.send({
       username: client.user.username,
       avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
      embeds: [embed]
   });


 }else{

  if(usedInvite.code == member.guild.vanityURLCode ){

   let id = db.fetch(`logmemberjoin_${member.guild.id}`)
   if(!id) return;
    var canal = client.channels.cache.get(id)
    const hooks1 = await canal.fetchWebhooks();
    let webhook1 = hooks1.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
    if(webhook1 === undefined )canal.createWebhook('Bot Log')
    const embed = await new Discord.MessageEmbed()
    .setColor("#5fa5e3")
    .setTitle(`Entrada`)
   .setDescription(`${member} (${member.user.tag})\n ${Math.floor((new Date() - member.user.createdAt) / 86400000)} dias no Discord\n Vanity invite **${member.guild.vanityURLCode}** `)
   const hooks = await canal.fetchWebhooks();
      let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
      webhook.send({
        username: client.user.username,
        avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
       embeds: [embed]
    });
  
  }else{
  db.add(`invitotal_${member.guild.id}_${usedInvite.inviter.id}`,1)


 
  let id = db.fetch(`logmemberjoin_${member.guild.id}`)
   if(!id) return;
    var canal = client.channels.cache.get(id)
    const hooks1 = await canal.fetchWebhooks();
    let webhook1 = hooks1.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
    if(webhook1 === undefined )canal.createWebhook('Bot Log')

    
 
   if (Math.floor((new Date() - member.user.createdAt) / 86400000) < 25){
     db.add(`fakesinvite_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`,1)
     db.set(`inviteby_${member.guild.id}_${member.user.id}`,usedInvite.inviter.id)

     db.set(`invitecode_${member.guild.id}_${member.user.id}`,usedInvite.code)
     let fakes = db.get(`fakesinvite_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`)
     let verdade = db.get(`invitesVerdadeiros_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`)
     let saida = db.get(`saidasinvites_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`)
     if(fakes===null) fakes='0'
     if(verdade ===null) verdade ='0'
     if(saida===null) saida ='0'
     let itotal = +fakes + +verdade + +saida
      const embed = await new Discord.MessageEmbed()
      .setColor("#5fa5e3")
      .setTitle(` Entrada`)
     .setDescription(`${member} (${member.user.tag})\n ${Math.floor((new Date() - member.user.createdAt) / 86400000)} dias no Discord(Conta fake)\n ${usedInvite.inviter.tag} ${verdade} (${saida} Saídas, ${fakes} Fakes, ${itotal})  `)
     const hooks = await canal.fetchWebhooks();
      let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
      webhook.send({
        username: client.user.username,
        avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
       embeds: [embed]
    });

  
   }else{

      db.add(`invitesVerdadeiros_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`,1)
      db.set(`inviteby_${member.guild.id}_${member.user.id}`,usedInvite.inviter.id)
  
      db.set(`invitecode_${member.guild.id}_${member.user.id}`,usedInvite.code)
      let fakes = db.get(`fakesinvite_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`)
      let verdade = db.get(`invitesVerdadeiros_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`)
      let saida = db.get(`saidasinvites_${member.guild.id}_${usedInvite.code}_${usedInvite.inviter.id}`)
      
     if(fakes===null) fakes='0'
     if(verdade ===null) verdade ='0'
     if(saida===null) saida ='0'
   
     let itotal = +fakes + +verdade + +saida
    const embed = await new Discord.MessageEmbed()
    .setColor("#5fa5e3")
    .setTitle(`Entrada`)
   .setDescription(`${member} (${member.user.tag})\n ${Math.floor((new Date() - member.user.createdAt) / 86400000)} dias no Discord\n ${usedInvite.inviter.tag} ${verdade} (${saida} Saídas, ${fakes} Fakes, ${itotal} Total)  `)
   const hooks = await canal.fetchWebhooks();
      let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
      webhook.send({
        username: client.user.username,
        avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
       embeds: [embed]
    });

     }
    }
    
  }
}
async function novo(client,member){
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;

try{
    let role = db.get(`notroleregister_${member.guild.id}`);

    let cargo = member.guild.roles.cache.get(role);
   
    if(role === null)
    {
    return;
    };
    member.roles.add(cargo); 
  }catch(e){
    return;}
}
async function antifake(client,member) {

  let antikfake = db.get(`antifakes_${member.guild.id}`)

let antikfakedias = db.get(`antifakesdias_${member.guild.id}`)
if(antikfake){
  
  if(antikfakedias){

    if (Math.floor((new Date() - member.user.createdAt) / 86400000) < antikfakedias){
      member.kick([ `Sistema anti fake ${client.user.username}`]); 
    }

  }

}
}
module.exports = async (client, member) => {

invitelog(client, member)
  countador(client, member)
  mute(client,member)
  autorole(client, member)
  antibot(client, member)
  novo(client,member)
  antifake(client,member)
}

