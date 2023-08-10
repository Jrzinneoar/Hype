const Discord = require('discord.js');
const { dev } = require('../../config.json');

module.exports = {
	nome: "serverlist",
	alternativas: ["serverlist"],
	run: async (client, message, args) => {
    
    if (!dev.includes(message.author.id)) {
  const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Ops, apenas meus desenvolvedores podem utilizar este comando!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  return  message.reply({embeds:[usagerr]})
    }








let i0 = 0;
let i1 = 10;
let page = 1;

  
   
    
    let xp13 = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount)  .map(r => r)

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
   
   

    content += `**${i+1}º | ${xp[i].name}** \n **ID :** \`${xp[i].id}\`\n**Total De Membros :** \`${xp[i].memberCount}\` **Membros**\n**Total De Bots :** \`${xp[i].members.cache.filter(m => m.user.bot).size}\` **Bots** \n**Nome Da Pose : ${await xp[i].fetchOwner().then((data)=>data.user.tag)}**\n**ID Da Pose :** \`${await xp[i].fetchOwner().then((data)=>data.id)}\`\n`
    

    }
    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTitle(`Lista De Servidores`)
    .setDescription(`${content}`)
    
    .setColor("ffffff")
 
    .setTimestamp();
   
    
    return await message.reply({embeds:[embed]});
    

}
    let content = "";
    content += `**Pagina:** \`${page}/${Math.ceil(xp13.length / 10)}\`\n\n`
    for (let i = 0; i < 10; i++) {
   
   
 
 
    content += `** ${i+1}º | ${xp[i].name}** \n **ID :** \`${xp[i].id}\`\n**Total De Membros :** \`${xp[i].memberCount}\` **Membros**\n**Total De Bots :** \`${xp[i].members.cache.filter(m => m.user.bot).size}\` **Bots** \n**Nome Da Pose : ${await xp[i].fetchOwner().then((data)=>data.user.tag)}**\n**ID Da Pose :** \`${await xp[i].fetchOwner().then((data)=>data.id)}\`\n`

    }
    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTitle(`Lista De Servidores`)
    .setDescription(`${content}`)

    .setColor("ffffff")

    .setTimestamp();
   



    let butao1 = new Discord.MessageButton()
  .setEmoji('<a:1_:1132093814278983800>')
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
   
    content += `** ${i+1}º | ${xp[i].name}** \n **ID :** \`${xp[i].id}\`\n**Total De Membros :** \`${xp[i].memberCount}\` **Membros**\n**Total De Bots :** \`${xp[i].members.cache.filter(m => m.user.bot).size}\` **Bots** \n**Nome Da Pose : ${await xp[i].fetchOwner().then((data)=>data.user.tag)}**\n**ID Da Pose :** \`${await xp[i].fetchOwner().then((data)=>data.id)}\`\n`
    }    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
     .setTitle(`Lista De Servidores`)
    .setDescription(`${content}`)

    .setColor("ffffff")
 
    .setTimestamp();

    
    let butao1 = new Discord.MessageButton()
    .setEmoji('<:seta2:918722214101155900>')
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
   
    content += `**${i+1}º | ${xp[i].name}** \n **ID :** \`${xp[i].id}\`\n**Total De Membros :** \`${xp[i].memberCount}\` **Membros**\n**Total De Bots :** \`${xp[i].members.cache.filter(m => m.user.bot).size}\` **Bots** \n**Nome Da Pose : ${await xp[i].fetchOwner().then((data)=>data.user.tag)}**\n**ID Da Pose :** \`${await xp[i].fetchOwner().then((data)=>data.id)}\`\n`
    }    
    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
     .setTitle(`Lista De Servidores`)
    .setDescription(`${content}`)
    
    .setColor("ffffff")
    
    .setTimestamp();
  
    
    let butao1 = new Discord.MessageButton()
    .setEmoji('<:seta2:918722214101155900>')
  .setStyle("SECONDARY")
   .setCustomId("butao2")
   let butao2 = new Discord.MessageButton()
    .setEmoji('<a:1_:1132093814278983800>')
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
   
    content += `**${i+1}º | ${xp[i].name}** \n **ID :** \`${xp[i].id}\`\n**Total De Membros :** \`${xp[i].memberCount}\` **Membros**\n**Total De Bots :** \`${xp[i].members.cache.filter(m => m.user.bot).size}\` **Bots** \n**Nome Da Pose : ${await xp[i].fetchOwner().then((data)=>data.user.tag)}**\n**ID Da Pose :** \`${await xp[i].fetchOwner().then((data)=>data.id)}\`\n`
    }    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTitle(`Lista De Servidores`)
    .setDescription(`${content}`)
    
    .setColor("ffffff")
  
    .setTimestamp();
  
    if(i0 === 0){
    
       let butao1 = new Discord.MessageButton()
        .setEmoji('<a:1_:1132093814278983800>')
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
    .setEmoji('<:seta2:918722214101155900>')
  .setStyle("SECONDARY")
   .setCustomId("butao2")
   let butao2 = new Discord.MessageButton()
    .setEmoji('<a:1_:1132093814278983800>')
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