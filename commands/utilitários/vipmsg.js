const Discord = require("discord.js");
const db = require("quick.db");
const {findMember} = require('../../script/utils')
const { default_prefix } = require("../../config.json");
module.exports = {
  nome: "vipmsg",
  coolwdon:4000,
  alternativas: ["vipmsg"],
  run: async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    if(!db.get(`authorize_${message.author.id}`))return;
if(args[0]=='add'){
  var name = args.join(' ').trim();
let user=await findMember(message, name)
let invaliduser = new Discord.MessageEmbed()
.setColor("20fc03")
.setDescription(`**Mencione um membro valido**`);

if(!user) return message.channel.send({embeds:[invaliduser]})
    let aaa = args.slice(2).join(" ");


    let notmsg = new Discord.MessageEmbed()
    .setColor("20fc03")
    .setDescription(`**Você se esqueceu de colocar uma mensagem**`);
    
    if(!aaa) return message.channel.send({embeds:[notmsg]})

let cout = db.all().filter(data => data.ID.startsWith(`msgvip_${message.guild.id}_${user.id}`)).sort((a, b) => b.data - a.data).length + 1

db.set(`msgvip_${message.guild.id}_${user.id}_${cout}`,aaa)
let varmsg = new Discord.MessageEmbed()
.setColor("20fc03")
.setDescription(`**Mensagem VIP: \`"${aaa}"\`\nFoi adicionada para o membro ${user}**`);

 message.channel.send({embeds:[varmsg]})

  
}else if(args[0]=='info'){
  var name = args.join(' ').trim();
    let user=await findMember(message, name) 
    let invaliduser = new Discord.MessageEmbed()
    .setColor("20fc03")
    .setDescription(`**Mencione um membro valido**`);
    
if(!user) return message.channel.send({embeds:[invaliduser]})

let arys = db.all().filter(data => data.ID.startsWith(`msgvip_${message.guild.id}_${user.id}`)).sort((a, b) => b.data - a.data)
let plocploc = new Discord.MessageEmbed()
.setColor("20fc03")
.setDescription(`**Esse membro não possui mensagem VIP**`);

if(arys.length==0) return message.channel.send({embeds:[plocploc]})


let sit = ''
for (let i = 0; i < arys.length; i++) {
   
   
    
        let bah = arys[i].data.length -1
 
        let msger = arys[i].data.slice(1,bah)
      
   sit += `${i} - \`${msger}\`\n`


    
}

    let bahhh = new Discord.MessageEmbed()
    .setColor("20fc03")
  
    .setDescription(`Mensagens VIP de ${user}\n\n${sit}`);
    
return message.channel.send({embeds:[bahhh]})



  }else if(args[0]=='remove'){
    var name = args.join(' ').trim();
    
    let user=await findMember(message, name)
    let invaliduser = new Discord.MessageEmbed()
    .setColor("20fc03")
    .setDescription(`**Mencione um membro valido**`);
    
if(!user) return message.channel.send({embeds:[invaliduser]})



let num = args[2]

const errv = new Discord.MessageEmbed()
.setColor('ffffff')
.setDescription(` Você precisa colocar um numero valido da mensagem VIP !`)
.setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
.setTimestamp();
if (!num||isNaN(num)) return message.channel.send({embeds:[errv]});
let arys = db.all().filter(data => data.ID.startsWith(`msgvip_${message.guild.id}_${user.id}`)).sort((a, b) => b.data - a.data)[num]

let att = new Discord.MessageEmbed()
.setColor("20fc03")
.setDescription(`**Mensagem Vip não econtrada**`);
if(!arys)return message.channel.send({embeds:[att]})
db.delete(arys.ID)
let retorno = new Discord.MessageEmbed()
.setColor("20fc03")
.setDescription(`**Mensagem VIP removida com sucesso**`);
 message.channel.send({embeds:[retorno]})



}else{

  const usagerr = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setTitle(" Tente novamente")
  .setDescription(`Use o comando : \`${prefix}vipmsg <add|info|remove> <mensagem>!\``)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();

 return  message.channel.send({embeds:[usagerr]}) 

}
}
}