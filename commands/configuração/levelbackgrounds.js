const Discord = require('discord.js');
const db = require('quick.db');
const { default_prefix } = require("../../config.json");
module.exports = {
    nome: "levelbackgrounds",
	coolwdon:8000,
    alternativas: ["levelbackgrounds"],
    run: async  (client, message, args) => {
		let prefix = db.get(`prefix_${message.guild.id}`)
		if(prefix === null) prefix = default_prefix;
	  
		 
		const limite = new Discord.MessageEmbed()
		.setColor('ffffff')
		.setDescription(`Para executar este comando precisa a permissão \`gerenciar canais\` !`)
		.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
		.setTimestamp();
	  
		if (!message.member.permissions.has("MANAGE_CHANNELS")) return  message.reply({embeds:[limite]})
	 
		const ad = new Discord.MessageEmbed()
		.setColor('ffffff')
		.setDescription(`Não é possível executar este o comando, preciso da permissão de \`gerenciar canais\` !`)
		.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
		.setTimestamp();
	  if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return  message.reply({embeds:[ad]})
	 let sistelevel = db.get(`sistelevel_${message.guild.id}`);
	 if (sistelevel == null) {
		const ad = new Discord.MessageEmbed()
		.setColor('ffffff')
		.setDescription(`Sistema de level está desabilitado ative o para poder executar esse comando!`)
		.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
		.setTimestamp();
   return  message.reply({embeds:[ad]})
}
		let embed = new Discord.MessageEmbed()
			.setTitle(`${client.user.username} | Backgrounds`)
			.setDescription(`Lista de background level, Escolha um reagindo ao emoji correspondente ao background.\n\n<a:1_:1132093814278983800> Clique em : [para visualizar o background.](https://i.imgur.com/WUo2xvp.png)\n<a:2_:1132093884705558628> Clique em : [para visualizar o background.](https://i.imgur.com/sWibWOl.png)\n<a:3_:1132093954070945934> Clique em : [para visualizar o background.](https://i.imgur.com/nk2iFin.png)\n<a:4_:1132094036753260544> Clique em : [para visualizar o background.](https://i.imgur.com/NAxybAT.png)\n<a:5_:1132094083733672017> Clique em : [para visualizar o background.](https://i.imgur.com/KNsxjEe.png)`)
 .setImage("https://cdn.discordapp.com/attachments/1131208162880536666/1138664857361711104/20230808_234649.png")
			.setColor('ffffff');

			let butao1 = new Discord.MessageButton()
			.setEmoji('<a:1_:1132093814278983800>')
		  .setStyle("SECONDARY")
		   .setCustomId("butao1")
		  
			let butao2 =  new Discord.MessageButton()
			.setEmoji('<a:2_:1132093884705558628>')
			.setStyle("SECONDARY")
			.setCustomId("butao2")
			  let butao3 =  new Discord.MessageButton()
			.setEmoji('<a:3_:1132093954070945934>')
			.setStyle("SECONDARY")
			.setCustomId("butao3")
			let butao4 =  new Discord.MessageButton()
			.setEmoji('<a:4_:1132094036753260544>')
			.setStyle("SECONDARY")
			.setCustomId("butao4")
			let butao5 =  new Discord.MessageButton()
			.setEmoji('<a:5_:1132094083733672017>')
			.setStyle("SECONDARY")
			.setCustomId("butao5")
		  
			const row = new Discord.MessageActionRow()
			row.addComponents([butao1,butao2,butao3,butao4,butao5])
		  
		  
					  
				  
					  message.reply({embeds:[embed],components:[row]}).then(msg => {
		
		
						const inf = (interaction) => interaction.user.id == message.member.id
					
					const collector = msg.createMessageComponentCollector({ filter:inf});
					collector.on('collect', async(r,u) =>{
					  switch (r.customId) {
						case 'butao1':
						
						
						r.deferUpdate()
						
						r.message.delete().catch(()=>{}); 
				
						  
				
				
					let background1 = db.get(`levelbackground_${message.guild.id}`)
					if(background1 === null) {
						const ad = new Discord.MessageEmbed()
						.setColor('ffffff')
						.setDescription(`Você já está usando esse background.	`)
						.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
						.setTimestamp();
				   return  message.channel.send({embeds:[ad]})
					}
					const ad1 = new Discord.MessageEmbed()
					.setColor('ffffff')
					.setDescription(` Background atualizado para : Background-1	`)
					.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
					.setTimestamp();
			  
						db.delete(`levelbackground_${message.guild.id}`);
						
					  message.channel.send({embeds:[ad1]})
						break;
						case 'butao2':
						   r.deferUpdate()
				
						   r.message.delete().catch(()=>{});  

							   let background2 = db.get(`levelbackground_${message.guild.id}`)
							   if(background2 === 1){
								   const ad = new Discord.MessageEmbed()
								   .setColor('ffffff')
								   .setDescription(`Você já está usando esse background.	`)
								   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
								   .setTimestamp();
								   return  message.channel.send({embeds:[ad]})
							   }
							   const ad2= new Discord.MessageEmbed()
							   .setColor('ffffff')
							   .setDescription(`Background atualizado para : Background-2	`)
							   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
							   .setTimestamp();
						 
							   
							   db.set(`levelbackground_${message.guild.id}`, 1);
							   message.channel.send({embeds:[ad2]})
							   break;
							   case 'butao3':
						   r.deferUpdate()
				
						   r.message.delete().catch(()=>{}); 
							   let background3 = db.get(`levelbackground_${message.guild.id}`)
							   if(background3 === 2) {
								   const ad = new Discord.MessageEmbed()
								   .setColor('ffffff')
								   .setDescription(`Você já está usando esse background.	`)
								   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
								   .setTimestamp();
								   return  message.channel.send({embeds:[ad]})
		   
							   }
							   const ad3 = new Discord.MessageEmbed()
							   .setColor('ffffff')
							   .setDescription(`Background atualizado para : Background-3	`)
							   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
							   .setTimestamp();
						 
						   
								   db.set(`levelbackground_${message.guild.id}`, 2);
								   message.channel.send({embeds:[ad3]})
								   break;
								  case 'butao4':
						   r.deferUpdate()
				
						   r.message.delete().catch(()=>{});
							   let background4 = db.get(`levelbackground_${message.guild.id}`)
							   if(background4 === 3) {
								   const ad = new Discord.MessageEmbed()
								   .setColor('ffffff')
								   .setDescription(`Você já está usando esse background.	`)
								   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
								   .setTimestamp();
								   return  message.channel.send({embeds:[ad]})
							   }
							   const ad4 = new Discord.MessageEmbed()
							   .setColor('ffffff')
							   .setDescription(` Background atualizado para : Background-4	`)
							   .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
							   .setTimestamp();
						 
						   
									   db.set(`levelbackground_${message.guild.id}`, 3);
									   message.channel.send({embeds:[ad4]})
break;
									   case 'butao5':
										r.deferUpdate()
							 
										r.message.delete().catch(()=>{});  
											let background5 = db.get(`levelbackground_${message.guild.id}`)
											if(background5 === 4){
												const ad = new Discord.MessageEmbed()
												.setColor('ffffff')
												.setDescription(`Você já está usando esse background.	`)
												.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
												.setTimestamp();
												return  message.channel.send({embeds:[ad]})
											}
							
											const ad5 = new Discord.MessageEmbed()
											.setColor('ffffff')
											.setDescription(`Background atualizado para : Background-5	`)
											.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
											.setTimestamp();
									  
													db.set(`levelbackground_${message.guild.id}`, 4);
													message.channel.send({embeds:[ad5]})
				
						}
					})
				})
		
	
  }
};
