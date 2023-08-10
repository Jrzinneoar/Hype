const db = require('quick.db')
const Discord = require('discord.js')

function logbooster(client, oldMember, newMember) {
    let sistelevel = db.get(`logbost_${oldMember.guild.id}`);
  if(sistelevel === null)  return;

    let msglog = db.get(`logboosterch_${oldMember.guild.id}`)
if(msglog){
let msgboost = db.get(`msgboost_${oldMember.guild.id}`)
    if(msgboost == null) msgboost = 'Nenhuma mensagem'
msgboost =  msgboost.replaceAll(`{MENTION}`.toUpperCase(),`${oldMember}`).replaceAll(`{NAME}`.toUpperCase(),`${oldMember.user.username}`)
if(!oldMember.premiumSinceTimestamp&&newMember.premiumSinceTimestamp){
    let embeded = db.get(`embeded_${oldMember.guild.id}`)

    if(embeded){
        let ch = client.channels.cache.get(msglog);
        let bostcor = db.get(`boostercorlor_${oldMember.guild.id}`)
        if(bostcor == null) bostcor = '#000000'   
        const embed = new Discord.MessageEmbed()
        .setColor(bostcor)
          .setDescription(msgboost)
          ch.send({embeds:[embed]});
}else{
    let ch = client.channels.cache.get(msglog);
    ch.send({content:msgboost})
}   }else if(oldMember.premiumSinceTimestamp&&!newMember.premiumSinceTimestamp){
    const embed = new Discord.MessageEmbed()
      .setDescription(`${oldMember} retirou seu booster do servidor.`)
      ch.send({embeds:[embed]});
}
    
   
 
}
}
module.exports = async(client,oldMember, newMember) => {
    logbooster(client, oldMember, newMember)
}