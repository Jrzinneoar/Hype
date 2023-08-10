const Discord = require("discord.js")
const db = require("quick.db")
const {findMember} = require('../../script/utils')
const { default_prefix } = require('../../config.json');
module.exports = {

  
    nome: "registrar",
    alternativas: ["r"],
    run: async  (client, message, args) => {
      let prefix = db.get(`prefix_${message.guild.id}`)
      if(prefix === null) prefix = default_prefix;
      let advchannel = db.get(`channelregister_${message.guild.id}`);

      if (advchannel == null) {
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Não encontrei nenhum canal de registro! Utilize ${prefix}register config para selecionar o canal.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
      
    return message.reply({embeds:[limite]});
     }
        let statu = db.get(`statusreaction_${message.guild.id}`)
     if (!statu) {
      const limite = new Discord.MessageEmbed()
      .setColor('ffffff')
      .setDescription(`O sistema de registro por reação está desabilitado. use o comando **${prefix}register reaction on** para habilitar`)
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
        
      return message.reply({embeds:[limite]});
       }
       let regirole = db.get(`cargoregistrator_${message.guild.id}`)
       if (!regirole) {
        const limite = new Discord.MessageEmbed()
        .setColor('ffffff')
        .setDescription(` Este servidor não possui cargo registrador configurado. use o comando **${prefix}register config** para configurar`)
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
          
        return message.reply({embeds:[limite]});
         }
         if (!message.member.roles.cache.find(r => r.id == regirole)) {
          const limite = new Discord.MessageEmbed()
          .setColor('ffffff')
          .setDescription(`Para executar este comando precisa ser um registrador !`)
          .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
          .setTimestamp();
            
          return message.reply({embeds:[limite]}); 
        }


     let paginas = db.all().filter(data => data.ID.startsWith(`paginasregister_${message.guild.id}`)).sort((a, b) => b.data - a.data).filter(x=>db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${x.ID.split("_")[2]}`)).sort((a, b) => b.data - a.data).length!=0).sort((a, b) => b.data - a.data)

     if (paginas == 0) {
      const limite = new Discord.MessageEmbed()
      .setColor('ffffff')
      .setDescription(`Não encontrei nenhuma pagina de registro por reação.`)
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
        
      return message.reply({embeds:[limite]});
       }
          
  
       var name = args.join(' ').trim();
      var user  = await findMember(message, name);
      let notuser = new Discord.MessageEmbed()
                      
                  
                      .setDescription(`Mencione um usuário existente.`)
                      .setColor('ffffff')
      
                      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                      .setTimestamp();
      
      if (!user) return message.reply({embeds:[notuser]});

      let nobot = new Discord.MessageEmbed()
				
			
      .setDescription(`Este comando não foi feito para ser utilizado com bot `)
      .setColor('ffffff')
      
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
      if(user.user.bot === true) return  message.reply({embeds:[nobot]});

  if(paginas.length == 1){
let pagina = paginas[0].ID.split("_")[2]



let roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagina}`)).sort((a, b) => b.data - a.data);


let cargos = ''

let emoji = ['<a:0_:1132093745131692103>',
'<a:1_:1132093814278983800>', 
'<a:2_:1132093884705558628>',
'<a:3_:1132093954070945934>',
'<a:4_:1132094036753260544>',
'<a:5_:1132094083733672017>',
'<a:6_:1132094166046888006>',
'<a:7_:1132094236058198088>',
'<a:8_:1132094342610309233>',
'<a:9_:1132094391666872360>']

for (let i = 0; i < roles.length; i++) {

  let cargo = roles[i].ID.split("_")[3]
 

  cargos += `${emoji[i]} | <@&${cargo}>\n`
 
}
let pv = [];
let pagnumber = 1 


      let page = new Discord.MessageEmbed()
                      
                  .setTitle(`Sistema de Registro - ${client.user.username}`)
      .setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Página:** ${pagina}\n\n${cargos}\n\n${pv!==''?'Sem cargos adicionados.':pv.join(', ')}\n\n*Para remover um cargo pendente basta reagir no mesmo número.*`)
      .setColor('ffffff')

      .setFooter(`Página:"${pagina}"-(${pagnumber}/${paginas.length})`)

      if(roles.length >5){
        const row1 = new Discord.MessageActionRow()
      const row = new Discord.MessageActionRow()

      for (let i = 0; i < roles.length; i++) {

if(i>4){
    row1.addComponents([

        new Discord.MessageButton()
        .setEmoji(emoji[i])
        .setStyle("SECONDARY")
        .setCustomId(`butao${i}`)
    ])

      

}else{
    row.addComponents([

        new Discord.MessageButton()
        .setEmoji(emoji[i])
        .setStyle("SECONDARY")
        .setCustomId(`butao${i}`)
    ])

}

}
let registrar =  new Discord.MessageButton()
.setEmoji('<:icons_Correct:1138838312245788712>')
.setStyle("SUCCESS")
.setLabel('Registrar')
.setCustomId("registrar")
 const regysterbutton = new Discord.MessageActionRow()
 regysterbutton.addComponents([registrar])
    message.reply({embeds:[page],components:[regysterbutton,row,row1]})    .then(msg => {
      setTimeout(()=>{msg.delete()},600000)
 
 
        const inf = (interaction) => interaction.user.id == message.member.id
         
         const collector = msg.createMessageComponentCollector({ filter:inf,time:600000});
         collector.on('collect', async(r,u) =>{
          switch (r.customId) {
            case`registrar`:
            {
              r.deferUpdate()
        r.message.delete()
              let page = new Discord.MessageEmbed()
                        
              .setDescription(`${message.author}, registro efetuado com sucesso!    `)
        
         .setColor('ffffff')
        
         .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
         .setTimestamp();
         message.channel.send({embeds:[page]}).then(msg => {
          setTimeout(()=>{msg.delete()},6000)
        })   
        
         let channelregister = db.get(`channelregister_${message.guild.id}`)
        
        db.add(`quantidaderegistros_${message.guild.id}_${message.author.id}`,1)
        
         
        
        let registrados = db.get(`quantidaderegistros_${message.guild.id}_${message.author.id}`)
        
        let cargosadicionads = []
        pv.forEach(a =>{
         cargosadicionads.push(`<@&${a}>`)
        })
        let regis = new Discord.MessageEmbed()
          .setTitle(`Registro efetuado!`)
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
        .setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Registros:** \`${registrados}\`\n\n<:maistotal:919035481705021510> **Cargos recebidos:**\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}`)
        
        .setColor('ffffff')
        
        .setFooter(`Registros | ${message.guild.name}`)
        
         client.channels.cache.get(channelregister).send({embeds:[regis]})
        
              pv.forEach(a =>{
                user.roles.add(a)
                })
              }
              user.roles.add(db.get(`roleregistrado_${message.guild.id}`))
              user.roles.remove(db.get(`notroleregister_${message.guild.id}`))
              await message.channel.messages.fetch({limit: 100 }).then(async fetched => {
                const notPinned = fetched.filter(fetchedMsg => fetchedMsg.author.id == user.id);
            
            await message.channel.bulkDelete(notPinned, true);
        
        
              })
        
              break;   
          }
         
            for (let i = 0; i < roles.length; i++) {
            switch (r.customId) {
                case`butao${i}`:
                r.deferUpdate()

                let cargo = roles[i].ID.split("_")[3]
                
              

                 if(pv.find(element=> element == cargo)){
                  
                 delete pv[pv.indexOf(cargo)]

                 }else{
                  pv.push(cargo)

                 }
                 let cargosadicionads = []
                 pv.forEach(a =>{
                  cargosadicionads.push(`<@&${a}>`)
                 })
                 let page = new Discord.MessageEmbed()
                      
                  .setTitle(`Sistema de Registro - ${client.user.username}`)
      .setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Página:** ${pagina}\n\n${cargos}\n\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}\n\n*Para remover um cargo pendente basta reagir no mesmo número.*`)
      .setColor('ffffff')

      .setFooter(`Página:"${pagina}"-(${pagnumber}/${paginas.length})`)
      .setTimestamp();
                 r.message.edit({embeds:[page]})
            
                 break;      
        }
      
      
    }
      
  
          
        })
    })


     
      }else{
        const row = new Discord.MessageActionRow()
   

      for (let i = 0; i < roles.length; i++) {


        row.addComponents([

            new Discord.MessageButton()
            .setEmoji(emoji[i])
            .setStyle("SECONDARY")
            .setCustomId(`butao${i}`)
        ])
       
       
      }
      let registrar =  new Discord.MessageButton()
      .setEmoji('<:icons_Correct:1138838312245788712>')
      .setStyle("SUCCESS")
      .setLabel('Registrar')
      .setCustomId("registrar")
       const regysterbutton = new Discord.MessageActionRow()
       regysterbutton.addComponents([registrar])
      message.reply({embeds:[page],components:[regysterbutton,row]}) .then(msg => {
        setTimeout(()=>{msg.delete()},600000)
 
 
        const inf = (interaction) => interaction.user.id == message.member.id
         
         const collector = msg.createMessageComponentCollector({ filter:inf,time:600000});
         collector.on('collect', async(r,u) =>{
          switch (r.customId) {
            case`registrar`:
            {
              r.deferUpdate()
        r.message.delete()
              let page = new Discord.MessageEmbed()
                        
              .setDescription(`${message.author}, registro efetuado com sucesso!    `)
        
         .setColor('ffffff')
        
         .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
         .setTimestamp();
         message.channel.send({embeds:[page]}).then(msg => {
          setTimeout(()=>{msg.delete()},6000)
        })   
        
         let channelregister = db.get(`channelregister_${message.guild.id}`)
        
        db.add(`quantidaderegistros_${message.guild.id}_${message.author.id}`,1)
        
         
        
        let registrados = db.get(`quantidaderegistros_${message.guild.id}_${message.author.id}`)
        
        let cargosadicionads = []
        pv.forEach(a =>{
         cargosadicionads.push(`<@&${a}>`)
        })
        let regis = new Discord.MessageEmbed()
          .setTitle(`Registro efetuado!`)
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
        .setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Registros:** \`${registrados}\`\n\n<:maistotal:919035481705021510> **Cargos recebidos:**\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}`)
        
        .setColor('ffffff')
        
        .setFooter(`Registros | ${message.guild.name}`)
        
         client.channels.cache.get(channelregister).send({embeds:[regis]})
        
              pv.forEach(a =>{
                user.roles.add(a)
                })
              }
              user.roles.add(db.get(`roleregistrado_${message.guild.id}`))
              user.roles.remove(db.get(`notroleregister_${message.guild.id}`))
              await message.channel.messages.fetch({limit: 100 }).then(async fetched => {
                const notPinned = fetched.filter(fetchedMsg => fetchedMsg.author.id == user.id);
            
            await message.channel.bulkDelete(notPinned, true);
        
        
              })
        
              break;   
          }
         
            for (let i = 0; i < roles.length; i++) {
            switch (r.customId) {
                case`butao${i}`:
                r.deferUpdate()

                let cargo = roles[i].ID.split("_")[3]
                
              

                 if(pv.find(element=> element == cargo)){
                  
                 delete pv[pv.indexOf(cargo)]

                 }else{
                  pv.push(cargo)

                 }
                 let cargosadicionads = []
                 pv.forEach(a =>{
                  cargosadicionads.push(`<@&${a}>`)
                 })
                 let page = new Discord.MessageEmbed()
                      
                  .setTitle(`Sistema de Registro - ${client.user.username}`)
      .setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Página:** ${pagina}\n\n${cargos}\n\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}\n\n*Para remover um cargo pendente basta reagir no mesmo número.*`)
      .setColor('ffffff')

        
      .setFooter(`Página:"${pagina}"-(${pagnumber}/${paginas.length})`)
      .setTimestamp();
                 r.message.edit({embeds:[page]})
            
                 break;      
        }
      
      
    }
      
  
          
        })
    })

    }



  }else{



    let pagina = paginas[0].ID.split("_")[2]



    let roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagina}`)).sort((a, b) => b.data - a.data);
    
    
    let cargos = ''
    
    let emoji = ['<a:0_:1132093745131692103>',
    '<a:1_:1132093814278983800>', 
    '<a:2_:1132093884705558628>',
    '<a:3_:1132093954070945934>',
    '<a:4_:1132094036753260544>',
    '<a:5_:1132094083733672017>',
    '<a:6_:1132094166046888006>',
    '<a:7_:1132094236058198088>',
    '<a:8_:1132094342610309233>',
    '<a:9_:1132094391666872360>']
    
    for (let i = 0; i < roles.length; i++) {
    
      let cargo = roles[i].ID.split("_")[3]
     
    
      cargos += `${emoji[i]} | <@&${cargo}>\n`
     
    }
    const pv = [];
    let pagnumber = 1 
    
    
          let page = new Discord.MessageEmbed()
                          
                      .setTitle(`Sistema de Registro - ${client.user.username}`)
          .setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Página:** ${pagina}\n\n${cargos}\n\n${pv!==''?'Sem cargos adicionados.':pv.join(', ')}\n\n*Para remover um cargo pendente basta reagir no mesmo número.*`)
          .setColor('ffffff')
    
          .setFooter(`Página:"${pagina}"-(${pagnumber}/${paginas.length})`)

let butao1 = new Discord.MessageButton()
.setEmoji('<:Icon_Previous:1138843234148306984>')
.setStyle("SUCCESS")
.setLabel('Voltar')
.setCustomId("butao1")

let butao2 =  new Discord.MessageButton()
.setDisabled(true)
.setLabel('-')
.setStyle("SECONDARY")
.setCustomId("butao2")
let butao3 =  new Discord.MessageButton()
.setEmoji('<:icons_Correct:1138838312245788712>')
.setStyle("SUCCESS")
.setLabel('Registrar')
.setCustomId("butao3")
let butao4 =  new Discord.MessageButton()
.setDisabled(true)
.setLabel('-')
.setStyle("SECONDARY")
.setCustomId("butao4")
let butao5 =  new Discord.MessageButton()
.setEmoji('<:Icon_Next:1138842656752017438>')
.setStyle("SUCCESS")
.setLabel('Avançar')
.setCustomId("butao5")
if(roles.length >5){
const row2 = new Discord.MessageActionRow()
const row1 = new Discord.MessageActionRow()

for (let i = 0; i < roles.length; i++) {

if(i>4){
  row2.addComponents([

  new Discord.MessageButton()
  .setEmoji(emoji[i])
  .setStyle("SECONDARY")
  .setCustomId(`number${i}`)
])



}else{
  row1.addComponents([

  new Discord.MessageButton()
  .setEmoji(emoji[i])
  .setStyle("SECONDARY")
  .setCustomId(`number${i}`)
])

}
}

const row = new Discord.MessageActionRow()
row.addComponents([butao1,butao2,butao3,butao4,butao5])
  
message.reply({embeds:[page],components:[row,row1,row2]}).then(msg => {
 
  setTimeout(()=>{msg.delete()},600000)
 
  const inf = (interaction) => interaction.user.id == message.member.id
   
   const collector = msg.createMessageComponentCollector({ filter:inf ,time:600000});
   collector.on('collect', async(r,u) =>{
    switch (r.customId) {
      case`butao1`:

      if(pagnumber -1 ==0) pagnumber = paginas.length
      else pagnumber = pagnumber - 1
      {
calc = pagnumber - 1
       pagina = paginas[calc].ID.split("_")[2]



         roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagina}`)).sort((a, b) => b.data - a.data);
        
        cargos = ''
       
        let emoji = ['<a:0_:1132093745131692103>',
        '<a:1_:1132093814278983800>', 
        '<a:2_:1132093884705558628>',
        '<a:3_:1132093954070945934>',
        '<a:4_:1132094036753260544>',
        '<a:5_:1132094083733672017>',
        '<a:6_:1132094166046888006>',
        '<a:7_:1132094236058198088>',
        '<a:8_:1132094342610309233>',
        '<a:9_:1132094391666872360>']
        
        for (let i = 0; i < roles.length; i++) {
        
          let cargo = roles[i].ID.split("_")[3]
         
        
          cargos += `${emoji[i]} | <@&${cargo}>\n`
         
        }

        
        
        let cargosadicionads = []
        pv.forEach(a =>{
         cargosadicionads.push(`<@&${a}>`)
        })
        let page = new Discord.MessageEmbed()
             
         .setTitle(`Sistema de Registro - ${client.user.username}`)
.setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Página:** ${pagina}\n\n${cargos}\n\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}\n\n*Para remover um cargo pendente basta reagir no mesmo número.*`)
.setColor('ffffff')

.setFooter(`Página:"${pagina}"-(${pagnumber}/${paginas.length})`)
.setTimestamp();

              let butao1 = new Discord.MessageButton()
.setEmoji('<:Icon_Previous:1138843234148306984>')
.setStyle("SUCCESS")
.setLabel('Voltar')
.setCustomId("butao1")

let butao2 =  new Discord.MessageButton()
.setDisabled(true)
.setLabel('-')
.setStyle("SECONDARY")
.setCustomId("butao2")
let butao3 =  new Discord.MessageButton()
.setEmoji('<:icons_Correct:1138838312245788712>')
.setStyle("SUCCESS")
.setLabel('Registrar')
.setCustomId("butao3")
let butao4 =  new Discord.MessageButton()
.setDisabled(true)
.setLabel('-')
.setStyle("SECONDARY")
.setCustomId("butao4")
let butao5 =  new Discord.MessageButton()
.setEmoji('<:Icon_Next:1138842656752017438>')
.setStyle("SUCCESS")
.setLabel('Avançar')
.setCustomId("butao5")
if(roles.length >5){
const row2 = new Discord.MessageActionRow()
const row1 = new Discord.MessageActionRow()

for (let i = 0; i < roles.length; i++) {

if(i>4){
  row2.addComponents([

  new Discord.MessageButton()
  .setEmoji(emoji[i])
  .setStyle("SECONDARY")
  .setCustomId(`number${i}`)
])



}else{
  row1.addComponents([

  new Discord.MessageButton()
  .setEmoji(emoji[i])
  .setStyle("SECONDARY")
  .setCustomId(`number${i}`)
])

}
}

const row = new Discord.MessageActionRow()
row.addComponents([butao1,butao2,butao3,butao4,butao5])
  
r.update({embeds:[page],components:[row,row1,row2]})
}else{
  const row1 = new Discord.MessageActionRow()
   

  for (let i = 0; i < roles.length; i++) {


    row1.addComponents([

        new Discord.MessageButton()
        .setEmoji(emoji[i])
        .setStyle("SECONDARY")
        .setCustomId(`number${i}`)
    ])
   
   
  }
  
const row = new Discord.MessageActionRow()
row.addComponents([butao1,butao2,butao3,butao4,butao5])
  
r.update({embeds:[page],components:[row,row1]})

         
}

      }
      break;
      case`butao3`:{
      r.deferUpdate()
r.message.delete()
      let page = new Discord.MessageEmbed()
                
      .setDescription(`${message.author}, registro efetuado com sucesso!    `)

 .setColor('ffffff')

 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 message.channel.send({embeds:[page]}).then(msg => {
  setTimeout(()=>{msg.delete()},6000)
})   

 let channelregister = db.get(`channelregister_${message.guild.id}`)

db.add(`quantidaderegistros_${message.guild.id}_${message.author.id}`,1)

 

let registrados = db.get(`quantidaderegistros_${message.guild.id}_${message.author.id}`)

let cargosadicionads = []
pv.forEach(a =>{
 cargosadicionads.push(`<@&${a}>`)
})
let regis = new Discord.MessageEmbed()
  .setTitle(`Registro efetuado!`)
  .setThumbnail(client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
.setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Registros:** \`${registrados}\`\n\n<:maistotal:919035481705021510> **Cargos recebidos:**\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}`)

