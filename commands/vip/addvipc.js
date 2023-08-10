
const db = require("quick.db");
const {findMember} = require('../../script/utils')
const Discord = require('discord.js');
module.exports = {
    nome:"addvipc",
    coolwdon:10000,
    alternativas: ["addvipc"],
    run: async (client, message, args) => {
        let temvip = db.get(`newvips_${message.guild.id}_${message.member.id}`)
        let vir = db.get(`vips_${message.guild.id}_"${temvip.vipname}"`)
    let nopossui = new Discord.MessageEmbed()
				
			
    .setDescription(` Você não é um membro VIP!    ` )
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if (!temvip) return message.reply({embeds:[nopossui]});
 
   
    if(!temvip.cargo||!vir.permch){

        let botvip = new Discord.MessageEmbed()
                    
                
        .setDescription(`Você não posssui canal VIP!`)
        .setColor('ffffff')
    
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
    
     return message.reply({embeds:[botvip]})


       }
   let canalvip = message.guild.channels.cache.get(temvip.canal)
   var name = args.join(' ').trim();
   let user=await findMember(message, name)
   let notuser = new Discord.MessageEmbed()
				
			
   .setDescription(`Mencione um usuário valido !   ` )
   .setColor('ffffff')
   
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   if(!user) return message.reply({embeds:[notuser]})
  
    let nopossuitag = new Discord.MessageEmbed()
				
			
   .setDescription(`Este usuário já possui permissão no seu VIP.   ` )
   .setColor('ffffff')
   
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   
if (canalvip.permissionsFor(user).has("CONNECT")&&canalvip.permissionsFor(user).has("VIEW_CHANNEL"))  return message.reply({embeds:[nopossuitag]})

    let embed = new Discord.MessageEmbed()

  
    .setTitle(' Permissão VIP Adicionada')
    .setDescription(`**Canal :** ${canalvip}\n**Usuário :** ${user}`)
    .setColor("#ffffff")
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
   
  
    message.channel.send({embeds:[embed]}).then(async(msg)=>{

        setTimeout(()=>{
            msg.delete()
        },6000)
    })


    canalvip.permissionOverwrites.edit(user, {
        CONNECT: true,
        VIEW_CHANNEL: true
         }) 
    
}
    
}

