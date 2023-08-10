const Discord = require("discord.js");
const db = require("quick.db");


  module.exports = async (client ,oldMessage, newMessage) => {
    let checkmanu = db.get(`manutençaocheck`)
    if(checkmanu != null )return;
try{
  let sistelevel = db.get(`msgedit_${newMessage.guild.id}`);

  if(sistelevel === null)  return;
  if (oldMessage.author.bot) return;
  if (newMessage.author.bot) return;

  if(oldMessage.guild.id !== oldMessage.guild.id) return
    let id = db.fetch(`logdemsg_${oldMessage.guild.id}`)
    if(!id) return;
  var canal = client.channels.cache.get(id);
  const hooks1 = await canal.fetchWebhooks();
  let webhook1 = hooks1.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
  if(webhook1 === undefined )canal.createWebhook('Bot Log')
  if(oldMessage.attachments.first() === undefined && newMessage.attachments.first() === undefined){
   
    
  
  
    const embed = new Discord.MessageEmbed()
    .setTitle('Messagem Editada')
    .setThumbnail(oldMessage.author.displayAvatarURL)
    .setDescription(`**${oldMessage.author} editou uma mensagem de texto ** \n \n **Canal de texto:** <#${oldMessage.channel.id}> \n \n **Author da Messagem:** \n ${oldMessage.author.tag} \n \n **Mensagem Antiga:** \n \`${oldMessage.content}\` \n \n **Mensagem Nova:** \n\`${newMessage.content}\``)
    .setTimestamp() 
    .setColor("#ffffff")
  
    const hooks = await canal.fetchWebhooks();
    let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
    webhook.send({
  username: client.user.username,
  avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
     embeds: [embed]
  });
  
  
  }else if(oldMessage.attachments.first() === undefined ){
  
 
    if(oldMessage.content === '' ){
   
  const embed = new Discord.MessageEmbed()
  .setTitle('Messagem Editada')
  .setThumbnail(oldMessage.author.displayAvatarURL)
  .setDescription(`**${oldMessage.author} editou uma mensagem de texto ** \n \n **Canal de texto:** <#${oldMessage.channel.id}> \n \n **Author da Messagem:** \n ${oldMessage.author.tag} \n \n **Mensagem Antiga:** \n \`${oldMessage.content}\` \n \n **Mensagem Nova:** \n${newMessage.attachments.first().url}`)
  .setTimestamp() 
  .setColor("#ffffff")
    
  const hooks = await canal.fetchWebhooks();
  let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
  webhook.send({
    username: client.user.username,
    avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
   embeds: [embed]
    });
    }else{
  
  const embed = new Discord.MessageEmbed()
  .setTitle('Messagem Editada')
  .setThumbnail(oldMessage.author.displayAvatarURL)
  .setDescription(`**${oldMessage.author} editou uma mensagem de texto ** \n \n **Canal de texto:** <#${oldMessage.channel.id}> \n \n **Author da Messagem:** \n ${oldMessage.author.tag} \n \n **Mensagem Antiga:** \n${oldMessage.content}\` \n \n **Mensagem Nova:** \n \`${newMessage.content}\n${newMessage.attachments.first().url}\``)
  .setTimestamp() 
  .setColor("#ffffff")
    
  const hooks = await canal.fetchWebhooks();
  let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
  webhook.send({
    username: client.user.username,
    avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
   embeds: [embed]
    });


    }
   
  }else if(newMessage.attachments.first() === undefined ){
 
    
    if(oldMessage.content === '' ){
  const embed = new Discord.MessageEmbed()
  .setTitle('Messagem Editada')
  .setThumbnail(oldMessage.author.displayAvatarURL)
  .setDescription(`**${oldMessage.author} editou uma mensagem de texto ** \n \n **Canal de texto:** <#${oldMessage.channel.id}> \n \n **Author da Messagem:** \n ${oldMessage.author.tag} \n \n **Mensagem Antiga:** \n\`${oldMessage.attachments.first().url}\` \n \n **Mensagem Nova:** \n \`${newMessage.content}\``)
  .setTimestamp() 
  .setColor("#ffffff")
    
    
    const hooks = await canal.fetchWebhooks();
    let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
    webhook.send({
  username: client.user.username,
  avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
     embeds: [embed]
  });
    }else{
  
  const embed = new Discord.MessageEmbed()
  .setTitle('Messagem Editada')
  .setThumbnail(oldMessage.author.displayAvatarURL)
  .setDescription(`**${oldMessage.author} editou uma mensagem de texto ** \n \n **Canal de texto:** <#${oldMessage.channel.id}> \n \n**Author da Messagem:** \n ${oldMessage.author.tag} \n \n **Mensagem Antiga:** \n\`${oldMessage.content}\n${oldMessage.attachments.first().url}\` \n \n **Mensagem Nova:** \n \`${newMessage.content}\``)
  .setTimestamp() 
  .setColor("#ffffff")
    
  
    const hooks = await canal.fetchWebhooks();
  let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
  webhook.send({
    username: client.user.username,
    avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
   embeds: [embed]
    });
    }
   
  }else{
    
    if(oldMessage.content === '' &&  newMessage.content===''){
 
  const embed = new Discord.MessageEmbed()
  .setTitle('Messagem Editada')
  .setThumbnail(oldMessage.author.displayAvatarURL)
  .setDescription(`**${oldMessage.author} editou uma mensagem de texto ** \n \n **Canal de texto:** <#${oldMessage.channel.id}> \n \n **Author da Messagem:** \n ${oldMessage.author.tag} \n \n **Mensagem Antiga:** \n\`${oldMessage.attachments.first().url}\` \n \n **Mensagem Nova:** \n \`${newMessage.attachments.first().url}\``)
  .setTimestamp() 
  .setColor("#ffffff")
    
  const hooks = await canal.fetchWebhooks();
  let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
  webhook.send({
    username: client.user.username,
    avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
   embeds: [embed]
    });
   }else   if(oldMessage.content === '' ){
    
    const embed = new Discord.MessageEmbed()
    .setTitle('Messagem Editada')
    .setThumbnail(oldMessage.author.displayAvatarURL)
    .setDescription(`**${oldMessage.author} editou uma mensagem de texto ** \n \n **Canal de texto:** <#${oldMessage.channel.id}> \n \n **Author da Messagem:** \n ${oldMessage.author.tag} \n \n **Mensagem Antiga:** \n\`${oldMessage.attachments.first().url}\` \n \n **Mensagem Nova:** \n \`${newMessage.content}\n${newMessage.attachments.first().url}\``)
    .setTimestamp() 
    .setColor("#ffffff")
  
    const hooks = await canal.fetchWebhooks();
    let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
    webhook.send({
  username: client.user.username,
  avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
     embeds: [embed]
  });
  }else if(newMessage.content === ''){
  
    const embed = new Discord.MessageEmbed()
    .setTitle('Messagem Editada')
    .setThumbnail(oldMessage.author.avatarURL)
    .setDescription(`**${oldMessage.author} editou uma mensagem de texto ** \n \n **Canal de texto:** <#${oldMessage.channel.id}> \n \n <:Members_gifzada:844416125604200449>**Author da Messagem:** \n ${oldMessage.author.tag} \n \n **Mensagem Antiga:** \n \`${oldMessage.content}\n${oldMessage.attachments.first().url}\` \n \n **Mensagem Nova:** \n \`${newMessage.attachments.first().url}\``)
    .setTimestamp() 
    .setColor("#ffffff")
    const hooks = await canal.fetchWebhooks();
  let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
  webhook.send({
    username: client.user.username,
    avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
   embeds: [embed]
    });
  }else{

    const embed = new Discord.MessageEmbed()
    .setTitle('Messagem Editada')
    .setThumbnail(oldMessage.author.displayAvatarURL)
    .setDescription(`**${oldMessage.author} editou uma mensagem de texto ** \n \n **Canal de texto:** <#${oldMessage.channel.id}> \n \n **Author da Messagem:** \n ${oldMessage.author.tag} \n \n **Mensagem Antiga:** \n\`${oldMessage.content}\n${oldMessage.attachments.first().url}\` \n \n **Mensagem Nova:** \n \`${newMessage.content}\n${newMessage.attachments.first().url}\``)
    .setTimestamp() 
    .setColor("#ffffff")
  
    const hooks = await canal.fetchWebhooks();
    let webhook = hooks.find(a => a.name === 'Bot Log' && a.owner.id === client.user.id);
    webhook.send({
  username: client.user.username,
  avatarURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
     embeds: [embed]
  });

  }
  
  
  }
    

  
  
    }catch(e){
  return;}
  
  
    
  }