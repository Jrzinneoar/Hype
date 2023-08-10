
const Discord = require("discord.js")
const db = require("quick.db")
const { dev,default_prefix } = require('../../config.json');
module.exports = {

  
    nome: "register",
    alternativas: ["register"],
    run: async  (client, message, args) => {
      let prefix = db.get(`prefix_${message.guild.id}`)
      if(prefix === null) prefix = default_prefix;

      const limite = new Discord.MessageEmbed()
      .setColor('ffffff')
      .setDescription(`Para executar este comando precisa a permissão \`gerenciar funções\` e de \`gerenciar canais\` !`)
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
        
      if (!message.member.permissions.has("MANAGE_CHANNELS")|| !message.member.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[limite]})
    
    
    
        
       
      const ad = new Discord.MessageEmbed()
      .setColor('ffffff')
      .setDescription(`Não é possível executar este o comando, preciso da permissão de \`gerenciar funções\` e de \`gerenciar canais\` !`)
      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();
        if(!message.guild.me.permissions.has("MANAGE_CHANNELS")||!message.guild.me.permissions.has("MANAGE_ROLES")) return  message.reply({embeds:[ad]})
        
    if(args[0] =='config'){

 
      let l1 = db.get(`masculinoregistro_${message.guild.id}`)
      if(!l1) l1 =  'Não Configurado'
      else l1 = `<@&${l1}>`
      let l2 = db.get(`femininoregistro_${message.guild.id}`)
      if(!l2) l2 =  'Não Configurado'
      else l2 = `<@&${l2}>`
      let l3 = db.get(`notbinaryregistro_${message.guild.id}`)
      if(!l3) l3 =  'Não Configurado'
      else l3 = `<@&${l3}>`
      let l4 = db.get(`roleregistrado_${message.guild.id}`)
      if(!l4) l4 =  'Não Configurado'
      else l4 = `<@&${l4}>`
      let l5 = db.get(`notroleregister_${message.guild.id}`)
      if(!l5) l5 =  'Não Configurado'
      else l5 = `<@&${l5}>`
      let l6 = db.get(`channelregister_${message.guild.id}`)
      if(!l6) l6 =  'Não Configurado'
      else l6 = `<#${l6}>`
        let l7 = db.get(`cargoregistrator_${message.guild.id}`)
      if(!l7) l7 =  'Não Configurado'
      else l7 = `<@&${l7}>`
      




      


let masculino = db.get(`masculinoregistro_${message.guild.id}`)
if(!masculino) masculino =  'Não Configurado'
else masculino = `<@&${masculino}>`
let feminino = db.get(`femininoregistro_${message.guild.id}`)
if(!feminino) feminino =  'Não Configurado'
else feminino = `<@&${feminino}>`
let notbinary = db.get(`notbinaryregistro_${message.guild.id}`)
if(!notbinary) notbinary =  'Não Configurado'
else notbinary = `<@&${notbinary}>`
let roleregistrado = db.get(`roleregistrado_${message.guild.id}`)
if(!roleregistrado) roleregistrado =  'Não Configurado'
else roleregistrado = `<@&${roleregistrado}>`
let notroleregister = db.get(`notroleregister_${message.guild.id}`)
if(!notroleregister) notroleregister =  'Não Configurado'
else notroleregister = `<@&${notroleregister}>`
let channelregister = db.get(`channelregister_${message.guild.id}`)
if(!channelregister) channelregister =  'Não Configurado'
else channelregister = `<#${channelregister}>`
let cargoregistrator = db.get(`cargoregistrator_${message.guild.id}`)
if(!cargoregistrator) cargoregistrator =  'Não Configurado'
else cargoregistrator = `<@&${cargoregistrator}>`

let embedpadrao = new Discord.MessageEmbed()
.setTitle(`Interface de Configurações de Registro - ${client.user.username}`)
.setColor('ffffff')
.setDescription(`**Configurações de Gênero:**\n<a:1_:1132093814278983800> **Cargo Masculino:** ${masculino}\n<a:2_:1132093884705558628> **Cargo Feminino:** ${feminino}\n<a:3_:1132093954070945934> **Cargo Não-Binario:** ${notbinary}\n\n**Configurações de Registro:**\n<a:4_:1132094036753260544> **Cargo de Registrado:** ${roleregistrado}\n<a:5_:1132094083733672017> **Cargo de Novato:** ${notroleregister}\n<a:6_:1132094166046888006> **Canal de Registro:**  ${channelregister}\n<a:7_:1132094236058198088> **Cargo de Registrador:** ${cargoregistrator}\n\n<a:8_:1132094342610309233> **Salvar Configurações**\n\nSe prefirir um sistema de registro mais " automatico " utilize o metodo de reações. Usando **register reaction**`)

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
    let butao8 =  new Discord.MessageButton()
    .setEmoji('<a:8_:1132094342610309233>')
    .setStyle("SECONDARY")
    .setCustomId("butao8")


  
    const row = new Discord.MessageActionRow()
    row.addComponents([butao1,butao2,butao3,butao4,butao5])
    const newrow = new Discord.MessageActionRow()
    newrow.addComponents([butao6,butao7,butao8])
  
 message.reply({embeds:[embedpadrao],components:[row,newrow]}).then(msg => {

  setTimeout(()=>{msg.delete()},180000)
 

   const inf = (interaction) => interaction.user.id == message.member.id
    
    const collector = msg.createMessageComponentCollector({ filter:inf});
    collector.on('collect', async(r,u) =>{
       
 switch (r.customId) {
   case 'butao1':
    
   r.deferUpdate()

       let ccategori = new Discord.MessageEmbed()
       .setDescription(`Hey, ${message.member} ! Mencione um cargo válido.`)
       .setColor('ffffff')
         
       .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();
         
         
       
    let sg =  await message.channel.send({embeds:[ccategori]})
    setTimeout(()=>{sg.delete()},30000)
       const filter9 = res => {
       return res.author.id === message.author.id && res.content.length;
       };
       const categoryCollector = await message.channel.awaitMessages({
         filter:filter9,
       max: 1,
       time: 30000
       });
       
       
           
       let category = categoryCollector.first().mentions.roles.first() ||message.guild.roles.cache.get(categoryCollector.first().content)
       
       
       let cnh123 = new Discord.MessageEmbed()
       .setDescription(`Tente novamente \nEste cargo é inválido `)
       .setColor('ffffff')
       
       .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
       .setTimestamp();

       if(!category) return categoryCollector.first().reply({embeds:[cnh123]}).then((msg)=>{
        sg.delete() 
       setTimeout(()=>{
         categoryCollector.first().delete()
         msg.delete()},5000)})
       const permacime = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`O cargo mencionado é **igual** ou **maior** que o meu!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

  if( message.guild.me.roles.highest.position <=  category.position) return categoryCollector.first().reply({embeds:[permacime]}).then((msg)=>{
    sg.delete() 
   setTimeout(()=>{
     categoryCollector.first().delete()
     msg.delete()},5000)})
  if( await message.guild.fetchOwner().then((data)=>data.id) !==  message.member.id){
  const notacime = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(` O cargo mencionado é **igual** ou **maior** que o seu!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

  if ( category.position >=  message.member.roles.highest.position) {
    if (message.author.id) return categoryCollector.first().reply({embeds:[notacime]}).then((msg)=>{
      sg.delete() 
     setTimeout(()=>{
       categoryCollector.first().delete()
       msg.delete()},5000)})
}
}
       
         
       
    
       
       masculino = category
       let embedpadrao = new Discord.MessageEmbed()
       .setTitle(`Interface de Configurações de Registro - ${client.user.username}`)
.setColor('ffffff')
.setDescription(`**Configurações de Gênero:**\n<a:1_:1132093814278983800> **Cargo Masculino:** ${masculino}\n<a:2_:1132093884705558628> **Cargo Feminino:** ${feminino}\n<a:3_:1132093954070945934> **Cargo Não-Binario:** ${notbinary}\n\n**Configurações de Registro:**\n<a:4_:1132094036753260544> **Cargo de Registrado:** ${roleregistrado}\n<a:5_:1132094083733672017> **Cargo de Novato:** ${notroleregister}\n<a:6_:1132094166046888006> **Canal de Registro:**  ${channelregister}\n<a:7_:1132094236058198088> **Cargo de Registrador:** ${cargoregistrator}\n\n<a:8_:1132094342610309233> **Salvar Configurações**\n\nSe prefirir um sistema de registro mais " automatico " utilize o metodo de reações. Usando **register reaction**`)

       r.message.edit({embeds:[embedpadrao]})
       
       let dadasdsadasda = new Discord.MessageEmbed()
       
       
       .setDescription(`Cargo setado com sucesso!`)
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
     
            let mulher = new Discord.MessageEmbed()
            .setDescription(` Hey, ${message.member} ! Mencione um cargo válido.`)
            .setColor('ffffff')
              
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
              
              
            
         let st = await  message.channel.send({embeds:[mulher]})
         setTimeout(()=>{st.delete()},30000)
     
            const filter2 = res => {
            return res.author.id === message.author.id && res.content.length;
            };
            const mulherCollector = await message.channel.awaitMessages({
              filter:filter2,
            max: 1,
            time: 30000
            });
            
            
                
            let mujher = mulherCollector.first().mentions.roles.first() ||message.guild.roles.cache.get(mulherCollector.first().content)
            
            
            let ein = new Discord.MessageEmbed()
            .setDescription(`Tente novamente \nEste cargo é inválido `)
            .setColor('ffffff')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
            
            
              
            
            if(!mujher) return mulherCollector.first().reply({embeds:[ein]}) .then((msg)=>{
              st.delete() 
             setTimeout(()=>{
              mulherCollector.first().delete()
               msg.delete()},5000)})
            const permacime1 = new Discord.MessageEmbed()
            .setColor('ffffff')
            .setDescription(`O cargo mencionado é **igual** ou **maior** que o meu!`)
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
          
            if( message.guild.me.roles.highest.position <=  mujher.position) return mulherCollector.first().reply({embeds:[permacime1]})    .then((msg)=>{
              st.delete() 
             setTimeout(()=>{
              mulherCollector.first().delete()
               msg.delete()},5000)})
            if( await message.guild.fetchOwner().then((data)=>data.id) !==  message.member.id){
            const notacime1 = new Discord.MessageEmbed()
            .setColor('ffffff')
            .setDescription(`O cargo mencionado é **igual** ou **maior** que o seu!`)
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
          
            if ( mujher.position >=  message.member.roles.highest.position) {
              if (message.author.id) return mulherCollector.first().reply({embeds:[notacime1]}).then((msg)=>{
                st.delete() 
               setTimeout(()=>{
                mulherCollector.first().delete()
                 msg.delete()},5000)})
          }
          }
                
            
            feminino = mujher
            let ede = new Discord.MessageEmbed()
            .setTitle(`Interface de Configurações de Registro - ${client.user.username}`)
            .setColor('ffffff')
            .setDescription(`**Configurações de Gênero:**\n<a:1_:1132093814278983800> **Cargo Masculino:** ${masculino}\n<a:2_:1132093884705558628> **Cargo Feminino:** ${feminino}\n<a:3_:1132093954070945934> **Cargo Não-Binario:** ${notbinary}\n\n**Configurações de Registro:**\n<a:4_:1132094036753260544> **Cargo de Registrado:** ${roleregistrado}\n<a:5_:1132094083733672017> **Cargo de Novato:** ${notroleregister}\n<a:6_:1132094166046888006> **Canal de Registro:**  ${channelregister}\n<a:7_:1132094236058198088> **Cargo de Registrador:** ${cargoregistrator}\n\n<a:8_:1132094342610309233> **Salvar Configurações**\n\nSe prefirir um sistema de registro mais " automatico " utilize o metodo de reações. Usando **register reaction**`)
            
            r.message.edit({embeds:[ede]})
            
            let mujherset = new Discord.MessageEmbed()
            
            
            .setDescription(`Cargo setado com sucesso!`)
            .setColor('ffffff')
            
            .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
            .setTimestamp();
            
            
            mulherCollector.first().reply({embeds:[mujherset]}) .then((msg)=>{
              st.delete() 
             setTimeout(()=>{
              mulherCollector.first().delete()
               msg.delete()},5000)})
            break; 
            case 'butao3':
    
              r.deferUpdate()
           
 let nog = new Discord.MessageEmbed()
 .setDescription(` Hey, ${message.member} ! Mencione um cargo válido.`)
 .setColor('ffffff')
   
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
   
   
 
 let sv = await message.channel.send({embeds:[nog]})
 setTimeout(()=>{sv.delete()},30000)
 const filter3 = res => {
 return res.author.id === message.author.id && res.content.length;
 };
 const notbinCollector = await message.channel.awaitMessages({
   filter:filter3,
 max: 1,
 time: 30000
 });
 
 
     
 let notbinariu = notbinCollector.first().mentions.roles.first() ||message.guild.roles.cache.get(notbinCollector.first().content)
 
 
 let nob = new Discord.MessageEmbed()
 .setDescription(`Tente novamente \nEste cargo é inválido `)
 .setColor('ffffff')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 
 
   
 
 if(!notbinariu) return notbinCollector.first().reply({embeds:[nob]}).then((msg)=>{
  sv.delete() 
 setTimeout(()=>{
  notbinCollector.first().delete()
   msg.delete()},5000)})
 const permacime12 = new Discord.MessageEmbed()
 .setColor('ffffff')
 .setDescription(`O cargo mencionado é **igual** ou **maior** que o meu!`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();

 if( message.guild.me.roles.highest.position <=  notbinariu.position) return notbinCollector.first().reply({embeds:[permacime12]}).then((msg)=>{
  sv.delete() 
 setTimeout(()=>{
  notbinCollector.first().delete()
   msg.delete()},5000)})
 if( await message.guild.fetchOwner().then((data)=>data.id) !==  message.member.id){
 const notacime12 = new Discord.MessageEmbed()
 .setColor('ffffff')
 .setDescription(` O cargo mencionado é **igual** ou **maior** que o seu!`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();

 if ( notbinariu.position >=  message.member.roles.highest.position) {
   if (message.author.id) return notbinCollector.first().reply({embeds:[notacime12]}).then((msg)=>{
    sv.delete() 
   setTimeout(()=>{
    notbinCollector.first().delete()
     msg.delete()},5000)})
}
}
 
 notbinary = notbinariu
 let dasdsa = new Discord.MessageEmbed()
 .setTitle(`Interface de Configurações de Registro - ${client.user.username}`)
.setColor('ffffff')
.setDescription(`**Configurações de Gênero:**\n<a:1_:1132093814278983800> **Cargo Masculino:** ${masculino}\n<a:2_:1132093884705558628> **Cargo Feminino:** ${feminino}\n<a:3_:1132093954070945934> **Cargo Não-Binario:** ${notbinary}\n\n**Configurações de Registro:**\n<a:4_:1132094036753260544> **Cargo de Registrado:** ${roleregistrado}\n<a:5_:1132094083733672017> **Cargo de Novato:** ${notroleregister}\n<a:6_:1132094166046888006> **Canal de Registro:**  ${channelregister}\n<a:7_:1132094236058198088> **Cargo de Registrador:** ${cargoregistrator}\n\n<a:8_:1132094342610309233> **Salvar Configurações**\n\nSe prefirir um sistema de registro mais " automatico " utilize o metodo de reações. Usando **register reaction**`)

 r.message.edit({embeds:[dasdsa]})
 
 let mujherdsadasset = new Discord.MessageEmbed()
 
 
 .setDescription(`Cargo setado com sucesso!`)
 .setColor('ffffff')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 
 
 notbinCollector.first().reply({embeds:[mujherdsadasset]})  .then((msg)=>{
  sv.delete() 
 setTimeout(()=>{
  notbinCollector.first().delete()
   msg.delete()},5000)})
 break; 
 case 'butao4':
    
   r.deferUpdate()
                 
 let sada = new Discord.MessageEmbed()
 .setDescription(`Hey, ${message.member} ! Mencione um cargo válido.`)
 .setColor('ffffff')
   
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
   
   
 
let su = await message.channel.send({embeds:[sada]})
setTimeout(()=>{su.delete()},30000)
 const filter123 = res => {
 return res.author.id === message.author.id && res.content.length;
 };
 const regisroleCollector = await message.channel.awaitMessages({
   filter:filter123,
 max: 1,
 time: 30000
 });
 
 
     
 let roleregistre = regisroleCollector.first().mentions.roles.first() ||message.guild.roles.cache.get(regisroleCollector.first().content)
 
 
 let nobsad = new Discord.MessageEmbed()
 .setDescription(` Tente novamente \nEste cargo é inválido `)
 .setColor('ffffff')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 
 
   
 
 if(!roleregistre) return regisroleCollector.first().reply({embeds:[nobsad]}).then((msg)=>{
  su.delete() 
 setTimeout(()=>{
  regisroleCollector.first().delete()
   msg.delete()},5000)})
 const permacime120 = new Discord.MessageEmbed()
 .setColor('ffffff')
 .setDescription(`O cargo mencionado é **igual** ou **maior** que o meu!`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();

 if( message.guild.me.roles.highest.position <=  roleregistre.position) return regisroleCollector.first().reply({embeds:[permacime120]}).then((msg)=>{
  su.delete() 
 setTimeout(()=>{
  regisroleCollector.first().delete()
   msg.delete()},5000)})
 if( await message.guild.fetchOwner().then((data)=>data.id) !==  message.member.id){
 const notacime120 = new Discord.MessageEmbed()
 .setColor('ffffff')
 .setDescription(`O cargo mencionado é **igual** ou **maior** que o seu!`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();

 if ( roleregistre.position >=  message.member.roles.highest.position) {
   if (message.author.id) return regisroleCollector.first().reply({embeds:[notacime120]}).then((msg)=>{
    su.delete() 
   setTimeout(()=>{
    regisroleCollector.first().delete()
     msg.delete()},5000)})
}
}
 
 roleregistrado = roleregistre
 let das42dsa = new Discord.MessageEmbed()
 .setTitle(`Interface de Configurações de Registro - ${client.user.username}`)
.setColor('ffffff')
.setDescription(`**Configurações de Gênero:**\n<a:1_:1132093814278983800> **Cargo Masculino:** ${masculino}\n<a:2_:1132093884705558628> **Cargo Feminino:** ${feminino}\n<a:3_:1132093954070945934> **Cargo Não-Binario:** ${notbinary}\n\n**Configurações de Registro:**\n<a:4_:1132094036753260544> **Cargo de Registrado:** ${roleregistrado}\n<a:5_:1132094083733672017> **Cargo de Novato:** ${notroleregister}\n<a:6_:1132094166046888006> **Canal de Registro:**  ${channelregister}\n<a:7_:1132094236058198088> **Cargo de Registrador:** ${cargoregistrator}\n\n<a:8_:1132094342610309233> **Salvar Configurações**\n\nSe prefirir um sistema de registro mais " automatico " utilize o metodo de reações. Usando **register reaction**`)

 r.message.edit({embeds:[das42dsa]})
 
 let csde2343 = new Discord.MessageEmbed()
 
 
 .setDescription(`< Cargo setado com sucesso!`)
 .setColor('ffffff')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 
 
 regisroleCollector.first().reply({embeds:[csde2343]})  .then((msg)=>{
  su.delete() 
 setTimeout(()=>{
  regisroleCollector.first().delete()
  msg.delete()},5000)})

 break; 
 case 'butao5':
    
   r.deferUpdate()
                 
 let csdsa323 = new Discord.MessageEmbed()
 .setDescription(`Hey, ${message.member} ! Mencione um cargo válido.`)
 .setColor('ffffff')
   
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
   
   
 
 let sat = await message.channel.send({embeds:[csdsa323]})
 setTimeout(()=>{sat.delete()},30000)
 const filter12332 = res => {
 return res.author.id === message.author.id && res.content.length;
 };
 const novatoCollector = await message.channel.awaitMessages({
   filter:filter12332,
 max: 1,
 time: 30000
 });
 
 
     
 let novatorole = novatoCollector.first().mentions.roles.first() ||message.guild.roles.cache.get(novatoCollector.first().content)
 
 
 let da22 = new Discord.MessageEmbed()
 .setDescription(` Tente novamente \nEste cargo é inválido `)
 .setColor('ffffff')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 
 
   
 
 if(!novatorole) return novatoCollector.first().reply({embeds:[da22]})
 const permacime123 = new Discord.MessageEmbed()
 .setColor('ffffff')
 .setDescription(`O cargo mencionado é **igual** ou **maior** que o meu!`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();

 if( message.guild.me.roles.highest.position <=  novatorole.position) return novatoCollector.first().reply({embeds:[permacime123]}) .then((msg)=>{
  sat.delete() 
 setTimeout(()=>{
  novatoCollector.first().delete()
  msg.delete()},5000)})

 if( await message.guild.fetchOwner().then((data)=>data.id) !==  message.member.id){
 const notacime123 = new Discord.MessageEmbed()
 .setColor('ffffff')
 .setDescription(` O cargo mencionado é **igual** ou **maior** que o seu!`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();

 if ( novatorole.position >=  message.member.roles.highest.position) {
   if (message.author.id) return novatoCollector.first().reply({embeds:[notacime123]}).then((msg)=>{
    sat.delete() 
   setTimeout(()=>{
    novatoCollector.first().delete()
    msg.delete()},5000)})
  
}
}
 
 notroleregister = novatorole
 let das42dsag = new Discord.MessageEmbed()
 .setTitle(`Interface de Configurações de Registro - ${client.user.username}`)
.setColor('ffffff')
.setDescription(`**Configurações de Gênero:**\n<a:1_:1132093814278983800> **Cargo Masculino:** ${masculino}\n<a:2_:1132093884705558628> **Cargo Feminino:** ${feminino}\n<a:3_:1132093954070945934> **Cargo Não-Binario:** ${notbinary}\n\n**Configurações de Registro:**\n<a:4_:1132094036753260544> **Cargo de Registrado:** ${roleregistrado}\n<a:5_:1132094083733672017> **Cargo de Novato:** ${notroleregister}\n<a:6_:1132094166046888006> **Canal de Registro:**  ${channelregister}\n<a:7_:1132094236058198088> **Cargo de Registrador:** ${cargoregistrator}\n\n<a:8_:1132094342610309233> **Salvar Configurações**\n\nSe prefirir um sistema de registro mais " automatico " utilize o metodo de reações. Usando **register reaction**`)

 r.message.edit({embeds:[das42dsag]})
 
 let mujherdsa42dasset = new Discord.MessageEmbed()
 
 
 .setDescription(`Cargo setado com sucesso!`)
 .setColor('ffffff')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 
 
 novatoCollector.first().reply({embeds:[mujherdsa42dasset]})  .then((msg)=>{
  sat.delete() 
 setTimeout(()=>{
  novatoCollector.first().delete()
  msg.delete()},5000)})

 break; 
 case 'butao6':
    
   r.deferUpdate()
                 
 let chac = new Discord.MessageEmbed()
 .setDescription(`Hey, ${message.member} ! Mencione um canal válido.`)
 .setColor('ffffff')
   
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
   
   
 
 let zad = await message.channel.send({embeds:[chac]})

 setTimeout(()=>{zad.delete()},30000)
 const zira = res => {
 return res.author.id === message.author.id && res.content.length;
 };
 const cargoCollector = await message.channel.awaitMessages({
   filter:zira,
 max: 1,
 time: 30000
 });
 
 
     
 let cargorole = cargoCollector.first().mentions.channels.first() ||message.guild.channels.cache.get(cargoCollector.first().content)
 
 
 let papito = new Discord.MessageEmbed()
 .setDescription(` Tente novamente \nEste canal é inválido `)
 .setColor('ffffff')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 
 
   
 
 if(!cargorole) return cargoCollector.first().reply({embeds:[papito]}).then((msg)=>{
  zad.delete() 
 setTimeout(()=>{
  cargoCollector.first().delete()
  msg.delete()},5000)})


 let j123 = new Discord.MessageEmbed()
 .setDescription(` Hey, ${message.member} ! Mencione um canal de texto na proxima vez. ` )
 .setColor('ffffff')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 if(cargorole.type !== 'GUILD_TEXT') return cargoCollector.first().reply({embeds:[j123]}).then((msg)=>{
  zad.delete() 
 setTimeout(()=>{
  cargoCollector.first().delete()
  msg.delete()},5000)})

 
 channelregister = cargorole
 let ddk232 = new Discord.MessageEmbed()
 .setTitle(`Interface de Configurações de Registro - ${client.user.username}`)
.setColor('ffffff')
.setDescription(`**Configurações de Gênero:**\n<a:1_:1132093814278983800> **Cargo Masculino:** ${masculino}\n<a:2_:1132093884705558628> **Cargo Feminino:** ${feminino}\n<a:3_:1132093954070945934> **Cargo Não-Binario:** ${notbinary}\n\n**Configurações de Registro:**\n<a:4_:1132094036753260544> **Cargo de Registrado:** ${roleregistrado}\n<a:5_:1132094083733672017> **Cargo de Novato:** ${notroleregister}\n<a:6_:1132094166046888006> **Canal de Registro:**  ${channelregister}\n<a:7_:1132094236058198088> **Cargo de Registrador:** ${cargoregistrator}\n\n<a:8_:1132094342610309233> **Salvar Configurações**\n\nSe prefirir um sistema de registro mais " automatico " utilize o metodo de reações. Usando **register reaction**`)

 r.message.edit({embeds:[ddk232]})
 
 let badsads2 = new Discord.MessageEmbed()
 
 
 .setDescription(`Canal setado com sucesso!`)
 .setColor('ffffff')
 
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setTimestamp();
 
 
 cargoCollector.first().reply({embeds:[badsads2]}).then((msg)=>{
  zad.delete() 
 setTimeout(()=>{
  cargoCollector.first().delete()
  msg.delete()},5000)})
  
 break; 
 case 'butao7':
  r.deferUpdate()
                 
  let dsd444444 = new Discord.MessageEmbed()
  .setDescription(`Hey, ${message.member} ! Mencione um cargo válido.`)
  .setColor('ffffff')
    
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
    
  
let zup = await  message.channel.send({embeds:[dsd444444]})
setTimeout(()=>{zup.delete()},30000)
  const filter1234432 = res => {
  return res.author.id === message.author.id && res.content.length;
  };
  const registratorCollector = await message.channel.awaitMessages({
    filter:filter1234432,
  max: 1,
  time: 30000
  });
  
  
      
  let retisrole = registratorCollector.first().mentions.roles.first() ||message.guild.roles.cache.get(registratorCollector.first().content)
  
  
  let da3322 = new Discord.MessageEmbed()
  .setDescription(` Tente novamente \nEste cargo é inválido `)
  .setColor('ffffff')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  
    
  
  if(!retisrole) return registratorCollector.first().reply({embeds:[da3322]}).then((msg)=>{
    zup.delete() 
   setTimeout(()=>{
    registratorCollector.first().delete()
    msg.delete()},5000)})
  const permacime1234 = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`O cargo mencionado é **igual** ou **maior** que o meu!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
 
  if( message.guild.me.roles.highest.position <=  retisrole.position) return registratorCollector.first().reply({embeds:[permacime1234]}).then((msg)=>{
    zup.delete() 
   setTimeout(()=>{
    registratorCollector.first().delete()
    msg.delete()},5000)})
  if( await message.guild.fetchOwner().then((data)=>data.id) !==  message.member.id){
  const notacime1234 = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`O cargo mencionado é **igual** ou **maior** que o seu!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
 
  if ( retisrole.position >=  message.member.roles.highest.position) {
    if (message.author.id) return registratorCollector.first().reply({embeds:[notacime1234]}).then((msg)=>{
      zup.delete() 
     setTimeout(()=>{
      registratorCollector.first().delete()
      msg.delete()},5000)})
 }
  
}
  cargoregistrator = retisrole
  let das42dsag1 = new Discord.MessageEmbed()
  .setTitle(`Interface de Configurações de Registro - ${client.user.username}`)
.setColor('ffffff')
.setDescription(`**Configurações de Gênero:**\n<a:1_:1132093814278983800> **Cargo Masculino:** ${masculino}\n<a:2_:1132093884705558628> **Cargo Feminino:** ${feminino}\n<a:3_:1132093954070945934> **Cargo Não-Binario:** ${notbinary}\n\n**Configurações de Registro:**\n<a:4_:1132094036753260544> **Cargo de Registrado:** ${roleregistrado}\n<a:5_:1132094083733672017> **Cargo de Novato:** ${notroleregister}\n<a:6_:1132094166046888006> **Canal de Registro:**  ${channelregister}\n<a:7_:1132094236058198088> **Cargo de Registrador:** ${cargoregistrator}\n\n<a:8_:1132094342610309233> **Salvar Configurações**\n\nSe prefirir um sistema de registro mais " automatico " utilize o metodo de reações. Usando **register reaction**`)

  r.message.edit({embeds:[das42dsag1]})
  
  let aaa443dddd = new Discord.MessageEmbed()
  
  
  .setDescription(` Cargo setado com sucesso!`)
  .setColor('ffffff')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  
  registratorCollector.first().reply({embeds:[aaa443dddd]})  .then((msg)=>{
    zup.delete() 
   setTimeout(()=>{
    registratorCollector.first().delete()
    msg.delete()},5000)})
  break; 
 case 'butao8':
    
  r.deferUpdate()
 if(l1 != masculino){
db.set(`masculinoregistro_${message.guild.id}`,masculino.id)

 }
 if(l2 != feminino){
  db.set(`femininoregistro_${message.guild.id}`,feminino.id)
  
   }
   if(l3 != notbinary){
    db.set(`notbinaryregistro_${message.guild.id}`,notbinary.id)
    
     }
     if(l4 != roleregistrado){
      db.set(`roleregistrado_${message.guild.id}`,roleregistrado.id)
      
       }
       if(l5 != notroleregister){
        db.set(`notroleregister_${message.guild.id}`,notroleregister.id)
        
         }
       
         if(l6 != channelregister){
          db.set(`channelregister_${message.guild.id}`,channelregister.id)
          
           }
           if(l7 != cargoregistrator){
            db.set(`cargoregistrator_${message.guild.id}`,cargoregistrator.id)
            
             }

           let ds3 = new Discord.MessageEmbed()
            
            
           .setDescription(`Configuração salva com sucesso!`)
           .setColor('ffffff')
           
           .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
           .setTimestamp();
             message.channel.send({embeds:[ds3]})
          r.message.delete().catch(()=>{});
  break; 
 }
})
 })
}else if(args[0] == 'reaction'){


if(args[1]== 'on'){
let status= db.get(`statusreaction_${message.guild.id}`)

if(status){

  const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`O sistema de reation já está habilitado!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 return  message.reply({embeds:[usagerr]}) 
}
db.set(`statusreaction_${message.guild.id}`,'on') 


const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Sistema de reaction habilitado com sucesso !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 return  message.reply({embeds:[usagerr]}) 
}else if(args[1]=='off'){
  let status= db.get(`statusreaction_${message.guild.id}`)

if(!status){

  const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`O sistema de reation já está desabilitado!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 return  message.reply({embeds:[usagerr]}) 
}
db.delete(`statusreaction_${message.guild.id}`) 


const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(` Sistema de reaction desabilitado com sucesso !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 return  message.reply({embeds:[usagerr]}) 

}else if(args[1]=='create'){

  let pagina = args.slice(2).join(" ");


  const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Voce precisa inserir o nome de uma pagina!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  if(!pagina) return message.reply({embeds:[usagerr]})

let verifidepag = db.get(`paginasregister_${message.guild.id}_${pagina}`)


const aee = new Discord.MessageEmbed()
.setColor('ffffff')
.setDescription(` Esta pagina ja existe!`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
if(verifidepag) return message.reply({embeds:[aee]})
let paginas = db.all().filter(data => data.ID.startsWith(`paginasregister_${message.guild.id}`)).sort((a, b) => b.data - a.data);

if(paginas.length ==9 ){
  const aee = new Discord.MessageEmbed()
.setColor('ffffff')
.setDescription(`Você atingiu o limite páginas de registro por reação !`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
return message.reply({embeds:[aee]})

}

if(pagina.includes('_')){

  const da4343 = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(` Você não pode utilizar o caractere **"_"** como nome da página !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
   return message.reply({embeds:[da4343]})
  

}
if(pagina.includes('.')){

  const da4343 = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(` Você não pode utilizar o caractere **"."** como nome da página !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
   return message.reply({embeds:[da4343]})
  


}
if(pagina.length > 20) {
  const embed = new Discord.MessageEmbed()

  .setColor('#ffffff')
 .setDescription(`O nome da página não pode conter mais de " 20 caracteres "`)
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();  
 return message.reply({embeds:[embed]})
}


db.set(`paginasregister_${message.guild.id}_${pagina}`,'not')


const da4343 = new Discord.MessageEmbed()
.setColor('ffffff')
.setDescription(`Pagina criada com sucesso!`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
 return message.reply({embeds:[da4343]})






}else if(args[1]=='page'){
  let pagename = args.slice(2).join(" ");

  if(pagename){
    let verifidepag = db.get(`paginasregister_${message.guild.id}_${pagename}`)
   

    const aee = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(` Esta pagina não existe!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if(!verifidepag) return message.reply({embeds:[aee]})
    let roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagename}`)).sort((a, b) => b.data - a.data);
  
 
    let emoji = ['<:lunizero:918729484318957568>',
    '<a:1_:1132093814278983800>', 
    '<a:2_:1132093884705558628>',
    '<a:3_:1132093954070945934>',
    '<a:4_:1132094036753260544>',
    '<a:5_:1132094083733672017>',
    '<a:6_:1132094166046888006>',
    '<a:7_:1132094236058198088>',
    '<a:8_:1132094342610309233>',
    '<a:9_:1132094391666872360>']
    
let cargosregistro = ''
    
    if (roles.length === 0 ) {
      cargosregistro  = 'Nenhum cargo'
    }else{
      

      for (let i = 0; i < roles.length; i++) {
   
       
       
       let cargo = roles[i].ID.split("_")[3]

       cargosregistro  += `${emoji[i]} | <@&${cargo}>\n`
       
    
      }
        
       
    }

    const xiudu = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setTitle(`Registro por Reação [Páginas]-${client.user.username}`)
    .setDescription(`Olá, ${message.author}!\nEste é o menu de configuração para página: **${pagename}**\n\n**Cargos configurados:**\n${cargosregistro}\n\n**Informações:**\n<a:certo:846064112127705088> | Adicione um cargo\n<a:errado:846064307905232926> | Remove um cargo\n<a:1_:1132093814278983800> | AutoNext\n\n<:apagar:849111323291811880> | Deletar essa página`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();

    let butao1 = new Discord.MessageButton()
    .setEmoji('<:icons_Correct:1138838312245788712>')
  .setStyle("SECONDARY")
   .setCustomId("butao1")
  
    let butao2 =  new Discord.MessageButton()
    .setEmoji('<:icons_Wrong:1138838267140255895>')
    .setStyle("SECONDARY")
    .setCustomId("butao2")
  let butao3 =  new Discord.MessageButton()
    .setEmoji('<a:1_:1132093814278983800>')
    .setStyle("SECONDARY")
    .setCustomId("butao3")
    let butao4 =  new Discord.MessageButton()
    .setEmoji('<:arquivo:1138839447346098276>')
    .setStyle("SECONDARY")
    .setCustomId("butao4")



    const row = new Discord.MessageActionRow()
    row.addComponents([butao1,butao2,butao3,butao4])
      
 message.reply({embeds:[xiudu],components:[row]}).then(msg => {
 setTimeout(()=>{msg.delete()},180000)
 
                 const inf = (interaction) => interaction.user.id == message.member.id
                  
                  const collector = msg.createMessageComponentCollector({ filter:inf});
                  collector.on('collect', async(r,u) =>{
               switch (r.customId) {
                 case 'butao1':{
                  r.deferUpdate()

                  let csdsa323 = new Discord.MessageEmbed()
                  .setDescription(` Hey, ${message.member} ! Mencione um cargo válido.`)
                  .setColor('ffffff')
                    
                  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                  .setTimestamp();
                    
                    
                  
                 let zup = await message.channel.send({embeds:[csdsa323]})
                 setTimeout(()=>{zup.delete()},30000)
               
                  const filter12332 = res => {
                  return res.author.id === message.author.id && res.content.length;
                  };
                  const novatoCollector = await message.channel.awaitMessages({
                    filter:filter12332,
                  max: 1,
                  time: 30000
                  });
                  
                  
                      
                  let novatorole = novatoCollector.first().mentions.roles.first() ||message.guild.roles.cache.get(novatoCollector.first().content)
                  
                  
                  let da22 = new Discord.MessageEmbed()
                  .setDescription(` Tente novamente \nEste cargo é inválido `)
                  .setColor('ffffff')
                  
                  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                  .setTimestamp();
                  
                  
                    
                  
                  if(!novatorole) return novatoCollector.first().reply({embeds:[da22]}).then((msg)=>{
                    zup.delete() 
                   setTimeout(()=>{
                    novatoCollector.first().delete()
                    msg.delete()},5000)})
                  const permacime120 = new Discord.MessageEmbed()
                  .setColor('ffffff')
                  .setDescription(` O cargo mencionado é **igual** ou **maior** que o meu!`)
                  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                  .setTimestamp();
                 
                  if( message.guild.me.roles.highest.position <=  novatorole.position) return novatoCollector.first().reply({embeds:[permacime120]}).then((msg)=>{
                    zup.delete() 
                   setTimeout(()=>{
                    novatoCollector.first().delete()
                    msg.delete()},5000)})
                  if( await message.guild.fetchOwner().then((data)=>data.id) !==  message.member.id){
                  const notacime120 = new Discord.MessageEmbed()
                  .setColor('ffffff')
                  .setDescription(`O cargo mencionado é **igual** ou **maior** que o seu!`)
                  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                  .setTimestamp();
                 
                  if ( novatorole.position >=  message.member.roles.highest.position) {
                    if (message.author.id) return novatoCollector.first().reply({embeds:[notacime120]}).then((msg)=>{
                      zup.delete() 
                     setTimeout(()=>{
                      novatoCollector.first().delete()
                      msg.delete()},5000)})
                 }
                 }


            
                  let checkcargo = db.get(`rolesregister_${message.guild.id}_${pagename}_${novatorole.id}`)
                  
                  let bruh = new Discord.MessageEmbed()
                  .setDescription(`Tente novamente \nEste cargo ja esta sendo usado nesta página `)
                  .setColor('ffffff')
                  
                  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                  .setTimestamp();

                  if(checkcargo) return novatoCollector.first().reply({embeds:[bruh]}).then((msg)=>{
                    zup.delete() 
                   setTimeout(()=>{
                    novatoCollector.first().delete()
                    msg.delete()},5000)})

                  let rolesas = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagename}`)).sort((a, b) => b.data - a.data);
                  if(rolesas.length ==10){
                    const aee = new Discord.MessageEmbed()
                  .setColor('ffffff')
                  .setDescription(`Você atingiu o limite cargos desta página !`)
                  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                  .setTimestamp();
                  return novatoCollector.first().reply({embeds:[aee]}).then((msg)=>{
                    zup.delete() 
                   setTimeout(()=>{
                    novatoCollector.first().delete()
                    msg.delete()},5000)})
                  
                  }

                  db.set(`rolesregister_${message.guild.id}_${pagename}_${novatorole.id}`,true)

                  let dadasdsadasda = new Discord.MessageEmbed()
    

                  .setDescription(`Cargo adicionado com sucesso!`)
                  .setColor('ffffff')
                  
                  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                  .setTimestamp();
                  
                  
                  novatoCollector.first().reply({embeds:[dadasdsadasda]}).then((msg)=>{
                    zup.delete() 
                   setTimeout(()=>{
                    novatoCollector.first().delete()
                    msg.delete()},5000)})

                  let roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagename}`)).sort((a, b) => b.data - a.data);

                  let cargosregistro = ''
                      
                      if (roles.length === 0 ) {
                        cargosregistro  = 'Nenhum cargo'
                      }else{
                  
                        for (let i = 0; i < roles.length; i++) {
                     
                     
                         
                         let cargo = roles[i].ID.split("_")[3]
                  
                         cargosregistro  += `${emoji[i]} | <@&${cargo}>\n`
                         
                      
                        }
                          
                         
                      }
                  
                      const xiudu = new Discord.MessageEmbed()
                      .setColor('ffffff')
                      .setTitle(`Registro por Reação [Páginas]-${client.user.username}`)
                      .setDescription(`Olá, ${message.author}!\nEste é o menu de configuração para página: **${pagename}**\n\n**Cargos configurados:**\n${cargosregistro}\n\n**Informações:**\n<a:certo:846064112127705088> | Adicione um cargo\n<a:errado:846064307905232926> | Remove um cargo\n<a:1_:1132093814278983800> | AutoNext\n\n<:apagar:849111323291811880> | Deletar essa página`)
                      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                      .setTimestamp();
                      r.message.edit({embeds:[xiudu]})

                   }  break;

                   case 'butao2':{
                    r.deferUpdate()

                    let csdsa323 = new Discord.MessageEmbed()
                    .setDescription(`Hey, ${message.member} ! Mencione um cargo válido.`)
                    .setColor('ffffff')
                      
                    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                    .setTimestamp();
                      
                      
                    
                 let zup =  await message.channel.send({embeds:[csdsa323]})
                 setTimeout(()=>{zup.delete()},30000)
                    const filter12332 = res => {
                    return res.author.id === message.author.id && res.content.length;
                    };
                    const novatoCollector = await message.channel.awaitMessages({
                      filter:filter12332,
                    max: 1,
                    time: 30000
                    });
                    
                    
                        
                    let novatorole = novatoCollector.first().mentions.roles.first() ||message.guild.roles.cache.get(novatoCollector.first().content)
                    
                    
                    let da22 = new Discord.MessageEmbed()
                    .setDescription(`Tente novamente \nEste cargo é inválido `)
                    .setColor('ffffff')
                    
                    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                    .setTimestamp();
                    
                    
                      
                    
                    if(!novatorole) return novatoCollector.first().reply({embeds:[da22]}).then((msg)=>{
                      zup.delete() 
                     setTimeout(()=>{
                      novatoCollector.first().delete()
                      msg.delete()},5000)})
  

                    let checkcargo = db.get(`rolesregister_${message.guild.id}_${pagename}_${novatorole.id}`)

                //    rolesregister_766118499809886238_Estados_877593531198341152
                    let bruh = new Discord.MessageEmbed()
                    .setDescription(`Tente novamente \nEste cargo não esta sendo usado nesta pagina `)
                    .setColor('ffffff')
                    
                    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                    .setTimestamp();
                    
                    
                      
                    
                    if(!checkcargo) return novatoCollector.first().reply({embeds:[bruh]}).then((msg)=>{
                      zup.delete() 
                     setTimeout(()=>{
                      novatoCollector.first().delete()
                      msg.delete()},5000)})
  
                    db.delete(`rolesregister_${message.guild.id}_${pagename}_${novatorole.id}`)
  
                    let dadasdsadasda = new Discord.MessageEmbed()
      
  
                    .setDescription(`Cargo removido com sucesso!`)
                    .setColor('ffffff')
                    
                    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                    .setTimestamp();
                    
                    
                    novatoCollector.first().reply({embeds:[dadasdsadasda]}).then((msg)=>{
                      zup.delete() 
                     setTimeout(()=>{
                      novatoCollector.first().delete()
                      msg.delete()},5000)})
  
                    let roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagename}`)).sort((a, b) => b.data - a.data);
  
                    let cargosregistro = ''
                        
                        if (roles.length === 0 ) {
                          cargosregistro  = ' Nenhum cargo'
                        }else{
                    
                          for (let i = 0; i < roles.length; i++) {
                       
                       
                           
                           let cargo = roles[i].ID.split("_")[3]
                    
                           cargosregistro  += `${emoji[i]} | <@&${cargo}>\n`
                           
                        
                          }
                            
                           
                        }
                    
                        const xiudu = new Discord.MessageEmbed()
                        .setColor('ffffff')
                        .setTitle(`Registro por Reação [Páginas]-${client.user.username}`)
                        .setDescription(`Olá, ${message.author}!\nEste é o menu de configuração para página: **${pagename}**\n\n**Cargos configurados:**\n${cargosregistro}\n\n**Informações:**\n<a:certo:846064112127705088> | Adicione um cargo\n<a:errado:846064307905232926> | Remove um cargo\n<a:1_:1132093814278983800> | AutoNext\n\n<:apagar:849111323291811880> | Deletar essa página`)
                        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                        .setTimestamp();
                        r.message.edit({embeds:[xiudu]})

                    
                   }break;
                   
                   case 'butao3':{
                    r.deferUpdate()

                    let verifidepag = db.get(`paginasregister_${message.guild.id}_${pagename}`)

                    if(verifidepag == 'not'){

                      db.set(`paginasregister_${message.guild.id}_${pagename}`,'yes')
                      let dadasdsadasda = new Discord.MessageEmbed()
      
  
                      .setDescription(` AutoNext habilitado com sucesso!`)
                      .setColor('ffffff')
                      
                      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                      .setTimestamp();
                      
                      message.channel.send({embeds:[dadasdsadasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
                    }else {

                      db.set(`paginasregister_${message.guild.id}_${pagename}`,'not')

                      let dadasdsadasda = new Discord.MessageEmbed()
      
  
                      .setDescription(`AutoNext desabilitado com sucesso!`)
                      .setColor('ffffff')
                      
                      .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                      .setTimestamp();
                      
                      message.channel.send({embeds:[dadasdsadasda]}).then((msg)=> { setTimeout(()=>{msg.delete()},4000)})
                    }


 }break;

 case 'butao4':{
  r.deferUpdate()

  let roles = db.all().filter(data => data.ID.startsWith(`rolesregister_${message.guild.id}_${pagename}`)).sort((a, b) => b.data - a.data);

  for (let i = 0; i < roles.length; i++) {

    db.delete(roles[i].ID)
  

  }

  r.message.delete()
  
db.delete(`paginasregister_${message.guild.id}_${pagename}`)

  let dadasdsadasda = new Discord.MessageEmbed()
      
  
  .setDescription(`Página deletada com sucesso!`)
  .setColor('ffffff')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  message.channel.send({embeds:[dadasdsadasda]}).then(msg => {
    setTimeout(()=>{msg.delete()},6000)
  })   

}break;
               }
              })
            })

  }else{
    let paginas = db.all().filter(data => data.ID.startsWith(`paginasregister_${message.guild.id}`)).sort((a, b) => b.data - a.data)
 
    let cargosadicionads = []
    for (let i = 0; i < paginas.length; i++) {
      cargosadicionads.push(paginas[i].ID.split("_")[2])
    }
   

    let dadasdsadasda = new Discord.MessageEmbed()
      .setTitle(`Registro por Reação [Páginas]-${client.user.username}`)
  
    .setDescription(`**Lista de páginas criadas:**\n${!cargosadicionads || cargosadicionads ==''? 'Nenhuma página':cargosadicionads.join(', ')}\n\n**${paginas.length} páginas de 9 páginas**`)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    message.reply({embeds:[dadasdsadasda]})

  }

}else{
  const usagerr = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setTitle(" Tente novamente")
   .setDescription(`Use o comando : \`${prefix}register reaction <on|off>\` para ativar ou desativar o sistema de registro por reção.\nUse o comando : \`${prefix}register reaction create <nomedapagina>\` para criar uma página de registro por reação.\nUse o comando : \`${prefix}register reaction page <nomedapagina\` para visualizar páginas criadas. `)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
 
  return  message.reply({embeds:[usagerr]}) 
}


}else{
  const usagerr = new Discord.MessageEmbed()
   .setColor('ffffff')
   .setTitle("Tente novamente")
   .setDescription(`Use o comando : \`${prefix}register config \` para configurar o sistema de registro por reação\nUse o comando : \`${prefix}register reaction \` para configurar as páginas de registro por reação`)
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
 
  return  message.reply({embeds:[usagerr]}) 
}


    }
}



