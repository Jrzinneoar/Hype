const db = require('quick.db')


module.exports.Temp = async (guild,channel) => {
    let verification;
    let paginas = db.all().filter(data => data.ID.startsWith(`newvips_${guild.id}`)).sort((a, b) => b.data - a.data)
    let tgde = true
    for (let i = 0; i < paginas.length; i++) {
        if(tgde){
  let dados = db.get(paginas[i].ID)

  if(dados.canal == channel.id){
    tgde = false
    let verifidepag = db.get(`vips_${guild.id}_"${dados.vipname}"`)
if(verifidepag.contadorcall){
    verification = null
}else{
    verification =true
}
   
}
    }
    }

   
    return verification
}


module.exports.Visible = async (guild,channel) => {
    let verification;
    let paginas = db.all().filter(data => data.ID.startsWith(`newvips_${guild.id}`)).sort((a, b) => b.data - a.data)
let tgde = true
    for (let i = 0; i < paginas.length; i++) {
        if(tgde){
  let dados = db.get(paginas[i].ID)

  if(dados.canal == channel.id){
      tdge = false
    let verifidepag = db.get(`vips_${guild.id}_"${dados.vipname}"`)
if(verifidepag.autoesconder){
    verification = true
}else{
    verification =null
}
   
}}
    }

   
    return verification
}