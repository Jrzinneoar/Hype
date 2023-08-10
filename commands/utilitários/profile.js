const Discord = require('discord.js');
const {UserFlags} = require('discord.js');
const {findUser} = require('../../script/utils')
const Canvas = require('canvas');
const db = require('quick.db');
const { default_prefix,dev } = require("../../config.json");
const path = require('path');
const { fillTextWithTwemoji } = require('node-canvas-with-twemoji-and-discord-emoji');
Canvas.registerFont(path.join(__dirname, '../../fonts/Manrope-Bold.ttf'), { family: 'Manrope' })
Canvas.registerFont(path.join(__dirname, '../../fonts/TitilliumWeb-Bold.ttf'), { family: 'Titillium Web' })



module.exports = {
  nome: "profile",
  coolwdon:3000,
  alternativas: ["perfil"],
  run: async (client, message, args) => {

  let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
   

    var namerrr = args.join(' ').trim();

    let user = await findUser(client,message, namerrr)||await  message.author;


    let xp = db.fetch(`messages_${message.guild.id}_${user.id}`)
let lvl = db.fetch(`level_${message.guild.id}_${user.id}`)

if (lvl === null) lvl = 0
if (xp === null) xp = 0


let curxp = xp;
let curlvl = lvl;
if(curxp >= 1000 ) curxp = curlvl/10 + 'K'
let nxtLvlXp =  curlvl * 100;
let difference2 = nxtLvlXp  + 100 ;
if( difference2 >= 1000 )difference2 = (curlvl+1)  / 10 + 'K' ;
if( curlvl >= 1000 )curlvl = curlvl / 100 + 'K' ;
if(xp === 100000)difference2 =100 + 'K' ;
 
		const canvas = Canvas.createCanvas(721, 406);
		const ctx = canvas.getContext('2d')
 
let notmarry = 72
  
    let marry = await db.fetch(`marry_${user.id}`);
  
    if(marry === null) {results = ``;
    }else{
  notmarry = 67
   
  let pata = await client.users.cache.get(marry);

if(pata === undefined) results = `Casado com "Desconhecido"`
else{
  
  let name = pata.username
  if(name.length >= 8){
    name =  name.substr(0, 8).trim() + "...";
  
  }
  results = `Casado com ${name}`;
}
  
    }

    let list = [];

    const userflags = await user.fetchFlags();
    const flags = new UserFlags(userflags.bitfield).serialize();

    if (dev.includes(user.id)) {
  list.push('../../img/developer.png');
    }

    if (flags.HOUSE_BRAVERY){
   

  list.push('../../img/bravery.png');

   }else   if (flags.HOUSE_BRILLIANCE){
 

    list.push('../../img/brilliance.png');

   }else if (flags.HOUSE_BALANCE){
 
 
  list.push('../../img/balance.png');
  }

    
  if (flags.EARLY_SUPPORTER){
  
  list.push('../../img/porco.png')
    }
  
   if (flags.EARLY_VERIFIED_BOT_DEVELOPER){
  list.push('../../img/dev.png')
    }
	  if (flags.HYPESQUAD_PARTNER){

  list.push('../../img/hypersquadpatner.png')
    }
 
    list = list.join(",")
 

	
    let resps = await db.fetch(`reps_${user.id}`);
		if (resps === null) resps = '0';
    

	
   

		let aaa = await db.fetch(`aaa_${user.id}`);
		if (aaa === null)
			aaa = `Você pode editar isso através do comando "${prefix}biografia"`;
  let profile =await Canvas.loadImage(path.join(__dirname, '../../img/profile luni.png'))
  
  ctx.drawImage(profile, 0, 0, 720, 400);

   let name = user.username

   if(name.length >= 8){
    name =  name.substr(0, 8).trim() + "...";
  
  }
   

if(aaa.length > 65){
    if(aaa[65]!==" "){
 
  
  var textString2 = `${aaa.slice(0,65)}-`;
  ctx.font = '15px Titillium Web';
  ctx.fillStyle = '#f2f2f2';
 
  await fillTextWithTwemoji(ctx, textString2, 35, 368);

  var textString2 = `${aaa.slice(65,130)}`;
  ctx.font = '15px Titillium Web';
  ctx.fillStyle = '#f2f2f2';
 
  await fillTextWithTwemoji(ctx, textString2, 35, 384);

    }else{
     
      var textString2 = `${aaa.slice(0,65)}`;
      ctx.font = '15px Titillium Web';
      ctx.fillStyle = '#f2f2f2';
     
      await fillTextWithTwemoji(ctx, textString2, 35, 368);
      var textString2 = `${aaa.slice(65,130)}`;
      ctx.font = '15px Titillium Web';
      ctx.fillStyle = '#f2f2f2';
     
      await fillTextWithTwemoji(ctx, textString2, 35, 384);
    }
  }else{
    formataçao = aaa

     var textString2 = `${formataçao}`;
  ctx.font = '15px Titillium Web';
  ctx.fillStyle = '#f2f2f2';
 
  await fillTextWithTwemoji(ctx, textString2, 35, 368);
  }
		
    var textString2 = `${name}`;

  ctx.font = '20px Titillium Web';
  ctx.fillStyle = '#f2f2f2';

    

 
  await fillTextWithTwemoji(ctx, textString2, notmarry, 256)
 // ctx.fillText(textString2, notmarry,256);
let distance = 0 
if(list.split(",")[0]){
  for (let i = 0; i < list.split(",").length; i++) {
    const entity = list.split(",")[i]

    const badge = await Canvas.loadImage(path.join(__dirname, entity));
  
    
    ctx.drawImage(badge,  ctx.measureText(name).width+74+distance, 242, 15, 15);  
    distance = distance +18
  


  }
    }
 
 
  var textString2 = `${curxp} / ${difference2} XP`;
  ctx.font = '16px Manrope';
  ctx.textAlign = "start";
  ctx.fillStyle = '#f2f2f2';
  ctx.fillText(textString2, 605, 386);
 
  
  var textString2 = `${results}`;
  ctx.font = '16px Titillium Web';
  ctx.fillStyle = '#f2f2f2';

 await fillTextWithTwemoji(ctx, textString2, 67, 276)
 
 var textString2 = `${resps}`;
 ctx.font = '35px Titillium Web';
 ctx.textAlign = "start";
 ctx.fillStyle = '#f2f2f2';
 ctx.fillText(textString2, 573, 73)
  var textString2 = `${curlvl}`;
  ctx.font = '17px Manrope';
  ctx.textAlign = "start";
  ctx.fillStyle = '#f2f2f2';
  ctx.fillText(textString2, 632, 368);
  let every = db.all().filter(data => data.ID.startsWith(`messages_${message.guild.id}_`)).sort((a, b) => b.data - a.data);
  let rank = every.map(m => m.ID).indexOf(`messages_${message.guild.id}_${user.id}`) + 1 || "N/A";
  if( rank >= 1000 )rank = rank  / 1000 + 'K' ;
  var textString2 = `#${rank}`;
  ctx.font = '17px Manrope';
  ctx.textAlign = "start";
  ctx.fillStyle = '#f2f2f2';
  ctx.fillText(textString2, 628, 350);

 

  ctx.beginPath();
  ctx.arc(154, 138, 75, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();
  const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'png', size: 512 }));
  
  ctx.drawImage(avatar, 71, 56, 160, 160);  
    

    let attachment = new Discord.MessageAttachment(canvas.toBuffer(), "profile.png");
    return message.reply({files:[attachment]});

  }

};


