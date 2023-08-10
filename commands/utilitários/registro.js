const Discord = require('discord.js')
const db = require("quick.db");
const {findMember} = require('../../script/utils')

module.exports = {
    nome: "registro",
	coolwdon:10000,
    alternativas: ["registro"],
    run: async (client, message, args) => {

        var name = args.join(' ').trim();

        let membro = await findMember(message, name) || message.member
let quantia = db.get(`quantidaderegistros_${message.guild.id}_${membro.id}`)
if(!quantia)quantia= 0
        let notuser = new Discord.MessageEmbed()
 
   .setTitle(`Registros ${membro.user.tag}\nRegistros: ${quantia}`)
        .setDescription(`***para ver o rank use [ !registros ]***        `)
        .setColor('ffffff')
    
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
    
 return message.reply({embeds:[notuser]});
    }
}