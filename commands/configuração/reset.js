
const Discord = require("discord.js")
const db = require("quick.db")
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "reset",
    coolwdon:17000,
  alternativas: ["reset"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

    const limite = new Discord.MessageEmbed()
.setColor('ffffff')
.setDescription(` Para usar este comando você precisa ser **posse** do servidor!`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

if (await message.guild.fetchOwner().then((data)=>data.id) !== message.member.id) return  message.reply({embeds:[limite]})


const embed = new Discord.MessageEmbed ()
    
.setTitle(`Bando de dados - ${client.user.username}`)    
.setColor('ffffff')
.setDescription(` reset o banco abaixo!\n\n**Basta clicar no botão referente ao banco de dados que você deseja deletar**\n\n__Obs:__ *Após você resetar os dados abaixo não poderam ser recuperados*`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();



let butao1 = new Discord.MessageButton()
.setStyle("SECONDARY")
.setLabel('Resetar Divulgação')
.setCustomId("reset_div")

let butao2 =  new Discord.MessageButton()

.setStyle("SECONDARY")
.setLabel('Resetar Tempo')
.setCustomId("reset_tempo")
let butao3 =  new Discord.MessageButton()
.setStyle("SECONDARY")
.setLabel('Resetar Level')
.setCustomId("reset_level")
let butao4 =  new Discord.MessageButton()
.setStyle("SECONDARY")
.setLabel('Resetar Registro')
.setCustomId("reset_registro")


const row = new Discord.MessageActionRow()
row.addComponents([butao1,butao2,butao3,butao4])
 
message.reply({embeds:[embed],components:[row]}).then(msg => {
setTimeout(()=>{msg.delete()},180000)

const inf = (interaction) => interaction.user.id == message.member.id

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(r,u) =>{
switch (r.customId) {
case 'reset_div':{
r.deferUpdate()

let xp13 = db.all().filter(data => data.ID.startsWith(`invitotal_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
if(xp13.length== 0){
    let dadasdsadasda = new Discord.MessageEmbed()
             
         
.setDescription(`Não há dados de divulgação armazenados`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))

}
for (let i = 0; i < xp13.length; i++) {
   
       
    if(xp13[i].ID.startsWith(`invitotal_${message.guild.id}_`)) {
db.delete(xp13[i].ID)
    
    }
}
let dadasdsadasda = new Discord.MessageEmbed()
             
         
.setDescription(`Divulgação resetada com **sucesso.**`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))}
break;
case 'reset_tempo':{
r.deferUpdate()

let xp13 = db.all().filter(data => data.ID.startsWith(`tempocall_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
if(xp13.length== 0){
    let dadasdsadasda = new Discord.MessageEmbed()
             
         
.setDescription(`Não há dados de tempo armazenados`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))

}
for (let i = 0; i < xp13.length; i++) {
   
       
    if(xp13[i].ID.startsWith(`tempocall_${message.guild.id}_`)) {
db.delete(xp13[i].ID)
    
    }
}
let dadasdsadasda = new Discord.MessageEmbed()
             
         
.setDescription(` Tempo resetado com **sucesso.**`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))}
break;
case 'reset_registro':{
r.deferUpdate()

let xp13 = db.all().filter(data => data.ID.startsWith(`quantidaderegistros_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
if(xp13.length== 0){
    let dadasdsadasda = new Discord.MessageEmbed()
             
         
.setDescription(` Não há dados de registro armazenados`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))

}
for (let i = 0; i < xp13.length; i++) {
   
       
    if(xp13[i].ID.startsWith(`quantidaderegistros_${message.guild.id}_`)) {
db.delete(xp13[i].ID)
    
    }
}
let dadasdsadasda = new Discord.MessageEmbed()
             
         
.setDescription(`Registro resetado com **sucesso.**`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))}
break;
case 'reset_level':{
r.deferUpdate()

let xp13 = db.all().filter(data => data.ID.startsWith(`messages_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
if(xp13.length== 0){
    let dadasdsadasda = new Discord.MessageEmbed()
             
         
.setDescription(`Não há dados de level armazenados`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))

}
for (let i = 0; i < xp13.length; i++) {
   
       
    if(xp13[i].ID.startsWith(`messages_${message.guild.id}_`)) {
db.delete(xp13[i].ID)
    
    }
}
let dadasdsadasda = new Discord.MessageEmbed()
             
         
.setDescription(` Level resetado com **sucesso.**`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
message.channel.send({embeds:[dadasdsadasda]}).then(msg=>  setTimeout(()=>{msg.delete()},4000))
break;}
}
})
})

  }
}