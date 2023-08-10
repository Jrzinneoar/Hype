const {findMember} = require('../../script/utils')
const Discord = require('discord.js');
const path = require('path')
module.exports = {
  nome: "tapa",
  coolwdon:6000,
  alternativas: ["tapa"],
  run: async (client, message, args) => {


  var list1 = [
 'https://media1.tenor.com/images/f2e22829f9dc2e796d8e9d0590e8076c/tenor.gif?itemid=17223486',
 'https://www.intoxianime.com/wp-content/uploads/2017/04/tumblr_ooub8fIHkT1qz64n4o2_400.gif',
 'https://1.bp.blogspot.com/-JZ65vePr5Ys/UPr1gY6b-yI/AAAAAAAACi8/RVx4AF40OD8/s1600/%5BGIF%5D+tumblr_lh8rx2iqD31qh4xaio1_500.gif',
 'https://pa1.narvii.com/6364/e04629f667b6a0508eba45b0c0a6025f691d592c_hq.gif',
 'https://utinuti.files.wordpress.com/2012/03/tumblr_lv8r0lagid1qgcvsy.gif',
 'https://i.gifer.com/FMxE.gif',
 'https://i.pinimg.com/originals/65/57/f6/6557f684d6ffcd3cd4558f695c6d8956.gif',
 'https://i.imgur.com/fm49srQ.gif?noredirect',
 'https://images-ext-2.discordapp.net/external/0eov4j3wOxztewQ0pHTYA8Td256km6INnRKj5FS-YYc/https/loritta.website/assets/img/actions/slap/female_x_female/gif_206.gif',
 'https://images-ext-2.discordapp.net/external/e2rZgHETtF9NY2aPddAzaRAuzyzMIKESuuvLg1yrRjk/https/loritta.website/assets/img/actions/slap/male_x_female/gif_188.gif',
 'https://images-ext-2.discordapp.net/external/o_faKUTZHuajYGpjDw4TrJ0Lmd9AdA8WHBJF419MjEs/https/loritta.website/assets/img/actions/slap/female_x_female/gif_207.gif',
 'https://images-ext-1.discordapp.net/external/4zIGNFE65odmzGOHvviIvMCrmOmUhpsSFgomAFRdjds/https/loritta.website/assets/img/actions/slap/male_x_female/gif_187.gif',
 'https://images-ext-2.discordapp.net/external/uZRpX6VyRe-1KNIe9tKBdctlwd-FaUhDiU3yMnS5_3I/https/loritta.website/assets/img/actions/slap/female_x_female/gif_202.gif',
 'https://images-ext-1.discordapp.net/external/T-LAmRHwf1HhjmzrftfYKMnSSoBqpR405ZIx_pTXJ7E/https/loritta.website/assets/img/actions/slap/female_x_male/gif_220.gif',
 'https://images-ext-2.discordapp.net/external/YOloIE1svThDye03d7lQ8tSQNRGyOkinbxy-hIYUNqA/https/loritta.website/assets/img/actions/slap/female_x_male/gif_218.gif',
 'https://images-ext-2.discordapp.net/external/iSbDhWBwpyCb1q9JwbFUE5umoKKvFhcMp6m1oyrLres/https/loritta.website/assets/img/actions/slap/female_x_female/gif_199.gif',
 'https://images-ext-1.discordapp.net/external/ROHlapor98tw46AKU5vqtgQte0ebfWVpIkWZJ1e_PeQ/https/loritta.website/assets/img/actions/slap/male_x_male/gif_193.gif?width=400&height=225',
 'https://images-ext-1.discordapp.net/external/z0eWv9g72Qh2jXJREwwsshSWJYXNa04F-nETKgGUdQ8/https/loritta.website/assets/img/actions/slap/female_x_female/gif_205.gif',
 'https://images-ext-2.discordapp.net/external/RHv9ontGYcA7-S5Y989mGRIywxIs_tYm9MOsqS6A0Vc/https/loritta.website/assets/img/actions/slap/female_x_female/gif_200.gif'


  ];
  
  var rand1 = list1[Math.floor(Math.random() * list1.length)];
var list = [
  'https://media1.tenor.com/images/f2e22829f9dc2e796d8e9d0590e8076c/tenor.gif?itemid=17223486',
  'https://www.intoxianime.com/wp-content/uploads/2017/04/tumblr_ooub8fIHkT1qz64n4o2_400.gif',
  'https://1.bp.blogspot.com/-JZ65vePr5Ys/UPr1gY6b-yI/AAAAAAAACi8/RVx4AF40OD8/s1600/%5BGIF%5D+tumblr_lh8rx2iqD31qh4xaio1_500.gif',
  'https://pa1.narvii.com/6364/e04629f667b6a0508eba45b0c0a6025f691d592c_hq.gif',
  'https://utinuti.files.wordpress.com/2012/03/tumblr_lv8r0lagid1qgcvsy.gif',
  'https://i.gifer.com/FMxE.gif',
  'https://i.pinimg.com/originals/65/57/f6/6557f684d6ffcd3cd4558f695c6d8956.gif',
  'https://i.imgur.com/fm49srQ.gif?noredirect',
  'https://images-ext-2.discordapp.net/external/0eov4j3wOxztewQ0pHTYA8Td256km6INnRKj5FS-YYc/https/loritta.website/assets/img/actions/slap/female_x_female/gif_206.gif',
  'https://images-ext-2.discordapp.net/external/e2rZgHETtF9NY2aPddAzaRAuzyzMIKESuuvLg1yrRjk/https/loritta.website/assets/img/actions/slap/male_x_female/gif_188.gif',
  'https://images-ext-2.discordapp.net/external/o_faKUTZHuajYGpjDw4TrJ0Lmd9AdA8WHBJF419MjEs/https/loritta.website/assets/img/actions/slap/female_x_female/gif_207.gif',
  'https://images-ext-1.discordapp.net/external/4zIGNFE65odmzGOHvviIvMCrmOmUhpsSFgomAFRdjds/https/loritta.website/assets/img/actions/slap/male_x_female/gif_187.gif',
  'https://images-ext-2.discordapp.net/external/uZRpX6VyRe-1KNIe9tKBdctlwd-FaUhDiU3yMnS5_3I/https/loritta.website/assets/img/actions/slap/female_x_female/gif_202.gif',
  'https://images-ext-1.discordapp.net/external/T-LAmRHwf1HhjmzrftfYKMnSSoBqpR405ZIx_pTXJ7E/https/loritta.website/assets/img/actions/slap/female_x_male/gif_220.gif',
  'https://images-ext-2.discordapp.net/external/YOloIE1svThDye03d7lQ8tSQNRGyOkinbxy-hIYUNqA/https/loritta.website/assets/img/actions/slap/female_x_male/gif_218.gif',
  'https://images-ext-2.discordapp.net/external/iSbDhWBwpyCb1q9JwbFUE5umoKKvFhcMp6m1oyrLres/https/loritta.website/assets/img/actions/slap/female_x_female/gif_199.gif',
  'https://images-ext-1.discordapp.net/external/ROHlapor98tw46AKU5vqtgQte0ebfWVpIkWZJ1e_PeQ/https/loritta.website/assets/img/actions/slap/male_x_male/gif_193.gif?width=400&height=225',
  'https://images-ext-1.discordapp.net/external/z0eWv9g72Qh2jXJREwwsshSWJYXNa04F-nETKgGUdQ8/https/loritta.website/assets/img/actions/slap/female_x_female/gif_205.gif',
  'https://images-ext-2.discordapp.net/external/RHv9ontGYcA7-S5Y989mGRIywxIs_tYm9MOsqS6A0Vc/https/loritta.website/assets/img/actions/slap/female_x_female/gif_200.gif'


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
				
			
				.setDescription(`Você não pode se tapa!`)
				.setColor('ffffff')

				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
				.setTimestamp();


    if (user.id === message.member.id)return message.reply({embeds:[user123]})



  const embed = new Discord.MessageEmbed()
    .setColor('#ffffff')

    .setDescription(`**${message.author} acaba de dar um tapa no ${user}**`)
    .setImage(rand)
    .setTimestamp()
  
  //  .attachFiles(attachment)
    .setFooter(`Clique para revidar!`,'https://media.discordapp.net/attachments/860176360080932887/918753021708611604/retornar.png')
    





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
    .setDescription(`**${user} acaba de revidar o tapa do ${message.author}**`)
    .setImage(rand1)
    .setTimestamp()
   
    .setFooter('Será que vai ficar por isso?')
    

    r.update({embeds:[emb],components:[]})


   }

  break;
  }
 })
    })


  
  }
}