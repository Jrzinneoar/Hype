const Discord = require('discord.js');
const { parse } = require('twemoji-parser');
const db = require('quick.db')
const { default_prefix } = require("../../config.json");

module.exports = {
  nome: "addemoji",
  coolwdon:9800,
  alternativas: ["addemoji"],
  run: async  (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Para executar este comando precisa a permissão \`gerenciar emojis e stickers\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if (!message.member.permissions.has("MANAGE_EMOJIS_AND_STICKERS")) return  message.reply({embeds:[limite]})
  
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Não é possível executar este o comando, preciso da permissão de \`gerenciar emojis e stickers\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS")) return  message.reply({embeds:[ad]})
	const emoji = args[0];
  const img = message.attachments.first()
  if(emoji && !img){


		let customemoji = Discord.Util.parseEmoji(emoji);

		if (customemoji.id) {
    if(customemoji.animated){ 
   const config = {NONE:50, TIER_1: 100, TIER_2: 150, TIER_3:250}
   const tcount = config[message.guild.premiumTier];
    let emojis = message.guild.emojis.cache.filter(emoji => emoji.animated).size 
 
    const nad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(` | Infelizmente não consigo adicionar mais emojis, o seu servidor atingiu o limite de ${tcount} emojis.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if(emojis >= tcount) return message.reply(nad);
    const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? 'gif' : 'png'}`;
		
		 message.guild.emojis.create(`${Link}`,`${customemoji.name}`).then((emoji) => {
     
    const Added = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`${emoji} | Emoji adicionado com sucesso no servidor!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
			return message.reply({embeds:[Added]});
    })
    }else{
   const config = {NONE:50, TIER_1: 100, TIER_2: 150, TIER_3:250}
   const tcount = config[message.guild.premiumTier];
    let emojis = message.guild.emojis.cache.filter(emoji => !emoji.animated).size 
 
    const nad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Infelizmente não consigo adicionar mais emojis, o seu servidor atingiu o limite de ${tcount} emojis.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if(emojis >= tcount) return message.reply(nad);
    const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? 'gif' : 'png'}`;
		
			 message.guild.emojis.create(`${Link}`,`${customemoji.name}`).then((emoji) => {
    
    const Added = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`${emoji} | Emoji adicionado com sucesso no servidor!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
			return message.reply({embeds:[Added]});
     })
    }
			
			
		} else {
			let CheckEmoji = parse(emoji, { assetType: 'png' });
    const nad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Desculpe, não consigo localizar o emoji que queira adicionar, tente novamente.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
			if (!CheckEmoji[0]) return message.reply({embeds:[nad]});
    const naddsd = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Este emoji já está adicionado no sistema do discord.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
			message.reply({embeds:[naddsd]});
		}
  }else if(!emoji && !img){

    const nad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Ops, ${message.author}. Infelizmente não encontrei nenhum arquivo ou emoji válido, tente novamente.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
 return message.reply({embeds:[nad]});



  }else{

    const nad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(` | ${message.member} insira um nome para o emoji.`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if(!emoji) return message.reply({embeds:[nad]});


if(img.size > 256000){
  const nad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(` Este arquivo é muito grande pelos requisitos dos discord com limite de 256kb.`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  return message.reply({embeds:[nad]});

}


  if(img.name.split('.')[1]=='gif'){ 
  const config = {NONE:50, TIER_1: 100, TIER_2: 150, TIER_3:250}
  const tcount = config[message.guild.premiumTier];
  let emojis = message.guild.emojis.cache.filter(emoji => emoji.animated).size 

  const nad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(` Infelizmente não consigo adicionar mais emojis, o seu servidor atingiu o limite de ${tcount} emojis.`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  if(emojis >= tcount) return message.reply({embeds:[nad]});


message.guild.emojis.create(`${img.url}`,`${emoji}`).then((emoji) => {

  const Added = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`${emoji} | Emoji adicionado com sucesso no servidor!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
return message.reply({embeds:[Added]});
  })
  }else if(img.name.split('.')[1]=='png'||img.name.split('.')[1]=='jpg'||img.name.split('.')[1]=='jpeg'){
  const config = {NONE:50, TIER_1: 100, TIER_2: 150, TIER_3:250}

  const tcount = config[message.guild.premiumTier];
  let emojis = message.guild.emojis.cache.filter(emoji => !emoji.animated).size 

  const nad = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Infelizmente não consigo adicionar mais emojis, o seu servidor atingiu o limite de ${tcount} emojis.`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  if(emojis >= tcount) return message.reply({embeds:[nad]});
 
message.guild.emojis.create(`${img.url}`,`${emoji}`).then((emoji) => {

  const Added = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`${emoji} | Emoji adicionado com sucesso no servidor!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
return message.reply({embeds:[Added]});
   })
  }else{
    const Added = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Esse formato é inválido.    `)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  return message.reply({embeds:[Added]});
  }

  }
  }
}