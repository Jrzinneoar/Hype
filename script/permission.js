const { mem } = require('node-os-utils');
let db = require('quick.db')

module.exports.fetchRolePerm = async (message, user,permission) => {
let ckeer = true
let member = false
    user.roles.cache.filter(r => r.id !== message.guild.id).forEach(x => {
       if(ckeer){
           if(db.get(`cargosperm_${message.guild.id}_${x.id}_"${permission}"`)){
              
        member = true
        ckeer=false}
       
       }
    });
   
return member;

}