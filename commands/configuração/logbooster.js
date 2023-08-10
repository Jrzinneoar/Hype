const Discord = require("discord.js")
const db = require("quick.db")
const ms = require('ms')
var isHexColor = require( 'validate.io-color-hexadecimal');
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "logbooster",
  coolwdon:8000,
  alternativas: ["logbooster"],
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

     
       
          let l1 = db.get(`logboosterch_${message.guild.id}`)
if(l1 == null) l1 = '\`Nenhum canal setado\`'
else l1 = `<#${l1}>`

        let msglog = db.get(`logboosterch_${message.guild.id}`)
        if(msglog == null) msglog = '\`Nenhum canal setado\`'
        else msglog = `<#${msglog}>`
let msgboost = db.get(`msgboost_${message.guild.id}`)
        if(msgboost == null) msgboost = 'Nenhuma mensagem'

        let logbost = db.get(`logbost_${message.guild.id}`)
        if(logbost == null) logbost = 'Desligado '
        else logbost = 'Ligado'
        let embeded = db.get(`embeded_${message.guild.id}`)
        if(embeded == null) embeded = 'Desligado '
        else embeded = 'Ligado'
        let bostcor = db.get(`boostercorlor_${message.guild.id}`)
        if(bostcor == null) bostcor = '#000000'
      

            const embed = new Discord.MessageEmbed ()
        
            .setTitle("Sistema de booster")    
            .setColor('ffffff')
            .setDescription(`Configure nosso sistema de booster abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Mensagem de booster : **" ${msgboost} "**\n<a:3_:1132093954070945934> Sistema de booster : ${logbost}\n<a:4_:1132094036753260544> Embed : ${embeded}\n<a:5_:1132094083733672017> Cor da embed : ${bostcor.includes('#')? bostcor:`#${bostcor}`}\n<a:6_:1132094166046888006> Salvar configuração`)         
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

   const row = new Discord.MessageActionRow()
   row.addComponents([butao1,butao2,butao3,butao4,butao5])
   const row1 = new Discord.MessageActionRow()
   row1.addComponents([butao6])
     
message.reply({embeds:[embed],components:[row,row1]}).then(msg => {
  setTimeout(()=>{msg.delete()},180000)

                const inf = (interaction) => interaction.user.id == message.member.id
                 
                 const collector = msg.createMessageComponentCollector({ filter:inf});
                 collector.on('collect', async(r,u) =>{
              switch (r.customId) {
                case 'butao1':
                 r.deferUpdate()
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
                    .setDescription(`Tente novamente \nEste canal é inválido `)
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
                .setTitle("Sistema de booster")    
                .setColor('ffffff')
                .setDescription(`Configure nosso sistema de booster abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Mensagem de booster : **" ${msgboost} "**\n<a:3_:1132093954070945934> Sistema de booster : ${logbost}\n<a:4_:1132094036753260544> Embed : ${embeded}\n<a:5_:1132094083733672017> Cor da embed : ${bostcor.includes('#')? bostcor:`#${bostcor}`}\n<a:6_:1132094166046888006> Salvar configuração`)         
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
                 case'butao2':
                 r.deferUpdate()
                 let dadsad5454 = new Discord.MessageEmbed()
                 .setDescription(`Hey, ${message.member} Você precisa setar o canal de booster `)
                 .setColor('ffffff')
                 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                 .setTimestamp();
               if(msglog == '\`Nenhum canal setado\`') return message.channel.send({embeds:[dadsad5454]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
               let messagir = new Discord.MessageEmbed()
               .setDescription(` Defina uma mensagem para o log de booster.\n**Exemplo :** Obrigado pelo booster {MENTION} para mencionar o usuário do booster ou {NAME} para mencionar o nome do usuário. `)
               .setColor('ffffff')
               
               .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
               .setTimestamp();
               
               
               
                 let stid =  await message.channel.send({embeds:[messagir]})
               const filter4 = res => { return res.author.id === message.author.id && res.content.length; };
               const umbrarrmsg = await message.channel.awaitMessages({
                 filter : filter4,
                 max: 1,
                 time: 30000
               });
               
              
               
               
               
               if(umbrarrmsg.first().content.length > 3000) {
               
                 let vd33dfdf = new Discord.MessageEmbed()
               
               
                 .setDescription(` A mensagem definida para o log de booster não pode conter mais de 300 caracteres.    `)
                 .setColor('ffffff')
                 
                 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                 .setTimestamp();
                 
               return     umbrarrmsg.first().reply({embeds:[vd33dfdf]}).then((msg)=>{
                stid.delete() 
                setTimeout(()=>{
                 umbrarrmsg.first().delete()
                  msg.delete()},5000)}) 
               }
               
               
     
               msgboost = umbrarrmsg.first().content
               let embed2brur1 = new Discord.MessageEmbed()
           
                .setTitle("Sistema de booster")    
                .setColor('ffffff')
                .setDescription(`Configure nosso sistema de booster abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Mensagem de booster : **" ${msgboost} "**\n<a:3_:1132093954070945934> Sistema de booster : ${logbost}\n<a:4_:1132094036753260544> Embed : ${embeded}\n<a:5_:1132094083733672017> Cor da embed : ${bostcor.includes('#')? bostcor:`#${bostcor}`}\n<a:6_:1132094166046888006> Salvar configuração`)         
                   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
                           
               
               r.message.edit({embeds:[embed2brur1]})
               
               let vd33dfdf = new Discord.MessageEmbed()
               
               
               .setDescription(`Mensagem alterada para : **" ${umbrarrmsg.first().content} "**  `)
               .setColor('ffffff')
               
               .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
               .setTimestamp();
               
               umbrarrmsg.first().reply({embeds:[vd33dfdf]})   .then((msg)=>{
                stid.delete() 
                setTimeout(()=>{
                 umbrarrmsg.first().delete()
                  msg.delete()},5000)})
               
                 break;
                 case'butao3':
                 r.deferUpdate()
                 if(logbost === 'Desligado '){
               let dadsad = new Discord.MessageEmbed()
               .setDescription(` Hey, ${message.member} Você precisa setar a mensagem de booster `)
               .setColor('ffffff')
               .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
               .setTimestamp();
  
                 if(msgboost == 'Nenhuma mensagem') return message.channel.send({embeds:[dadsad]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
               let dadasdsradasda = new Discord.MessageEmbed()
                   
               
                 .setDescription(`Sistema de booster log **habilitado.**`)
                 .setColor('ffffff')
                 
                 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                 .setTimestamp();
               message.channel.send({embeds:[dadasdsradasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
                  
               logbost = 'Ligado'
               let embed32b1 = new Discord.MessageEmbed()
               .setTitle("Sistema de booster")    
               .setColor('ffffff')
               .setDescription(`Configure nosso sistema de booster abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Mensagem de booster : **" ${msgboost} "**\n<a:3_:1132093954070945934> Sistema de booster : ${logbost}\n<a:4_:1132094036753260544> Embed : ${embeded}\n<a:5_:1132094083733672017> Cor da embed : ${bostcor.includes('#')? bostcor:`#${bostcor}`}\n<a:6_:1132094166046888006> Salvar configuração`)         
                  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();
                         
                
                  
                   r.message.edit({embeds:[embed32b1]})
                 
                    }else if(logbost === 'Ligado'){
               let dadasdsadasda = new Discord.MessageEmbed()
                   
               
                 .setDescription(`Sistema de booster log **desabilitado.**`)
                 .setColor('ffffff')
                 
                 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                 .setTimestamp();
               message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
               logbost = 'Desligado '
               let embed2b1 = new Discord.MessageEmbed()
               .setTitle("Sistema de booster")    
                .setColor('ffffff')
                .setDescription(`Configure nosso sistema de booster abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Mensagem de booster : **" ${msgboost} "**\n<a:3_:1132093954070945934> Sistema de booster : ${logbost}\n<a:4_:1132094036753260544> Embed : ${embeded}\n<a:5_:1132094083733672017> Cor da embed : ${bostcor.includes('#')? bostcor:`#${bostcor}`}\n<a:6_:1132094166046888006> Salvar configuração`)         
                   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
                          
                  
                   r.message.edit({embeds:[embed2b1]})
                    }
                 break;
                 case'butao4':
                 r.deferUpdate()
                 if(embeded === 'Desligado '){
           
               let dadasdsradasda = new Discord.MessageEmbed()
                   
               
                 .setDescription(`Embed **habilitada.**`)
                 .setColor('ffffff')
                 
                 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                 .setTimestamp();
               message.channel.send({embeds:[dadasdsradasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
                  
               embeded = 'Ligado'
               let embed32b1 = new Discord.MessageEmbed()
               .setTitle("Sistema de booster")    
               .setColor('ffffff')
               .setDescription(`Configure nosso sistema de booster abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Mensagem de booster : **" ${msgboost} "**\n<a:3_:1132093954070945934> Sistema de booster : ${logbost}\n<a:4_:1132094036753260544> Embed : ${embeded}\n<a:5_:1132094083733672017> Cor da embed : ${bostcor.includes('#')? bostcor:`#${bostcor}`}\n<a:6_:1132094166046888006> Salvar configuração`)         
                  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();
                         
                
                  
                   r.message.edit({embeds:[embed32b1]})
                 
                    }else if(embeded === 'Ligado'){
               let dadasdsadasda = new Discord.MessageEmbed()
                   
               
                 .setDescription(`Embed **desabilitada.**`)
                 .setColor('ffffff')
                 
                 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                 .setTimestamp();
               message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
               embeded = 'Desligado '
               let embed2b1 = new Discord.MessageEmbed()
               .setTitle("Sistema de booster")    
                .setColor('ffffff')
                .setDescription(`Configure nosso sistema de booster abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Mensagem de booster : **" ${msgboost} "**\n<a:3_:1132093954070945934> Sistema de booster : ${logbost}\n<a:4_:1132094036753260544> Embed : ${embeded}\n<a:5_:1132094083733672017> Cor da embed : ${bostcor.includes('#')? bostcor:`#${bostcor}`}\n<a:6_:1132094166046888006> Salvar configuração`)         
                   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
                          
                  
                   r.message.edit({embeds:[embed2b1]})
                    }
                 break;
                 case'butao5':
                 
                 r.deferUpdate()

                 let cnh1 = new Discord.MessageEmbed()
                                 
                             
                 .setDescription(` **Qual cor deseja setar para a embed ?**\n__Obs : __ A cor precisa está em hexadecimal.`)
                 .setColor('ffffff')
                 
                 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                 .setTimestamp();
                 
                 
                 let udoo =await  message.channel.send({embeds:[cnh1]})
                 setTimeout(()=>{udoo.delete()},30000)
                 const filter1 = res => {
                 return res.author.id === message.author.id && res.content.length;
                 };
                 const canalnameCollector1 = await message.channel.awaitMessages({filter:filter1,
                 max: 1,
                 time: 50000
                 });
                 
                 
                 
                 let color =  canalnameCollector1.first().content
                 
                 let cnomesmais1 = new Discord.MessageEmbed()
                 
                 
                 .setDescription(` Está cor e invalida! `)
                 .setColor('ffffff')
                 
                 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                 .setTimestamp();
                 
                 
                 if(!isHexColor(canalnameCollector1.first().content.replace('#',''),'either')) return canalnameCollector1.first().reply({embeds:[cnomesmais1]}).then((msg)=>{
                     udoo.delete() 
                 setTimeout(()=>{
                     canalnameCollector1.first().delete()
                 msg.delete()},5000)})
                 
                 bostcor = color
                 let setchds23d = new Discord.MessageEmbed()
                 
                 
                 .setDescription(`Cor da embed alterada com sucesso.`)
                 .setColor('ffffff')
                 
                 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                 .setTimestamp();
                 
                 
                 
                 canalnameCollector1.first().reply({embeds:[setchds23d]}).then((msg)=>{
                     udoo.delete() 
                 setTimeout(()=>{
                     canalnameCollector1.first().delete()
                 msg.delete()},5000)})
               
             let vips = new Discord.MessageEmbed()
             .setTitle("Sistema de booster")    
                .setColor('ffffff')
                .setDescription(`Configure nosso sistema de booster abaixo!\n\n<a:1_:1132093814278983800> Canal de log : ${msglog}\n<a:2_:1132093884705558628> Mensagem de booster : **" ${msgboost} "**\n<a:3_:1132093954070945934> Sistema de booster : ${logbost}\n<a:4_:1132094036753260544> Embed : ${embeded}\n<a:5_:1132094083733672017> Cor da embed : ${bostcor.includes('#')? bostcor:`#${bostcor}`}\n<a:6_:1132094166046888006> Salvar configuração`)         
                   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
         
             r.message.edit({embeds:[vips]})

                 break;
                 case'butao6':
                 r.deferUpdate()
                 if(msglog !== l1){
                  if(msglog == '\`Nenhum canal setado\`'){
                    db.delete(`logboosterch_${message.guild.id}`)
                  }else{
                    db.set(`logboosterch_${message.guild.id}`,msglog.id)
                    
                  }
                }

                if(embeded == 'Desligado '){
                  db.delete(`embeded_${message.guild.id}`)
                }else{
                  db.set(`embeded_${message.guild.id}`,'on')
                }

                  if(logbost == 'Desligado '){
                    db.delete(`logbost_${message.guild.id}`)
                  }else{
                    db.set(`logbost_${message.guild.id}`,'on')
                  }

if(msgboost == 'Nenhuma mensagem'){
  db.delete(`msgboost_${message.guild.id}`)
}else{
  db.set(`msgboost_${message.guild.id}`,msgboost)
}
if(bostcor=='#000000'){
  db.delete(`boostercorlor_${message.guild.id}`)
}else{
  db.set(`boostercorlor_${message.guild.id}`,bostcor)
}
let ds3 = new Discord.MessageEmbed()
             
         
.setDescription(` Configuração salva com sucesso!`)
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
