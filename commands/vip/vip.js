const db = require("quick.db");
const Discord = require('discord.js');
var isHexColor = require( 'validate.io-color-hexadecimal');
module.exports = {
    nome:"vip",
    coolwdon:8000,
    alternativas: ["vip"],
    run: async (client, message, args) => {

        let temvip = db.get(`newvips_${message.guild.id}_${message.member.id}`)

        let botvip = new Discord.MessageEmbed()
                    
                
        .setDescription(`Você não é um membro VIP!`)
        .setColor('ffffff')
    
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
    
        if (!temvip) return message.reply({embeds:[botvip]});
       let cfg =  db.get(`vips_${message.guild.id}_"${temvip.vipname}"`)
     
        if(cfg.permch  && !temvip.canal && cfg.permcr&&!temvip.cargo){
            let vipname;
         let canal =  'Nenhum'
         let cargo = 'Nenhum'
            if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
            else vipname = temvip.vipname
         
            let vips = new Discord.MessageEmbed()
                 .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n  **Canal vinculado:** ${canal}`)
            .setColor('ffffff')
        
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
        
          

  
          let butao1 = new Discord.MessageButton()
         
          .setLabel("Criar cargo") 
            .setStyle("SECONDARY")
             .setCustomId("butao1")
            
          let butao2 =  new Discord.MessageButton()
       
          .setLabel("Criar canal") 
          .setStyle("SECONDARY")
          .setCustomId("butao2")
         
        
          const row = new Discord.MessageActionRow()
          row.addComponents([butao1,butao2])
            
       
            
          
           
          message.reply({embeds:[vips],components:[row]}).then(msg => {


            const inf = (interaction) => interaction.user.id == message.author.id 
             
             const collector = msg.createMessageComponentCollector({ filter:inf});
             collector.on('collect', async(r,u) =>{
          switch (r.customId) {
            case 'butao1':

                let temvipv2 = db.get(`newvips_${message.guild.id}_${message.member.id}`)
                let vipcr;
                if(cfg.cargoc){
                    if(temvipv2.canal){
                        vipcr = await message.guild.roles.create({
                            name: `vip do ${message.author.username}`,
                            color:`#000000`,
                           permissions: [],
                           position: cfg.cargoc+1,
                           reason: `Sistema de Vip ${client.user.username}`,
                            })   
                           let char = message.guild.channels.cache.get(temvipv2.canal)    
                           char.permissionOverwrites.edit(vipcr, {
                            CONNECT: true,
                            VIEW_CHANNEL: true
                             })
                    }else{
                        vipcr =   await message.guild.roles.create({
                            name: `vip do ${message.author.username}`,
                            color:`#000000`,
                           permissions: [],
                           position: cfg.cargoc+1,
                           reason: `Sistema de Vip ${client.user.username}`,
                            })     
                    }
                }else{
                    if(temvipv2.canal){
                        vipcr = await message.guild.roles.create({
                            name: `vip do ${message.author.username}`,
                            color:`#000000`,
                           permissions: [],
                         
                           reason: `Sistema de Vip ${client.user.username}`,
                            })   
                           let char = message.guild.channels.cache.get(temvipv2.canal)    
                           char.permissionOverwrites.edit(vipcr, {
                            CONNECT: true,
                            VIEW_CHANNEL: true
                             })
                    }else{
                        vipcr =   await message.guild.roles.create({
                            name: `vip do ${message.author.username}`,
                            color:`#000000`,
                           permissions: [],
                
                           reason: `Sistema de Vip ${client.user.username}`,
                            })     
                        }
                
                }
                cargo = vipcr
                let setcr = new Discord.MessageEmbed()
                           
                       
                .setDescription(`Cargo do criado com sucesso.`)
                .setColor('ffffff')
                
                .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                .setTimestamp();
                message.channel.send({embeds:[setcr]}).then((msg)=>{
                    setTimeout(()=>{
                    
                    msg.delete()},5000)})
                
                         if(temvipv2.canal){
                            let vips = new Discord.MessageEmbed()
                            .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
                            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
                            .setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n **Canal vinculado:** ${canal}\n\n`)
                            .setColor('ffffff')
                            
                            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                            .setTimestamp();
                            r.message.edit({embeds:[vips]})
                            r.message.delete()
                           
                db.set(`newvips_${message.guild.id}_${message.member.id}`,{vipname:temvipv2.vipname,canal:temvipv2.id,cargo:vipcr.id,vipdate:temvipv2.vipdate,duration:temvipv2.duration})
              
                         }else{
                         
                            let vips = new Discord.MessageEmbed()
                            .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
                           .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
                       .setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n **Canal vinculado:** ${canal}\n\n`)
                       .setColor('ffffff')
                   
                       .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                       .setTimestamp();
                   
                     
                       
                     let butao2 =  new Discord.MessageButton()
                  
                     .setLabel("Criar canal") 
                     .setStyle("SECONDARY")
                     .setCustomId("butao2")
                    
                   
                     const row = new Discord.MessageActionRow()
                     row.addComponents([butao2])
                       
                  
                            db.set(`newvips_${message.guild.id}_${message.member.id}`,{vipname:temvipv2.vipname,canal:temvipv2.id,cargo:vipcr.id,vipdate:temvipv2.vipdate,duration:temvipv2.duration})
                             r.update({embeds:[vips],components:[row]})
                         }
                             break;    
            case 'butao2':

