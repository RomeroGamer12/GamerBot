const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require("discord.js");

require("dotenv").config();
const keepAlive = require("./server.js");

client.on("ready", () => {
  const array = [
    {
     name: "GamerBot 2",
     type: "PLAYING"
    },
    {
     name: "Bot Bueno",
     type: "PLAYING"
    }
  ]

  setInterval(() => {
    function presence(){
      client.user.setPresence({
        status: "online",
        activity: array[Math.floor(Math.random() * array.lenght)],
      })
    }

    presence();
  }, 5000);
  console.log("Bor Listo!")
});

client.on("message", (message) => {

  let prefix = "-"

  if(mssage.author.bot) return;

  if(mssage.content,startswitch(prefix)) return;


  let usuario = message.mention.members.first() || message.member;
  const args = message.content.slice(prefix.lenght).trim().split(/+/g)
  const command = args.shift().toLowerCase();

});

client.login(precess.env.TOKEN);