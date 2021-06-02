// Start Up
process.title = `DJ Oreo Bot - Ver. ${require('../package.json').version}, ${process.platform}-${process.arch}`

// Dependencies
const Discord = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] })
const Event = require('./event')
const Modules = require('./modules')
const Music = require('music-discord')

// Variables 
require('dotenv').config()
const prefix = process.env.PREFIX
client.status = '오프라인'
client.player = new Music({prefix: prefix})
// Discord bot client
client.aliases = new Discord.Collection()
client.developers = [
  '552103947662524416'
]
client.commands = new Discord.Collection()
client.module = Modules
client.color = color

// Function
function color(color, ...string) {
  if(!Modules.colorData[color])
    throw new TypeError(`There is no color ${color}`)
  else 
    return `${Modules.colorData[color]}${string.join(' ')}${Modules.colorData.reset}`
  
}

// Booting
(async () => {
  client.status = '부팅중...'
  console.clear()
  console.log('---------------------------------------------------------------------')
  console.log('Author(s) : MadeGOD')
  console.log('(C) Team Kimbab. All rights reserved.')
  console.log('---------------------------------------------------------------------')
  console.log(client.color('blue', '[System] '), process.title)

  client.login(process.env.BOT_TOKEN)
  await Event.ready(client)
  await Modules.handler(client, prefix, Modules)
})()