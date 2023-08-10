const {findMember} = require('../../script/utils')
const Discord = require('discord.js')
require("moment-duration-format");
const db = require("quick.db");
const moment = require("moment");
const Canvas = require('canvas');
const path = require('path')
const { default_prefix } = require("../../config.json");
const { fillTextWithTwemoji } = require('node-canvas-with-twemoji-and-discord-emoji');
Canvas.registerFont(path.join(__dirname, '../../fonts/Manrope-Bold.ttf'), { family: 'Manrope' })
Canvas.registerFont(path.join(__dirname, '../../fonts/TitilliumWeb-Bold.ttf'), { family: 'Titillium Web' })
module.exports = {
    nome: "tempo",
    coolwdon:8000,
    alternativas: ["tempo"],
    run: async  (client, message, args) => {
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = default_prefix
 
  let sistelevel = db.get(`voicesystem_${message.guild.id}`);
  if (sistelevel == null) {
     
  const limite = new Discord.MessageEmbed()
  .setColor('ffffff')
  .setDescription(`O sistema de voz está desabilitado. use o comando **${prefix}voicesystem** para habilitar`)
  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    
 return  message.reply({embeds:[limite]})

}
var name = args.join(' ').trim();

let usuario = await findMember(message, name)|| message.member
    
    let nobot = new Discord.MessageEmbed()
				.setThumbnail(message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
			
    .setDescription(`Este comando não foi feito para ser utilizado com bot `)
    .setColor('ffffff')
    
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    if(usuario.user.bot === true)return message.reply({embeds:[nobot]});
   
    let infos1 = db.get(`infos_canal_${message.guild.id}_${usuario.user.id}`)
    if(infos1 === null){
    let tempo = db.get(`tempocall_${message.guild.id}_${usuario.user.id}`)
  
    if(tempo === null){
    } else {
    tempo = tempo.toString().replace("-", "")

    }
  if(tempo === 0 || tempo === null){
  tempo = "Você não possui nenhum tempo salvo."
  } else {

     tempo = moment.duration(tempo*1000).format(`Y[ a] M[ m] W[ s] D[ Dias] H[ h] m [m] [e] s[ s]`);
    
  }

  
  const canvas = Canvas.createCanvas(500, 438);
  const ctx = canvas.getContext('2d')

  let profile =await Canvas.loadImage(path.join(__dirname, '../../img/salvo.png'))

  ctx.drawImage(profile, 0, 0, 500, 438);
  let name = usuario.user.username
  if(name.length >= 8){
    name =  name.substr(0, 8).trim() + "...";
  
  }
  var textString2 = `${name}`;
  ctx.font = '35px Titillium Web';
  ctx.fillStyle = '#f2f2f2';
  ctx.textAlign = "center";
 await fillTextWithTwemoji(ctx, textString2, 244, 300)




 var textString2 = `${tempo}`;
 ctx.font = '25px Titillium Web';
 ctx.textAlign = "center";

 ctx.fillStyle = '#f2f2f2';
 ctx.fillText(textString2, 245, 390);

 ctx.beginPath();
 ctx.arc(250, 158, 88, 0, Math.PI * 2, true);
 ctx.closePath();
 ctx.clip();
 const avatar = await Canvas.loadImage(usuario.user.displayAvatarURL({ format: 'png', size: 512 }));
 
 ctx.drawImage(avatar, 150, 70, 190, 190);  
   

 let attachment = new Discord.MessageAttachment(canvas.toBuffer(), "tempcall.png");
  message.reply({files:[attachment]});

    
    


  } else {
    let tempo = db.get(`tempocall_${message.guild.id}_${usuario.user.id}`)
  
    if(tempo === null){
    } else {
    tempo = tempo.toString().replace("-", "")

    }
  if(tempo === 0 || tempo === null){
  tempo = "Você não possui nenhum tempo salvo."
  } else {

     tempo = moment.duration(tempo*1000).format(`Y[ a] M[ m] W[ s] D[ Dias] H[ h] m [m] [e] s[ s]`);
    
  }

    let infos = JSON.parse(infos1)
    let tempo_acumulado =  db.get(`call_${message.guild.id}_${usuario.user.id}`)
    let start_acumulado = new Date().getTime();
   
    let diff_acumulado = Math.abs(tempo_acumulado - start_acumulado);

    tempo2_acumulado = moment.duration(diff_acumulado).format(`Y[ a] M[ m] W[ s] D[ Dias] H[ h] m [m] [e] s[ s]`);


let dtid = ''

if(moment(new Date().getTime()).format(`DD/MM/YYYY`) == moment(db.get(`call_${message.guild.id}_${usuario.user.id}`)).format(`DD/MM/YYYY`)){

 
  dtid = moment(db.get(`call_${message.guild.id}_${usuario.user.id}`)).format(`[Hoje às] hh:mm`)
}else{

  dtid = moment(db.get(`call_${message.guild.id}_${usuario.user.id}`)).format(`DD/MM/YYYY [às] hh:mm`)
}

		const canvas = Canvas.createCanvas(500, 700);
		const ctx = canvas.getContext('2d')

    let profile =await Canvas.loadImage(path.join(__dirname, '../../img/completo.png'))
  
    ctx.drawImage(profile, 0, 0, 500, 700);
    let name = usuario.user.username
    if(name.length >= 8){
      name =  name.substr(0, 8).trim() + "...";
    
    }
    var textString2 = `${name}`;
    ctx.font = '35px Titillium Web';
    ctx.fillStyle = '#f2f2f2';
    ctx.textAlign = "center";
   await fillTextWithTwemoji(ctx, textString2, 244, 300)


   var textString2 = `${tempo}`;
   ctx.font = '25px Titillium Web';
   ctx.textAlign = "center";

   ctx.fillStyle = '#f2f2f2';
  
   ctx.fillText(textString2, 245, 390);
   var textString2 = `${tempo2_acumulado}`;
   ctx.font = '25px Titillium Web';
   ctx.textAlign = "center";

   ctx.fillStyle = '#f2f2f2';
  
   ctx.fillText(textString2, 245, 475);
   var textString2 = `${dtid}`;
   ctx.font = '25px Titillium Web';
   ctx.textAlign = "center";

   ctx.fillStyle = '#f2f2f2';
  
   ctx.fillText(textString2, 116, 590);
   let chname = message.guild.channels.cache.get(infos.canal).name
   if(chname.length >= 8){
    chname =  chname.substr(0, 8).trim() + "...";
   
   }
   var textString2 = `${chname}`;
   ctx.font = '25px Titillium Web';
   ctx.textAlign = "center";
   ctx.fillStyle = '#f2f2f2';
 
  await fillTextWithTwemoji(ctx, textString2, 390 ,590)
   ctx.beginPath();
   ctx.arc(250, 158, 88, 0, Math.PI * 2, true);
   ctx.closePath();
   ctx.clip();
   const avatar = await Canvas.loadImage(usuario.user.displayAvatarURL({ format: 'png', size: 512 }));
   
   ctx.drawImage(avatar, 150, 70, 190, 190);  
     
 
   let attachment = new Discord.MessageAttachment(canvas.toBuffer(), "tempcall.png");
    message.reply({files:[attachment]});

}
  }}
    
