const Discord = require("discord.js");
const db = require("quick.db");
const { default_prefix } = require("../../config.json");
module.exports = {
    nome: "afk",
    coolwdon:14000,
    alternativas: ["afk"],
    run: async (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

let motivo = args.join(' ')
if(!motivo){
let nobot = new Discord.MessageEmbed()
				
			
.setDescription(`Defina uma mensagem para AFK.`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
return  message.reply({embeds:[nobot]});
}
db.set(`afk_${message.member.id}`,motivo)
let nobot = new Discord.MessageEmbed()
				
			
.setDescription(`Sistema AFK iniciado com sucesso!`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
  message.reply({embeds:[nobot]});


message.member.setNickname(`[AFK] ` + message.member.displayName).catch(()=>{})
    }
}
//C:\Users\Dina\AppData\Roaming\discordcanary\Local Storage\leveldb
