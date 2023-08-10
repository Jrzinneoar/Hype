const Discord = require("discord.js");
const {findUser} = require('../../script/utils')
module.exports = {
    nome: "avatar",
    coolwdon:4000,
    alternativas: ["avatar"],
    run: async (client, message, args) => {

      
     var name = args.join(' ').trim();

      let user = await findUser(client,message, name)||message.author


  let avatar = user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 });
 

  let embed = new Discord.MessageEmbed()
    .setColor(`#ffffff`)

    .setTitle(`Avatar de ${user.username}`)
    .setDescription(`**[Clique aqui](${avatar}) para fazer o download da imagem!**`)
    .setImage(avatar)
    	.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
						.setTimestamp();

		
    message.reply({embeds:[embed]})
    }

};
