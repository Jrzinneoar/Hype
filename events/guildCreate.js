const Discord = require("discord.js");
const db = require('quick.db')
async function invites(client,guild){

   
  if(guild.vanityURLCode != null){
    
    client.invites.set(guild.id,await guild.fetchVanityData())
  }
  guild.invites.fetch().then(invites => {
    client.invites.set(guild.id, invites);
  })
}
async function log(client,guild){

  let guildCreateChannel = client.channels.cache.get("1131208183621365771");
    
  const embed = new Discord.MessageEmbed()
  .setColor("5fa5e3")
  .setTitle("Entrei em um Server")
    .setDescription(`**Nome & Id:** \n\`${guild.name} (${guild.id})\`\n**Posse do Servidor:**\n\`${await guild.fetchOwner().then((data)=>data.user.tag)} (${await guild.fetchOwner().then((data)=>data.id)})\`\n**Total Usuarios:**\n\`${guild.memberCount}\`\n**Total de bots:**\n\`${guild.members.cache.filter(m => m.user.bot).size}\``)
 guildCreateChannel.send({embeds:[embed]});

}

async function blacklist(client,guild){


    let dbtest = db.get(`blacklistguild_${guild.id}`)

    if(dbtest){

      guild.leave()
    }
}
module.exports =async (client,guild) => {
 
  log(client,guild)
  invites(client,guild)
 blacklist(client,guild)
}