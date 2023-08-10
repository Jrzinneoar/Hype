const Discord = require("discord.js")
const db = require("quick.db")
const { default_prefix } = require("../../config.json");
const numberreaplce = require('custom-translate')
const Timeout = require('smart-timeout')
module.exports = {
  nome: "contadorestilo",
  coolwdon:9000,
  alternativas: ["contadorestilo"],
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
if(contadorstatus ==null){
    let ccategori = new Discord.MessageEmbed()
    .setDescription(`Hey, ${message.member} Você precisa abilitar o sistema de contador `)
    .setColor('ffffff')
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();


    
    return  message.reply({embeds:[ccategori]})
}

let sadasdasd = db.get(`countchannel_${message.guild.id}`)
if(sadasdasd ==null){
    let ccategori = new Discord.MessageEmbed()
    .setDescription(`Hey, ${message.member} Você precisa setar o canal de contador `)
    .setColor('ffffff')
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();


    
    return  message.reply({embeds:[ccategori]})
}


  let countstile = db.get(`numbertype_${message.guild.id}`)
  if(countstile == null)countstile = '<a:0_:1132093745131692103>'
  else if(countstile == 1)countstile = '<a:zblakkc1:1132095477588955196>'
  else if(countstile == 2)countstile = '<a:number_2:1132142994775081001>'
  else if(countstile == 3)countstile = '<a:D_3tkf:1132145035454988388>'
  else if(countstile == 4)countstile = '<a:red4:1132296225555746856>'
  
  const embed = new Discord.MessageEmbed()
.setTitle(`${client.user.username} | Estilo do contador`)
  .setDescription(`Estilo atual:\n${countstile}\n\nContadores disponíveis: \n <a:0_:1132093745131692103> <a:zblakkc1:1132095477588955196> <a:number_2:1132142994775081001> <a:D_3tkf:1132145035454988388> <a:red4:1132296225555746856>\n\nLista de estilo de contador, Escolha um emoji que corresponde ao estilo do contador. `)
//.setImage("https://media.discordapp.net/attachments/845717339252326480/848954153715892275/lunibackgrounds.png")
  .setColor('ffffff');


  const butao = new Discord.MessageSelectMenu({
    customId:`aaa`,
    placeholder: 'Clique para visualizar os estilos de contador',
  }).addOptions([
{
label: `Emoji 0`,
emoji:'<a:0_:1132093745131692103>',
value: `emoji1`,
},{

label: `Emoji 1`,
emoji:'<a:zblakkc1:1132095477588955196>',
value: `emoji2`},{
  label: `Emoji 2`,
  emoji:'<a:number_2:1132142994775081001>',
  value: `emoji3`,
  },{
    label: `Emoji 3`,
    emoji:'<a:D_3tkf:1132145035454988388>',
    value: `emoji4`,
  },{
  	label: `Emoji 4`,
emoji:'<a:red4:1132296225555746856>',
value: `5`
                }
])
const row = new Discord.MessageActionRow()
row.addComponents([butao])
message.reply({embeds : [embed], components: [row]})

.then((msg)=>{

const inf = (interaction) => interaction.user.id === message.author.id 

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(i,u) =>{

switch (i.values.toString()) {
case 'emoji1':{
 
  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
    if(background === null) {
   const ad = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setDescription(`Você já está usando esse estilo de contador.	`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   return  i.message.channel.send({embeds:[ad]})
    }

    const ad1 = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Estilo do contador atualizado para : <a:0_:1132093745131692103>`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   db.delete(`numbertype_${message.guild.id}`);
 i.message.channel.send({embeds:[ad1]})


 let ashx = db.get(`countchannel_${message.guild.id}`);
    

 
 //  try{
 
  let count = message.guild.memberCount
     
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
  
   
   let txt = db.get(`textcount_${message.guild.id}`)
   if(txt == null) txt =count
   else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
   let timerement = 360000


  
  
  if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(member.guild.id).remaining()
  
  client.countdown.get(message.guild.id).clear()
  }
  
  client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));

}break;
case 'emoji2':{
  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
    if(background === 1) {
   const ad = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setDescription(` Você já está usando esse estilo de contador.	`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   return  i.message.channel.send({embeds:[ad]})
    }

    const ad1 = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Estilo do contador atualizado para : <a:zblakkc1:1132095477588955196>`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   db.set(`numbertype_${message.guild.id}`,1)
   i.message.channel.send({embeds:[ad1]})


 let ashx = db.get(`countchannel_${message.guild.id}`);
    

 
 //  try{
 
   
  let count = message.guild.memberCount
   
    
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
 
 
   
   let txt = db.get(`textcount_${message.guild.id}`)
   if(txt == null) txt =count
   else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
   let timerement = 360000


  
  
  if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(member.guild.id).remaining()
  
  client.countdown.get(message.guild.id).clear()
  }
  
  client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));
}break;
case 'emoji3':{

  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
  if(background === 2) {
 const ad = new Discord.MessageEmbed()
 .setColor('ffffff')
 .setDescription(` Você já está usando esse estilo de contador.	`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 i.message.channel.send({embeds:[ad]})
  }

  const ad1 = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Estilo do contador atualizado para : <a:number_2:1132142994775081001>`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 db.set(`numbertype_${message.guild.id}`,2)
 i.message.channel.send({embeds:[ad1]})


let ashx = db.get(`countchannel_${message.guild.id}`);


//  try{

 
let count = message.guild.memberCount
 
 
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
 
 let txt = db.get(`textcount_${message.guild.id}`)
 if(txt == null) txt =count
 else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
 let timerement = 360000


 if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(message.guild.id).remaining()
 
client.countdown.get(message.guild.id).clear()
 }
 
 client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));




client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));

}break;

case 'emoji4':{
  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
    if(background === 3) {
   const ad = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setDescription(` Você já está usando esse estilo de contador.	`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   i.message.channel.send({embeds:[ad]})
    }

    const ad1 = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Estilo do contador atualizado para : <a:D_3tkf:1132145035454988388>`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   db.set(`numbertype_${message.guild.id}`,3)
   i.message.channel.send({embeds:[ad1]})


 
 let ashx = db.get(`countchannel_${message.guild.id}`);
    
   
   
 
 //  try{
 
   
  let count = message.guild.memberCount
   
  
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
  
    
   
   
   let txt = db.get(`textcount_${message.guild.id}`)
   if(txt == null) txt =count
   else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
   let timerement = 360000


   if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(message.guild.id).remaining()
   
 client.countdown.get(message.guild.id).clear()
   }
   
   client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));
}break;
case 'emoji5':{
  i.deferUpdate()
  i.message.delete()
  let background = db.get(`numbertype_${message.guild.id}`)
    if(background === 4) {
   const ad = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setDescription(`Você já está usando esse estilo de contador.	`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   i.message.channel.send({embeds:[ad]})
    }

    const ad1 = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Estilo do contador atualizado para : <a:red4:1132296225555746856>`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   db.set(`numbertype_${message.guild.id}`,4)
   i.message.channel.send({embeds:[ad1]})

 
   let ashx = db.get(`countchannel_${message.guild.id}`);
  
   
   //  try{
   
 
    let count = message.guild.memberCount
 
  
 
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
  

}

count = numberreaplce.letterTrans(`${count}`, numberstyle)

 

let txt = db.get(`textcount_${message.guild.id}`)
if(txt == null) txt =count
else txt = txt.replaceAll(`{CONTADOR}`.toUpperCase(),`${count}`)
 
let timerement = 360000


if(client.countdown.get(message.guild.id) !== 0 && client.countdown.get(message.guild.id) !== undefined){ timerement = 360000-client.countdown.get(message.guild.id).remaining()

 client.countdown.get(message.guild.id).clear()
}

client.countdown.set(message.guild.id, Timeout.instantiate(() => { client.channels.cache.get(ashx).setTopic(txt) }, timerement));
 



}


})
})

  }
}