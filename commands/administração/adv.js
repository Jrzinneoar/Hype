const Discord = require("discord.js")
const db = require("quick.db")
const {findMember} = require('../../script/utils')
const { default_prefix } = require("../../config.json");
const path = require('path')
const {fetchRolePerm} = require('../../script/permission')
module.exports = {
  nome: "adv",
  coolwdon:7800,
  alternativas: ["adv"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Para executar este comando precisa a permissão \`gerenciar cargos\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if(!await fetchRolePerm(message,message.member,"ADV_MEMBERS")){
    if (!message.member.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[limite]})
 }
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Não é possível executar este o comando, preciso da permissão de \`gerenciar cargos\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[ad]})
  
   
    let advchannel = db.get(`advchannel_${message.guild.id}`);

    if (advchannel == null) {
  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Não encontrei nenhum canal de adv! Utilize ${prefix}advchannel add para selecionar o canal.`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  return message.reply({embeds:[limite]});
   }
 
    const adv1 =

  message.guild.roles.cache.find((r) => r.name === `${client.user.username} Advertência 1`) ||
  (await message.guild.roles.create({
 
  name: `${client.user.username} Advertência 1`,
    
    reason: `Sistema de Punição ${client.user.username}`,
  }));
  const adv2 =

  message.guild.roles.cache.find((r) => r.name === `${client.user.username} Advertência 2`) ||
  (await message.guild.roles.create( {
  name: `${client.user.username} Advertência 2`,
    reason: `Sistema de Punição ${client.user.username}`,
  }));
  
  

  var name = args.join(' ').trim();
  var user  = await findMember(message, name);
    let notuser = new Discord.MessageEmbed()
				
			
    .setDescription(`Mencione um usuário existente.`)
    .setColor('ffffff')

    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();

    if (!user) return message.reply({embeds:[notuser]})
    if (user === message.member){ 

  const ad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(` Você não pode se advertir!    `)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return message.reply({embeds:[ad]})}
  if(user.user.id === client.user.id) { 

    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Você não pode usar este comando em mim.    `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})}
    if (user.user.id === await message.guild.fetchOwner().then((data)=>data.id)){ 

  const ad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Você não pode advertir a posse do servidor.    `)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return message.reply({embeds:[ad]})}
    if(await message.guild.fetchOwner().then((data)=>data.id) !== message.member.id){
     
   
   
   const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(` Você não pode advertir um membro com cargo superior ao seu ou igual ao seu   `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if(message.member.roles.highest.position <= user.roles.highest.position)    return message.reply({embeds:[ad]})
 
 }

 

   if(message.guild.me.roles.highest.position <= user.roles.highest.position) {
     
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`O cargo do membro mencionado é maior ou igual ao meu. `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})
    
   }
    
    const reason = args.slice(1).join(" ")
    if(!reason){


  const ad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Lembres-se de colocar um motivo. `)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return message.reply({embeds:[ad]})
    }
  if(reason.length > 1000) {

    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(` Você não pode definir um motivo de advertência com mais de 1.000 caracteres.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})
   }
    
  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`) 
    if(warnings === null) {
  let advchannel = db.get(`advchannel_${message.guild.id}`);

  db.set(`warnings_${message.guild.id}_${user.id}`, 1)
  
    

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`) 
    if(warnings === 1)user.roles.add(adv1.id,`Sistema de Punições ${client.user.username}|Author da Adv:${message.author.tag}|Motivo:${reason}`) 

    if(warnings === 2)user.roles.add(adv2.id,`Sistema de Punições ${client.user.username}|Author da Adv:${message.author.tag}|Motivo:${reason}` ) 
    if(warnings === 3){
  const attachment = new Discord.MessageAttachment(path.join(__dirname, '../../img/exclmaocaoroxo.gif'), 'exclmaocaoroxo.gif');
  let msg3 = new Discord.MessageEmbed()
    
  .setAuthor(` Acão |${warnings}ª Advertência:`,'attachment://exclmaocaoroxo.gif')

  .setColor('#ffffff')
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))

  .setDescription(`**Usuário Advertido:\n Tag: \`${user.user.tag}\` \nㅤID: \`${user.user.id}\` \n Author do Advertencia:\nㅤTag: \`${message.author.tag}\` \nㅤID: \`${message.author.id}\` \n Motivo:** \nㅤ${reason}`)
   
    
    .setTimestamp()
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setTitle(`Punido !`)
    .setDescription(`O usuário excedeu o limite de advertências e foi banido.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    user.user.send({embeds:[msg3],files:[attachment]})
    user.user.send({embeds:[ad]})
  message.reply({embeds:[msg3],files:[attachment]})
  message.reply({embeds:[ad]})
  client.channels.cache.get(advchannel).send({embeds:[msg3],files:[attachment]}).catch(()=>{})
  client.channels.cache.get(advchannel).send({embeds:[ad]}).catch(()=>{})
  db.delete(`warnings_${message.guild.id}_${user.id}`)
  user.ban({reason: `Sistema de Punições ${client.user.username}|O usuário levou 3 advertencias resultando em banimento automático `})
  return;
    };
    const attachment = new Discord.MessageAttachment(path.join(__dirname, '../../img/exclmaocaoroxo.gif'), 'exclmaocaoroxo.gif');
    let msg1 = new Discord.MessageEmbed()
   
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setAuthor(` Acão |${warnings}ª Advertência:`,'attachment://exclmaocaoroxo.gif')

    .setColor('#ffffff')
    .setDescription(`**Usuário Advertido:\nㅤTag: \`${user.user.tag}\` \n ID: \`${user.user.id}\` \n Author do Advertencia:\nㅤTag: \`${message.author.tag}\` \nㅤID: \`${message.author.id}\` \n Motivo:** \nㅤ${reason}`)
 
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()
    
    message.reply({embeds:[msg1],files:[attachment]})
    user.user.send({embeds:[msg1],files:[attachment]})

    client.channels.cache.get(advchannel).send({embeds:[msg1],files:[attachment]}).catch(()=>{})

    } else if(warnings !== null) {
  let advchannel = db.get(`advchannel_${message.guild.id}`);
    db.add(`warnings_${message.guild.id}_${user.id}`, 1)
   let warnings = db.get(`warnings_${message.guild.id}_${user.id}`) 

   if(warnings === 1)user.roles.add(adv1.id,`Sistema de Punições ${client.user.username}|Author da Adv:${message.author.tag}|Motivo:${reason}`) 

  if(warnings === 2)user.roles.add(adv2.id,`Sistema de Punições ${client.user.username}|Author da Adv:${message.author.tag}|Motivo:${reason}` )

  if(warnings === 3){
    const attachment = new Discord.MessageAttachment(path.join(__dirname, '../../img/exclmaocaoroxo.gif'), 'exclmaocaoroxo.gif');
    let msg4 = new Discord.MessageEmbed()
    
    .setAuthor(` Acão |${warnings}ª Advertência:`,'attachment://exclmaocaoroxo.gif')

    .setColor('#ffffff')
 .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))

    .setDescription(`** Usuário Advertido:\nㅤTag: \`${user.user.tag}\` \nㅤID: \`${user.user.id}\` \n Author do Advertencia:\nㅤTag: \`${message.author.tag}\` \nㅤID: \`${message.author.id}\` \n Motivo:** \nㅤ${reason}`)
 
  
  .setTimestamp()
  const ad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setTitle(`Punido !`)
  .setDescription(`O usuário excedeu o limite de advertências e foi banido.`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();     
    message.reply({embeds:[msg4],files:[attachment]})
    message.reply({embeds:[ad]})
    user.user.send({embeds:[msg4],files:[attachment]})
    user.user.send({embeds:[ad]})
    
    client.channels.cache.get(advchannel).send({embeds:[msg4],files:[attachment]}).catch(()=>{})
     client.channels.cache.get(advchannel).send({embeds:[ad]}).catch(()=>{})
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.ban({reason: `Sistema de Punições ${client.user.username}|O usuário levou 3 advertencias resultando em banimento automático `})
    return;
  };
  const attachment = new Discord.MessageAttachment(path.join(__dirname, '../../img/exclmaocaoroxo.gif'), 'exclmaocaoroxo.gif');
    let msg2 = new Discord.MessageEmbed()
  
    .setAuthor(` Acão |${warnings}ª Advertência:`,'attachment://exclmaocaoroxo.gif')

    .setColor('#ffffff')
 .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))

    .setDescription(`**Usuário Advertido:\nㅤTag: \`${user.user.tag}\` \nㅤID: \`${user.user.id}\` \n Author do Advertencia:\nㅤTag: \`${message.author.tag}\` \nㅤID: \`${message.author.id}\` \n Motivo:** \nㅤ${reason}`)
 
  
  .setTimestamp()
   
    message.reply({embeds:[msg2],files:[attachment]})
    user.user.send({embeds:[msg2],files:[attachment]})

    client.channels.cache.get(advchannel).send({embeds:[msg2],files:[attachment]}).catch(()=>{})
   }}}