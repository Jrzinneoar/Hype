const Discord = require("discord.js"); 

module.exports = {
  nome: "servericon",
  coolwdon:4000,
  alternativas: ["servericon"],
  run: async (client, message, args) => {
   
   let GUILD = client.guilds.cache.get(args[0]) || message.guild

  let servericon = GUILD.iconURL({ dynamic: true, format: "png", size: 1024 });
  let user123 = new Discord.MessageEmbed()
				
			.setTitle(`Preste atenção `)
				.setDescription(`Este servidor não possuí um icon.`)
				.setColor('ffffff')

				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
				.setTimestamp();


   if(servericon === null) return message.reply({embeds:[user123]})
  let embed = new Discord.MessageEmbed() 
    .setColor(`#ffffff`) 
  .setTitle(`Logo do Server ${GUILD.name}`) 
  .setDescription(`**[Clique aqui](${servericon}) para fazer o download da imagem!**`)
  .setImage(servericon )
    

 await message.reply({embeds:[embed]}); 
  }
};
