// serialPort.js
const { SerialPort } = require("serialport");
const { DelimiterParser } = require("@serialport/parser-delimiter");

const port = new SerialPort({
  path: "COM3",
  baudRate: 9600,
});

const parser = port.pipe(new DelimiterParser({ delimiter: "\n" }));

parser.on("data", (data) => {
  console.log(`Datos recibidos del Arduino: ${data}`);
  // Lógica adicional aquí
});

module.exports = parser;
