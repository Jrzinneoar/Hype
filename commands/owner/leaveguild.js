const Discord = require("discord.js");
const { dev } = require('../../config.json');

const rgx = /^(?:<@!?)?(\d+)>?$/;

module.exports = {
  nome: "leaveguild",
  alternativas: ["leaveguild"],
  run: async  (client, message, args) => {


    if (!dev.includes(message.author.id)) {
  const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`Ops, apenas meus desenvolvedores podem utilizar este comando!`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  return message.reply({embeds:[usagerr]})
  }

   
    const guildId = args[0];
    if (!rgx.test(guildId)){


       const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`**Por Favor forneça um id valido.**`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  return message.reply({embeds:[usagerr]})
    }
  
    const guild = message.client.guilds.cache.get(guildId);
    if (!guild){

           const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`**Não encontrei esse sevidor. Verifique o ID fornecido.**`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  return message.reply({embeds:[usagerr]})
    }

    const defaultChannel = guild.channels.cache.find(c =>
  c.permissionsFor(guild.me).has("SEND_MESSAGES")
    );

    await guild.leave();

       const embed = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`**Sai do server ${guild.name}(${guild.id}) com sucesso**`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
  return message.reply({embeds:[embed]})
   
  }
};