const db = require('quick.db')
const Discord = require('discord.js');
const path = require('path')
const Canvas = require('canvas')
const {findMember} = require('../../script/utils')
const { default_prefix } = require("../../config.json");
const { fillTextWithTwemoji } = require('node-canvas-with-twemoji-and-discord-emoji');
Canvas.registerFont(path.join(__dirname, '../../fonts/Manrope-Bold.ttf'), { family: 'Manrope' })
Canvas.registerFont(path.join(__dirname, '../../fonts/TitilliumWeb-Bold.ttf'), { family: 'Titillium Web' })
module.exports = {
  nome: "level",
  coolwdon:8000,
  alternativas: ["level"],
  run: async (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix
    let sistelevel = db.get(`sistelevel_${message.guild.id}`);
    if (sistelevel == null) {
   
    const limite = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`O sistema de level está desabilitado. use o comando **${prefix}levelup on** para habilitar`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
  
   return  message.reply({embeds:[limite]})

}
const nanc = new Discord.MessageEmbed()
    .setColor('ffffff')
    .setDescription(`Este usuário não está registrado na database`)
    .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    
    var namerr = args.join(' ').trim();

    let user = await findMember(message, namerr)|| message.member
    let sem = db.get(`messages_${message.guild.id}_${user.id}`) 
 
     if(sem === null||sem === 0)  return  message.reply({embeds:[nanc]})
    
  let xp = db.fetch(`messages_${message.guild.id}_${user.id}`)
  let lvl = db.fetch(`level_${message.guild.id}_${user.id}`)
  
  if (lvl === null) lvl = 0
  if (xp === null) xp = 0
  
  
  let curxp = xp;
  let difference4 = curxp
  let curlvl = lvl;
  if(curxp >= 1000 ) curxp = curlvl/10 + 'K'
  let nxtLvlXp =  curlvl * 100;
    let difference3 = nxtLvlXp  + 100 ;
  let difference2 = nxtLvlXp  + 100 ;
  if( difference2 >= 1000 )difference2 = (curlvl+1)  / 10 + 'K' ;
  if( curlvl >= 1000 )curlvl = curlvl / 1000 + 'K' ;
  if(xp === 100000)difference2 =100 + 'K' ;
   
   
 
 
    let every = db.all().filter(data => data.ID.startsWith(`messages_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
    let rank = every.map(m => m.ID).indexOf(`messages_${message.guild.id}_${user.user.id}`) + 1 || "N/A";
    if( rank >= 1000 )rank = rank  / 1000 + 'K' ;

    let status; 

    if(!user.presence){

      status = "#7f7f7f";
    }else{
    switch (user.presence.status) {
    case "online":
    status = "#2cc45e";
    break;
    case "dnd":
    status = "#f04747";
    break;
    case "idle":
    status = "#FAA61A";
    break;
    case "offline":
    status = "#7f7f7f";
    break;
    case "streaming":
   status = "#8a2ad5";
   break;
    
    
    
    
    }    
    }
    const canvas = Canvas.createCanvas(934, 282);
    const ctx = canvas.getContext('2d');
 
    let levelbackground = await db.fetch(`levelbackground_${message.guild.id}`);
    if (levelbackground === null) levelbackground = await Canvas.loadImage(path.join(__dirname, '../../img/Frame 1.png'))
    if (levelbackground === 1) levelbackground = await Canvas.loadImage(path.join(__dirname, '../../img/Frame 2.png'))
    if (levelbackground === 2) levelbackground = await Canvas.loadImage(path.join(__dirname, '../../img/Frame 3.png'))
    if (levelbackground === 3) levelbackground = await Canvas.loadImage(path.join(__dirname, '../../img/Frame 4.png'))
    if (levelbackground === 4) levelbackground = await Canvas.loadImage(path.join(__dirname, '../../img/Frame 5.png'))
    
    ctx.drawImage(levelbackground, 0, 0, canvas.width, canvas.height);

ctx.globalAlpha = 0.8 
ctx.fillStyle = "#333640";
ctx.fillRect( 20, 20, canvas.width - 40, canvas.height - 40);

ctx.globalAlpha = 1;



ctx.font = `40px Titillium Web`;
ctx.fillStyle = '#ffffff'
ctx.textAlign = "start";


let name = user.user.username

if(name.length >= 8){
    name =  name.substr(0, 8).trim() + "...";
}

await fillTextWithTwemoji(ctx, name, 257 + 18.5, 164);

const sal = ctx.measureText(name).width

const discrim = user.user.discriminator
if (discrim) {
    ctx.font = `26px Titillium Web`;
    ctx.fillStyle = '#86888a';
    ctx.textAlign = "start";
    ctx.fillText(`#${discrim}`, sal + 282, 164);
}


    ctx.font = `25px Titillium Web`;
    ctx.fillStyle = '#f59cff'
    ctx.textAlign = "center";
    ctx.fillText("LEVEL", 790, 82);

    ctx.font = `bold 50px Manrope`;
    ctx.fillStyle = '#f59cff';
    ctx.textAlign = "start";
    ctx.fillText(curlvl, 829, 82);

    //
    
ctx.font = `25px Titillium Web`;
ctx.fillStyle = "#ffffff";
ctx.fillText("RANK", 590, 82);

ctx.font = `bold 50px Manrope`;
ctx.fillStyle = "#ffffff";
ctx.textAlign = "start";
ctx.fillText(`#${rank}`, 656, 82);
//

ctx.font = `25px Titillium Web`;
ctx.fillStyle = "#ffffff"
ctx.textAlign = "start";
ctx.fillText(`${curxp} / ${difference2} XP`, 720, 164);


const cx = difference4;
const rx = difference3;

if (rx <= 0) rx = 1;
if (cx > rx) cx = 596.5;

let widthone = (cx * 615) / rx;
if (widthone > 596.5) widthone = 596.5;
const result =  widthone;
 // progress bar
 ctx.fillStyle = "#484b4E"
 ctx.arc(257 + 18.5, 147.5 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
 ctx.fill();
 ctx.fillRect(257 + 18.5, 147.5 + 36.25, 615 - 18.5, 37.5);
 ctx.arc(257 + 615, 147.5 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
 ctx.fill();
 ctx.beginPath();

 ctx.fillStyle = "#f59cff";
 
 
 // progress bar
 ctx.arc(257 + 18.5, 147.5 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
 ctx.fill();
 ctx.fillRect(257 + 18.5, 147.5 + 36.25, result, 37.5);
 ctx.arc(257 + 18.5 + result, 147.5 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
 ctx.fill();


    ///



    ///
    ctx.save();
 
    ctx.beginPath();
    ctx.fillStyle = "#54f542";
    ctx.arc(145, 150, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

	const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: "png", size: 1024 }));
    ctx.drawImage(avatar, 36, 45, 215, 215 );
    ctx.restore();

    ctx.beginPath();
    ctx.arc(145, 150, 102, 0, Math.PI * 2, true);
ctx.lineWidth = 6;
ctx.strokeStyle =  "#fffcff";
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = status;
ctx.arc(215, 220, 24, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(215, 220, 25, 0, Math.PI * 2, true);
ctx.lineWidth = 5;
ctx.strokeStyle =  "#fffcff";
ctx.stroke();
    //ctx.closePath();
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `levelcard.png`);

    message.reply({files:[attachment]});

 


  }
}