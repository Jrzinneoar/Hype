const db = require("quick.db");
module.exports = (client,invite) => {

   try{
        let sistelevel23 = db.get(`memberjoin_${invite.guild.id}`);
  

        if(sistelevel23 === null)  return;
    var gi = client.invites.get(invite.guild.id);
    gi.delete(invite.code);
    client.invites.set(invite.guild.id, gi);

    
}catch(e){
 return;}
}