.setColor('ffffff')

.setFooter(`Registros | ${message.guild.name}`)

 client.channels.cache.get(channelregister).send({embeds:[regis]})

      pv.forEach(a =>{
        user.roles.add(a)
        })
      }
        user.roles.add(db.get(`roleregistrado_${message.guild.id}`))
              user.roles.remove(db.get(`notroleregister_${message.guild.id}`))
              await message.channel.messages.fetch({limit: 100 }).then(async fetched => {
                const notPinned = fetched.filter(fetchedMsg => fetchedMsg.author.id == user.id);
            
            await message.channel.bulkDelete(notPinned, true);
        
        
              })
        
        break;   
   
   
   
   
   
   
   
        case`butao5`:

        if(pagnumber + 1 > paginas.length) pagnumber = 1
        else pagnumber = pagnumber + 1
        {
   calc = pagnumber - 1
         pagina = paginas[calc].ID.split("_")[2]
  
  
  
           roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagina}`)).sort((a, b) => b.data - a.data);
          
          
          
        cargos = ''
          
          let emoji = ['<a:0_:1132093745131692103>',
          '<a:1_:1132093814278983800>', 
          '<a:2_:1132093884705558628>',
          '<a:3_:1132093954070945934>',
          '<a:4_:1132094036753260544>',
          '<a:5_:1132094083733672017>',
          '<a:6_:1132094166046888006>',
          '<a:7_:1132094236058198088>',
          '<a:8_:1132094342610309233>',
          '<a:9_:1132094391666872360>']
          
          for (let i = 0; i < roles.length; i++) {
          
            let cargo = roles[i].ID.split("_")[3]
           
          
            cargos += `${emoji[i]} | <@&${cargo}>\n`
           
          }
  
        
          
          let cargosadicionads = []
          pv.forEach(a =>{
           cargosadicionads.push(`<@&${a}>`)
          })
          let page = new Discord.MessageEmbed()
               
           .setTitle(`Sistema de Registro - ${client.user.username}`)
.setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Página:** ${pagina}\n\n${cargos}\n\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}\n\n*Para remover um cargo pendente basta reagir no mesmo número.*`)
.setColor('ffffff')

