const {findMember} = require('../../script/utils')
const Discord = require("discord.js");
const db = require("quick.db");
const arraySort = require('array-sort')
const { default_prefix } = require("../../config.json");

module.exports = {
    nome: "div",
    coolwdon:5000,
    alternativas: ["div"],
    run: async  (client, message, args) => {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if(prefix === null) prefix = default_prefix;
        let sistelevel = db.get(`memberjoin_${message.guild.id}`);
     
        if (sistelevel == null) {
           
        const limite = new Discord.MessageEmbed()
        .setColor('ffffff')
        .setDescription(`O sistema de memberjoin está desabilitado. use o comando **${prefix}memberjoin** para habilitar`)
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
      
       return  message.reply({embeds:[limite]})
    
    }
    var name = args.join(' ').trim();

    let member = await findMember(message, name)||message.member
      
        let nobot = new Discord.MessageEmbed()
				
			
        .setDescription(`Este comando não foi feito para ser utilizado com bot     `)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
        if(member.user.bot === true) return  message.reply({embeds:[nobot]});

        
          let divs = db.get(`invitotal_${message.guild.id}_${member.user.id}`)

            message.guild.invites.fetch().then((invites) => {
                let userinv = invites.filter(u=> u.inviter && u.inviter.id === member.id)
                

                let nolbot = new Discord.MessageEmbed()
				
			.setTitle(` Convites | BOT`)
        .setDescription(`Este usuário não possui invites.`)
        .setColor('ffffff')
        
        .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
                if(userinv.size <= 0) return message.reply({embeds:[nolbot]});

            
              
                userinv =     arraySort(Array.from(userinv.values()), 'uses', { reverse: true });
                let content = "";
                content += `**Meus convites:**\n\n`
              if(divs === null) divs = '0'
                userinv.forEach((invite) => {



           
                    content += `https://discord.gg/${invite.code} \`${invite.uses}\`\n`               
                })
                content += `\n***para ver o rank use [ ${prefix}divs ]***`
                const embed = new Discord.MessageEmbed()
                .setTitle(`Divulgações ${member.user.tag}\nConvidados: ${divs}`)
              
 
                .setDescription(`${content}`)
              
                .setColor("ffffff")
         .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
                .setTimestamp();
            
            
                message.reply({embeds:[embed]});
    
                })
               
    
    
    }
}