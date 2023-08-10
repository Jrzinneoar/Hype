const Discord = require("discord.js")
const db = require("quick.db")
const ms = require('ms')
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "antifake",
  coolwdon:6000,
  alternativas: ["antifake"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;


    
  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(` Para usar este comando você precisa ser **posse** do servidor!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  if (await message.guild.fetchOwner().then((data)=>data.id) !== message.member.id) return  message.reply({embeds:[limite]})
  
  const ad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Não é possível executar este o comando, preciso da permissão de \`expulsar membros\` e \`ver registro de auditoria\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  if(!message.guild.me.permissions.has("BAN_MEMBERS")||!message.guild.me.permissions.has("VIEW_AUDIT_LOG")) return  message.reply({embeds:[ad]})

let antikfake = db.get(`antifakes_${message.guild.id}`)
if(antikfake == null) antikfake = 'Desligado'
else antikfake = 'Ligado'

let antikfakedias = db.get(`antifakesdias_${message.guild.id}`)
  
    const embed = new Discord.MessageEmbed ()
    
    .setTitle("Sistema de anti fake")    
    .setColor('ffffff')
    .setDescription(` Configure nosso sistema de anti fake abaixo!\n\n<a:1_:1132093814278983800> Dias : ${!antikfakedias ? '\`Não configurado\`':`${antikfakedias} dias`}\n<a:2_:1132093884705558628>  Sistema anti fake : ${antikfake}\n<a:3_:1132093954070945934>  Salvar configuração`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp()
 
   
    let butao1 = new Discord.MessageButton()
    .setEmoji('<a:1_:1132093814278983800>')
  .setStyle("SECONDARY")
   .setCustomId("butao1")
  
    let butao2 =  new Discord.MessageButton()
    .setEmoji('<a:2_:1132093884705558628> ')
    .setStyle("SECONDARY")
    .setCustomId("butao2")
  let butao3 =  new Discord.MessageButton()
    .setEmoji('<a:3_:1132093954070945934> ')
    .setStyle("SECONDARY")
    .setCustomId("butao3")

  
    const row = new Discord.MessageActionRow()
    row.addComponents([butao1,butao2,butao3])
  
 message.reply({embeds:[embed],components:[row]}).then(msg => {
  setTimeout(()=>{msg.delete()},180000)

   const inf = (interaction) => interaction.user.id == message.member.id
    
    const collector = msg.createMessageComponentCollector({ filter:inf});
    collector.on('collect', async(r,u) =>{
 switch (r.customId) {
   case 'butao1':
    r.deferUpdate()

    let vv123 = new Discord.MessageEmbed()
    .setDescription(`Hey, ${message.member} ! Insira uma quantidade de dias valido entre 2 a 180 dias.`)
    .setColor('ffffff')
      
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
      
      
    
   let zupirar = await message.channel.send({embeds:[vv123]})
   setTimeout(()=>{zupirar.delete()},30000)
 
    const bafylter = res => {
    return res.author.id === message.author.id && res.content.length;
    };
    const daysCollector = await message.channel.awaitMessages({
      filter:bafylter,
    max: 1,
    time: 30000
    });
    
    
        
    let nviptorolea =parseInt(daysCollector.first().content.toUpperCase())

 
    if (isNaN(nviptorolea) ) { 
    let nvision = new Discord.MessageEmbed()
    .setDescription(` Tente novamente \nEsta quantia de dias e invalida! `)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    
      
    
    return daysCollector.first().reply({embeds:[nvision]}).then((msg)=>{
      zupirar.delete() 
     setTimeout(()=>{
      daysCollector.first().delete()
      msg.delete()},5000)})
     }
     if (nviptorolea<2 || nviptorolea>180) { 
      let nvision = new Discord.MessageEmbed()
      .setDescription(`Tente novamente \nA quantia de dias inserida tem quer ser entre 2 a 180! `)
      .setColor('ffffff')
      
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
      
      
        
      
      return daysCollector.first().reply({embeds:[nvision]}).then((msg)=>{
        zupirar.delete() 
       setTimeout(()=>{
        daysCollector.first().delete()
        msg.delete()},5000)})
       }
       

       antikfakedias = nviptorolea
   const eqweqweqe312 = new Discord.MessageEmbed ()

   .setTitle("Sistema de anti fake")    
   .setColor('ffffff')
   .setDescription(`Configure nosso sistema de anti fake abaixo!\n\n<a:1_:1132093814278983800> Dias : ${!antikfakedias ? '\`Não configurado\`':`${antikfakedias} dias`}\n<a:2_:1132093884705558628>  Sistema anti fake : ${antikfake}\n<a:3_:1132093954070945934>  Salvar configuração`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp()

   r.message.edit({embeds:[eqweqweqe312]})

   let bsvds2312 = new Discord.MessageEmbed()
    

   .setDescription(`Dias setados com sucesso!`)
   .setColor('ffffff')
   
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   
   
   daysCollector.first().reply({embeds:[bsvds2312]}).then((msg)=>{
    zupirar.delete() 
    setTimeout(()=>{
      daysCollector.first().delete()
     msg.delete()},5000)})



break;
case'butao2':
r.deferUpdate()
if(antikfake === 'Desligado'){
    if(!antikfakedias){
    let dadsad = new Discord.MessageEmbed()
    .setDescription(`Hey, ${message.member} Você precisa setar uma quantidade de dias `)
    .setColor('ffffff')
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
return message.channel.send({embeds:[dadsad]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})}
  let dadasdsadasda = new Discord.MessageEmbed()
  
  
    .setDescription(`<Sistema de anti fake **habilitado.**`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
 message.channel.send({embeds:[dadasdsadasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
 
 antikfake = 'Ligado'
  let embed2b1 = new Discord.MessageEmbed()
 

  .setTitle("Sistema de anti fake")    
   .setColor('ffffff')
   .setDescription(`Configure nosso sistema de anti fake abaixo!\n\n<a:1_:1132093814278983800> Dias : ${!antikfakedias ? '\`Não configurado\`':`${antikfakedias} dias`}\n<a:2_:1132093884705558628>  Sistema anti fake : ${antikfake}\n<a:3_:1132093954070945934>  Salvar configuração`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp()

     
 
     
  r.message.edit({embeds:[embed2b1]})
  }else if(antikfake === 'Ligado'){
  
  let dadasdsadasda = new Discord.MessageEmbed()
  
  
    .setDescription(`Sistema de anti fake **desabilitado.**`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  message.channel.send({embeds:[dadasdsadasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
  antikfake = 'Desligado'
  let embed2b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de anti fake")    
  .setColor('ffffff')
  .setDescription(`Configure nosso sistema de anti fake abaixo!\n\n<a:1_:1132093814278983800> Dias : ${!antikfakedias ? '\`Não configurado\`':`${antikfakedias} dias`}\n<a:2_:1132093884705558628>  Sistema anti fake : ${antikfake}\n<a:3_:1132093954070945934>  Salvar configuração`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()

  r.message.edit({embeds:[embed2b1]})
  }
break;
case'butao3':
if(antikfake == 'Desligado'){
    db.delete(`antifakes_${message.guild.id}`)
      }else{
    db.set(`antifakes_${message.guild.id}`,'on')
    
      }
      if(antikfakedias){
          db.set(`antifakesdias_${message.guild.id}`,antikfakedias)
      }
      let ds3 = new Discord.MessageEmbed()
  
  
      .setDescription(`Configuração salva com sucesso!`)
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