let temvip = db.get(`newvips_${message.guild.id}_${message.member.id}`)
let vipch;
if(cfg.categoria){
    if(temvip.cargo){
        vipch = await  message.guild.channels.create(`Vip ${message.author.username}`,{
  
        type:"GUILD_VOICE",
        parent:`${cfg.categoria}`, 
        permissionOverwrites: [
        {
        id: temvip.cargo,
        allow: [ "CONNECT","VIEW_CHANNEL"]
        },
        {
        id: message.guild.roles.everyone,
          deny: ["CONNECT", "VIEW_CHANNEL"]
        }
        ],
        })    
    }else{
        vipch = await message.guild.channels.create(`Vip ${message.author.username}`,{
  
            type:"GUILD_VOICE",
            parent:`${cfg.categoria}`, 
            permissionOverwrites: [
            {
            id: message.guild.roles.everyone,
              deny: ["CONNECT", "VIEW_CHANNEL"]
            }
            ],
            }) 
    }
}else{
    if(temvip.cargo){
        vipch = await   message.guild.channels.create(`Vip ${message.author.username}`,{
      
            type:"GUILD_VOICE",
            permissionOverwrites: [
            {
            id: temvip.cargo,
            allow: [ "CONNECT","VIEW_CHANNEL"]
            },
            {
            id: message.guild.roles.everyone,
              deny: ["CONNECT", "VIEW_CHANNEL"]
            }
            ],
            })    
        }else{
            vipch = await    message.guild.channels.create(`Vip ${message.author.username}`,{
      
                type:"GUILD_VOICE",
                permissionOverwrites: [
                {
                id: message.guild.roles.everyone,
                  deny: ["CONNECT", "VIEW_CHANNEL"]
                }
                ],
                }) 
        }

}
canal = vipch
let setch = new Discord.MessageEmbed()
           
       
.setDescription(`Canal do criado com sucesso.`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
message.channel.send({embeds:[setch]}).then((msg)=>{
    setTimeout(()=>{
    
    msg.delete()},5000)})

         if(temvip.cargo){

let vips = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
.setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**VIP Atual:** ${vipname}\n**Cargo vinculado:** ${cargo}\n **Canal vinculado:** ${canal}\n\n`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
r.message.edit({embeds:[vips]})
r.message.delete()

            db.set(`newvips_${message.guild.id}_${message.member.id}`,{vipname:temvip.vipname,canal:vipch.id,cargo:temvip.cargo,vipdate:temvip.vipdate,duration:temvip.duration})
         
         }else{
         
            let vips = new Discord.MessageEmbed()
            .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
           .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
       .setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n **Canal vinculado:** ${canal}\n\n`)
       .setColor('ffffff')
   
       .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();
   
     
       
     let butao2 =  new Discord.MessageButton()
  
     .setLabel("Criar canal") 
     .setStyle("SECONDARY")
     .setCustomId("butao2")
    
   
     const row = new Discord.MessageActionRow()
     row.addComponents([butao2])
       
  
            db.set(`newvips_${message.guild.id}_${message.member.id}`,{vipname:temvip.vipname,canal:vipch.id,cargo:null,vipdate:temvip.vipdate,duration:temvip.duration})
             r.update({embeds:[vips],components:[row]})
            
          }
          break;
        }
        })
            })

        }else if(cfg.permcr  && !temvip.cargo){
            let vipname;
            let canal =  'Nenhum'
        if(temvip.canal) canal = `<#${temvip.canal}>`
            let cargo = 'Nenhum'
            if(temvip.cargo) cargo = `<@&${temvip.cargo}>`
               if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
               else vipname = temvip.vipname
            
               let vips = new Discord.MessageEmbed()
               if(cfg.permch){
              
            
               vips.setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
               .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
               .setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n **Canal vinculado:** ${canal}`)
               .setColor('ffffff')
           .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
               .setTimestamp();
           }else{

            vips.setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}`)
            .setColor('ffffff')
        
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();

           }
             
   
     
             let butao1 = new Discord.MessageButton()
            
             .setLabel("Criar cargo") 
               .setStyle("SECONDARY")
                .setCustomId("butao1")
               
        
            
           
             const row = new Discord.MessageActionRow()
             row.addComponents([butao1])
               
          
               
             
              
             message.reply({embeds:[vips],components:[row]}).then(msg => {
   
   
               const inf = (interaction) => interaction.user.id == message.author.id 
                
                const collector = msg.createMessageComponentCollector({ filter:inf});
                collector.on('collect', async(r,u) =>{
             switch (r.customId) {
               case 'butao1':
    

                    let temvipv2 = db.get(`newvips_${message.guild.id}_${message.member.id}`)
                    let vipcr;
                    if(cfg.cargoc){
                        if(temvipv2.canal){
                            vipcr = await message.guild.roles.create({
                                name: `vip do ${message.author.username}`,
                                color:`#000000`,
                               permissions: [],
                               position: cfg.cargoc+1,
                               reason: `Sistema de Vip ${client.user.username}`,
                                })   
                               let char = message.guild.channels.cache.get(temvipv2.canal)    
                               char.permissionOverwrites.edit(vipcr, {
                                CONNECT: true,
                                VIEW_CHANNEL: true
                                 })
                        }else{
                            vipcr =   await message.guild.roles.create({
                                name: `vip do ${message.author.username}`,
                                color:`#000000`,
                               permissions: [],
                               position: cfg.cargoc+1,
                               reason: `Sistema de Vip ${client.user.username}`,
                                })     
                        }
                    }else{
                        if(temvipv2.canal){
                            vipcr = await message.guild.roles.create({
                                name: `vip do ${message.author.username}`,
                                color:`#000000`,
                               permissions: [],
                             
                               reason: `Sistema de Vip ${client.user.username}`,
                                })   
                               let char = message.guild.channels.cache.get(temvipv2.canal)    
                               char.permissionOverwrites.edit(vipcr, {
                                CONNECT: true,
                                VIEW_CHANNEL: true
                                 })
                        }else{
                            vipcr =   await message.guild.roles.create({
                                name: `vip do ${message.author.username}`,
                                color:`#000000`,
                               permissions: [],
                    
                               reason: `Sistema de Vip ${client.user.username}`,
                                })     
                            }
                    
                    }
                    cargo = vipcr
                    let setcr = new Discord.MessageEmbed()
                               
                           
                    .setDescription(` Cargo do criado com sucesso.`)
                    .setColor('ffffff')
                    
                    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                    .setTimestamp();
                    message.channel.send({embeds:[setcr]}).then((msg)=>{
                        setTimeout(()=>{
                        
                        msg.delete()},5000)})
                    
                           
                        let vips = new Discord.MessageEmbed()
                        if(cfg.permch){
              
            
                            vips.setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
                            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
                            .setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n **Canal vinculado:** ${canal}`)
                            .setColor('ffffff')
                        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                            .setTimestamp();
                        }else{
             
                         vips.setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
                         .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
                         .setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}`)
                         .setColor('ffffff')
                     
                         .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                         .setTimestamp();
             
                        }
                          
                        r.message.edit({embeds:[vips]})
                        r.message.delete()
                    
                    db.set(`newvips_${message.guild.id}_${message.member.id}`,{vipname:temvipv2.vipname,canal:temvipv2.id,cargo:vipcr.id,vipdate:temvipv2.vipdate,duration:temvipv2.duration})
                    
                           
                                 break;  
             }
                })
                })   
        }else if(cfg.permcr&&!temvip.canal){

            let vipname;
            let canal =  'Nenhum'
        if(temvip.canal) canal = `<#${temvip.canal}>`
            let cargo = 'Nenhum'
            if(temvip.cargo) cargo = `<@&${temvip.cargo}>`
               if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
               else vipname = temvip.vipname
            
               let vips = new Discord.MessageEmbed()
                
             
               if(cfg.permcr){
              
            
                vips.setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
                .setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n **Canal vinculado:** ${canal}`)
                .setColor('ffffff')
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                .setTimestamp();
            }else{
 
             vips.setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
             .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
             .setDescription(` **VIP Atual:** ${vipname}\n **Canal vinculado:** ${canal}`)
             .setColor('ffffff')
         
             .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
             .setTimestamp();
 
            }
              
     
             let butao1 = new Discord.MessageButton()
            
             .setLabel("Criar canal") 
               .setStyle("SECONDARY")
                .setCustomId("butao1")
               
        
            
           
             const row = new Discord.MessageActionRow()
             row.addComponents([butao1])
               
          
               
             
              
             message.reply({embeds:[vips],components:[row]}).then(msg => {
   
   
               const inf = (interaction) => interaction.user.id == message.author.id 
                
                const collector = msg.createMessageComponentCollector({ filter:inf});
                collector.on('collect', async(r,u) =>{
             switch (r.customId) {
case 'butao1':
    
let temvip = db.get(`newvips_${message.guild.id}_${message.member.id}`)
let vipch;
if(cfg.categoria){
    if(temvip.cargo){
        vipch = await  message.guild.channels.create(`Vip ${message.author.username}`,{
  
        type:"GUILD_VOICE",
        parent:`${cfg.categoria}`, 
        permissionOverwrites: [
        {
        id: temvip.cargo,
        allow: [ "CONNECT","VIEW_CHANNEL"]
        },
        {
        id: message.guild.roles.everyone,
          deny: ["CONNECT", "VIEW_CHANNEL"]
        }
        ],
        })    
    }else{
        vipch = await message.guild.channels.create(`Vip ${message.author.username}`,{
  
            type:"GUILD_VOICE",
            parent:`${cfg.categoria}`, 
            permissionOverwrites: [
            {
            id: message.guild.roles.everyone,
              deny: ["CONNECT", "VIEW_CHANNEL"]
            }
            ],
            }) 
    }
}else{
    if(temvip.cargo){
        vipch = await   message.guild.channels.create(`Vip ${message.author.username}`,{
      
            type:"GUILD_VOICE",
            permissionOverwrites: [
            {
            id: temvip.cargo,
            allow: [ "CONNECT","VIEW_CHANNEL"]
            },
            {
            id: message.guild.roles.everyone,
              deny: ["CONNECT", "VIEW_CHANNEL"]
            }
            ],
            })    
        }else{
            vipch = await    message.guild.channels.create(`Vip ${message.author.username}`,{
      
                type:"GUILD_VOICE",
                permissionOverwrites: [
                {
                id: message.guild.roles.everyone,
                  deny: ["CONNECT", "VIEW_CHANNEL"]
                }
                ],
                }) 
        }

}
canal = vipch
let setch = new Discord.MessageEmbed()
           
       
.setDescription(` Canal do criado com sucesso.`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
message.channel.send({embeds:[setch]}).then((msg)=>{
    setTimeout(()=>{
    
    msg.delete()},5000)})

    let vips = new Discord.MessageEmbed()
    
    if(cfg.permcr){
              
            
        vips.setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n **Canal vinculado:** ${canal}`)
        .setColor('ffffff')
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
    }else{

     vips.setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
     .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
     .setDescription(` **VIP Atual:** ${vipname}\n **Canal vinculado:** ${canal}`)
     .setColor('ffffff')
 
     .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
     .setTimestamp();

    }
    r.message.edit({embeds:[vips]})
    r.message.delete()
  db.set(`newvips_${message.guild.id}_${message.member.id}`,{vipname:temvip.vipname,canal:vipch.id,cargo:temvip.cargo,vipdate:temvip.vipdate,duration:temvip.duration})

       
          
          break;

             }
            })
        })
    }else if(!cfg.permch && !cfg.permcr && !temvip.canal && !temvip.cargo){

        let vipname;

        if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
        else vipname = temvip.vipname
    
    
        let vips = new Discord.MessageEmbed()
        .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
       .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setDescription(`**VIP Atual:** ${vipname}\n **Tempo restante:** ${temvip.duration =='PERM'? 'Permanente':`<t:${Math.trunc((Date.parse(temvip.vipdate)+Number(temvip.duration))/1000)}:R>`}`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    message.reply({embeds:[vips]})
        }else{



 if(cfg.permch  && !temvip.canal ){


    let vipname;
    
        if(temvip.cargo) cargo = `<@&${temvip.cargo}>`
           if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
           else vipname = temvip.vipname
    let dikroler = message.guild.roles.cache.get(temvip.cargo)


    let vips = new Discord.MessageEmbed()
    .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
   .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n **Cor do cargo:** ${dikroler.hexColor}\n **Tempo restante:** ${temvip.duration =='PERM'? 'Permanente':`<t:${Math.trunc((Date.parse(temvip.vipdate)+Number(temvip.duration))/1000)}:R>`}`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();



       let butao1 = new Discord.MessageButton()
       .setLabel("Editar nome do cargo")
.setStyle("SECONDARY")
.setCustomId("butao1")

let butao2 =  new Discord.MessageButton()
.setLabel("Editar cor do cargo")
.setStyle("SECONDARY")
.setCustomId("butao2")


let fechar =  new Discord.MessageButton()
.setLabel("Fechar")
.setStyle("DANGER")
.setCustomId("fechar")
const row = new Discord.MessageActionRow()
row.addComponents([butao1,butao2])

const row1 = new Discord.MessageActionRow()
row2.addComponents([fechar])
message.reply({embeds:[vips],components:[row,row1]}).then(msg => {
setTimeout(()=>{msg.delete()},180000)

const inf = (interaction) => interaction.user.id == message.member.id

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(r,u) =>{
switch (r.customId) {

    case 'butao1':{

        r.deferUpdate()

        let cnh = new Discord.MessageEmbed()
                        
                    
        .setDescription(`**Qual nome deseja setar para o cargo ?**\n__Obs : __ O nome do cargo não pode ter mais de 50 caractere.`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        let udo =await  message.channel.send({embeds:[cnh]})
        setTimeout(()=>{udo.delete()},30000)
        const filter = res => {
        return res.author.id === message.author.id && res.content.length;
        };
        const canalnameCollector = await message.channel.awaitMessages({filter:filter,
        max: 1,
        time: 50000
        });
        
        
        
        let channel =  canalnameCollector.first().content
        
        let cnomesmais = new Discord.MessageEmbed()
        
        
        .setDescription(` O nome do cargo não pode ter mais de **50 caracteres**. `)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        if(channel.length > 50) return canalnameCollector.first().reply({embeds:[cnomesmais]}).then((msg)=>{
        udo.delete() 
        setTimeout(()=>{
        canalnameCollector.first().delete()
        msg.delete()},5000)})
        
        message.guild.roles.cache.get(temvip.cargo).setName(channel)
        let setch = new Discord.MessageEmbed()
        
        
        .setDescription(`Nome do cargo alterado com sucesso.`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
               
        canalnameCollector.first().reply({embeds:[setch]}).then((msg)=>{
            udo.delete() 
            setTimeout(()=>{
            canalnameCollector.first().delete()
            msg.delete()},5000)})
        
            let vipname;
    
            if(temvip.cargo) cargo = `<@&${temvip.cargo}>`
               if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
               else vipname = temvip.vipname
        let dikroler = message.guild.roles.cache.get(temvip.cargo)
    
    
        let vips = new Discord.MessageEmbed()
        .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
       .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setDescription(` **VIP Atual:** ${vipname}\n<:setar:918717053005873222> **Cargo vinculado:** ${cargo}\n<:setar:918717053005873222> **Cor do cargo:** ${dikroler.hexColor}\n<:setar:918717053005873222> **Tempo restante:** ${temvip.duration =='PERM'? 'Permanente':`<t:${Math.trunc((Date.parse(temvip.vipdate)+Number(temvip.duration))/1000)}:R>`}`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    r.message.edit({embeds:[vips]})
 
    }break;
    case 'butao2':{
        r.deferUpdate()

        let cnh1 = new Discord.MessageEmbed()
                        
                    
        .setDescription(` **Qual cor deseja setar para o cargo ?**\n__Obs : __ A cor precisa está em hexadecimal.`)
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
        
        
        
        let corcargo =  canalnameCollector1.first().content
        
        let cnomesmais1 = new Discord.MessageEmbed()
        
        
        .setDescription(`Está cor e invalida! `)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        if(!isHexColor(canalnameCollector1.first().content.replace('#',''),'either')) return canalnameCollector1.first().reply({embeds:[cnomesmais1]}).then((msg)=>{
            udoo.delete() 
        setTimeout(()=>{
            canalnameCollector1.first().delete()
        msg.delete()},5000)})
        

        let setchds23d = new Discord.MessageEmbed()
        
        
        .setDescription(` Cor do cargo alterado com sucesso.`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        
        canalnameCollector1.first().reply({embeds:[setchds23d]}).then((msg)=>{
            udoo.delete() 
        setTimeout(()=>{
            canalnameCollector1.first().delete()
        msg.delete()},5000)})
        message.guild.roles.cache.get(temvip.cargo).setColor(corcargo).then(async (x)=>{
        let vipname;
    
        if(temvip.cargo) cargo = `<@&${temvip.cargo}>`
           if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
           else vipname = temvip.vipname
    let dikroler = message.guild.roles.cache.get(temvip.cargo)


    let vips = new Discord.MessageEmbed()
    .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
   .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n **Cor do cargo:** ${dikroler.hexColor}\n **Tempo restante:** ${temvip.duration =='PERM'? 'Permanente':`<t:${Math.trunc((Date.parse(temvip.vipdate)+Number(temvip.duration))/1000)}:R>`}`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

    r.message.edit({embeds:[vips]})
})

    }break;

