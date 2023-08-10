
const db = require("quick.db");
const {findMember} = require('../../script/utils')
const Discord = require('discord.js');
module.exports = {
    nome:"removevip",
    coolwdon:10000,
    alternativas: ["removevip"],
    run: async (client, message, args) => {
        let temvip = db.get(`newvips_${message.guild.id}_${message.member.id}`)
        let vir = db.get(`vips_${message.guild.id}_"${temvip.vipname}"`)
    let nopossui = new Discord.MessageEmbed()
				
			
    .setDescription(`Você não é um membro VIP!    ` )
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if (!temvip) return message.reply({embeds:[nopossui]});
 
   
    if(!temvip.cargo||!vir.permcr){

        let botvip = new Discord.MessageEmbed()
                    
                
        .setDescription(`Você não posssui tag VIP!`)
        .setColor('ffffff')
    
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
    
     return message.reply({embeds:[botvip]})


       }
   let cargovip = message.guild.roles.cache.get(temvip.cargo)
   var name = args.join(' ').trim();
   let user=await findMember(message, name)
   let notuser = new Discord.MessageEmbed()
				
			
   .setDescription(`Mencione um usuário valido !   ` )
   .setColor('ffffff')
   
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
   if(!user) return message.reply({embeds:[notuser]})
  
    let nopossuitag = new Discord.MessageEmbed()
				
			
   .setDescription(`<:fechar:918747498984665108> | Este usuário não possui sua tag VIP.   ` )
   .setColor('ffffff')
   
   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
   .setTimestamp();
if (!user.roles.cache.has(cargovip.id)) 
    return message.reply({embeds:[nopossuitag]})

    let embed = new Discord.MessageEmbed()

  
    .setTitle('VIP Removido! ')
    .setDescription(`**Cargo :** ${cargovip}\n**Usuário :** ${user}`)
    .setColor("#ffffff")
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
   
  
    message.channel.send({embeds:[embed]}).then(async(msg)=>{

        setTimeout(()=>{
            msg.delete()
        },6000)
    })


    user.roles.remove(cargovip.id) 
    
}
    
}

