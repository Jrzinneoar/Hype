const Discord = require("discord.js");
const db = require("quick.db");



module.exports = async(client,channel ) => {
  let checkmanu = db.get(`manutençaocheck`)
  if(checkmanu != null )return;

   try{
  let sistelevel = db.get(`channeldel_${channel.guild.id}`);

  if(sistelevel === null)  return;
  if(channel.type === 'DM')return;

  
    if(channel.guild.id !== channel.guild.id) return
  let id = db.fetch(`logchannel_${channel.guild.id}`)
    if(!id) return;
    var canal = client.channels.cache.get(id)
    const hooks1 = await canal.fetchWebhooks();
    let webhook1 = hooks1.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
    if(webhook1 === undefined )canal.createWebhook('Bot Log')
    let type = ``;
    if(channel.type === 'text') {type = `Texto`;
    }else if(channel.type === 'voice'){
    type = `Voz`
    }else if(channel.type === 'news'){
    type = `Anúncios`
    }
    const log = await channel.guild.fetchAuditLogs({
 type: 'CHANNEL_CREATE'
    }).then(audit => audit.entries.first())
   
  var embed = new Discord.MessageEmbed()
  .setTitle(` Canal de ${type} Deletedo`)
  .setColor("ffffff")
  .setTimestamp()
  .setDescription(` Criado por : ${log.executor}\n Nome do canal : \`${channel.name}\` \n ID do canal : \`${channel.id}\` `)
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
 