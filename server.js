const express = require("express")
const server = express();

server.all("/", (req, res)  => {
  res.send("Bot Encendido")
});

function keepAlive() {
  server.listen(3000, () => { console.log("Bot Listo") });
}

module.ecports = keepAlive;