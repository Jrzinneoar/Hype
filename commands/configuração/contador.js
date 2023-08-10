const Discord = require("discord.js")
const db = require("quick.db")
const { default_prefix } = require("../../config.json");
const ms = require('ms')
const numberreaplce = require('custom-translate')
const Timeout = require('smart-timeout')
module.exports = {
  nome: "contador",
  coolwdon:9000,
  alternativas: ["contador"],
  run: async   (client, message, args) => {
    

    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
  

    
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Para executar este comando precisa a permissão \`gerenciar canais\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return  message.reply({embeds:[limite]})
 
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Não é possível executar este o comando, preciso da permissão de \`gerenciar canais\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return  message.reply({embeds:[ad]})


  let contadorstatus = db.get(`contadorstatus_${message.guild.id}`)
if(contadorstatus == null) contadorstatus = 'Desligado'
else contadorstatus = 'Ligado'


let l1 = db.get(`countchannel_${message.guild.id}`)
if(l1 == null) l1 = '\`Nenhum canal setado\`'
else l1 = `<#${l1}>`

let contadorcha = db.get(`countchannel_${message.guild.id}`)
if(contadorcha == null) contadorcha = '\`Nenhum canal setado\`'
else contadorcha = `<#${contadorcha}>` 
    
let msgdocount = db.get(`textcount_${message.guild.id}`)
if(msgdocount == null) msgdocount = `\`Padrão\``  

   

    const embed = new Discord.MessageEmbed ()
    
    .setTitle("Sistema de contador")    
    .setColor('ffffff')
    .setDescription(`Configure nosso sistema de contador abaixo!\n\n<a:1_:1132093814278983800> Sistema de contador : ${contadorstatus}\n<a:2_:1132093884705558628>  Canal do contador : ${contadorcha}\n<a:3_:1132093954070945934>  Mensagem do contador : **" ${msgdocount} "**\n<a:4_:1132094036753260544>  Salvar configuração`)
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
    let butao4 =  new Discord.MessageButton()
    .setEmoji('<a:4_:1132094036753260544> ')
    .setStyle("SECONDARY")
    .setCustomId("butao4")

  
    const row = new Discord.MessageActionRow()
    row.addComponents([butao1,butao2,butao3,butao4])
  
 message.reply({embeds:[embed],components:[row]}).then(msg => {
  setTimeout(()=>{msg.delete()},180000)


   const inf = (interaction) => interaction.user.id == message.member.id
    
    const collector = msg.createMessageComponentCollector({ filter:inf});
    collector.on('collect', async(r,u) =>{
 switch (r.customId) {
   case 'butao1':
    r.deferUpdate()
    if(contadorstatus === 'Desligado'){
  
  let dadasdsadasda = new Discord.MessageEmbed()
  
  
    .setDescription(` Sistema de contador **habilitado.**`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
 
  contadorstatus = 'Ligado'
  let embed2b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de contador")    
  .setColor('ffffff')
  .setDescription(`Configure nosso sistema de contador abaixo!\n\n<a:1_:1132093814278983800> Sistema de contador : ${contadorstatus}\n<a:2_:1132093884705558628>  Canal do contador : ${contadorcha}\n<a:3_:1132093954070945934>  Mensagem do contador : **" ${msgdocount} "**\n<a:4_:1132094036753260544>  Salvar configuração`)
   
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()
     

     
  r.message.edit({embeds:[embed2b1]})
  }else if(contadorstatus === 'Ligado'){
  
  let dadasdsadasda = new Discord.MessageEmbed()
  
  
    .setDescription(`Sistema de contador **desabilitado.**`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
  contadorstatus = 'Desligado'
  let embed2b1 = new Discord.MessageEmbed()
  .setTitle("Sistema de contador")    
  .setColor('ffffff')
  .setDescription(` Configure nosso sistema de contador abaixo!\n\n<a:1_:1132093814278983800> Sistema de contador : ${contadorstatus}\n<a:2_:1132093884705558628>  Canal do contador : ${contadorcha}\n<a:3_:1132093954070945934>  Mensagem do contador : **" ${msgdocount} "**\n<a:4_:1132094036753260544>  Salvar configuração`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()
    
  r.message.edit({embeds:[embed2b1]})
  }
  break;
  case 'butao2':
    r.deferUpdate()
    if(contadorstatus=== 'Desligado'){
 let ccategori = new Discord.MessageEmbed()
 .setDescription(` Hey, ${message.member} Você precisa abilitar o sistema de contador `)
 .setColor('ffffff')
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
  
  
 
 return  message.channel.send({embeds:[ccategori]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
}


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
.setDescription(` Tente novamente \nEste canal é inválido `)
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


contadorcha = category
let embed2b1 = new Discord.MessageEmbed()
.setTitle("Sistema de contador")    
.setColor('ffffff')
.setDescription(` Configure nosso sistema de contador abaixo!\n\n<a:1_:1132093814278983800> Sistema de contador : ${contadorstatus}\n<a:2_:1132093884705558628>  Canal do contador : ${contadorcha}\n<a:3_:1132093954070945934>  Mensagem do contador : **" ${msgdocount} "**\n<a:4_:1132094036753260544>  Salvar configuração`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()
  

r.message.edit({embeds:[embed2b1]})

let dadasdsadasda = new Discord.MessageEmbed()


.setDescription(`Canal setado com sucesso!`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


categoryCollector.first().reply({embeds:[dadasdsadasda]})  .then((msg)=>{
  sg.delete() 
 setTimeout(()=>{
   categoryCollector.first().delete()
   msg.delete()},5000)}) 



  
break;

case 'butao3':
  r.deferUpdate()
  let dadsad5454 = new Discord.MessageEmbed()
  .setDescription(` Hey, ${message.member} Você precisa setar o canal de contador `)
  .setColor('ffffff')
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
if(contadorcha == '\`Nenhum canal setado\`') return message.channel.send({embeds:[dadsad5454]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
let messagir = new Discord.MessageEmbed()
.setDescription(`Defina uma mensagem para o contador de membros.\n**Exemplo :** Temos {CONTADOR} membros. `)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();



  let sti =  await message.channel.send({embeds:[messagir]})
const filter4 = res => { return res.author.id === message.author.id && res.content.length; };
const umbrarrmsg = await message.channel.awaitMessages({
  filter : filter4,
  max: 1,
  time: 30000
});

msgdocount = umbrarrmsg.first().content



if(umbrarrmsg.first().content.length > 3000) {

  let vd33dfdf = new Discord.MessageEmbed()


  .setDescription(`A mensagem definida para o contador não pode conter mais de 300 caracteres.    `)
  .setColor('ffffff')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
return     umbrarrmsg.first().reply({embeds:[vd33dfdf]}).then((msg)=>{
  sti.delete() 
 setTimeout(()=>{
  umbrarrmsg.first().delete()
   msg.delete()},5000)}) 
}


if(!umbrarrmsg.first().content.includes('{CONTADOR}')) {

  let vd33dfdf = new Discord.MessageEmbed()


  .setDescription(`<Hey, ${message.member}. Insira {CONTADOR} na mensagem para utilizar como contador.     `)
  .setColor('ffffff')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
return     umbrarrmsg.first().reply({embeds:[vd33dfdf]}) .then((msg)=>{
  sti.delete() 
 setTimeout(()=>{
  umbrarrmsg.first().delete()
   msg.delete()},5000)})
}

let embed2brur1 = new Discord.MessageEmbed()
.setTitle("Sistema de contador")    
.setColor('ffffff')
.setDescription(` Configure nosso sistema de contador abaixo!\n\n<a:1_:1132093814278983800> Sistema de contador : ${contadorstatus}\n<a:2_:1132093884705558628>  Canal do contador : ${contadorcha}\n<a:3_:1132093954070945934>  Mensagem do contador : **" ${msgdocount} "**\n<a:4_:1132094036753260544>  Salvar configuração`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp()


r.message.edit({embeds:[embed2brur1]})

let vd33dfdf = new Discord.MessageEmbed()


.setDescription(`Mensagem alterada para : **" ${umbrarrmsg.first().content} "**  `)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

umbrarrmsg.first().reply({embeds:[vd33dfdf]})   .then((msg)=>{
  sti.delete() 
 setTimeout(()=>{
  umbrarrmsg.first().delete()
   msg.delete()},5000)})

break;
case 'butao4':
  r.deferUpdate()
  if(contadorstatus == 'Desligado'){
    if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ 

client.countdown.get(message.guild.id).clear()
    }
    db.delete(`contadorstatus_${message.guild.id}`)
   }else{
    if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ 

client.countdown.get(message.guild.id).clear()
    }
    db.set(`contadorstatus_${message.guild.id}`,'on')
    
   }
   
   if(msgdocount == '\`Padrão\`'){
    if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ 

client.countdown.get(message.guild.id).clear()
    }
    db.delete(`textcount_${message.guild.id}`)
   }else{
    if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ 

client.countdown.get(message.guild.id).clear()
    }
    db.set(`textcount_${message.guild.id}`,msgdocount)
    
   }

   if(contadorcha !== l1){
    if(contadorcha == '\`Nenhum canal setado\`'){
if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ 

client.countdown.get(message.guild.id).clear()
}
db.delete(`countchannel_${message.guild.id}`)
    }else{
db.set(`countchannel_${message.guild.id}`,contadorcha.id)


    }
   }

   if(contadorstatus == 'Desligado'){
    if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ 

client.countdown.get(message.guild.id).clear()
    }
  db.delete(`contadorstatus_${message.guild.id}`)
     }else{
     
  db.set(`contadorstatus_${message.guild.id}`,'on')
  let conty = db.get(`contadorstatus_${message.guild.id}`);
 
if(conty === null){
return;
    }
let ashx = db.get(`countchannel_${message.guild.id}`);
 
 if(ashx === null){
return;
    }
let numbertype = db.get(`numbertype_${message.guild.id}`)



//  try{

    
let count = message.guild.memberCount
    
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
    
let txt = db.get(`textcount_${message.guild.id}`)
if(txt == null) txt =count
    else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
    let timerement = 360000


    if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(message.guild.id).remaining()
    
client.countdown.get(message.guild.id).clear()
    }
    
    
    client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement))


  
     }
   
    let ds3 = new Discord.MessageEmbed()
    

    .setDescription(`Configuração salva com sucesso!`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
   message.channel.send({embeds:[ds3]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
r.message.delete().catch(()=>{});


break;
 }

    })
  })
   
  
  }

}