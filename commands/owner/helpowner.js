const Discord = require('discord.js');
const db = require('quick.db');
const {default_prefix} = require("../../config.json");
const { dev } = require('../../config.json');


module.exports = {
    nome: "helpowner",
    alternativas: ["helpowner"],
    run: async  (client, message, args) => { 
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
		

    if (!dev.includes(message.author.id)) {
    const usagerr = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Ops, apenas meus desenvolvedores podem utilizar este comando!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    return  message.reply({embeds:[usagerr]})
    }
    const embed = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL({dynamic : true, format : "png", size : 2048 }))
	.setTitle(`Comandos de Usuário`)
    .setDescription(`**${prefix}blacklist** <add|info|remove> <usuário> para adicionar ou remove um usuário na blacklist\n\n<a:loop:918709187146559538> **Comandos de Servidor** \n**${prefix}guildinvite** <nome ou id do server> para criar um invite de um server\n**${prefix}leaveguild** <id do server> para me tirar de um server\n **${prefix}serverlist** para ver a lista de servidores\n**${prefix}blacklistguild** <add|info|remove> <id do server> para adicionar ou remover um server a blacklist \n\n<a:loop:918709187146559538> **Comandos de Manutenção**\n**${prefix}ativemanu** <on|off> para ativar o modo de manutenção\n**${prefix}setmsgviperm** <add|remove> <usuário> para setar permissão de mensagem vip `)
    .setColor('000000')
    .setImage('https://cdn.discordapp.com/attachments/1131208162880536666/1136055647138496602/20230801_185745.png')
    message.reply({embeds:[embed]})
    }
}