case'fechar':
{
    r.deferUpdate()
r.message.delete()

}break;

    }
})
})
     
    




}else if(cfg.permcr&&!temvip.cargo){
    let vipname;
    let limites;
    let canal =  'Nenhum'
if(temvip.canal) canal = `<#${temvip.canal}>`
  
       if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
       else vipname = temvip.vipname
let dikchannel = message.guild.channels.cache.get(temvip.canal)
if(dikchannel.userLimit==0) limites = 'Sem limite'
else limites = `${dikchannel.userLimit}/99`

       let vips = new Discord.MessageEmbed()
            .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
           .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
       .setDescription(`**VIP Atual:** ${vipname}\n **Canal vinculado:** ${canal}\n  **Limite de usuários:** ${limites}\n  **Tempo restante:** ${temvip.duration =='PERM'? 'Permanente':`<t:${Math.trunc((Date.parse(temvip.vipdate)+Number(temvip.duration))/1000)}:R>`}`)
       .setColor('ffffff')
   
       .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();
     



let butao1 =  new Discord.MessageButton()
.setLabel("Editar nome do canal")
.setStyle("SECONDARY")
.setCustomId("butao1")
let butao2 =  new Discord.MessageButton()
.setLabel("Editar limite do canal")
.setStyle("SECONDARY")
.setCustomId("butao2")

let fechar =  new Discord.MessageButton()
.setLabel("Fechar")
.setStyle("DANGER")
.setCustomId("fechar")
const row = new Discord.MessageActionRow()
row.addComponents([butao1,butao2])

const row1 = new Discord.MessageActionRow()
row1.addComponents([fechar])
message.reply({embeds:[vips],components:[row,row1]}).then(msg => {
setTimeout(()=>{msg.delete()},180000)

const inf = (interaction) => interaction.user.id == message.member.id

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(r,u) =>{
switch (r.customId) {


    case 'butao1':{

        r.deferUpdate()

        let canalrh = new Discord.MessageEmbed()
                        
                    
        .setDescription(`**Qual nome deseja setar para o canal ?**\n__Obs : __ O nome do canal não pode ter mais de 50 caractere.`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        let idai =await  message.channel.send({embeds:[canalrh]})
        setTimeout(()=>{idai.delete()},30000)
        const filter5 = res => {
        return res.author.id === message.author.id && res.content.length;
        };
        const canalnameCollector3 = await message.channel.awaitMessages({filter:filter5,
        max: 1,
        time: 50000
        });
        
        
        
        let canies =  canalnameCollector3.first().content
        
        let adada = new Discord.MessageEmbed()
        
        
        .setDescription(`O nome do canal não pode ter mais de **50 caracteres**. `)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        if(canies.length > 50) return canalnameCollector.first().reply({embeds:[adada]}).then((msg)=>{
            idai.delete() 
        setTimeout(()=>{
            canalnameCollector3.first().delete()
        msg.delete()},5000)})
        
        message.guild.channels.cache.get(temvip.canal).setName(canies)
        let setch3 = new Discord.MessageEmbed()
        
        
        .setDescription(`Nome do canal alterado com sucesso.`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        
        canalnameCollector3.first().reply({embeds:[setch3]}).then((msg)=>{
            idai.delete() 
        setTimeout(()=>{
            canalnameCollector3.first().delete()
        msg.delete()},5000)})
 
        let vipname;
        let limites;
        let canal =  'Nenhum'
    if(temvip.canal) canal = `<#${temvip.canal}>`
      
           if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
           else vipname = temvip.vipname
    let dikchannel = message.guild.channels.cache.get(temvip.canal)
    if(dikchannel.userLimit==0) limites = 'Sem limite'
    else limites = `${dikchannel.userLimit}/99`
    
           let vips = new Discord.MessageEmbed()
                .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
               .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
           .setDescription(`**VIP Atual:** ${vipname}\n **Canal vinculado:** ${canal}\n **Limite de usuários:** ${limites}\n **Tempo restante:** ${temvip.duration =='PERM'? 'Permanente':`<t:${Math.trunc((Date.parse(temvip.vipdate)+Number(temvip.duration))/1000)}:R>`}`)
           .setColor('ffffff')
       
           .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
           .setTimestamp();
         

    r.message.edit({embeds:[vips]})
    }break;
    case'butao2':{

        r.deferUpdate()

        let canalrh = new Discord.MessageEmbed()
                        
                    
        .setDescription(` **Qual o limite de membros deseja setar para o canal ?**\n__Obs : __ O máximo de 99 membros`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        let idai =await  message.channel.send({embeds:[canalrh]})
        setTimeout(()=>{idai.delete()},30000)
        const filter5 = res => {
        return res.author.id === message.author.id && res.content.length;
        };
        const canalnameCollector3 = await message.channel.awaitMessages({filter:filter5,
        max: 1,
        time: 50000
        });
        
        
        
        let canies =  canalnameCollector3.first().content
        





        if (canies.includes('-')) {


            let notuser = new Discord.MessageEmbed()
                          
                      
            .setDescription(`Você não pode colocar um número de membros negativos.  `)
            .setColor('ffffff')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
            
             return canalnameCollector.first().reply({embeds:[notuser]}).then((msg)=>{
                idai.delete() 
            setTimeout(()=>{
                canalnameCollector3.first().delete()
            msg.delete()},5000)})
              
              }
              if (canies.includes('.')) {
          
          
            let notuser = new Discord.MessageEmbed()
                          
                      .setTitle(`<Tente novamente !`)
            .setDescription(`O caractere " . " não é um número!`)
            .setColor('ffffff')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
            
             return canalnameCollector.first().reply({embeds:[notuser]}).then((msg)=>{
                idai.delete() 
            setTimeout(()=>{
                canalnameCollector3.first().delete()
            msg.delete()},5000)})
              }
                  if (canies.includes(',')){
          
          
            let notuser = new Discord.MessageEmbed()
                          
                      .setTitle(`Tente novamente !`)
            .setDescription(`O caractere " , " não é um número!  `)
            .setColor('ffffff')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
            
             return    canalnameCollector.first().reply({embeds:[notuser]}).then((msg)=>{
                idai.delete() 
            setTimeout(()=>{
                canalnameCollector3.first().delete()
            msg.delete()},5000)})
              }
          
          
              if (isNaN(canies)){
          
          
            let notuser = new Discord.MessageEmbed()
                          
            .setDescription(`Você precisa colocar uma **quantia** de membros válido!`)
            .setColor('ffffff')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
            
             return  canalnameCollector.first().reply({embeds:[notuser]}).then((msg)=>{
                idai.delete() 
            setTimeout(()=>{
                canalnameCollector3.first().delete()
            msg.delete()},5000)})
              }

        let adada = new Discord.MessageEmbed()
        
        
        .setDescription(` Você não pode colocar um limite maior que 99 membros**. `)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        if(canies > 99) return canalnameCollector.first().reply({embeds:[adada]}).then((msg)=>{
            idai.delete() 
        setTimeout(()=>{
            canalnameCollector3.first().delete()
        msg.delete()},5000)})
        

        let setch3 = new Discord.MessageEmbed()
        
        
        .setDescription(` Limite do canal alterado com sucesso.`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        
        canalnameCollector3.first().reply({embeds:[setch3]}).then((msg)=>{
            idai.delete() 
        setTimeout(()=>{
            canalnameCollector3.first().delete()
        msg.delete()},5000)})
        message.guild.channels.cache.get(temvip.canal).setUserLimit(canies).then(async (x)=>{
            let vipname;
            let limites;
            let canal =  'Nenhum'
        if(temvip.canal) canal = `<#${temvip.canal}>`
          
               if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
               else vipname = temvip.vipname
        let dikchannel = message.guild.channels.cache.get(temvip.canal)
        if(dikchannel.userLimit==0) limites = 'Sem limite'
        else limites = `${dikchannel.userLimit}/99`
        
               let vips = new Discord.MessageEmbed()
                    .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
                   .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
               .setDescription(`**VIP Atual:** ${vipname}\n **Canal vinculado:** ${canal}\n  **Limite de usuários:** ${limites}\n **Tempo restante:** ${temvip.duration =='PERM'? 'Permanente':`<t:${Math.trunc((Date.parse(temvip.vipdate)+Number(temvip.duration))/1000)}:R>`}`)
               .setColor('ffffff')
           
               .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
               .setTimestamp();
             

    r.message.edit({embeds:[vips]})
})
    }break;
case'fechar':
{
    r.deferUpdate()
r.message.delete()

}break;

    }
})
})
     
    

}else{
    let vipname;
    let limites;
    let canal =  'Nenhum'
if(temvip.canal) canal = `<#${temvip.canal}>`
    let cargo = 'Nenhum'
    if(temvip.cargo) cargo = `<@&${temvip.cargo}>`
       if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
       else vipname = temvip.vipname
let dikrole = message.guild.roles.cache.get(temvip.cargo)
let dikchannel = message.guild.channels.cache.get(temvip.canal)
if(dikchannel.userLimit==0) limites = 'Sem limite'
else limites = `${dikchannel.userLimit}/99`

       let vips = new Discord.MessageEmbed()
            .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
           .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
       .setDescription(` **VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n **Cor do cargo:** ${dikrole.hexColor}\n **Canal vinculado:** ${canal}\n **Limite de usuários:** ${limites}\n **Tempo restante:** ${temvip.duration =='PERM'? 'Permanente':`<t:${Math.trunc((Date.parse(temvip.vipdate)+Number(temvip.duration))/1000)}:R>`}`)
       .setColor('ffffff')
   
       .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();
     



       let butao1 = new Discord.MessageButton()
       .setLabel("Editar nome do cargo")
.setStyle("SECONDARY")
.setCustomId("butao1")

let butao2 =  new Discord.MessageButton()
.setLabel("Editar cor do cargo")
.setStyle("SECONDARY")
.setCustomId("butao2")
let butao3 =  new Discord.MessageButton()
.setLabel("Editar nome do canal")
.setStyle("SECONDARY")
.setCustomId("butao3")
let butao4 =  new Discord.MessageButton()
.setLabel("Editar limite do canal")
.setStyle("SECONDARY")
.setCustomId("butao4")

let fechar =  new Discord.MessageButton()
.setLabel("Fechar")
.setStyle("DANGER")
.setCustomId("fechar")
const row = new Discord.MessageActionRow()
row.addComponents([butao1,butao2])
const row1 = new Discord.MessageActionRow()
row1.addComponents([butao3,butao4])
const row2 = new Discord.MessageActionRow()
row2.addComponents([fechar])
message.reply({embeds:[vips],components:[row,row1,row2]}).then(msg => {
setTimeout(()=>{msg.delete()},180000)

const inf = (interaction) => interaction.user.id == message.member.id

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(r,u) =>{
switch (r.customId) {

    case 'butao1':{

        r.deferUpdate()

        let cnh = new Discord.MessageEmbed()
                        
                    
        .setDescription(`**Qual nome deseja setar para o cargo ?**\n__Obs : __ O nome do cargo não pode ter mais de 50 caractere.`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        let udo =await  message.channel.send({embeds:[cnh]})
        setTimeout(()=>{udo.delete()},30000)
        const filter2 = res => {
        return res.author.id === message.author.id && res.content.length;
        };
        const canalnameCollector = await message.channel.awaitMessages({filter:filter2,
        max: 1,
        time: 50000
        });
        
        
        
        let channel =  canalnameCollector.first().content
        
        let cnomesmais = new Discord.MessageEmbed()
        
        
        .setDescription(`O nome do cargo não pode ter mais de **50 caracteres**. `)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        if(channel.length > 50) return canalnameCollector.first().reply({embeds:[cnomesmais]}).then((msg)=>{
        udo.delete() 
        setTimeout(()=>{
        canalnameCollector.first().delete()
        msg.delete()},5000)})
        
        message.guild.roles.cache.get(temvip.cargo).setName(channel)
        let setch = new Discord.MessageEmbed()
        
        
        .setDescription(`Nome do cargo alterado com sucesso.`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
               
        canalnameCollector.first().reply({embeds:[setch]}).then((msg)=>{
            udo.delete() 
            setTimeout(()=>{
            canalnameCollector.first().delete()
            msg.delete()},5000)})
        
        let vipname;
        let limites;
        let canal =  'Nenhum'
    if(temvip.canal) canal = `<#${temvip.canal}>`
        let cargo = 'Nenhum'
        if(temvip.cargo) cargo = `<@&${temvip.cargo}>`
           if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
           else vipname = temvip.vipname
    let dikrole = message.guild.roles.cache.get(temvip.cargo)
    let dikchannel = message.guild.channels.cache.get(temvip.canal)
    if(dikchannel.userLimit==0) limites = 'Sem limite'
    else limites = `${dikchannel.userLimit}/99`

    let vips = new Discord.MessageEmbed()
    .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
   .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n **Cor do cargo:** ${dikrole.hexColor}\n **Canal vinculado:** ${canal}\n **Limite de usuários:** ${limites}\n **Tempo restante:** ${temvip.duration =='PERM'? 'Permanente':`<t:${Math.trunc((Date.parse(temvip.vipdate)+Number(temvip.duration))/1000)}:R>`}`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

    r.message.edit({embeds:[vips]})
 
    }break;
    case 'butao2':{
        r.deferUpdate()

        let cnh1 = new Discord.MessageEmbed()
                        
                    
        .setDescription(` **Qual cor deseja setar para o cargo ?**\n__Obs : __ A cor precisa está em hexadecimal.`)
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
        
        
        
        let corcargo =  canalnameCollector1.first().content
        
        let cnomesmais1 = new Discord.MessageEmbed()
        
        
        .setDescription(`Está cor e invalida! `)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        if(!isHexColor(canalnameCollector1.first().content.replace('#',''),'either')) return canalnameCollector1.first().reply({embeds:[cnomesmais1]}).then((msg)=>{
            udoo.delete() 
        setTimeout(()=>{
            canalnameCollector1.first().delete()
        msg.delete()},5000)})
        

        let setchds23d = new Discord.MessageEmbed()
        
        
        .setDescription(`Cor do cargo alterado com sucesso.`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        
        canalnameCollector1.first().reply({embeds:[setchds23d]}).then((msg)=>{
            udoo.delete() 
        setTimeout(()=>{
            canalnameCollector1.first().delete()
        msg.delete()},5000)})
        message.guild.roles.cache.get(temvip.cargo).setColor(corcargo).then(async (x)=>{
        let vipname;
        let limites;
        let canal =  'Nenhum'
    if(temvip.canal) canal = `<#${temvip.canal}>`
        let cargo = 'Nenhum'
        if(temvip.cargo) cargo = `<@&${temvip.cargo}>`
           if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
           else vipname = temvip.vipname
    let dikroler = message.guild.roles.cache.get(temvip.cargo)
    let dikchannel = message.guild.channels.cache.get(temvip.canal)
    if(dikchannel.userLimit==0) limites = 'Sem limite'
    else limites = `${dikchannel.userLimit}/99`
    let vips = new Discord.MessageEmbed()
    .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
   .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n **Cor do cargo:** ${dikroler.hexColor}\n **Canal vinculado:** ${canal}\n **Limite de usuários:** ${limites}\n **Tempo restante:** ${temvip.duration =='PERM'? 'Permanente':`<t:${Math.trunc((Date.parse(temvip.vipdate)+Number(temvip.duration))/1000)}:R>`}`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

    r.message.edit({embeds:[vips]})
})

    }break;
    case 'butao3':{

        r.deferUpdate()

        let canalrh = new Discord.MessageEmbed()
                        
                    
        .setDescription(` **Qual nome deseja setar para o canal ?**\n__Obs : __ O nome do canal não pode ter mais de 50 caractere.`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        let idai =await  message.channel.send({embeds:[canalrh]})
        setTimeout(()=>{idai.delete()},30000)
        const filter5 = res => {
        return res.author.id === message.author.id && res.content.length;
        };
        const canalnameCollector3 = await message.channel.awaitMessages({filter:filter5,
        max: 1,
        time: 50000
        });
        
        
        
        let canies =  canalnameCollector3.first().content
        
        let adada = new Discord.MessageEmbed()
        
        
        .setDescription(`O nome do canal não pode ter mais de **50 caracteres**. `)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        if(canies.length > 50) return canalnameCollector.first().reply({embeds:[adada]}).then((msg)=>{
            idai.delete() 
        setTimeout(()=>{
            canalnameCollector3.first().delete()
        msg.delete()},5000)})
        
        message.guild.channels.cache.get(temvip.canal).setName(canies)
        let setch3 = new Discord.MessageEmbed()
        
        
        .setDescription(`Nome do canal alterado com sucesso.`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        
        canalnameCollector3.first().reply({embeds:[setch3]}).then((msg)=>{
            idai.delete() 
        setTimeout(()=>{
            canalnameCollector3.first().delete()
        msg.delete()},5000)})
 
        let vipname;
        let limites;
        let canal =  'Nenhum'
    if(temvip.canal) canal = `<#${temvip.canal}>`
        let cargo = 'Nenhum'
        if(temvip.cargo) cargo = `<@&${temvip.cargo}>`
           if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
           else vipname = temvip.vipname
    let dikrole = message.guild.roles.cache.get(temvip.cargo)
    let dikchannel = message.guild.channels.cache.get(temvip.canal)
    if(dikchannel.userLimit==0) limites = 'Sem limite'
    else limites = `${dikchannel.userLimit}/99`


    let vips = new Discord.MessageEmbed()
    .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
   .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**VIP Atual:** ${vipname}\n**Cargo vinculado:** ${cargo}\n **Cor do cargo:** ${dikrole.hexColor}\n **Canal vinculado:** ${canal}\n  **Limite de usuários:** ${limites}\n **Tempo restante:** ${temvip.duration =='PERM'? 'Permanente':`<t:${Math.trunc((Date.parse(temvip.vipdate)+Number(temvip.duration))/1000)}:R>`}`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

    r.message.edit({embeds:[vips]})
    }break;
    case'butao4':{

        r.deferUpdate()

        let canalrh = new Discord.MessageEmbed()
                        
                    
        .setDescription(`**Qual o limite de membros deseja setar para o canal ?**\n__Obs : __ O máximo de 99 membros`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        let idai =await  message.channel.send({embeds:[canalrh]})
        setTimeout(()=>{idai.delete()},30000)
        const filter5 = res => {
        return res.author.id === message.author.id && res.content.length;
        };
        const canalnameCollector3 = await message.channel.awaitMessages({filter:filter5,
        max: 1,
        time: 50000
        });
        
        
        
        let canies =  canalnameCollector3.first().content
        





        if (canies.includes('-')) {


            let notuser = new Discord.MessageEmbed()
                          
                      
            .setDescription(` Você não pode colocar um número de membros negativos.  `)
            .setColor('ffffff')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
            
             return canalnameCollector.first().reply({embeds:[notuser]}).then((msg)=>{
                idai.delete() 
            setTimeout(()=>{
                canalnameCollector3.first().delete()
            msg.delete()},5000)})
              
              }
              if (canies.includes('.')) {
          
          
            let notuser = new Discord.MessageEmbed()
                          
                      .setTitle(` Tente novamente !`)
            .setDescription(`O caractere " . " não é um número!`)
            .setColor('ffffff')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
            
             return canalnameCollector.first().reply({embeds:[notuser]}).then((msg)=>{
                idai.delete() 
            setTimeout(()=>{
                canalnameCollector3.first().delete()
            msg.delete()},5000)})
              }
                  if (canies.includes(',')){
          
          
            let notuser = new Discord.MessageEmbed()
                          
                      .setTitle(` Tente novamente !`)
            .setDescription(`O caractere " , " não é um número!  `)
            .setColor('ffffff')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
            
             return    canalnameCollector.first().reply({embeds:[notuser]}).then((msg)=>{
                idai.delete() 
            setTimeout(()=>{
                canalnameCollector3.first().delete()
            msg.delete()},5000)})
              }
          
          
              if (isNaN(canies)){
          
          
            let notuser = new Discord.MessageEmbed()
                          
            .setDescription(`Você precisa colocar uma **quantia** de membros válido!`)
            .setColor('ffffff')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
            
             return  canalnameCollector.first().reply({embeds:[notuser]}).then((msg)=>{
                idai.delete() 
            setTimeout(()=>{
                canalnameCollector3.first().delete()
            msg.delete()},5000)})
              }

        let adada = new Discord.MessageEmbed()
        
        
        .setDescription(`Você não pode colocar um limite maior que 99 membros**. `)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        if(canies > 99) return canalnameCollector.first().reply({embeds:[adada]}).then((msg)=>{
            idai.delete() 
        setTimeout(()=>{
            canalnameCollector3.first().delete()
        msg.delete()},5000)})
        

        let setch3 = new Discord.MessageEmbed()
        
        
        .setDescription(` Limite do canal alterado com sucesso.`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        
        
        
        canalnameCollector3.first().reply({embeds:[setch3]}).then((msg)=>{
            idai.delete() 
        setTimeout(()=>{
            canalnameCollector3.first().delete()
        msg.delete()},5000)})
        message.guild.channels.cache.get(temvip.canal).setUserLimit(canies).then(async (x)=>{
        let vipname;
        let limites;
        let canal =  'Nenhum'
    if(temvip.canal) canal = `<#${temvip.canal}>`
        let cargo = 'Nenhum'
        if(temvip.cargo) cargo = `<@&${temvip.cargo}>`
           if(cfg.cargo) vipname = `<@&${cfg.cargo}>`
           else vipname = temvip.vipname
    let dikrole = message.guild.roles.cache.get(temvip.cargo)
    let dikchannel = message.guild.channels.cache.get(temvip.canal)
    if(dikchannel.userLimit==0) limites = 'Sem limite'
    else limites = `${dikchannel.userLimit}/99`
    let vips = new Discord.MessageEmbed()
    .setAuthor(message.author.username,message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
   .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**VIP Atual:** ${vipname}\n **Cargo vinculado:** ${cargo}\n **Cor do cargo:** ${dikrole.hexColor}\n  **Canal vinculado:** ${canal}\n  **Limite de usuários:** ${limites}\n  **Tempo restante:** ${temvip.duration =='PERM'? 'Permanente':`<t:${Math.trunc((Date.parse(temvip.vipdate)+Number(temvip.duration))/1000)}:R>`}`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

    r.message.edit({embeds:[vips]})
})
    }break;
case'fechar':
{
    r.deferUpdate()
r.message.delete()

}break;

    }
})
})
     
    
}





    }


    }
}