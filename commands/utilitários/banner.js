const Discord = require("discord.js"); 
const {findUser} = require('../../script/utils')
module.exports = {
  nome: "banner",
  coolwdon:4000,
  alternativas: ["banner"],
  run: async (client, message, args) => {
    var name = args.join(' ').trim();

    let user = await findUser(client,message, name)||await  message.author;
   

    
  let banner = await user.bannerURL({ dynamic: true, format: "png", size: 1024 });

  let notbanner = new Discord.MessageEmbed()
				
			.setTitle(`Preste atenção `)
				.setDescription(`Este usuário não possuí um banner.`)
				.setColor('ffffff')

				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
				.setTimestamp();


   if(banner === null) return message.reply({embeds:[notbanner]})
  let embed = new Discord.MessageEmbed() 
    .setColor(`#ffffff`) 
  .setTitle(` Banner do usuário ${user.username}`) 
  .setDescription(`**[Clique aqui](${banner}) para fazer o download da imagem!**`)
  .setImage(banner)
    

 await message.reply({embeds:[embed]}); 
  }
};
