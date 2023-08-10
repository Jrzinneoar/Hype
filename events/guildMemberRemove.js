const Discord = require("discord.js");
const db = require("quick.db");
const numberreaplce = require('custom-translate')
const Timeout = require('smart-timeout')
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
   let numbertype = db.get(`numbertype_${member.guild.id}`) ;
    
  
   try{
  

   let count = member.guild.memberCount

   if(numbertype == null){
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
    else if(numbertype ==2 ){

  const numberstyle = {


    };
 
    count = numberreaplce.letterTrans(`${count}`, numberstyle)
    }
    else if(numbertype ==3 ){

  const numberstyle = {
    0:'<a:0gold:863941823554912267>',
    1:'<a:1gold:863942688218284033>',
    2:'<a:2gold:863942688226148362>',
    3:'<a:3gold:863942949520015360>',
    4:'<a:4gold:863943310955380737>',
    5:'<a:5gold:863943929766740038>',
    6:'<a:6gold:863944763963211807>',
    7:'<a:7gold:863944764008824862>',
    8:'<a:8gold:863947575034642442>',
    9:'<a:9gold:863947767407575060>'

    };
 
    count = numberreaplce.letterTrans(`${count}`, numberstyle)
    }
    else if(numbertype ==4 ){

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
async function b123(client,member) {
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;
  let sistelevel = db.get(`memberjoinlog_${member.guild.id}`);

  if(sistelevel === null)  return;
  let id = db.fetch(`systemlogs_${member.guild.id}`)
    if(!id) return;
    

  let invicode = db.get(`invitecode_${member.guild.id}_${member.user.id}`)
  let conferi = db.get(`inviteby_${member.guild.id}_${member.user.id}`)
  if(conferi===null)return;
  db.add(`saidasinvites_${member.guild.id}_${invicode}_${conferi}`,1)
  db.delete(`inviteby_${member.guild.id}_${member.user.id}`)
  db.delete(`invitecode_${member.guild.id}_${member.user.id}`)

}
async function kicklog(client,member){
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;



    let sistelevel = db.get(`kicku_${member.guild.id}`);
 
    if(sistelevel === null)  return;
   
  
    
  if(member.guild.id !== member.guild.id) return
    let id = db.fetch(`logkick_${member.guild.id}`)
  if(!id) return;
  var canal = client.channels.cache.get(id)
  const hooks1 = await canal.fetchWebhooks();
  let webhook1 = hooks1.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
  if(webhook1 === undefined )canal.createWebhook('Bot Log')
  const log = await member.guild.fetchAuditLogs({
    type: "MEMBER_KICK"
  }).then(audit => audit.entries.first())
   if(member.id != log.target.id) return;

 
  let razao = log.reason
if(razao == null ) razao = 'A razão não foi inserida'

const user = log.executor
const membro = log.target
var embed = new Discord.MessageEmbed()
.setTitle(`Membro expulso `)
.setColor("5fa5e3")
.setTimestamp()
.setDescription(`${membro.tag}(${membro.id}) foi expulso por ${user.tag}(${user.id})\nMotivo : ${razao}  `)

const hooks = await canal.fetchWebhooks();
let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
webhook.send({
  username: client.user.username,
  avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
 embeds: [embed]
});



}
async function antipirvkick(client,member){
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;



    let sistelevel = db.get(`antikickpriv_${member.guild.id}`);
 
    if(sistelevel === null)  return;
   
  
    
  if(member.guild.id !== member.guild.id) return
 
  const log = await member.guild.fetchAuditLogs({
    type: "MEMBER_KICK"
  }).then(audit => audit.entries.first())
   if(member.id != log.target.id) return;
   const user = log.executor
   let usergt =  member.guild.members.cache.get(user.id)

   if(usergt.user.bot){
     if(!db.get(`bloqbotkick_${member.guild.id}`)){
       return;
     }
   }
   if( usergt.guild.me.roles.highest.position <=  usergt.roles.highest.position) return;
   if(user.id === await usergt.guild.fetchOwner().then((data)=>data.id)) return;
   if(client.user.id === user.id) return;
   usergt.ban({days: 7,reason: `Sistema de anti privatização de kick ${client.user.username}|Motivo:${user.tag}(${user.id}) tentou privatizar uma expulsão`}); 
}
module.exports = (client,member) => {
  countador(client, member)
 b123(client,member)
 kicklog(client,member)
 antipirvkick(client,member)

}
 