const Discord = require("discord.js")
const db = require("quick.db")
const ms = require('ms')
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "voicesystem",
  coolwdon:8000,
  alternativas: ["voicesystem"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;


    
    const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Para executar este comando precisa a permissão \`gerenciar canais\`,\`gerenciar webhooks\` e \`ver registro de auditoria\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  if (!message.member.permissions.has("MANAGE_CHANNELS")||!message.member.permissions.has("VIEW_AUDIT_LOG")||!message.member.permissions.has("MANAGE_WEBHOOKS")) return  message.reply({embeds:[limite]})
   
  const ad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Não é possível executar este o comando, preciso da permissão de  \`gerenciar canais\`,\`gerenciar webhooks\` e \`ver registro de auditoria\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

  if(!message.guild.me.permissions.has("MANAGE_CHANNELS")||!message.guild.me.permissions.has("VIEW_AUDIT_LOG")||!message.guild.me.permissions.has("MANAGE_WEBHOOKS")) return  message.reply({embeds:[ad]})
    let l1 = db.get(`logmembercall_${message.guild.id}`)
    if(l1 == null) l1 = '\`Nenhum canal setado\`'
    else l1 = `<#${l1}>`

 let vozsystem = db.get(`voicesystem_${message.guild.id}`)
 if(vozsystem === null) vozsystem = 'Desligado'
 else vozsystem = 'Ligado'
 let calllog = db.get(`logmembercall_${message.guild.id}`)
 if(calllog == null) calllog = '\`Nenhum canal setado\`'
 else calllog = `<#${calllog}>`
    let memberjoin = db.get(`membercalljoin_${message.guild.id}`)
    if(memberjoin ===null) memberjoin = 'Desligado'
    else memberjoin = 'Ligado'
    let memberleft = db.get(`membercallleft_${message.guild.id}`)
    if(memberleft ===null) memberleft = 'Desligado'
    else memberleft = 'Ligado'
   
    let tempcalllog = db.get(`tempcalllog_${message.guild.id}`)
    if(tempcalllog ===null) tempcalllog = 'Desligado'
    else tempcalllog = 'Ligado'
    let rolecalll = db.get(`rolecalll_${message.guild.id}`)
    if(rolecalll ===null) rolecalll = 'Desligado'
    else rolecalll = 'Ligado'
    const embed = new Discord.MessageEmbed ()
    
    .setTitle("Sistema de voz")    
    .setColor('ffffff')
    .setDescription(`Configure nosso sistema de voz abaixo!\n\n<a:1_:1132093814278983800> Sistema de voz : ${vozsystem}\n<a:2_:1132093884705558628> Canal de log : ${calllog}\n<a:3_:1132093954070945934> Sistema de membro entrou em call : ${memberjoin}\n<a:4_:1132094036753260544> Sistema de membro saiu da call : ${memberleft}\n<a:5_:1132094083733672017> Sistema de log de tempcall : ${tempcalllog}\n<a:6_:1132094166046888006> Sistema de cargo de contagem em call : ${rolecalll}\n<a:7_:1132094236058198088> Salvar configuração\n\n__Obs : __ *Caso queira adicionar canais onde não vão contar tempo em call utilize* **" ${prefix}tc "** \n*Caso queira adicionar cargos que contam tempo em call utilize* **" ${prefix}tp "** `) 
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
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
   let butao7 =  new Discord.MessageButton()
   .setEmoji('<a:7_:1132094236058198088>')
   .setStyle("SECONDARY")
   .setCustomId("butao7")

 
 
   const row = new Discord.MessageActionRow()
   row.addComponents([butao1,butao2,butao3,butao4,butao5])
 
   const row1 = new Discord.MessageActionRow()
   row1.addComponents([butao6,butao7])
 

 
message.reply({embeds:[embed],components:[row,row1]}).then(msg => {
 setTimeout(()=>{msg.delete()},180000)

  const inf = (interaction) => interaction.user.id == message.member.id
   
   const collector = msg.createMessageComponentCollector({ filter:inf});
   collector.on('collect', async(r,u) =>{
switch (r.customId) {
  case 'butao1':
r.deferUpdate()
if(vozsystem === 'Desligado'){
 
  let dadasdsadasda = new Discord.MessageEmbed()
  
  
.setDescription(`Sistema de voz **habilitado.**`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
  message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
 
  vozsystem = 'Ligado'
  let embed2b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de voz")    
  .setColor('ffffff')
  .setDescription(`Configure nosso sistema de voz abaixo!\n\n<a:1_:1132093814278983800> Sistema de voz : ${vozsystem}\n<a:2_:1132093884705558628> Canal de log : ${calllog}\n<a:3_:1132093954070945934> Sistema de membro entrou em call : ${memberjoin}\n<a:4_:1132094036753260544> Sistema de membro saiu da call : ${memberleft}\n<a:5_:1132094083733672017> Sistema de log de tempcall : ${tempcalllog}\n<a:6_:1132094166046888006> Sistema de cargo de contagem em call : ${rolecalll}\n<a:7_:1132094236058198088> Salvar configuração\n\n__Obs : __ *Caso queira adicionar canais onde não vão contar tempo em call utilize* **" ${prefix}tc "** \n*Caso queira adicionar cargos que contam tempo em call utilize* **" ${prefix}tp "** `) 
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();  
 
  r.message.edit({embeds:[embed2b1]})
}else if(vozsystem === 'Ligado'){

  let dadasdsadasda = new Discord.MessageEmbed()
  
  
.setDescription(`Sistema de voz **desabilitado.**`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
  message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
  vozsystem = 'Desligado'
  let embed2b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de voz")    
  .setColor('ffffff')
  .setDescription(`Configure nosso sistema de voz abaixo!\n\n<a:1_:1132093814278983800> Sistema de voz : ${vozsystem}\n<a:2_:1132093884705558628> Canal de log : ${calllog}\n<a:3_:1132093954070945934> Sistema de membro entrou em call : ${memberjoin}\n<a:4_:1132094036753260544> Sistema de membro saiu da call : ${memberleft}\n<a:5_:1132094083733672017> Sistema de log de tempcall : ${tempcalllog}\n<a:6_:1132094166046888006> Sistema de cargo de contagem em call : ${rolecalll}\n<a:7_:1132094236058198088> Salvar configuração\n\n__Obs : __ *Caso queira adicionar canais onde não vão contar tempo em call utilize* **" ${prefix}tc "** \n*Caso queira adicionar cargos que contam tempo em call utilize* **" ${prefix}tp "** `) 
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
 
  r.message.edit({embeds:[embed2b1]})

}

break;
case 'butao2':
  r.deferUpdate()
  if(vozsystem=== 'Desligado'){
    let ccategori = new Discord.MessageEmbed()
    .setDescription(`Hey, ${message.member} Você precisa abilitar o sistema de voz `)
    .setColor('ffffff')
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
     
     
    
    return  message.channel.send({embeds:[ccategori]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))}
     
  let ccategori = new Discord.MessageEmbed()
  .setDescription(`Hey, ${message.member} ! Mencione um canal válido.`)
  .setColor('ffffff')
   
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
   
   
  
let sg = await message.channel.send({embeds:[ccategori]})
    setTimeout(()=>{sg.delete()},30000)
    const filter9 = res => {
  return res.author.id === message.author.id && res.content.length;
    };
    const categoryCollector = await message.channel.awaitMessages({

      filter:filter9,
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
    if(category.type !== 'GUILD_TEXT') return categoryCollector.first().reply({embeds:[j123]}).reply({embeds:[cnh123]}).then((msg)=>{
      sg.delete() 
     setTimeout(()=>{
      categoryCollector.first().delete()
       msg.delete()},5000)}) 
    
    
    calllog = category
    let embed2b1 = new Discord.MessageEmbed()
    .setTitle("Sistema de voz")    
    .setColor('ffffff')
    .setDescription(`Configure nosso sistema de voz abaixo!\n\n<a:1_:1132093814278983800> Sistema de voz : ${vozsystem}\n<a:2_:1132093884705558628> Canal de log : ${calllog}\n<a:3_:1132093954070945934> Sistema de membro entrou em call : ${memberjoin}\n<a:4_:1132094036753260544> Sistema de membro saiu da call : ${memberleft}\n<a:5_:1132094083733672017> Sistema de log de tempcall : ${tempcalllog}\n<a:6_:1132094166046888006> Sistema de cargo de contagem em call : ${rolecalll}\n<a:7_:1132094236058198088> Salvar configuração\n\n__Obs : __ *Caso queira adicionar canais onde não vão contar tempo em call utilize* **" ${prefix}tc "** \n*Caso queira adicionar cargos que contam tempo em call utilize* **" ${prefix}tp "** `) 
     .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();   
   
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
  case 'butao3':
  r.deferUpdate()

   if(memberjoin === 'Desligado'){
   let dadsa3d = new Discord.MessageEmbed()
   .setDescription(` Hey, ${message.member} Você precisa setar o canal de voz log `)
   .setColor('ffffff')
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
 if(calllog == '\`Nenhum canal setado\`') return message.channel.send({embeds:[dadsa3d]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
 
   let dadasdsadasda = new Discord.MessageEmbed()
   
   
 .setDescription(`Sistema de log de membro entrou em call **habilitado.**`)
 .setColor('ffffff')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
   message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
  
   memberjoin = 'Ligado'
   let embed2b1 = new Discord.MessageEmbed()
   .setTitle("Sistema de voz")    
   .setColor('ffffff')
   .setDescription(` Configure nosso sistema de voz abaixo!\n\n<a:1_:1132093814278983800> Sistema de voz : ${vozsystem}\n<a:2_:1132093884705558628> Canal de log : ${calllog}\n<a:3_:1132093954070945934> Sistema de membro entrou em call : ${memberjoin}\n<a:4_:1132094036753260544> Sistema de membro saiu da call : ${memberleft}\n<a:5_:1132094083733672017> Sistema de log de tempcall : ${tempcalllog}\n<a:6_:1132094166046888006> Sistema de cargo de contagem em call : ${rolecalll}\n<a:7_:1132094236058198088> Salvar configuração\n\n__Obs : __ *Caso queira adicionar canais onde não vão contar tempo em call utilize* **" ${prefix}tc "** \n*Caso queira adicionar cargos que contam tempo em call utilize* **" ${prefix}tp "** `) 
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();  
   r.message.edit({embeds:[embed2b1]})
    }else if(memberjoin === 'Ligado'){
    
   let dadasdsadasda = new Discord.MessageEmbed()
   
   
 .setDescription(`Sistema de log de membro entrou em call **desabilitado.**`)
 .setColor('ffffff')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
   message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
   memberjoin = 'Desligado'
   let embed2b1 = new Discord.MessageEmbed()
   .setTitle("Sistema de voz")    
   
   .setColor('ffffff')
   .setDescription(`Configure nosso sistema de voz abaixo!\n\n<a:1_:1132093814278983800> Sistema de voz : ${vozsystem}\n<a:2_:1132093884705558628> Canal de log : ${calllog}\n<a:3_:1132093954070945934> Sistema de membro entrou em call : ${memberjoin}\n<a:4_:1132094036753260544> Sistema de membro saiu da call : ${memberleft}\n<a:5_:1132094083733672017> Sistema de log de tempcall : ${tempcalllog}\n<a:6_:1132094166046888006> Sistema de cargo de contagem em call : ${rolecalll}\n<a:7_:1132094236058198088> Salvar configuração\n\n__Obs : __ *Caso queira adicionar canais onde não vão contar tempo em call utilize* **" ${prefix}tc "** \n*Caso queira adicionar cargos que contam tempo em call utilize* **" ${prefix}tp "** `) 
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();  
  
   r.message.edit({embeds:[embed2b1]})
    }
  break;
  case 'butao4':
    r.deferUpdate()

    if(memberleft === 'Desligado'){
      let dadsa3d = new Discord.MessageEmbed()
      .setDescription(` Hey, ${message.member} Você precisa setar o canal de voz log `)
      .setColor('ffffff')
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
    if(calllog == '\`Nenhum canal setado\`') return message.channel.send({embeds:[dadsa3d]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
    
      let dadasdsadasda = new Discord.MessageEmbed()
      
      
        .setDescription(`Sistema de log de membro entrou em call **habilitado.**`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
      message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
     
      memberleft = 'Ligado'
      let embed2b1 = new Discord.MessageEmbed()
      .setTitle("Sistema de voz")    
      .setColor('ffffff')
      .setDescription(`Configure nosso sistema de voz abaixo!\n\n<a:1_:1132093814278983800> Sistema de voz : ${vozsystem}\n<a:2_:1132093884705558628> Canal de log : ${calllog}\n<a:3_:1132093954070945934> Sistema de membro entrou em call : ${memberjoin}\n<a:4_:1132094036753260544> Sistema de membro saiu da call : ${memberleft}\n<a:5_:1132094083733672017> Sistema de log de tempcall : ${tempcalllog}\n<a:6_:1132094166046888006> Sistema de cargo de contagem em call : ${rolecalll}\n<a:7_:1132094236058198088> Salvar configuração\n\n__Obs : __ *Caso queira adicionar canais onde não vão contar tempo em call utilize* **" ${prefix}tc "** \n*Caso queira adicionar cargos que contam tempo em call utilize* **" ${prefix}tp "** `) 
          .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();  
     r.message.edit({embeds:[embed2b1]})
      }else if(memberleft === 'Ligado'){
      
      let dadasdsadasda = new Discord.MessageEmbed()
      
      
        .setDescription(`Sistema de log de membro entrou em call **desabilitado.**`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
      message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
      memberleft = 'Desligado'
      let embed2b1 = new Discord.MessageEmbed()
      .setTitle("Sistema de voz")    
      
      .setColor('ffffff')
      .setDescription(`Configure nosso sistema de voz abaixo!\n\n<a:1_:1132093814278983800> Sistema de voz : ${vozsystem}\n<a:2_:1132093884705558628> Canal de log : ${calllog}\n<a:3_:1132093954070945934> Sistema de membro entrou em call : ${memberjoin}\n<a:4_:1132094036753260544> Sistema de membro saiu da call : ${memberleft}\n<a:5_:1132094083733672017> Sistema de log de tempcall : ${tempcalllog}\n<a:6_:1132094166046888006> Sistema de cargo de contagem em call : ${rolecalll}\n<a:7_:1132094236058198088> Salvar configuração\n\n__Obs : __ *Caso queira adicionar canais onde não vão contar tempo em call utilize* **" ${prefix}tc "** \n*Caso queira adicionar cargos que contam tempo em call utilize* **" ${prefix}tp "** `) 
         .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();  
        
     r.message.edit({embeds:[embed2b1]})
      }
    break;  
    case 'butao5':
      r.deferUpdate()



      if(tempcalllog === 'Desligado'){
        let dadsa3d = new Discord.MessageEmbed()
        .setDescription(`Hey, ${message.member} Você precisa setar o canal de voz log `)
        .setColor('ffffff')
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
      if(calllog == '\`Nenhum canal setado\`') return message.channel.send({embeds:[dadsa3d]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
      
        let dadasdsadasda = new Discord.MessageEmbed()
        
        
          .setDescription(`Sistema de log de tempcall log **habilitado.**`)
          .setColor('ffffff')
          
          .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
          .setTimestamp();
        message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
       
        tempcalllog = 'Ligado'
        let embed2b1 = new Discord.MessageEmbed()
        .setTitle("Sistema de voz")    
        .setColor('ffffff')
        .setDescription(`Configure nosso sistema de voz abaixo!\n\n<a:1_:1132093814278983800> Sistema de voz : ${vozsystem}\n<a:2_:1132093884705558628> Canal de log : ${calllog}\n<a:3_:1132093954070945934> Sistema de membro entrou em call : ${memberjoin}\n<a:4_:1132094036753260544> Sistema de membro saiu da call : ${memberleft}\n<a:5_:1132094083733672017> Sistema de log de tempcall : ${tempcalllog}\n<a:6_:1132094166046888006> Sistema de cargo de contagem em call : ${rolecalll}\n<a:7_:1132094236058198088> Salvar configuração\n\n__Obs : __ *Caso queira adicionar canais onde não vão contar tempo em call utilize* **" ${prefix}tc "** \n*Caso queira adicionar cargos que contam tempo em call utilize* **" ${prefix}tp "** `) 
          .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();  
       r.message.edit({embeds:[embed2b1]})
        }else if(tempcalllog === 'Ligado'){
        
        let dadasdsadasda = new Discord.MessageEmbed()
        
        
          .setDescription(` Sistema de log de tempcall log **desabilitado.**`)
          .setColor('ffffff')
          
          .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
          .setTimestamp();
        message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
        tempcalllog = 'Desligado'
        let embed2b1 = new Discord.MessageEmbed()
        .setTitle("Sistema de voz")    
        
        .setColor('ffffff')
        .setDescription(`Configure nosso sistema de voz abaixo!\n\n<a:1_:1132093814278983800> Sistema de voz : ${vozsystem}\n<a:2_:1132093884705558628> Canal de log : ${calllog}\n<a:3_:1132093954070945934> Sistema de membro entrou em call : ${memberjoin}\n<a:4_:1132094036753260544> Sistema de membro saiu da call : ${memberleft}\n<a:5_:1132094083733672017> Sistema de log de tempcall : ${tempcalllog}\n<a:6_:1132094166046888006> Sistema de cargo de contagem em call : ${rolecalll}\n<a:7_:1132094236058198088> Salvar configuração\n\n__Obs : __ *Caso queira adicionar canais onde não vão contar tempo em call utilize* **" ${prefix}tc "** \n*Caso queira adicionar cargos que contam tempo em call utilize* **" ${prefix}tp "** `) 
         .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();  
          
       r.message.edit({embeds:[embed2b1]})
        }



      break;  
      case 'butao6':
        r.deferUpdate()




        if(rolecalll === 'Desligado'){
          let dadsa3d = new Discord.MessageEmbed()
          .setDescription(` Hey, ${message.member} Você precisa setar o canal de voz log `)
          .setColor('ffffff')
          .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
          .setTimestamp();
        if(calllog == '\`Nenhum canal setado\`') return message.channel.send({embeds:[dadsa3d]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
        
          let dadasdsadasda = new Discord.MessageEmbed()
          
          
            .setDescription(`Sistema de cargo de contagem em call **habilitado.**`)
            .setColor('ffffff')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
          message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
         
          rolecalll = 'Ligado'
          let embed2b1 = new Discord.MessageEmbed()
          .setTitle("Sistema de voz")    
          .setColor('ffffff')
          .setDescription(`Configure nosso sistema de voz abaixo!\n\n<a:1_:1132093814278983800> Sistema de voz : ${vozsystem}\n<a:2_:1132093884705558628> Canal de log : ${calllog}\n<a:3_:1132093954070945934> Sistema de membro entrou em call : ${memberjoin}\n<a:4_:1132094036753260544> Sistema de membro saiu da call : ${memberleft}\n<a:5_:1132094083733672017> Sistema de log de tempcall : ${tempcalllog}\n<a:6_:1132094166046888006> Sistema de cargo de contagem em call : ${rolecalll}\n<a:7_:1132094236058198088> Salvar configuração\n\n__Obs : __ *Caso queira adicionar canais onde não vão contar tempo em call utilize* **" ${prefix}tc "** \n*Caso queira adicionar cargos que contam tempo em call utilize* **" ${prefix}tp "** `) 
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
          .setTimestamp();  
         r.message.edit({embeds:[embed2b1]})
          }else if(rolecalll === 'Ligado'){
          
          let dadasdsadasda = new Discord.MessageEmbed()
          
          
            .setDescription(`Sistema de cargo de contagem em call **desabilitado.**`)
            .setColor('ffffff')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
          message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
          rolecalll = 'Desligado'
          let embed2b1 = new Discord.MessageEmbed()
          .setTitle("Sistema de voz")    
          
          .setColor('ffffff')
          .setDescription(`Configure nosso sistema de voz abaixo!\n\n<a:1_:1132093814278983800> Sistema de voz : ${vozsystem}\n<a:2_:1132093884705558628> Canal de log : ${calllog}\n<a:3_:1132093954070945934> Sistema de membro entrou em call : ${memberjoin}\n<a:4_:1132094036753260544> Sistema de membro saiu da call : ${memberleft}\n<a:5_:1132094083733672017> Sistema de log de tempcall : ${tempcalllog}\n<a:6_:1132094166046888006> Sistema de cargo de contagem em call : ${rolecalll}\n<a:7_:1132094236058198088> Salvar configuração\n\n__Obs : __ *Caso queira adicionar canais onde não vão contar tempo em call utilize* **" ${prefix}tc "** \n*Caso queira adicionar cargos que contam tempo em call utilize* **" ${prefix}tp "** `) 
           .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
          .setTimestamp();  
            
         r.message.edit({embeds:[embed2b1]})
          }
  
  


        break;  
    case 'butao7':
      r.deferUpdate()

      if(calllog !== l1){
        if(calllog == '\`Nenhum canal setado\`'){
          db.delete(`logmembercall_${message.guild.id}`)
        }else{
          db.set(`logmembercall_${message.guild.id}`,calllog.id)
          
        }
          }
        if(memberjoin == 'Desligado'){
          db.delete(`membercalljoin_${message.guild.id}`)
        }else{
          db.set(`membercalljoin_${message.guild.id}`,'on')
          
        }
        if(memberleft == 'Desligado'){
          db.delete(`membercallleft_${message.guild.id}`)
        }else{
          db.set(`membercallleft_${message.guild.id}`,'on')
          
        }
        if(vozsystem == 'Desligado'){
          db.delete(`voicesystem_${message.guild.id}`)
        }else{
          db.set(`voicesystem_${message.guild.id}`,'on')
          
        }

        if(tempcalllog == 'Desligado'){
          db.delete(`tempcalllog_${message.guild.id}`)
        }else{
          db.set(`tempcalllog_${message.guild.id}`,'on')
          
        }
         if(rolecalll == 'Desligado'){
          db.delete(`rolecalll_${message.guild.id}`)
        }else{
          db.set(`rolecalll_${message.guild.id}`,'on')
          
        }
        let ds3 = new Discord.MessageEmbed()
          
          
        .setDescription(`Configuração salva com sucesso!`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
          message.channel.send({embeds:[ds3]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
       r.message.delete()
          break;
       
}
   })
  })
   

    

  }
    }
