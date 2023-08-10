const Discord = require("discord.js")
const db = require("quick.db")
const ms = require('ms')
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "memberjoin",
  coolwdon:8000,
  alternativas: ["memberjoin"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;


    
          const limite = new Discord.MessageEmbed()
          .setColor('ffffff')
          .setDescription(`Para executar este comando precisa a permissão \`gerenciar canais\`,\`gerenciar webhooks\`,\`ver registro de auditoria\` e \`gerenciar servidor\` !`)
          .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
          .setTimestamp();
        
          if (!message.member.permissions.has("MANAGE_CHANNELS")||!message.member.permissions.has("VIEW_AUDIT_LOG")||!message.member.permissions.has("MANAGE_GUILD")||!message.member.permissions.has("MANAGE_WEBHOOKS")) return  message.reply({embeds:[limite]})
       
          const ad = new Discord.MessageEmbed()
          .setColor('ffffff')
          .setDescription(`Não é possível executar este o comando, preciso da permissão de  \`gerenciar canais\`,\`gerenciar webhooks\`,\`ver registro de auditoria\` e \`gerenciar servidor\` !`)
          .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
          .setTimestamp();

          if(!message.guild.me.permissions.has("MANAGE_CHANNELS")||!message.guild.me.permissions.has("VIEW_AUDIT_LOG")||!message.guild.me.permissions.has("MANAGE_GUILD")||!message.guild.me.permissions.has("MANAGE_WEBHOOKS")) return  message.reply({embeds:[ad]})

          let msglogdel = db.get(`memberjoin_${message.guild.id}`)
          if(msglogdel == null) msglogdel = 'Desligado'
          else msglogdel = 'Ligado'
       
          let l1 = db.get(`logmemberjoin_${message.guild.id}`)
if(l1 == null) l1 = '\`Nenhum canal setado\`'
else l1 = `<#${l1}>`

        let msglog = db.get(`logmemberjoin_${message.guild.id}`)
        if(msglog == null) msglog = '\`Nenhum canal setado\`'
        else msglog = `<#${msglog}>`

        
           
            
            const embed = new Discord.MessageEmbed ()
        
            .setTitle("Sistema de member join")    
            .setColor('ffffff')
            .setDescription(`Configure nosso sistema de member join abaixo!\n\n<a:1_:1132093814278983800> Sistema de member join : ${msglogdel}\n<a:2_:1132093884705558628> Canal de log : ${msglog} \n<a:3_:1132093954070945934> Salvar configuração`)         
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
                 if(msglogdel === 'Desligado'){

    
 let dadasdsadasda = new Discord.MessageEmbed()
             
         
   .setDescription(`Sistema de member join **habilitado.**`)
   .setColor('ffffff')
   
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
 message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
                 
 msglogdel = 'Ligado'
                 
 let embed2b1 = new Discord.MessageEmbed()
 .setTitle("Sistema de member join")    
 .setColor('ffffff')
 .setDescription(`Configure nosso sistema de member join abaixo!\n\n<a:1_:1132093814278983800> Sistema de member join : ${msglogdel}\n<a:2_:1132093884705558628> Canal de log : ${msglog} \n<a:3_:1132093954070945934> Salvar configuração`)         
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();
  
    
     r.message.edit({embeds:[embed2b1]})
              }else if(msglogdel === 'Ligado'){
              
 let dadasdsadasda = new Discord.MessageEmbed()
             
         
   .setDescription(`Sistema de member join **desabilitado.**`)
   .setColor('ffffff')
   
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
 message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
 msglogdel = 'Desligado'
 let embed2b1 = new Discord.MessageEmbed()
 .setTitle("Sistema de member join")    
 .setColor('ffffff')
 .setDescription(` Configure nosso sistema de member join abaixo!\n\n<a:1_:1132093814278983800> Sistema de member join : ${msglogdel}\n<a:2_:1132093884705558628> Canal de log : ${msglog} \n<a:3_:1132093954070945934> Salvar configuração`)         
     .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();
  
    
     r.message.edit({embeds:[embed2b1]})
              }
              break;
              case 'butao2':
                r.deferUpdate()

                if(msglogdel=== 'Desligado'){
 let ccategori = new Discord.MessageEmbed()
 .setDescription(`Hey, ${message.member} Você precisa abilitar o sistema de member join `)
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
let sti = await message.channel.send({embeds:[ccategori]})

setTimeout(()=>{sti.delete()},30000)
   const filter9 = res => {
     return res.author.id === message.author.id && res.content.length;
   };
   const categoryCollector = await message.channel.awaitMessages({filter:filter9,
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
  sti.delete() 
 setTimeout(()=>{
  categoryCollector.first().delete()
   msg.delete()},5000)}) 


let j123 = new Discord.MessageEmbed()
.setDescription(`Hey, ${message.member} ! Mencione um canal de texto na proxima vez. ` )
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
if(category.type !== 'GUILD_TEXT') return categoryCollector.first().reply({embeds:[j123]}).then((msg)=>{
  sti.delete() 
 setTimeout(()=>{
  categoryCollector.first().delete()
   msg.delete()},5000)}) 


msglog = category
let embed2b1 = new Discord.MessageEmbed()
.setTitle("Sistema de member join")    
.setColor('ffffff')
.setDescription(`Configure nosso sistema de member join abaixo!\n\n<a:1_:1132093814278983800> Sistema de member join : ${msglogdel}\n<a:2_:1132093884705558628> Canal de log : ${msglog} \n<a:3_:1132093954070945934> Salvar configuração`)         
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
               
           
r.message.edit({embeds:[embed2b1]})

let dadasdsadasda = new Discord.MessageEmbed()
    

.setDescription(`Canal setado com sucesso!`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();


categoryCollector.first().reply({embeds:[dadasdsadasda]}).then((msg)=>{
  sti.delete() 
 setTimeout(()=>{
  categoryCollector.first().delete()
   msg.delete()},5000)}) 
                break;
 case 'butao3':
 r.deferUpdate()
 if(msglog !== l1){
   if(msglog == '\`Nenhum canal setado\`'){
     db.delete(`logmemberjoin_${message.guild.id}`)
   }else{
     db.set(`logmemberjoin_${message.guild.id}`,msglog.id)
     
   }
 }
   if(msglogdel == 'Desligado'){
     db.delete(`memberjoin_${message.guild.id}`)
   }else{
     db.set(`memberjoin_${message.guild.id}`,'on')
                 
     message.guild.invites.fetch()
     .then(invites => client.invites.set(message.guild.id, invites))
     
   }
                
if(message.guild.vanityURLCode != null){

var gi = client.invites.get(message.guild.id);
gi.set(message.guild.vanityURLCode,await message.guild.fetchVanityData());
client.invites.set(message.guild.id, gi);
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
