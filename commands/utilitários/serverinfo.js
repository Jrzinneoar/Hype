
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
moment.locale("pt-br")
module.exports = {
    nome: "serverinfo",
    coolwdon:6000,
    alternativas: ["serverinfo"],
    run: async (client, message, args) => {
 
let GUILD = client.guilds.cache.get(args[0]) || message.guild

		let channels = GUILD.channels;
		let text = channels.cache.filter(r => r.type === 'GUILD_TEXT').size,
			vc = channels.cache.filter(r => r.type === 'GUILD_VOICE').size,
			category = channels.cache.filter(r => r.type === 'GUILD_CATEGORY').size
			totalchan = channels.cache.size;

            let variable = GUILD.members.cache.filter(m => m.presence !== null)
let off = GUILD.members.cache.filter(m => m.presence == null)

let created = `<t:${Math.trunc(GUILD.createdTimestamp/1000)}:R>`
   
  
  
    //console.log(GUILD.features)
    //splashURL
    let BannerURL = GUILD.bannerURL({ dynamic: true, format: "png", size: 1024 })
    const embed = new MessageEmbed()
    .setThumbnail(GUILD.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setColor('#ffffff')
    .setTitle(`${GUILD.name} SERVER INFO`)
  	.setDescription(`**DONO:**\n\`${await GUILD.fetchOwner().then((data)=>data.user.tag)}\`\n\`${await GUILD.fetchOwner().then((data)=>data.id)}\`\n **Total de Canais:**\n**Cetegorias:\`${category}\`**\n**Canais de Texto:\`${text}\`**\n**Canais de Voz:\`${vc}\`**\n**Total:\`${totalchan}\`**\n **Total de Membros:**\n ${variable.filter(m => m.presence.status == "online").size}\n ${variable.filter(m => m.presence.status == "dnd").size}\n ${variable.filter(m => m.presence.status == "streaming").size}\n ${variable.filter(m => m.presence.status == "idle").size}\n ${off.size}\n ${GUILD.memberCount}  \n **Total de Bots:**\n\`${GUILD.members.cache.filter(m => m.user.bot).size} Bots!\`\n **Data de Criação:** \n${created}` )
 .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
 .setImage(BannerURL)
 .setTimestamp();
    await message.reply({embeds:[embed]})
    }
}

