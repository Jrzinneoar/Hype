const path = require('path')
const Discord = require("discord.js");
const Enmap = require("enmap")


const {  Collection,Intents} = require('discord.js') 
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILD,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_BANS,Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,Intents.FLAGS.GUILD_INTEGRATIONS,Intents.FLAGS.GUILD_WEBHOOKS,Intents.FLAGS.GUILD_INVITES,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_PRESENCES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,Intents.FLAGS.DIRECT_MESSAGE_TYPING]})
const { readdirSync } = require('fs')
const { token } = require("./config.json")
client.invites = new Enmap({autoFetch: true,
cloneLevel: "deep",
fetchAll: false});

client.comandos = new Collection()
client.alternativas = new Collection()
client.coolwdon = new Collection()
client.countdown = new Collection()

//require(path.join(__dirname, './script/topgg.js'))(client);
require(path.join(__dirname, './script/command.js'))(client);

const evtFiles = readdirSync('./events/')
console.log(`Foram carregados ${evtFiles.length} eventos da discord.js.`)

evtFiles.forEach(x => {

  const nome = x.split('.')[0]
  const evento = require(`./events/${x}`)

  client.on(nome, evento.bind(null, client))

})

const processfiles = readdirSync('./nodejsevent/')
console.log(`Foram carregados ${processfiles.length} eventos do node.js.`)

processfiles.forEach(x => {

  const nome = x.split('.')[0]
  const evento = require(`./nodejsevent/${x}`)

  process.on(nome, evento.bind(null))

})


 client.login(token);
