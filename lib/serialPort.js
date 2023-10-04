// serialPort.js
const { SerialPort } = require("serialport");
const { DelimiterParser } = require("@serialport/parser-delimiter");
const ArduinoData = require("../models/ArduinoData");

const port = new SerialPort({
  path: "COM3",
  baudRate: 9600,
});

const parser = port.pipe(new DelimiterParser({ delimiter: "\n" }));

parser.on("data", async (data) => {
  console.log(`Datos recibidos del Arduino: ${data}`);
  // Lógica adicional aquí
  const newState = new ArduinoData({
    buttonState: data, // Asume que 'data' es un número; si no lo es, conviértelo
  });

  await newState.save();
});

module.exports = { parser, port };
