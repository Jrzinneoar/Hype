const Discord = require('discord.js')
module.exports = {
  nome: "clear",
  coolwdon:6000,
  alternativas: ["clear"],
  run: async  (client, message, args) => {
  
 
  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Para executar este comando precisa a permissão \`gerenciar mensagens\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return  message.reply({embeds:[limite]})
   
  const ad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Não é possível executar este o comando, preciso da permissão de \`gerenciar mensagens\` !`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) return  message.reply({embeds:[ad]})
 
  if (!args[0]) { 

    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Informe um número de 1 até 100.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})}
  if (isNaN(args[0]) || parseInt(args[0]) <= 0) { 

    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Insira um número válido para deletar mensagens.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    return message.reply({embeds:[ad]})}

  let deleteAmount;

  if (parseInt(args[0]) > 100 ) {
  deleteAmount = 100;
  } else {
  deleteAmount = parseInt(args[0]);
  }

 let content = ''
  await message.channel.messages.fetch({limit: deleteAmount }).then(async fetched => {
    const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned);

let a = await message.channel.bulkDelete(notPinned, true);

content = `${a.size} mensagens foram apagadas com sucesso. \n`

if(a.size < fetched.size) content += `Porém, ${fetched.size - a.size} mensagens foram ignoradas por estarem fixadas ou serem muito antigas!`
  const embed = new Discord.MessageEmbed()
  .setTitle(`Mensagens apagadas !`)
  .setDescription(content)
  .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setColor('#ffffff')
  await message.channel.send({embeds: [embed]}).then(msg => {
    
    setTimeout(()=>{ msg.delete().catch(()=>{});},15000)})

  })
 


  }
}
