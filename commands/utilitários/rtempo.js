  
const Discord = require("discord.js")
require("moment-duration-format");
const db = require("quick.db");
const moment = require("moment");


const { default_prefix } = require("../../config.json");
module.exports = {
    nome: "rtempo",
    coolwdon:10000,
    alternativas: ["rtempo"],
    run: async (client, message, args) => {
        let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
 
    let sistelevel = db.get(`voicesystem_${message.guild.id}`);
    if (sistelevel == null) {
       
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`O sistema de voicesystem está desabilitado. use o comando **${prefix}voicesystem** para habilitar`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   return  message.reply({embeds:[limite]})

}
let i0 = 0;
let i1 = 10;
let page = 1;
 let every = db.all().filter(data => data.ID.startsWith(`tempocall_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
    let rank = every.map(m => m.ID).indexOf(`tempocall_${message.guild.id}_${message.author.id}`) + 1 || "N/A";
      
   
    
    let xp13 = db.all().filter(data => data.ID.startsWith(`tempocall_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
    if (xp13.length == 0) {
       
      const limite = new Discord.MessageEmbed()
      .setColor('ffffff')
      .setDescription(` Não há  usuários suficientes em minha database para criar um rank `)
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
    

     return  message.reply({embeds:[limite]})
  
  }
let xp =  xp13.slice(i0,i1)

if(i1>=xp13.length){
    let result = i1
    let calc;
        if(i1 > xp13.length){
    calc = 10-(i1 - xp13.length)
     result = calc + i0
       
        }
    
        let content = "";
        content += `**Pagina:** \`${page}/${Math.ceil(xp13.length / 10)}\`\n\n`
        for (let i = 0; i < calc; i++) {
       
           
            if(xp[i].ID.startsWith(`tempocall_${message.guild.id}_`)) {
                let user = await client.users.fetch(xp[i].ID.split("_")[2]);
                
                if(user) {
                  const duration = moment.duration(xp[i].data*1000).format(`Y[ Anos], M[ Meses], W[ Semanas], D[ Dias], H[ Horas], m [Minutos] [e] s[ Segundos]`);
        
                    content += `** ${i+1}º | <@${user.id}>**\n**Tempo:** \`${duration}\`\n`
        
                }
            }
        }
        const embed = new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTitle(`Sistema de Rank de Temp Call ${client.user.username}`)
        .setDescription(`${content}`)
    
        .setColor("ffffff")
     .setFooter(`Sua posição: ${rank}`)
        .setTimestamp();
           
    
        return await message.reply( {embeds:[embed]});
        

}
    let content = "";
    content += `**Pagina:** \`${page}/${Math.ceil(xp13.length / 10)}\`\n\n`
    for (let i = 0; i < 10; i++) {
   
       
        if(xp[i].ID.startsWith(`tempocall_${message.guild.id}_`)) {
            let user = await  client.users.fetch(xp[i].ID.split("_")[2]);
        
            if(user) {
              
              const duration = moment.duration(xp[i].data*1000).format(`Y[ Anos], M[ Meses], W[ Semanas], D[ Dias], H[ Horas], m [Minutos] [e] s[ Segundos]`);
              content += `** ${i+1}º | <@${user.id}>**\n**Tempo:** \`${duration}\`\n`
    
            }
        }
    }
    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTitle(`Sistema de Rank de Temp Call ${client.user.username}`)
    .setDescription(`${content}`)

    .setColor("ffffff")
 .setFooter(`Sua posição: ${rank}`)
    .setTimestamp();
       
  let butao1 = new Discord.MessageButton()
.setEmoji('<:Icon_Next:1138842656752017438>')
.setStyle("SECONDARY")
.setCustomId("butao1")



const row = new Discord.MessageActionRow()
row.addComponents([butao1])




message.reply({embeds:[embed],components:[row]}).then(msg => {


const inf = (interaction) => interaction.user.id == message.member.id

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(r,u) =>{
switch (r.customId) {
case 'butao1':{


   
    i0 = i0 + 10;
    i1 = i1 + 10;
    page = page + 1;
if(i1 >= xp13.length){
  

  
let result = i1
let calc;
    if(i1 > xp13.length){
calc = 10-(i1 - xp13.length)

 result = calc + i0
   
    }else{


      calc = result - i0   
    }
  
    let xp =  xp13.slice(i0,result)
    let content = "";
    content += `**Pagina:** \`${page}/${Math.ceil(xp13.length / 10)}\`\n\n`
    for (let i = 0; i < calc; i++) {
   

    if(xp[i].ID.startsWith(`tempocall_${message.guild.id}_`)) {
    let user = await client.users.cache.get(xp[i].ID.split("_")[2]);
    
    if(user) {
 

      const duration = moment.duration(xp[i].data*1000).format(`Y[ Anos], M[ Meses], W[ Semanas], D[ Dias], H[ Horas], m [Minutos] [e] s[ Segundos]`);
      content += `** ${i+1}º | <@${user.id}>**\n**Tempo:** \`${duration}\`\n`
    
    }
    }
    }
    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTitle(`Sistema de Rank de Temp Call ${client.user.username}`)
    .setDescription(`${content}`)

    .setColor("ffffff")
 .setFooter(`Sua posição: ${rank}`)
    .setTimestamp();

    
    let butao1 = new Discord.MessageButton()
    .setEmoji('<:Icon_Previous:1138843234148306984>')
  .setStyle("SECONDARY")
   .setCustomId("butao2")
  
  

  
    const row = new Discord.MessageActionRow()
    row.addComponents([butao1])
  
  r.update({
    embeds: [embed],
    components: [row]
  })
  

}   else{
  
    

   
let xp =  xp13.slice(i0,i1)
   
    let content = "";
    content += `**Pagina:** \`${page}/${Math.ceil(xp13.length / 10)}\`\n\n`
    for (let i = 0; i < 10; i++) {
   
    
   if(xp[i].ID.startsWith(`tempocall_${message.guild.id}_`)) {
  let user = await client.users.cache.get(xp[i].ID.split("_")[2]);

  if(user) {
    
    const duration = moment.duration(xp[i].data*1000).format(`Y[ Anos], M[ Meses], W[ Semanas], D[ Dias], H[ Horas], m [Minutos] [e] s[ Segundos]`);
    content += `** ${i+1}º | <@${user.id}>**\n**Tempo:** \`${duration}\`\n`
    
  }
   }
    }
    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTitle(`Sistema de Rank de Temp Call ${client.user.username}`)
    .setDescription(`${content}`)
    
    .setColor("ffffff")
     .setFooter(`Sua posição: ${rank}`)
    .setTimestamp();
  
    
    let butao1 = new Discord.MessageButton()
    .setEmoji('<:Icon_Previous:1138843234148306984>')
  .setStyle("SECONDARY")
   .setCustomId("butao2")
   let butao2 = new Discord.MessageButton()
    .setEmoji('<:Icon_Next:1138842656752017438>')
  .setStyle("SECONDARY")
   .setCustomId("butao1")
  

  
    const row = new Discord.MessageActionRow()
    row.addComponents([butao1,butao2])
  
   r.update({
    embeds: [embed],
    components: [row]
  })


} 

    }

  break;
  case 'butao2':{
    i0 = i0 - 10;
    i1 = i1- 10;
    page = page - 1;
    let content = "";
if(i0 === 0){
   

    content += `**Pagina:** \`${page}/${Math.ceil(xp13.length / 10)}\`\n\n`
    
}else{
   

    content += `**Pagina:** \`${page}/${Math.ceil(xp13.length / 10)}\`\n\n`
  
}
let xp =  xp13.slice(i0,i1)
   
  
   
    for (let i = 0; i < 10; i++) {
   
    
   if(xp[i].ID.startsWith(`tempocall_${message.guild.id}_`)) {
  let user = await client.users.fetch(xp[i].ID.split("_")[2]);
  
  if(user) {
    
    const duration = moment.duration(xp[i].data*1000).format(`Y[ Anos], M[ Meses], W[ Semanas], D[ Dias], H[ Horas], m [Minutos] [e] s[ Segundos]`);
                    content += `** ${i+1}º | <@${user.id}>**\n**Tempo:** \`${duration}\`\n`
    
  }
   }
    }
    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTitle(`Sistema de Rank de Temp Call ${client.user.username}`)
    .setDescription(`${content}`)
    
    .setColor("ffffff")
     .setFooter(`Sua posição: ${rank}`)
    .setTimestamp();
  
    if(i0 === 0){
    
       let butao1 = new Discord.MessageButton()
        .setEmoji('<:Icon_Next:1138842656752017438>')
      .setStyle("SECONDARY")
       .setCustomId("butao1")
      
    
      
        const row = new Discord.MessageActionRow()
        row.addComponents([butao1])
   
        r.update({
            embeds: [embed],
            components: [row]
          })
        
       
    }else{

            let butao1 = new Discord.MessageButton()
    .setEmoji('<:Icon_Previous:1138843234148306984>')
  .setStyle("SECONDARY")
   .setCustomId("butao2")
   let butao2 = new Discord.MessageButton()
    .setEmoji('<:Icon_Next:1138842656752017438>')
  .setStyle("SECONDARY")
   .setCustomId("butao1")
  

  
    const row = new Discord.MessageActionRow()
    row.addComponents([butao1,butao2])
  
   r.update({
    embeds: [embed],
    components: [row]
  })
      
    
    }
   
}  

}
})
})


}   
}