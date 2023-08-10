const {findMember} = require('../../script/utils')
const Discord = require('discord.js');

module.exports = {
  nome: "hug",
  coolwdon:9000,
  alternativas: ["hug"],
  run: async  (client, message, args) => {
  

  var list1 = [
   'https://i.pinimg.com/originals/08/de/7a/08de7ad3dcac4e10d27b2c203841a99f.gif',
   'https://media.tumblr.com/tumblr_lrhu3mHHXD1qm9rnw.gif',
   'https://64.media.tumblr.com/37d48cad75cb53489762426653e58a46/tumblr_puokxmlVY91uigq6lo1_500.gifv',
   'https://i.pinimg.com/originals/5a/ac/62/5aac6270d9c29bb8c590c8d8c8162a21.gif',   
   'https://33.media.tumblr.com/6a02f9f626db7b7e3027ed5763649027/tumblr_inline_njc1ii3hwN1sl9x7p.gif',
   'https://gifdownload.net/wp-content/uploads/2019/05/gif-abra%C3%A7o-anime-5.gif',
   'https://i.pinimg.com/originals/b5/1d/f1/b51df18c3a0ebe6ddff723cf3103e174.gif',
   'https://data.whicdn.com/images/199991949/original.gif',
   'https://pa1.narvii.com/6899/6ab302dba5eba23634f513dad0760343abef3832r1-496-280_hq.gif',
   'https://i.pinimg.com/originals/68/a5/91/68a591554163e89ae64678d371d17098.gif',
   'https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAtQTDNJw__xMRzdbGX25W0k',
   'https://i.pinimg.com/originals/ef/5e/e0/ef5ee0189d0d2422966890f13c5f159e.gif',
   'https://i.gifer.com/9dkw.gif',
   'https://dailysmscollection.org/wp-content/uploads/2019/01/anime-hug-gif.gif',
   'https://2.bp.blogspot.com/-KqSZTSI7cwg/UojRn3vtu4I/AAAAAAAABwo/YPpwkpsafZs/s1600/tumblr_mdi8my0I8N1rw2my3o2_500.gif',
   'https://i.pinimg.com/originals/48/b2/fd/48b2fdf0410eefc67fc66f55fd6e7d00.gif',
   'https://media1.tenor.com/images/136da5b76861532c8e048347ce04f408/tenor.gif?itemid=16085274',
   'https://media1.tenor.com/images/d64d14b0bb090bf9bd6976accb94858e/tenor.gif?itemid=15069985',
   'https://media1.tenor.com/images/f4489c22337de1d5c5a3eb20391441b1/tenor.gif?itemid=12668694',
   'https://media.tenor.com/images/f2805f274471676c96aff2bc9fbedd70/tenor.gif'
  ];
  
  var rand1 = list1[Math.floor(Math.random() * list1.length)];
var list = [
  'https://i.pinimg.com/originals/08/de/7a/08de7ad3dcac4e10d27b2c203841a99f.gif',
  'https://media.tumblr.com/tumblr_lrhu3mHHXD1qm9rnw.gif',
  'https://64.media.tumblr.com/37d48cad75cb53489762426653e58a46/tumblr_puokxmlVY91uigq6lo1_500.gifv',
  'https://i.pinimg.com/originals/5a/ac/62/5aac6270d9c29bb8c590c8d8c8162a21.gif',   
  'https://33.media.tumblr.com/6a02f9f626db7b7e3027ed5763649027/tumblr_inline_njc1ii3hwN1sl9x7p.gif',
  'https://gifdownload.net/wp-content/uploads/2019/05/gif-abra%C3%A7o-anime-5.gif',
  'https://i.pinimg.com/originals/b5/1d/f1/b51df18c3a0ebe6ddff723cf3103e174.gif',
  'https://data.whicdn.com/images/199991949/original.gif',
  'https://pa1.narvii.com/6899/6ab302dba5eba23634f513dad0760343abef3832r1-496-280_hq.gif',
  'https://i.pinimg.com/originals/68/a5/91/68a591554163e89ae64678d371d17098.gif',
  'https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAtQTDNJw__xMRzdbGX25W0k',
  'https://i.pinimg.com/originals/ef/5e/e0/ef5ee0189d0d2422966890f13c5f159e.gif',
  'https://i.gifer.com/9dkw.gif',
  'https://dailysmscollection.org/wp-content/uploads/2019/01/anime-hug-gif.gif',
  'https://2.bp.blogspot.com/-KqSZTSI7cwg/UojRn3vtu4I/AAAAAAAABwo/YPpwkpsafZs/s1600/tumblr_mdi8my0I8N1rw2my3o2_500.gif',
  'https://i.pinimg.com/originals/48/b2/fd/48b2fdf0410eefc67fc66f55fd6e7d00.gif',
  'https://media1.tenor.com/images/136da5b76861532c8e048347ce04f408/tenor.gif?itemid=16085274',
  'https://media1.tenor.com/images/d64d14b0bb090bf9bd6976accb94858e/tenor.gif?itemid=15069985',
  'https://media1.tenor.com/images/f4489c22337de1d5c5a3eb20391441b1/tenor.gif?itemid=12668694',
  'https://media.tenor.com/images/f2805f274471676c96aff2bc9fbedd70/tenor.gif'
 
];

var rand = list[Math.floor(Math.random() * list.length)];


   var name = args.join(' ').trim();

let user = await findMember(message, name)

let notuser = new Discord.MessageEmbed()
				
			
				.setDescription(`Mencione um usuário existente.`)
				.setColor('ffffff')

				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
				.setTimestamp();

if (!user) return message.reply({embeds:[notuser]});

let user123 = new Discord.MessageEmbed()
				
			
				.setDescription(`Você não pode se abraçar!`)
				.setColor('ffffff')

				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
				.setTimestamp();


    if (user.id === message.member.id) return message.reply({embeds:[user123]})




  const embed = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setDescription(`**${message.author} acaba de abraçar ${user}**`)
    .setImage(rand)
    .setTimestamp()
 
    .setFooter(`Clique para retribuir!`,'https://media.discordapp.net/attachments/860176360080932887/918753021708611604/retornar.png')

       let butao1 = new Discord.MessageButton()
        .setEmoji('<:Refresh:1138935471909634130>')
      .setStyle("SECONDARY")
       .setCustomId("butao1")
      
    
      
        const row = new Discord.MessageActionRow()
        row.addComponents([butao1])
   message.reply({embeds:[embed],components:[row]}).then(msg => {


   const inf = (interaction) => interaction.user.id == user.id 
    
    const collector = msg.createMessageComponentCollector({ filter:inf});
    collector.on('collect', async(r,u) =>{
 switch (r.customId) {
   case 'butao1':{

 let emb = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setDescription(`**${user} retribuiu o abraço de ${message.author}**`)
    .setImage(rand1)
    .setTimestamp()

    .setFooter('Que fofo 😊')


    r.update({embeds:[emb],components:[]})
   }
break
   }
 })
    })
   
   /** 
   .then(msg => {
    msg.react("846881465081921577")



    // um filtro puxando as informacoes do membro
    let filtro = (reaction, usuario) => reaction.emoji.id === "846881465081921577" && usuario.id === user.id;
    // um coletor, puxando do filtro para finalizar
    let coletor = msg.createReactionCollector(filtro);

    coletor.on("collect", c => { 
  c.remove(user.id);
    let emb = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setDescription(`**${user} retribuiu o abraço de ${message.author}**`)
    .setImage(rand1)
    .setTimestamp()

    .setFooter('Que fofo 😊')
    
  

    msg.edit(emb)

})
   })

   */
  }
}