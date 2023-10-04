import { port } from "@/lib/serialPort"; // Asegúrate de que esta ruta sea correcta
import { mongooseConnect } from "@/lib/mongoose";
import ArduinoData from "@/models/ArduinoData";

const handle = async (req, res) => {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await ArduinoData.findOne({ _id: req.query.id }));
    } else {
      const arduinoDataDoc = await ArduinoData.find().sort({ createdAt: -1 });
      res.json(arduinoDataDoc);
    }
  }

  if (method === "POST") {
    const { buttonState } = req.body;
    console.log(buttonState)

    const arduinoDataDoc = await ArduinoData.create({
      buttonState,
    });

    // Si el estado del botón es "encendido", enviar un comando al Arduino.
    if (buttonState === "SwitchState: HIGH") {
      port.write("TURN_ON_LED"); // Asume que "port.write" escribe al puerto serie
    } else if (buttonState === "OFF") {
      port.write("TURN_OFF_LED");
    }

    res.json(arduinoDataDoc);
  }
};

export default handle;
