const Discord = require('discord.js');
const db = require('quick.db');
const {findMember} = require('../../script/utils')
module.exports = {
    nome: "editxp",
    coolwdon:15000,
    alternativas: ["editxp"],
    run: async  (client, message, args) => {
    
  const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Para executar este comando precisa a permissão \`gerenciar canais\` e \`gerenciar servidor\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
    if (!message.member.permissions.has("MANAGE_CHANNELS")||!message.member.permissions.has("MANAGE_GUILD")) return  message.reply({embeds:[limite]})
 
    const ad = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Não é possível executar este o comando, preciso da permissão de \`gerenciar canais\` e \`gerenciar servidor\` !`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  if(!message.guild.me.permissions.has("MANAGE_CHANNELS")||!message.guild.me.permissions.has("MANAGE_GUILD")) return  message.reply({embeds:[ad]})
  var name = args.join(' ').trim();
  var member  = await findMember(message, name);
    let sistelevel = db.get(`sistelevel_${message.guild.id}`);
    if (sistelevel == null) {
  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`O sistema de level está desabilitado. use o comando **${prefix}levelup on** para habilitar`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
 return  message.reply({embeds:[limite]})
}
let memb = message.author.id
let notuser = new Discord.MessageEmbed()
				
			
.setDescription(` Mencione um usuário existente.`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

if (!member) return message.reply({embeds:[notuser]})
	
	
		if (!args[1]) {
  
  let notuser = new Discord.MessageEmbed()
				
			
.setDescription(`Você precisa colocar um **valor**para efetivar a edição!`)
.setColor('ffffff')

.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

 return message.reply({embeds:[notuser]})
  
  }
		if (args[1].includes('-')) {


  let notuser = new Discord.MessageEmbed()
				
			
  .setDescription(`Você não pode setar XP negativo.  `)
  .setColor('ffffff')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
   return message.reply({embeds:[notuser]})
    
    }
    if (args[1].includes('.')) {


  let notuser = new Discord.MessageEmbed()
				
			.setTitle(`Tente novamente !`)
  .setDescription(`O caractere " . " não é um número!`)
  .setColor('ffffff')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
   return message.reply({embeds:[notuser]})
    }
		if (args[1].includes(',')){


  let notuser = new Discord.MessageEmbed()
				
			.setTitle(`Tente novamente !`)
  .setDescription(`O caractere " , " não é um número!  `)
  .setColor('ffffff')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
   return message.reply({embeds:[notuser]})
    }


    if (isNaN(args[1])){


  let notuser = new Discord.MessageEmbed()
				
  .setDescription(`Você precisa colocar um **valor** para efetivar a edição!`)
  .setColor('ffffff')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
   return message.reply({embeds:[notuser]})
    }

    const valor = args[1]
    if (valor > 100000) {


  let notuser = new Discord.MessageEmbed()
				
  .setDescription(`Você não pode colocar um valor de XP maior que **100 mil**.`)
  .setColor('ffffff')
  
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
  
   return message.reply({embeds:[notuser]})
    }
    let t = new Discord.MessageEmbed()
		.setColor('ffffff')
		.setDescription(`Você realmente que editar o xp do usuário ${member} para ${args[1]} de xp?`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();

let vsim = new Discord.MessageButton()
.setLabel("Sim") 
.setStyle("SUCCESS")

.setCustomId("vsim")

let vnao =  new Discord.MessageButton()
.setLabel("Não") 
.setStyle("DANGER")

.setCustomId("vnao")

const row = new Discord.MessageActionRow()
row.addComponents([vsim,vnao])

	message.reply({embeds:[t],components:[row]}).then(msg => {


    const inf = (interaction) => interaction.user.id === memb 

const collector = msg.createMessageComponentCollector({ filter:inf});
collector.on('collect', async(i,u) =>{
  switch (i.customId) {
    case 'vsim':
   i.deferUpdate()
		
			i.message.delete().catch(()=>{});
    let sucess = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`O XP foi editado com sucesso!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  i.message.channel.send({embeds:[sucess]})
   
    
    db.delete(`messages_${message.guild.id}_${member.id}`)
    db.delete(`level_${message.guild.id}_${member.id}`)
    db.add(`messages_${message.guild.id}_${member.id}`,args[1])


    db.add(`level_${message.guild.id}_${member.id}`,Math.floor(db.fetch(`messages_${message.guild.id}_${member.id}`)/100))

    let temvip = db.all().filter(data => data.ID.startsWith(`rolesporlevel_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
  
    for (let i = 0; i < temvip.length; i++) {
  
   
  
  if(temvip[i].ID.startsWith(`rolesporlevel_${message.guild.id}_`)) {
  
    let levelfetch = db.fetch(`level_${message.guild.id}_${member.id}`)
   
    
    if(levelfetch >= temvip[i].data.replace("\"","").replace("\"","")){
  
  member.roles.add(temvip[i].ID.split("_")[2])
  
  
  }
    }
  }
   
	
  break;
  case 'vnao':
    i.deferUpdate() 
  i.message.delete().catch(()=>{});
   
    let t = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Ação cancelada com sucesso!`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  i.message.channel.send({embeds:[t]})

  break;

			}
		})
	})
    }
};
