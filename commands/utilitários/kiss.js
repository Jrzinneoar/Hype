const Discord = require('discord.js');
const {findMember} = require('../../script/utils')
module.exports = {
  nome: "kiss",
  coolwdon:9000,
  alternativas: ["kiss"],
  run: async  (client, message, args) => {


  var list1 = [
    'https://i.pinimg.com/originals/6f/c2/5f/6fc25fdd3e22d89b19c3ea76d11789e6.gif',
    'https://imgur.com/lYQt9rx.gif',
    'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
    'https://pa1.narvii.com/6614/f5b14418412a7918ef1ff733a2a4ae4e13d691e2_hq.gif',
    'https://i.pinimg.com/originals/a7/4a/bf/a74abfc0fa25c35353066b37443e74ae.gif',
    'https://i.pinimg.com/originals/b0/37/a0/b037a0d27fc2fce28cd279561ec89825.gif',
    'https://i.pinimg.com/originals/7d/49/fa/7d49fa49476dda9b040541a83342ceac.gif',
    'https://pa1.narvii.com/6560/35e50052c20c8ac0aad0a23114e9f97b74ee65ce_hq.gif',
    'https://data.whicdn.com/images/316608156/original.gif',
    'https://i2.wp.com/i.imgur.com/O49C3HS.gif?w=1065&ssl=1',
    'https://media.tenor.com/images/ac02b016f1510dd245a22878c4206daf/tenor.gif',
    'https://3.bp.blogspot.com/-mkZmoNUfSXs/VSv1BM5OENI/AAAAAAAAA1w/SRO5j3KUOJ8/s1600/iI8jRfKrZ12T5.gif',
    'https://www.intoxianime.com/wp-content/uploads/2018/03/tumblr_p63vgejlBt1vptudso5_500.gif',
    'https://i.pinimg.com/originals/62/ab/24/62ab2495660d7c9ce3ed685263ffad9d.gif',
    'https://pa1.narvii.com/6407/c5c62efd45527b8ab2fbd80ebcebb69697485658_hq.gif',
    'https://pa1.narvii.com/6552/f9b386831e367816f030d80b05e0be91913ed65c_hq.gif',
    'https://1.bp.blogspot.com/-PK7ZZtHG4Lw/VKxR_2oXzxI/AAAAAAAACLM/JNW0Yn6rDGs/s1600/tumblr_inline_mqqr7esYvl1qz4rgp.gif',
    'https://3.bp.blogspot.com/-AQaqKVXeQKw/Ty7GWkw8VGI/AAAAAAAAA64/0xpghGJBHFo/s1600/hhhhhhhhhhhhh.gif',
    'https://pa1.narvii.com/6214/63fe384b7eac8b7aab7876bc45c02c10eb200b2a_hq.gif',
    'https://1.bp.blogspot.com/-jvXhXiCpdJM/T4i30Kv1rHI/AAAAAAAAASM/T6SwbhL9BgU/s1600/tumblr_m1e0c6OziO1qc5wono1_500.gif',
    'https://i.pinimg.com/originals/6a/8e/73/6a8e73d60f1152514e272046990e1343.gif',
    'https://images-ext-2.discordapp.net/external/SKTa_R2wGCr4CazSmNSf64vUtCsRtu4Ewgpdw6EZxpc/%3Fwidth%3D400%26height%3D225/https/images-ext-1.discordapp.net/external/6kgqO62WecycSTOheva0s2_8uLBZcNLC2WY3OGK6Cao/https/loritta.website/assets/img/actions/kiss/female_x_female/gif_337.gif',
    'https://images-ext-2.discordapp.net/external/Gc1fvK5EonFhEOFvqfo3hUKGHk5u3hxFpgEkJoEvl6U/%3Fwidth%3D400%26height%3D225/https/images-ext-2.discordapp.net/external/Ez3uTrGry1wZZqYkYLgjIrLjlkSKtHBLYrPICFG-8aM/https/loritta.website/assets/img/actions/kiss/female_x_male/gif_373.gif',
    'https://images-ext-2.discordapp.net/external/rzGWOYkMeUvQRb89bQ-CoJ1syVm5DvEv66SlqtyQ4Do/%3Fwidth%3D400%26height%3D225/https/images-ext-1.discordapp.net/external/rXtFztRzcriurLxbP2-J-LFspGm0FlLh2059xWkm1cM/https/loritta.website/assets/img/actions/kiss/male_x_male/gif_319.gif'
    
  
  ];
  
  var rand1 = list1[Math.floor(Math.random() * list1.length)];
var list = [
  'https://i.pinimg.com/originals/6f/c2/5f/6fc25fdd3e22d89b19c3ea76d11789e6.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
  'https://pa1.narvii.com/6614/f5b14418412a7918ef1ff733a2a4ae4e13d691e2_hq.gif',
  'https://i.pinimg.com/originals/a7/4a/bf/a74abfc0fa25c35353066b37443e74ae.gif',
  'https://i.pinimg.com/originals/b0/37/a0/b037a0d27fc2fce28cd279561ec89825.gif',
  'https://i.pinimg.com/originals/7d/49/fa/7d49fa49476dda9b040541a83342ceac.gif',
  'https://pa1.narvii.com/6560/35e50052c20c8ac0aad0a23114e9f97b74ee65ce_hq.gif',
  'https://data.whicdn.com/images/316608156/original.gif',
  'https://i2.wp.com/i.imgur.com/O49C3HS.gif?w=1065&ssl=1',
  'https://media.tenor.com/images/ac02b016f1510dd245a22878c4206daf/tenor.gif',
  'https://3.bp.blogspot.com/-mkZmoNUfSXs/VSv1BM5OENI/AAAAAAAAA1w/SRO5j3KUOJ8/s1600/iI8jRfKrZ12T5.gif',
  'https://www.intoxianime.com/wp-content/uploads/2018/03/tumblr_p63vgejlBt1vptudso5_500.gif',
  'https://i.pinimg.com/originals/62/ab/24/62ab2495660d7c9ce3ed685263ffad9d.gif',
  'https://pa1.narvii.com/6407/c5c62efd45527b8ab2fbd80ebcebb69697485658_hq.gif',
  'https://pa1.narvii.com/6552/f9b386831e367816f030d80b05e0be91913ed65c_hq.gif',
  'https://1.bp.blogspot.com/-PK7ZZtHG4Lw/VKxR_2oXzxI/AAAAAAAACLM/JNW0Yn6rDGs/s1600/tumblr_inline_mqqr7esYvl1qz4rgp.gif',
  'https://3.bp.blogspot.com/-AQaqKVXeQKw/Ty7GWkw8VGI/AAAAAAAAA64/0xpghGJBHFo/s1600/hhhhhhhhhhhhh.gif',
  'https://pa1.narvii.com/6214/63fe384b7eac8b7aab7876bc45c02c10eb200b2a_hq.gif',
  'https://1.bp.blogspot.com/-jvXhXiCpdJM/T4i30Kv1rHI/AAAAAAAAASM/T6SwbhL9BgU/s1600/tumblr_m1e0c6OziO1qc5wono1_500.gif',
  'https://i.pinimg.com/originals/6a/8e/73/6a8e73d60f1152514e272046990e1343.gif',
  'https://images-ext-2.discordapp.net/external/SKTa_R2wGCr4CazSmNSf64vUtCsRtu4Ewgpdw6EZxpc/%3Fwidth%3D400%26height%3D225/https/images-ext-1.discordapp.net/external/6kgqO62WecycSTOheva0s2_8uLBZcNLC2WY3OGK6Cao/https/loritta.website/assets/img/actions/kiss/female_x_female/gif_337.gif',
  'https://images-ext-2.discordapp.net/external/Gc1fvK5EonFhEOFvqfo3hUKGHk5u3hxFpgEkJoEvl6U/%3Fwidth%3D400%26height%3D225/https/images-ext-2.discordapp.net/external/Ez3uTrGry1wZZqYkYLgjIrLjlkSKtHBLYrPICFG-8aM/https/loritta.website/assets/img/actions/kiss/female_x_male/gif_373.gif',
  'https://images-ext-2.discordapp.net/external/rzGWOYkMeUvQRb89bQ-CoJ1syVm5DvEv66SlqtyQ4Do/%3Fwidth%3D400%26height%3D225/https/images-ext-1.discordapp.net/external/rXtFztRzcriurLxbP2-J-LFspGm0FlLh2059xWkm1cM/https/loritta.website/assets/img/actions/kiss/male_x_male/gif_319.gif'
  

];

var rand = list[Math.floor(Math.random() * list.length)];

var name = args.join(' ').trim();

let user = await findMember(message, name)
let notuser = new Discord.MessageEmbed()
				
			
				.setDescription(` Mencione um usuário existente.`)
				.setColor('ffffff')

				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
				.setTimestamp();

if (!user) return message.reply({embeds:[notuser]});
let user123 = new Discord.MessageEmbed()
				
			
				.setDescription(`<Você não pode se beijar!`)
				.setColor('ffffff')

				.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
				.setTimestamp();


if (user.id === message.member.id) return message.reply({embeds:[user123]})

/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/


  const embed = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setDescription(`**${message.author} acaba de beijar ${user}**`)
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
    .setDescription(`**${user} retribuiu o beijo de ${message.author}**`)
    .setImage(rand1)
    .setTimestamp()
  
    .setFooter('Que casal mais romântico 😊')
    
  

  r.update({embeds:[emb],components:[]})
   }
   break;
 }
})
   })
  }
}
