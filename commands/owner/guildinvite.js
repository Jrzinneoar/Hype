const Discord = require("discord.js")
const { dev } = require('../../config.json');

module.exports = {
	nome: "guildinvite",
	alternativas: ["guildinvite"],
	run: async (client, message, args) => {
    
    if (!dev.includes(message.author.id)) {
    const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Ops, apenas meus desenvolvedores podem utilizar este comando!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    return  message.reply({embeds:[usagerr]})
    }
let guild = null;

if (!args[0]){
const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`**Por favor meu owner escreva um nome de um server**`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    return  message.reply({embeds:[usagerr]})

} 


if(args[0]){
    let fetched = client.guilds.cache.find(g => g.name === args.join(" "));
    let found = client.guilds.cache.get(args[0]);
    if(!found) {
    if(fetched) {
    guild = fetched;
    }
    } else {
    guild = found
    }
} else {
    
const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`**O nome desse server não e valido!**`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    return  message.reply({embeds:[usagerr]})



}
if(guild){
    let tChannel = guild.channels.cache.find(ch => ch.type == "GUILD_TEXT" && ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE"));
    if(!tChannel) {
        const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`**Eu não tenho permissão de criar convites para esse server!**`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    return  message.reply({embeds:[usagerr]})

    }
    let invite = await tChannel.createInvite({ temporary: false, maxAge: 0 }).catch(err => {
          const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`**${err} deu esse erro !**`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    return  message.reply({embeds:[usagerr]})

    });


          const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Invite criado com **sucesso**!\nLink do invite : ${invite.url}`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    return  message.reply({embeds:[usagerr]})

} else {
            const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`**Eu não estou no \`${args.join(' ')}\`**`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    return  message.reply({embeds:[usagerr]})
  
}
    }
}