// server.js
const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";

const nextApp = next({ dev });
const { port } = require("./lib/serialPort");


const handle = nextApp.getRequestHandler();

// Importa el código de SerialPort
require("./lib/serialPort");

nextApp.prepare().then(() => {
  const app = express();

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  const port = 3000;

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Listo en http://localhost:${port}`);
  });
});
