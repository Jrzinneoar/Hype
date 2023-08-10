const Discord = require("discord.js"); 

const {
  version
} = require("discord.js");
const { mem, cpu, os } = require('node-os-utils');
const { default_prefix } = require("../../config.json");
const moment = require("moment"); 
const db = require("quick.db")

moment.locale('pt-BR')
module.exports = {
  nome: "info",
  coolwdon:7000,
  alternativas: ["botinfo"],
  run: async  (client, message, args) => {
    	
  let createdate = moment.utc(client.user.createdAt).format('DD/MMM/YYYY');
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = default_prefix;
  const { totalMemMb, usedMemMb } = await mem.info();

  let embed = new Discord.MessageEmbed()
  .setColor("#ffffff")
    
  .setDescription(`Olá, sou a ${client.user.username}\nFui criado para moderar seu servidor! \n**Veja nosso GUIA aqui :**\n\nSuporte :[Clique Aqui](https://discord.gg/7JEVszkn)\nMe configure :[Clique Aqui](https://embreve)\n\n Estatísticas:\nServidores: \`${client.guilds.cache.size}\` \nCanais: \`${client.channels.cache.size}\` \n Usuários: \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}\`\n Criado em: \`${createdate}\`\nCPU INFO:\nModelo: \`${cpu.model()}\`\nCores: \`${cpu.count()}\`\n\n **RAM INFO:**\nTotal: \`${totalMemMb} MB\`\nUsado: \`${usedMemMb} MB\`\n\n **INFORMAÇÕES:**\nPrefixo padrão: \`${default_prefix}\`\nDesenvolvido pelo: JR\n Linguagem: Javascript\nVersão do Node.js: \`${process.version}\`\nVersão do Discord.js: \`${version}\`\nHospedagem: \`JRVPN\`\nPing: \`${client.ws.ping}\`\n\nTodo os direitos reservados para Bot©`)
    .setImage(`https://cdn.discordapp.com/attachments/1131208162880536666/1135661601945554974/20230731_165258.png`)


    message.reply({embeds:[embed]})
}
}