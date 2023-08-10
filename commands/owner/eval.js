const Discord = require("discord.js");
const { dev,default_prefix ,token} = require('../../config.json');
const db = require('quick.db')
module.exports = {
  nome: "eval",
  alternativas: ["e","ev"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
		

    if (!dev.includes(message.author.id)) {
  const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Ops, apenas meus desenvolvedores podem utilizar este comando!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  return message.reply({embeds:[usagerr]})
  }

let r =args.join(" ");

try {
let cmd = await eval(r);

if (typeof cmd !== "string")
cmd = await require("util").inspect(cmd ,{ depth: 0 });
cmd =  await cmd.replaceAll(token, '*'.repeat(token.length))

let embed = new Discord.MessageEmbed() 
.setColor(`#ffffff`) 

.setDescription(`**Entrada:**\`\`\`js\n${r}\`\`\`\n**Saida:**\`\`\`js\n${await cmd}\`\`\``)



message.reply({embeds:[embed]})

}
catch (e) {
   
    let embed = new Discord.MessageEmbed() 
    .setColor(`#ffffff`) 
    
    .setDescription(`**Entrada:**\`\`\`js\n${r}\`\`\`\n**Saida:**\`\`\`js\n${await e}\`\`\``)
    
    
    
     message.reply({embeds:[embed]})

}

   



  }
}