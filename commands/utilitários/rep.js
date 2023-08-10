const Discord = require("discord.js");
const db = require("quick.db");

const {findMember} = require('../../script/utils')
const { default_prefix } = require("../../config.json");
module.exports = {
    nome: "rep",
    coolwdon:14000,
    alternativas: ["rep"],
    run: async (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
  

    let timer = 500000 ;
    let ath = await db.fetch(`repcoldown_${message.author.id}`)
  if (ath !== null && timer - (Date.now() - ath) > 0) {

    let timeEmbed = new Discord.MessageEmbed()
  .setColor("ffffff")
  .setDescription(`Hey, ${message.author}. Você acabou de dar REP. Espere um momento para dar rep novamente. `);
  return message.reply({embeds:[timeEmbed]})
  
 
  } else {
    var name = args.join(' ').trim();

    let membro = await findMember(message, name)

    let notuser = new Discord.MessageEmbed()
 
   
    .setDescription(`Hey ${message.member}, mencione um usuário para adicionar REP!    `)
    .setColor('ffffff')

    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();

    if (!membro) return message.reply({embeds:[notuser]});
    let user123 = new Discord.MessageEmbed()
				
			
				.setDescription(` Você não pode dar REP em si mesmo.`)
				.setColor('ffffff')

				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
				.setTimestamp();


    if (membro.id === message.member.id) return message.reply({embds:[user123]})

    let repad = new Discord.MessageEmbed()
 
   
    .setDescription(` Uhul, ${message.member} . REP adicionado com sucesso! `)
    .setColor('ffffff')

    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    message.reply({embeds:[repad]});

    db.add(`reps_${membro.id}`,1)
  }

    }
}