
const Discord = require("discord.js");

module.exports = {
  nome: "ping",
  coolwdon:4000,
  alternativas: ["ping"],
  run: async  (client, message, args) => {
  let time = new Date().getTime() 

  const embed = new Discord.MessageEmbed()
    .setColor("#ffffff")
    .setTitle(`PING !`)
.setDescription(`**O meu ping é :**\n **Gateway Ping :** \`${Math.abs(time - message.createdTimestamp)} ms\` \n **API Ping :** \`${client.ws.ping} ms\``)  

 .setTimestamp() 
 message.reply({embeds:[embed]})

  }
};