.setFooter(`Página:"${pagina}"-(${pagnumber}/${paginas.length})`)
.setTimestamp();
  
                let butao1 = new Discord.MessageButton()
  .setEmoji('<:Icon_Previous:1138843234148306984>')
  .setStyle("SUCCESS")
  .setLabel('Voltar')
  .setCustomId("butao1")
  
  let butao2 =  new Discord.MessageButton()
  .setDisabled(true)
  .setLabel('-')
  .setStyle("SECONDARY")
  .setCustomId("butao2")
  let butao3 =  new Discord.MessageButton()
  .setEmoji('<:icons_Correct:1138838312245788712>')
  .setStyle("SUCCESS")
  .setLabel('Registrar')
  .setCustomId("butao3")
  let butao4 =  new Discord.MessageButton()
  .setDisabled(true)
  .setLabel('-')
  .setStyle("SECONDARY")
  .setCustomId("butao4")
  let butao5 =  new Discord.MessageButton()
  .setEmoji('<:Icon_Next:1138842656752017438>')
  .setStyle("SUCCESS")
  .setLabel('Avançar')
  .setCustomId("butao5")
  if(roles.length >5){
  const row2 = new Discord.MessageActionRow()
  const row1 = new Discord.MessageActionRow()
  
  for (let i = 0; i < roles.length; i++) {
  
  if(i>4){
    row2.addComponents([
  
    new Discord.MessageButton()
    .setEmoji(emoji[i])
    .setStyle("SECONDARY")
    .setCustomId(`number${i}`)
  ])
  
  
  
  }else{
    row1.addComponents([
  
    new Discord.MessageButton()
    .setEmoji(emoji[i])
    .setStyle("SECONDARY")
    .setCustomId(`number${i}`)
  ])
  
  }
  }
  
  const row = new Discord.MessageActionRow()
  row.addComponents([butao1,butao2,butao3,butao4,butao5])
    
  r.update({embeds:[page],components:[row,row1,row2]})
  }else{
    const row1 = new Discord.MessageActionRow()
     
  
    for (let i = 0; i < roles.length; i++) {
  
  
      row1.addComponents([
  
          new Discord.MessageButton()
          .setEmoji(emoji[i])
          .setStyle("SECONDARY")
          .setCustomId(`number${i}`)
      ])
     
     
    }
    
  const row = new Discord.MessageActionRow()
  row.addComponents([butao1,butao2,butao3,butao4,butao5])
    
  r.update({embeds:[page],components:[row,row1]})
  
           
  }
  
        }
        break;
      }
   
   
   
        for (let i = 0; i < 9; i++) {
          switch (r.customId) {

            
              case`number${i}`:
              
          

              
           roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagina}`)).sort((a, b) => b.data - a.data);
          

          let cargo = roles[i].ID.split("_")[3]
          
        

           if(pv.find(element=> element == cargo)){
            
           delete pv[pv.indexOf(cargo)]

           }else{
            pv.push(cargo)

           }
      

              
           if(db.get(`paginasregister_${message.guild.id}_${pagina}`) == 'yes'){



            if(pagnumber + 1 > paginas.length) pagnumber = 1
            else pagnumber = pagnumber + 1
       
       calc = pagnumber - 1
             pagina = paginas[calc].ID.split("_")[2]
      
     
      
               roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagina}`)).sort((a, b) => b.data - a.data);
              
              
              
            cargos = ''
              
              let emoji = ['<a:0_:1132093745131692103>',
              '<a:1_:1132093814278983800>', 
              '<a:2_:1132093884705558628>',
              '<a:3_:1132093954070945934>',
              '<a:4_:1132094036753260544>',
              '<a:5_:1132094083733672017>',
              '<a:6_:1132094166046888006>',
              '<a:7_:1132094236058198088>',
              '<a:8_:1132094342610309233>',
              '<a:9_:1132094391666872360>']
              
              for (let i = 0; i < roles.length; i++) {
              
                let cargo = roles[i].ID.split("_")[3]
               
              
                cargos += `${emoji[i]} | <@&${cargo}>\n`
               
              }
      
            
              
              let cargosadicionads = []
              pv.forEach(a =>{
               cargosadicionads.push(`<@&${a}>`)
              })
              let page = new Discord.MessageEmbed()
                   
               .setTitle(`Sistema de Registro - ${client.user.username}`)
    .setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Página:** ${pagina}\n\n${cargos}\n\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}\n\n*Para remover um cargo pendente basta reagir no mesmo número.*`)
    .setColor('ffffff')
    
    .setFooter(`Página:"${pagina}"-(${pagnumber}/${paginas.length})`)
    .setTimestamp();
      
                    let butao1 = new Discord.MessageButton()
      .setEmoji('<:Icon_Previous:1138843234148306984>')
      .setStyle("SUCCESS")
      .setLabel('Voltar')
      .setCustomId("butao1")
      
      let butao2 =  new Discord.MessageButton()
      .setDisabled(true)
      .setLabel('-')
      .setStyle("SECONDARY")
      .setCustomId("butao2")
      let butao3 =  new Discord.MessageButton()
      .setEmoji('<:icons_Correct:1138838312245788712>')
      .setStyle("SUCCESS")
      .setLabel('Registrar')
      .setCustomId("butao3")
      let butao4 =  new Discord.MessageButton()
      .setDisabled(true)
      .setLabel('-')
      .setStyle("SECONDARY")
      .setCustomId("butao4")
      let butao5 =  new Discord.MessageButton()
      .setEmoji('<:Icon_Next:1138842656752017438>')
      .setStyle("SUCCESS")
      .setLabel('Avançar')
      .setCustomId("butao5")
      if(roles.length >5){
      const row2 = new Discord.MessageActionRow()
      const row1 = new Discord.MessageActionRow()
      
      for (let i = 0; i < roles.length; i++) {
      
      if(i>4){
        row2.addComponents([
      
        new Discord.MessageButton()
        .setEmoji(emoji[i])
        .setStyle("SECONDARY")
        .setCustomId(`number${i}`)
      ])
      
      
      
      }else{
        row1.addComponents([
      
        new Discord.MessageButton()
        .setEmoji(emoji[i])
        .setStyle("SECONDARY")
        .setCustomId(`number${i}`)
      ])
      
      }
      }
      
      const row = new Discord.MessageActionRow()
      row.addComponents([butao1,butao2,butao3,butao4,butao5])
      

          r.update({embeds:[page],components:[row,row1,row2]})
       
    
      }else{
        const row1 = new Discord.MessageActionRow()
         
      
        for (let i = 0; i < roles.length; i++) {
      
      
          row1.addComponents([
      
              new Discord.MessageButton()
              .setEmoji(emoji[i])
              .setStyle("SECONDARY")
              .setCustomId(`number${i}`)
          ])
         
         
        }
        
      const row = new Discord.MessageActionRow()
      row.addComponents([butao1,butao2,butao3,butao4,butao5])
        
      r.update({embeds:[page],components:[row,row1]})
      
               
      }
      
            




////



           }else{
             r.deferUpdate()
            let cargosadicionads = []
            pv.forEach(a =>{
             cargosadicionads.push(`<@&${a}>`)
            })
            let page = new Discord.MessageEmbed()
                 
             .setTitle(`Sistema de Registro - ${client.user.username}`)
 .setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Página:** ${pagina}\n\n${cargos}\n\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}\n\n*Para remover um cargo pendente basta reagir no mesmo número.*`)
 .setColor('ffffff')
 
 .setFooter(`Página:"${pagina}"-(${pagnumber}/${paginas.length})`)
 .setTimestamp();
 r.message.edit({embeds:[page]})
           }
               break;      
      }
     
    
  }
  })
})
}else{
  const row1 = new Discord.MessageActionRow()
   

  for (let i = 0; i < roles.length; i++) {


    row1.addComponents([

        new Discord.MessageButton()
        .setEmoji(emoji[i])
        .setStyle("SECONDARY")
        .setCustomId(`number${i}`)
    ])
   
   
  }
  
const row = new Discord.MessageActionRow()
row.addComponents([butao1,butao2,butao3,butao4,butao5])
  
message.reply({embeds:[page],components:[row,row1]}).then(msg => {
 
  setTimeout(()=>{msg.delete()},600000)
 
  const inf = (interaction) => interaction.user.id == message.member.id
   
   const collector = msg.createMessageComponentCollector({ filter:inf,time:600000});
   collector.on('collect', async(r,u) =>{
    switch (r.customId) {
      case`butao1`:

      if(pagnumber -1 ==0) pagnumber = paginas.length
      else pagnumber = pagnumber - 1
      {
calc = pagnumber - 1
       pagina = paginas[calc].ID.split("_")[2]



         roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagina}`)).sort((a, b) => b.data - a.data);
        
        cargos = ''
       
        let emoji = ['<a:0_:1132093745131692103>',
        '<a:1_:1132093814278983800>', 
        '<a:2_:1132093884705558628>',
        '<a:3_:1132093954070945934>',
        '<a:4_:1132094036753260544>',
        '<a:5_:1132094083733672017>',
        '<a:6_:1132094166046888006>',
        '<a:7_:1132094236058198088>',
        '<a:8_:1132094342610309233>',
        '<a:9_:1132094391666872360>']
        
        for (let i = 0; i < roles.length; i++) {
        
          let cargo = roles[i].ID.split("_")[3]
         
        
          cargos += `${emoji[i]} | <@&${cargo}>\n`
         
        }

        
        
        let cargosadicionads = []
        pv.forEach(a =>{
         cargosadicionads.push(`<@&${a}>`)
        })
        let page = new Discord.MessageEmbed()
             
         .setTitle(`Sistema de Registro - ${client.user.username}`)
.setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Página:** ${pagina}\n\n${cargos}\n\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}\n\n*Para remover um cargo pendente basta reagir no mesmo número.*`)
.setColor('ffffff')

.setFooter(`Página:"${pagina}"-(${pagnumber}/${paginas.length})`)
.setTimestamp();

              let butao1 = new Discord.MessageButton()
.setEmoji('<:Icon_Previous:1138843234148306984>')
.setStyle("SUCCESS")
.setLabel('Voltar')
.setCustomId("butao1")

let butao2 =  new Discord.MessageButton()
.setDisabled(true)
.setLabel('-')
.setStyle("SECONDARY")
.setCustomId("butao2")
let butao3 =  new Discord.MessageButton()
.setEmoji('<:icons_Correct:1138838312245788712>')
.setStyle("SUCCESS")
.setLabel('Registrar')
.setCustomId("butao3")
let butao4 =  new Discord.MessageButton()
.setDisabled(true)
.setLabel('-')
.setStyle("SECONDARY")
.setCustomId("butao4")
let butao5 =  new Discord.MessageButton()
.setEmoji('<:Icon_Next:1138842656752017438>')
.setStyle("SUCCESS")
.setLabel('Avançar')
.setCustomId("butao5")
if(roles.length >5){
const row2 = new Discord.MessageActionRow()
const row1 = new Discord.MessageActionRow()

for (let i = 0; i < roles.length; i++) {

if(i>4){
  row2.addComponents([

  new Discord.MessageButton()
  .setEmoji(emoji[i])
  .setStyle("SECONDARY")
  .setCustomId(`number${i}`)
])



}else{
  row1.addComponents([

  new Discord.MessageButton()
  .setEmoji(emoji[i])
  .setStyle("SECONDARY")
  .setCustomId(`number${i}`)
])

}
}

const row = new Discord.MessageActionRow()
row.addComponents([butao1,butao2,butao3,butao4,butao5])
  
r.update({embeds:[page],components:[row,row1,row2]})
}else{
  const row1 = new Discord.MessageActionRow()
   

  for (let i = 0; i < roles.length; i++) {


    row1.addComponents([

        new Discord.MessageButton()
        .setEmoji(emoji[i])
        .setStyle("SECONDARY")
        .setCustomId(`number${i}`)
    ])
   
   
  }
  
const row = new Discord.MessageActionRow()
row.addComponents([butao1,butao2,butao3,butao4,butao5])
  
r.update({embeds:[page],components:[row,row1]})

         
}

      }
      break;
      case`butao3`:{
      r.deferUpdate()
r.message.delete()
      let page = new Discord.MessageEmbed()
                
      .setDescription(`${message.author}, registro efetuado com sucesso!    `)

 .setColor('ffffff')

 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 message.channel.send({embeds:[page]}).then(msg => {
  setTimeout(()=>{msg.delete()},6000)
})   

 let channelregister = db.get(`channelregister_${message.guild.id}`)

db.add(`quantidaderegistros_${message.guild.id}_${message.author.id}`,1)

 

let registrados = db.get(`quantidaderegistros_${message.guild.id}_${message.author.id}`)

let cargosadicionads = []
pv.forEach(a =>{
 cargosadicionads.push(`<@&${a}>`)
})
let regis = new Discord.MessageEmbed()
  .setTitle(`Registro efetuado!`)
  .setThumbnail(client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
.setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Registros:** \`${registrados}\`\n\n<:maistotal:919035481705021510> **Cargos recebidos:**\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}`)

.setColor('ffffff')

.setFooter(`Registros | ${message.guild.name}`)

 client.channels.cache.get(channelregister).send({embeds:[regis]})

      pv.forEach(a =>{
        user.roles.add(a)
        })
      }
      user.roles.add(db.get(`roleregistrado_${message.guild.id}`))
      user.roles.remove(db.get(`notroleregister_${message.guild.id}`))
      await message.channel.messages.fetch({limit: 100 }).then(async fetched => {
     
     
     
           const notPinned = fetched.filter(fetchedMsg => fetchedMsg.author.id == user.id);
       
      await message.channel.bulkDelete(notPinned, true);
    })
        break;   
   
   
   
   
   
   
   
        case`butao5`:

        if(pagnumber + 1 > paginas.length) pagnumber = 1
        else pagnumber = pagnumber + 1
        {
   calc = pagnumber - 1
         pagina = paginas[calc].ID.split("_")[2]
  
  
  
           roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagina}`)).sort((a, b) => b.data - a.data);
          
          
          
        cargos = ''
          
          let emoji = ['<a:0_:1132093745131692103>',
          '<a:1_:1132093814278983800>', 
          '<a:2_:1132093884705558628>',
          '<a:3_:1132093954070945934>',
          '<a:4_:1132094036753260544>',
          '<a:5_:1132094083733672017>',
          '<a:6_:1132094166046888006>',
          '<a:7_:1132094236058198088>',
          '<a:8_:1132094342610309233>',
          '<a:9_:1132094391666872360>']
          
          for (let i = 0; i < roles.length; i++) {
          
            let cargo = roles[i].ID.split("_")[3]
           
          
            cargos += `${emoji[i]} | <@&${cargo}>\n`
           
          }
  
        
          
          let cargosadicionads = []
          pv.forEach(a =>{
           cargosadicionads.push(`<@&${a}>`)
          })
          let page = new Discord.MessageEmbed()
               
           .setTitle(`Sistema de Registro - ${client.user.username}`)
.setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Página:** ${pagina}\n\n${cargos}\n\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}\n\n*Para remover um cargo pendente basta reagir no mesmo número.*`)
.setColor('ffffff')

.setFooter(`Página:"${pagina}"-(${pagnumber}/${paginas.length})`)
.setTimestamp();
  
                let butao1 = new Discord.MessageButton()
  .setEmoji('<:Icon_Previous:1138843234148306984>')
  .setStyle("SUCCESS")
  .setLabel('Voltar')
  .setCustomId("butao1")
  
  let butao2 =  new Discord.MessageButton()
  .setDisabled(true)
  .setLabel('-')
  .setStyle("SECONDARY")
  .setCustomId("butao2")
  let butao3 =  new Discord.MessageButton()
  .setEmoji('<:icons_Correct:1138838312245788712>')
  .setStyle("SUCCESS")
  .setLabel('Registrar')
  .setCustomId("butao3")
  let butao4 =  new Discord.MessageButton()
  .setDisabled(true)
  .setLabel('-')
  .setStyle("SECONDARY")
  .setCustomId("butao4")
  let butao5 =  new Discord.MessageButton()
  .setEmoji('<:Icon_Next:1138842656752017438>')
  .setStyle("SUCCESS")
  .setLabel('Avançar')
  .setCustomId("butao5")
  if(roles.length >5){
  const row2 = new Discord.MessageActionRow()
  const row1 = new Discord.MessageActionRow()
  
  for (let i = 0; i < roles.length; i++) {
  
  if(i>4){
    row2.addComponents([
  
    new Discord.MessageButton()
    .setEmoji(emoji[i])
    .setStyle("SECONDARY")
    .setCustomId(`number${i}`)
  ])
  
  
  
  }else{
    row1.addComponents([
  
    new Discord.MessageButton()
    .setEmoji(emoji[i])
    .setStyle("SECONDARY")
    .setCustomId(`number${i}`)
  ])
  
  }
  }
  
  const row = new Discord.MessageActionRow()
  row.addComponents([butao1,butao2,butao3,butao4,butao5])
    
  r.update({embeds:[page],components:[row,row1,row2]})
  }else{
    const row1 = new Discord.MessageActionRow()
     
  
    for (let i = 0; i < roles.length; i++) {
  
  
      row1.addComponents([
  
          new Discord.MessageButton()
          .setEmoji(emoji[i])
          .setStyle("SECONDARY")
          .setCustomId(`number${i}`)
      ])
     
     
    }
    
  const row = new Discord.MessageActionRow()
  row.addComponents([butao1,butao2,butao3,butao4,butao5])
    
  r.update({embeds:[page],components:[row,row1]})
  
           
  }
  
        }
        break;
      }
   
   
   
        for (let i = 0; i < 9; i++) {
          switch (r.customId) {

            
              case`number${i}`:
              
          

              
           roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagina}`)).sort((a, b) => b.data - a.data);
          

          let cargo = roles[i].ID.split("_")[3]
          
        

           if(pv.find(element=> element == cargo)){
            
           delete pv[pv.indexOf(cargo)]

           }else{
            pv.push(cargo)

           }
      

       
          // r.message.edit({embeds:[page]})
              
           if(db.get(`paginasregister_${message.guild.id}_${pagina}`) == 'yes'){



            if(pagnumber + 1 > paginas.length) pagnumber = 1
            else pagnumber = pagnumber + 1
       
       calc = pagnumber - 1
             pagina = paginas[calc].ID.split("_")[2]
      
     
      
               roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagina}`)).sort((a, b) => b.data - a.data);
              
              
              
            cargos = ''
              
              let emoji = ['<a:0_:1132093745131692103>',
              '<a:1_:1132093814278983800>', 
              '<a:2_:1132093884705558628>',
              '<a:3_:1132093954070945934>',
              '<a:4_:1132094036753260544>',
              '<a:5_:1132094083733672017>',
              '<a:6_:1132094166046888006>',
              '<a:7_:1132094236058198088>',
              '<a:8_:1132094342610309233>',
              '<a:9_:1132094391666872360>']
              
              for (let i = 0; i < roles.length; i++) {
              
                let cargo = roles[i].ID.split("_")[3]
               
              
                cargos += `${emoji[i]} | <@&${cargo}>\n`
               
              }
      
            
              
              let cargosadicionads = []
              pv.forEach(a =>{
               cargosadicionads.push(`<@&${a}>`)
              })
              let page = new Discord.MessageEmbed()
                   
               .setTitle(`Sistema de Registro - ${client.user.username}`)
    .setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Página:** ${pagina}\n\n${cargos}\n\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}\n\n*Para remover um cargo pendente basta reagir no mesmo número.*`)
    .setColor('ffffff')
    
    .setFooter(`Página:"${pagina}"-(${pagnumber}/${paginas.length})`)
    .setTimestamp();
      
                    let butao1 = new Discord.MessageButton()
      .setEmoji('<:Icon_Previous:1138843234148306984>')
      .setStyle("SUCCESS")
      .setLabel('Voltar')
      .setCustomId("butao1")
      
      let butao2 =  new Discord.MessageButton()
      .setDisabled(true)
      .setLabel('-')
      .setStyle("SECONDARY")
      .setCustomId("butao2")
      let butao3 =  new Discord.MessageButton()
      .setEmoji('<:icons_Correct:1138838312245788712>')
      .setStyle("SUCCESS")
      .setLabel('Registrar')
      .setCustomId("butao3")
      let butao4 =  new Discord.MessageButton()
      .setDisabled(true)
      .setLabel('-')
      .setStyle("SECONDARY")
      .setCustomId("butao4")
      let butao5 =  new Discord.MessageButton()
      .setEmoji('<:Icon_Next:1138842656752017438>')
      .setStyle("SUCCESS")
      .setLabel('Avançar')
      .setCustomId("butao5")
      if(roles.length >5){
      const row2 = new Discord.MessageActionRow()
      const row1 = new Discord.MessageActionRow()
      
      for (let i = 0; i < roles.length; i++) {
      
      if(i>4){
        row2.addComponents([
      
        new Discord.MessageButton()
        .setEmoji(emoji[i])
        .setStyle("SECONDARY")
        .setCustomId(`number${i}`)
      ])
      
      
      
      }else{
        row1.addComponents([
      
        new Discord.MessageButton()
        .setEmoji(emoji[i])
        .setStyle("SECONDARY")
        .setCustomId(`number${i}`)
      ])
      
      }
      }
      
      const row = new Discord.MessageActionRow()
      row.addComponents([butao1,butao2,butao3,butao4,butao5])
      

          r.update({embeds:[page],components:[row,row1,row2]})
       
    
      }else{
        const row1 = new Discord.MessageActionRow()
         
      
        for (let i = 0; i < roles.length; i++) {
      
      
          row1.addComponents([
      
              new Discord.MessageButton()
              .setEmoji(emoji[i])
              .setStyle("SECONDARY")
              .setCustomId(`number${i}`)
          ])
         
         
        }
        
      const row = new Discord.MessageActionRow()
      row.addComponents([butao1,butao2,butao3,butao4,butao5])
        
      r.update({embeds:[page],components:[row,row1]})
      
               
      }
      
            




////



           }else{
             r.deferUpdate()
            let cargosadicionads = []
            pv.forEach(a =>{
             cargosadicionads.push(`<@&${a}>`)
            })
            let page = new Discord.MessageEmbed()
                 
             .setTitle(`Sistema de Registro - ${client.user.username}`)
 .setDescription(`**Usuário:** ${user}\n**Registrador:** ${message.author}\n**Página:** ${pagina}\n\n${cargos}\n\n${!cargosadicionads || cargosadicionads ==''? 'Sem cargos adicionados.':cargosadicionads.join(', ')}\n\n*Para remover um cargo pendente basta reagir no mesmo número.*`)
 .setColor('ffffff')
 
 .setFooter(`Página:"${pagina}"-(${pagnumber}/${paginas.length})`)
 .setTimestamp();
 r.message.edit({embeds:[page]})
           }
               break;      
      }
     
    
  }
  })
})
}


  }

}
}
//olha o tamanho desse codigo fiquei uns 3 dias fazendo 