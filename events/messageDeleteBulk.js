const Discord  =require('discord.js')
const db = require('quick.db')

module.exports = async (client,message,args) => {
    let checkmanu = db.get(`manutençaocheck`)
    if(checkmanu != null )return;
try{
let l = 0
var list = Array.from(message.values());
let sistelevel = db.get(`msgdel_${list[l].guild.id}`);

if(sistelevel === null)  return;

  if(list[l].guild.id !== list[l].guild.id) return
    let id = db.fetch(`logdemsg_${list[l].guild.id}`)
  if(!id) return;
  var canal = client.channels.cache.get(id)
  const hooks1 = await canal.fetchWebhooks();
  
  let webhook1 = hooks1.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
  if(webhook1 === undefined )canal.createWebhook('Bot Log')
  let novaHora = new Date();

  let hora = novaHora.getHours();
  let minuto = novaHora.getMinutes();
  let segundo = novaHora.getSeconds();
  let dia = novaHora.getDate();
  let mes = novaHora.getMonth();
  let ano  = novaHora.getFullYear()
  
  
  let content = ''
  for (i in list) {

  
  if(list[i].attachments.first() != undefined && list[i].content != ""){
  content += `[${dia}-${mes}-${ano} ${hora}:${minuto}:${segundo}] (${list[i].author.id}) ${list[i].author.tag}: ${list[i].content} arquivo: ${list[i].attachments.first().url}\n`
  }else if(list[i].attachments.first() != undefined ){
  
 content += `[${dia}-${mes}-${ano} ${hora}:${minuto}:${segundo}] (${list[i].author.id}) ${list[i].author.tag}: arquivo: ${list[i].attachments.first().url}\n`
  }else{
  
  
 content += `[${dia}-${mes}-${ano} ${hora}:${minuto}:${segundo}] (${list[i].author.id}) ${list[i].author.tag}: ${list[i].content}\n`
  }
  }

  const hooks = await canal.fetchWebhooks();
  let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);

 
  webhook.send({content:`**Mensagens de texto deletadas em ${list[l].channel}**`,
    username: client.user.username,
    avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
    files: [{
  attachment: Buffer.from(content, 'utf8'),
   name: `deleted-${list[l].guild.name}-${list[l].channel.name}-${dia}-${mes}-${ano}_${segundo}-${minuto}-${hora}.log`
   }]
    });
  

   
    }catch(e){
    return;} 
  
}