const Discord = require("discord.js")
const db = require("quick.db")
const ms = require('ms')
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "bansystem",
  coolwdon:8000,
  alternativas: ["bansystem"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;


    
  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Para executar este comando precisa a permissão \`gerenciar canais\`,\`ver registro de auditoria\`,\`gerenciar webhooks\` e \`banir membros\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  if (!message.member.permissions.has("MANAGE_CHANNELS")||!message.member.permissions.has("VIEW_AUDIT_LOG")||!message.member.permissions.has("BAN_MEMBERS")||!message.member.permissions.has("MANAGE_WEBHOOKS")) return  message.reply({embeds:[limite]})
   
  const ad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Não é possível executar este o comando, preciso da permissão de \`gerenciar canais\`,\`ver registro de auditoria\`,\`gerenciar webhooks\` e \`banir membros\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    if(!message.guild.me.permissions.has("MANAGE_CHANNELS")||!message.guild.me.permissions.has("VIEW_AUDIT_LOG")||!message.guild.me.permissions.has("BAN_MEMBERS")||!message.guild.me.permissions.has("MANAGE_WEBHOOKS")) return  message.reply({embeds:[ad]})
let l1 = db.get(`logban_${message.guild.id}`)
if(l1 == null) l1 = '\`Nenhum canal setado\`'
else l1 = `<#${l1}>`

    let msglog = db.get(`logban_${message.guild.id}`)
    if(msglog == null) msglog = '\`Nenhum canal setado\`'
    else msglog = `<#${msglog}>`
    let msglogdel = db.get(`banu_${message.guild.id}`)
    if(msglogdel == null) msglogdel = 'Desligado'
    else msglogdel = 'Ligado'
    let msglogedit= db.get(`unbanu_${message.guild.id}`)
    if(msglogedit == null) msglogedit = 'Desligado'
    else msglogedit = 'Ligado'
    let antipri= db.get(`antibanpriv_${message.guild.id}`)
    if(antipri == null) antipri = 'Desligado'
    else antipri = 'Ligado'
    let bloqbot= db.get(`bloqbot_${message.guild.id}`)
    if(bloqbot == null) bloqbot = 'Desligado'
    else bloqbot = 'Ligado'
    
    
   
    
    const embed = new Discord.MessageEmbed ()
    
    .setTitle("Sistema de ban")    
    .setColor('ffffff')
    .setDescription(` Configure nosso sistema de ban abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Sistema de membro banido : ${msglogedit}\n<a:3_:1132093954070945934> Sistema de membro desbanido : ${msglogdel}\n<a:4_:1132094036753260544> Sistema anti privatização de ban : ${antipri}\n<a:5_:1132094083733672017> Bloquear banimentos por outros bots: ${bloqbot}\n<a:6_:1132094166046888006> Salvar configuração`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp()
    
    
    let butao1 = new Discord.MessageButton()
    .setEmoji('<a:1_:1132093814278983800>')
  .setStyle("SECONDARY")
   .setCustomId("butao1")
  
    let butao2 =  new Discord.MessageButton()
    .setEmoji('<a:2_:1132093884705558628>')
    .setStyle("SECONDARY")
    .setCustomId("butao2")
  let butao3 =  new Discord.MessageButton()
    .setEmoji('<a:3_:1132093954070945934>')
    .setStyle("SECONDARY")
    .setCustomId("butao3")
    let butao4 =  new Discord.MessageButton()
    .setEmoji('<a:4_:1132094036753260544>')
    .setStyle("SECONDARY")
    .setCustomId("butao4")
    let butao5 =  new Discord.MessageButton()
    .setEmoji('<a:5_:1132094083733672017>')
    .setStyle("SECONDARY")
    .setCustomId("butao5")
    let butao6 =  new Discord.MessageButton()
    .setEmoji('<a:6_:1132094166046888006>')
    .setStyle("SECONDARY")
    .setCustomId("butao6")
  
    const row = new Discord.MessageActionRow()
    row.addComponents([butao1,butao2,butao3,butao4,butao5])
  
    const row1 = new Discord.MessageActionRow()
    row1.addComponents([butao6])
  
 
  
 message.reply({embeds:[embed],components:[row,row1]}).then(msg => {
   setTimeout(()=>{msg.delete()},1800000)

   const inf = (interaction) => interaction.user.id == message.member.id
    
    const collector = msg.createMessageComponentCollector({ filter:inf});
    collector.on('collect', async(r,u) =>{
 switch (r.customId) {
   case 'butao1':
 r.deferUpdate()
    let ccategori = new Discord.MessageEmbed()
    .setDescription(` Hey, ${message.member} ! Mencione um canal válido.`)
    .setColor('ffffff')
  
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
  
    
 let sg =await message.channel.send({embeds:[ccategori]})
  setTimeout(()=>{sg.delete()},30000)
  const filter= res => {
    return res.author.id === message.author.id && res.content.length;
  };
  const categoryCollector = await message.channel.awaitMessages({filter,
    max: 1,
    time: 30000
  });
 
   
    
 let category = categoryCollector.first().mentions.channels.first() ||message.guild.channels.cache.get(categoryCollector.first().content)
   
    
 let cnh123 = new Discord.MessageEmbed()
    .setDescription(`Tente novamente \nEste canal é inválido `)
    .setColor('ffffff')

    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();




if(!category) return categoryCollector.first().reply({embeds:[cnh123]}).then((msg)=>{
  sg.delete() 
 setTimeout(()=>{
   categoryCollector.first().delete()
   msg.delete()},5000)})
let j123 = new Discord.MessageEmbed()
.setDescription(`Hey, ${message.member} ! Mencione um canal de texto na proxima vez. ` )
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
if(category.type !== 'GUILD_TEXT') return categoryCollector.first().reply({embeds:[j123]}).then((msg)=>{
  sg.delete() 
 setTimeout(()=>{
   categoryCollector.first().delete()
   msg.delete()},5000)})


msglog = category
let embed2b1 = new Discord.MessageEmbed()
.setTitle("Sistema de ban")    
.setColor('ffffff')
.setDescription(` Configure nosso sistema de ban abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Sistema de membro banido : ${msglogedit}\n<a:3_:1132093954070945934> Sistema de membro desbanido : ${msglogdel}\n<a:4_:1132094036753260544> Sistema anti privatização de ban : ${antipri}\n<a:5_:1132094083733672017> Bloquear banimentos por outros bots: ${bloqbot}\n<a:6_:1132094166046888006> Salvar configuração`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()
     
  
    
r.message.edit({embeds:[embed2b1]})

let dadasdsadasda = new Discord.MessageEmbed()
    

.setDescription(`Canal setado com sucesso!`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


categoryCollector.first().reply({embeds:[dadasdsadasda]}).then((msg)=>{
  sg.delete() 
 setTimeout(()=>{
   categoryCollector.first().delete()
   msg.delete()},5000)})

break;
case 'butao2':
  r.deferUpdate()
  if(msglogedit === 'Desligado'){
    let dadsad = new Discord.MessageEmbed()
    .setDescription(`Hey, ${message.member} Você precisa setar o canal de ban log `)
    .setColor('ffffff')
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(msglog == '\`Nenhum canal setado\`') return message.channel.send({embeds:[dadsad]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
  let dadasdsadasda = new Discord.MessageEmbed()
  
  
    .setDescription(`Sistema de membro banido **habilitado.**`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
 message.channel.send({embeds:[dadasdsadasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
 
  msglogedit = 'Ligado'
  let embed2b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de ban")    
  .setColor('ffffff')
  .setDescription(`Configure nosso sistema de ban abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Sistema de membro banido : ${msglogedit}\n<a:3_:1132093954070945934> Sistema de membro desbanido : ${msglogdel}\n<a:4_:1132094036753260544> Sistema anti privatização de ban : ${antipri}\n<a:5_:1132094083733672017> Bloquear banimentos por outros bots: ${bloqbot}\n<a:6_:1132094166046888006> Salvar configuração`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()
     
 
     
  r.message.edit({embeds:[embed2b1]})
  }else if(msglogedit === 'Ligado'){
  
  let dadasdsadasda = new Discord.MessageEmbed()
  
  
    .setDescription(`Sistema de membro banido **desabilitado.**`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  message.channel.send({embeds:[dadasdsadasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
  msglogedit = 'Desligado'
  let embed2b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de ban")    
  .setColor('ffffff')
  .setDescription(`Configure nosso sistema de ban abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Sistema de membro banido : ${msglogedit}\n<a:3_:1132093954070945934> Sistema de membro desbanido : ${msglogdel}\n<a:4_:1132094036753260544> Sistema anti privatização de ban : ${antipri}\n<a:5_:1132094083733672017> Bloquear banimentos por outros bots: ${bloqbot}\n<a:6_:1132094166046888006> Salvar configuração`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()
     
   
 
     
  r.message.edit({embeds:[embed2b1]})
  }
  
break;

case 'butao3':
  r.deferUpdate()
  if(msglogdel === 'Desligado'){
    let dadsad = new Discord.MessageEmbed()
    .setDescription(` Hey, ${message.member} Você precisa setar o canal de ban log `)
    .setColor('ffffff')
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(msglog == '\`Nenhum canal setado\`') return message.channel.send({embeds:[dadsad]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
    let dadasdsradasda = new Discord.MessageEmbed()
    
    
  .setDescription(` Sistema de membro desbanido **habilitado.**`)
  .setColor('ffffff')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    message.channel.send({embeds:[dadasdsradasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
   
    msglogdel = 'Ligado'
    let embed32b1 = new Discord.MessageEmbed()
    .setTitle("Sistema de ban")    
    .setColor('ffffff')
    .setDescription(`Configure nosso sistema de ban abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Sistema de membro banido : ${msglogedit}\n<a:3_:1132093954070945934> Sistema de membro desbanido : ${msglogdel}\n<a:4_:1132094036753260544> Sistema anti privatização de ban : ${antipri}\n<a:5_:1132094083733672017> Bloquear banimentos por outros bots: ${bloqbot}\n<a:6_:1132094166046888006> Salvar configuração`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp()
   
 
    
   
    r.message.edit({embeds:[embed32b1]})
 
}else if(msglogdel === 'Ligado'){
    let dadasdsadasda = new Discord.MessageEmbed()
    
    
  .setDescription(`Sistema de membro desbanido **desabilitado.**`)
  .setColor('ffffff')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    message.channel.send({embeds:[dadasdsadasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
    msglogdel = 'Desligado'
    let embed2b1 = new Discord.MessageEmbed()
    .setTitle("Sistema de ban")    
    .setColor('ffffff')
    .setDescription(`Configure nosso sistema de ban abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Sistema de membro banido : ${msglogedit}\n<a:3_:1132093954070945934> Sistema de membro desbanido : ${msglogdel}\n<a:4_:1132094036753260544> Sistema anti privatização de ban : ${antipri}\n<a:5_:1132094083733672017> Bloquear banimentos por outros bots: ${bloqbot}\n<a:6_:1132094166046888006> Salvar configuração`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp()
   
     
   
    r.message.edit({embeds:[embed2b1]})
}

  break;
  case 'butao4':
    r.deferUpdate()
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Para usar esta opção você precisa ser **posse** do servidor!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    if (await message.guild.fetchOwner().then((data)=>data.id) !== message.member.id) return message.channel.send({embeds:[limite]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
    

  if(antipri === 'Desligado'){
  
  let dadasdsradasda = new Discord.MessageEmbed()
 
  
    .setDescription(` Sistema de anti privatização de ban **habilitado.**`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  message.channel.send({embeds:[dadasdsradasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
     
  antipri = 'Ligado'
  let embed32b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de ban")    
  .setColor('ffffff')
  .setDescription(`Configure nosso sistema de ban abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Sistema de membro banido : ${msglogedit}\n<a:3_:1132093954070945934> Sistema de membro desbanido : ${msglogdel}\n<a:4_:1132094036753260544> Sistema anti privatização de ban : ${antipri}\n<a:5_:1132094083733672017> Bloquear banimentos por outros bots: ${bloqbot}\n<a:6_:1132094166046888006> Salvar configuração`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()
     
   
 
     
 r.message.edit({embeds:[embed32b1]})


    

   
  }else if(antipri === 'Ligado'){
  let dadasdsadasda = new Discord.MessageEmbed()
 
  
    .setDescription(`Sistema de anti privatização de ban **desabilitado.**`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  message.channel.send({embeds:[dadasdsadasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
  antipri = 'Desligado'
  let embed2b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de ban")    
  .setColor('ffffff')
  .setDescription(`Configure nosso sistema de ban abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Sistema de membro banido : ${msglogedit}\n<a:3_:1132093954070945934> Sistema de membro desbanido : ${msglogdel}\n<a:4_:1132094036753260544> Sistema anti privatização de ban : ${antipri}\n<a:5_:1132094083733672017> Bloquear banimentos por outros bots: ${bloqbot}\n<a:6_:1132094166046888006> Salvar configuração`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()
     
  
     
 r.message.edit({embeds:[embed2b1]})
  }
    break;
    case 'butao5':
      r.deferUpdate()

      const limite1 = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(` Para usar esta opção você precisa ser **posse** do servidor!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    if (await message.guild.fetchOwner().then((data)=>data.id) !== message.member.id) return message.channel.send({embeds:[limite1]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
    
if(antipri === 'Desligado'){
  let dadsad = new Discord.MessageEmbed()
  .setDescription(` Hey, ${message.member} Você precisa habilitar a opção de anti privatização de ban para utilizar essa opção`)
  .setColor('ffffff')
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  message.channel.send({embeds:[dadsad]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
}
  if(bloqbot === 'Desligado'){
  
  let dadasdsradasda = new Discord.MessageEmbed()
 
  
    .setDescription(` Sistema de bloquear banimentos por outros bot **habilitado.**`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  message.channel.send({embeds:[dadasdsradasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
     
  bloqbot = 'Ligado'
  let embed32b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de ban")    
  .setColor('ffffff')
  .setDescription(`Configure nosso sistema de ban abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Sistema de membro banido : ${msglogedit}\n<a:3_:1132093954070945934> Sistema de membro desbanido : ${msglogdel}\n<a:4_:1132094036753260544> Sistema anti privatização de ban : ${antipri}\n<a:5_:1132094083733672017> Bloquear banimentos por outros bots: ${bloqbot}\n<a:6_:1132094166046888006> Salvar configuração`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()
     
   
 
     
 r.message.edit({embeds:[embed32b1]})


    

   
  }else if(bloqbot === 'Ligado'){
  let dadasdsadasda = new Discord.MessageEmbed()
 
  
    .setDescription(`Sistema de bloquear banimentos por outros bot **desabilitado.**`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  message.channel.send({embeds:[dadasdsadasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
  bloqbot = 'Desligado'
  let embed2b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de ban")    
  .setColor('ffffff')
  .setDescription(`Configure nosso sistema de ban abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Sistema de membro banido : ${msglogedit}\n<a:3_:1132093954070945934> Sistema de membro desbanido : ${msglogdel}\n<a:4_:1132094036753260544> Sistema anti privatização de ban : ${antipri}\n<a:5_:1132094083733672017> Bloquear banimentos por outros bots: ${bloqbot}\n<a:6_:1132094166046888006> Salvar configuração`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()
     
  
     
 r.message.edit({embeds:[embed2b1]})
  }
      break;
    case 'butao6':
  r.deferUpdate()
  if(msglog !== l1){
    if(msglog == '\`Nenhum canal setado\`'){
  db.delete(`logban_${message.guild.id}`)
    }else{
  db.set(`logban_${message.guild.id}`,msglog.id)
  
    }
  }
    if(msglogdel == 'Desligado'){
  db.delete(`banu_${message.guild.id}`)
    }else{
  db.set(`banu_${message.guild.id}`,'on')
  
    }
    if(msglogedit == 'Desligado'){
  db.delete(`unbanu_${message.guild.id}`)
    }else{
  db.set(`unbanu_${message.guild.id}`,'on')
  
    }
    if(antipri == 'Desligado'){
  db.delete(`antibanpriv_${message.guild.id}`)
    }else{
  db.set(`antibanpriv_${message.guild.id}`,'on')
  
    }

    if(bloqbot == 'Desligado'){
      db.delete(`bloqbot_${message.guild.id}`)
        }else{
      db.set(`bloqbot_${message.guild.id}`,'on')
      
        }
    let ds3 = new Discord.MessageEmbed()
  
  
    .setDescription(` Configuração salva com sucesso!`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  message.channel.send({embeds:[ds3]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
r.message.delete()
  break;

    }
   })
 })
    

  }
    }
