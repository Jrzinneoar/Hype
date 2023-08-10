const Canvas = require("canvas");
const Discord = require("discord.js");
const db = require("quick.db");
const {findMember} = require('../../script/utils')
const path = require('path')
const { fillTextWithTwemoji } = require('node-canvas-with-twemoji-and-discord-emoji');
Canvas.registerFont(path.join(__dirname, '../../fonts/Genta.ttf'), { family: 'Genta' })

module.exports = {
  nome: "shippar",
  coolwdon:9000,
  alternativas: ["ship"],
  run: async (client, message, args) => {

		var name = args.join(' ').trim();

	
		
  let membro1 = await findMember(message, name,1)
  let membro2 = await findMember(message, name,2)
 
  let notuser = new Discord.MessageEmbed()
				
			
  .setDescription(`Lembre-se de mencionar dois usuários diferentes`)
  .setColor('ffffff')

  .setFooter(`${message.guild.name}`,message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();


  if (!membro1 || !membro2)
    return message.reply({embeds:[notuser]});
  if (membro1 === membro2)
  return message.reply({embeds:[notuser]});

  const amor = db.get(`Love_${membro1.user.id}_${membro2.user.id}`) || db.get(`Love_${membro2.user.id}_${membro1.user.id}`) || Math.floor(Math.random() * 100);
  db.set(`Love_${membro1.user.id}_${membro2.user.id}`, amor);
  db.set(`Love_${membro2.user.id}_${membro1.user.id}`, amor);

  let nomeFim1 = membro1.user.username.length;
  let nomeFim2 = membro2.user.username.length;

  let calc1 = nomeFim1 - 3;
  let calc2 = nomeFim2 - 3;

  
  if (amor > 60) {
    nomeship =
  membro1.user.username.slice(0, 3) + membro2.user.username.slice(0, 3);
  } else if (amor >= 40) {
    nomeship =
  membro1.user.username.slice(0, calc1) +
  membro2.user.username.slice(0, calc2);
  } else {
    nomeship =
  membro1.user.username.slice(calc1, nomeFim1) +
  membro2.user.username.slice(calc2, nomeFim2);
  }



const canvas = Canvas.createCanvas(1280, 720);
		const ctx = canvas.getContext('2d');
    
		const shippar = await Canvas.loadImage(path.join(__dirname, '../../img/ship.png'));
		ctx.drawImage(shippar, 0, 0, 1280, 720);

		
    
		const foto1 = await Canvas.loadImage(
			membro1.user.displayAvatarURL({ format: 'png', size: 512 })
		);
		const foto2 = await Canvas.loadImage(
			membro2.user.displayAvatarURL({ format: 'png', size: 512 })
		);


	let ecuntador1 = 	membro1.user.username
  
  if(ecuntador1.length >= 8){
    ecuntador1 =  ecuntador1.substr(0, 8).trim() + "...";
  
  }
  let ecuntador2 = membro2.user.username
   
  if(ecuntador2.length >= 8){
    ecuntador2 =  ecuntador2.substr(0, 8).trim() + "...";
  
  } 
		ctx.drawImage(foto1, 95, 180, 360, 360);
		ctx.drawImage(foto2, 825, 180, 360, 360);
 var textString2 = `${amor}%`;
  ctx.font = '54px Genta';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(textString2, 590, 378);
   var textString2 = `${ecuntador1}`;
  ctx.font = '45px Genta';
  ctx.fillStyle = '#ffffff';
  await fillTextWithTwemoji(ctx, textString2, 10, 648);

     var textString2 = `${ecuntador2}`;
     ctx.font = '45px Genta';
  ctx.fillStyle = '#ffffff';
  await fillTextWithTwemoji(ctx, textString2, 900, 100);
   
		const amorat = new Discord.MessageAttachment(canvas.toBuffer(), 'ship.png');



		message.reply({content:`**Ship entre : ${membro1.user.tag} é ${membro2.user.tag}**`,files:[amorat]});
	}
  
};

