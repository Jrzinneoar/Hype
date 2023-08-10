

module.exports.findMember = async ( message,name,position) => {
    var user;

    let sid=   name
    .trim()
    .split(" ");
    let sidrr;
    if(typeof position !== 'number') sidrr= 0

    else sidrr =position -1


    let usersnew = [];

    sid.forEach(x => {
    
let sidar = message.guild.members.cache.get(x)
        if(sidar){
            usersnew.push(sidar)
    
          
        }
        
})


    if(name==''){
     user = null
    }else if(/<|@|!|>/g.test(name)){
     let arb=   name
        .trim()
        .split(" ");
    
    if(typeof position !== 'number') position= 0

    else position =position -1
    let users = [];
   
    arb.forEach(x => {
       
let sidare = message.guild.members.cache.get(x.replace(/<|@|!|>/g, ""))
        if(sidare){
            users.push(sidare)
            
        }
        
        
})
user =  users[position]
    }else if(usersnew[sidrr]){
       

user = usersnew[sidrr]
    }else if(name !==''){
        var terminate = true
    await message.guild.members.fetch().then(members => {
      
        members.forEach(member => {
            if(terminate){
                if (  
                    member.displayName.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().startsWith(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) 
                    ||  member.user.username.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().startsWith(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) 
                    || member.user.tag.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().startsWith(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) 
                || member.displayName.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) 
                || member.user.username.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) 
                || member.user.tag.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {    
                        user = member;
                       
        terminate = false
                }
            } 
        }) 
    })
}else{
    user = null
}

    return user;
}

module.exports.findUser = async (client, message,name,position) => {
    var user;
    let sid=   name
    .trim()
    .split(" ");
    let sidrr;
    if(typeof position !== 'number') sidrr= 0

    else sidrr =position -1
    

    let usersnew = [];

    sid.forEach(x => {
       
let sidar = client.users.cache.get(x)
        if(sidar){
            usersnew.push(sidar)
        }
        })
    if(name==''){
     user = null
    }else if(/<|@|!|>/g.test(name)){
     let arb=   name
        .trim()
        .split(" ");
    
    if(typeof position !== 'number') position= 0

    else position =position -1

    let users = [];
   
    arb.forEach(x => {
       
let sidare = client.users.cache.get(x.replace(/<|@|!|>/g, ""))
        if(sidare){
            users.push(sidare)
            
        }
        
        
})
user =  users[position]

    }else if(usersnew[sidrr]){
user = usersnew[sidrr]
    }else if(name !==''){
        var terminate = true
    await client.users.cache.forEach(member => {
if(terminate){
                if (member.username.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().startsWith(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) ||
                  member.tag.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().startsWith(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) ||
                      member.username.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) 
                || member.tag.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) ) {    
                        user = member;
                     
                        terminate = false
                        
                
                }}
            
        }) 
    
}else{
    user = null
}

    return user;
}