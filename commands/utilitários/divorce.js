
const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    nome: "divorce",
    coolwdon:6000,
    alternativas: ["divorce"],
    run: async (Client, message, args) => {
    let div2 = new discord.MessageEmbed()
    .setColor('ffffff')
    .setTitle('Suas informacoes :')
    .setDescription(`😭 Você não está casado `)
  .setTimestamp()
  
    if (!db.get(`marry_${message.author.id}`)) return message.reply({embeds:[div2]})

    let div = new discord.MessageEmbed()
    .setColor('ffffff')
    .setTitle(`💔 | Divórcio`)
    .setDescription('Voce pediu divorcio! Digite **" sim "** para se divorciar ou **" nao "** para nao divorciar')
  .setTimestamp()
let stv  = await message.reply({embeds:[div]})
setTimeout(()=>{stv.delete()},90000)
const filter = (m) =>m.author.id === message.author.id 
    const collector = message.channel.createMessageCollector({  filter , time : 90000});
   

    collector.on("collect", collected => { 
    
    if (collected.content.toLowerCase() === "sim"){ 
  
    let div = new discord.MessageEmbed()
    .setColor('ffffff')
    .setTitle('Suas informações :')
    .setDescription(`Agora você não está mais **casado** com <@${db.get(`marry_${message.author.id}`)}> !`)
  .setTimestamp()
  collected.reply({embeds:[div]}).then((msg)=>{
    stv.delete()
    setTimeout(()=>{
    collected.delete()
    msg.delete()},6000)})
    collector.stop(true)
  
    db.delete(`timemarry_${db.get(`marry_${message.author.id}`)}`)

    db.delete(`marry_${db.get(`marry_${message.author.id}`)}`);
     db.delete(`timemarry_${message.member.id}`)
   
     db.delete(`marry_${message.author.id}`);
     
    } else if (collected.content.toLowerCase() === "nao"||collected.content.toLowerCase() === "não"){ 
    let div = new discord.MessageEmbed()
    .setColor('ffffff')

    .setTitle('Suas informacoes :')
    .setDescription(`😮| Você recusou se divorciar`)
  .setTimestamp()
  collected.reply({embeds:[div]}).then((msg)=>{
    stv.delete()
    setTimeout(()=>{
     collected.delete()
    msg.delete()},6000)})
    collector.stop(true)
  
    }

    })
 }
}

