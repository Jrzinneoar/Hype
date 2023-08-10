const Discord = require("discord.js"); 

module.exports = {
  nome: "serverbanner",
  coolwdon:4000,
  alternativas: ["serverbanner"],
  run: async (client, message, args) => {
   
   let GUILD = client.guilds.cache.get(args[0]) || message.guild

  let servericon = GUILD.bannerURL({ dynamic: true, format: "png", size: 1024 });
  let notbanner = new Discord.MessageEmbed()
				
			.setTitle(`Preste atenção `)
				.setDescription(`Este servidor não possuí um banner.`)
				.setColor('ffffff')

				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
				.setTimestamp();


   if(servericon === null) return message.reply({embeds:[notbanner]})
  let embed = new Discord.MessageEmbed() 
    .setColor(`#ffffff`) 
  .setTitle(`Banner do Server ${GUILD.name}`) 
  .setDescription(`**[Clique aqui](${servericon}) para fazer o download da imagem!**`)
  .setImage(servericon)
    

 await message.reply({embeds:[embed]}); 
  }
};
