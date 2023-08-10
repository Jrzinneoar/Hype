const Discord = require("discord.js");



module.exports = async (client,guild) => {
    let guildCreateChannel = client.channels.cache.get("1131208183621365771");


    const embed = new Discord.MessageEmbed()
    .setColor("5fa5e3")
    .setTitle("Sai de um Server")
  .setDescription(`**Nome & Id:** \n\`${guild.name} (${guild.id})\`\n**Posse do Servidor:**\n\`${await guild.fetchOwner().then((data)=> data.user.tag)} (${await guild.fetchOwner().then((data)=>data.id)})\`\n**Total Usuarios:**\n\`${guild.memberCount}\`\n**Total de bots:**\n\`${guild.members.cache.filter(m => m.user.bot).size}\``)
  guildCreateChannel.send({embeds:[embed]}); 

  

}