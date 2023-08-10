const db = require("quick.db");
module.exports = async(client,oldGuild, newGuild) => {

    try{
     let sistelevel23 = db.get(`memberjoin_${oldGuild.id}`);
   
 
     if(sistelevel23 === null)  return;
     if (oldGuild.vanityURLCode !== newGuild.vanityURLCode) {

if(newGuild.vanityURLCode !== null){

    var gi = client.invites.get(oldGuild.id);
    gi.set(newGuild.vanityURLCode, await newGuild.fetchVanityData());
    client.invites.set(oldGuild.id, gi);

}else{
    var gi = client.invites.get(oldGuild.id);
    gi.delete(oldGuild.vanityURLCode);
    client.invites.set(oldGuild.id, gi);

}

     }

    }catch(e){
        return;}
    }