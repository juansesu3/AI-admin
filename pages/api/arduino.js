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
    const { command } = req.body;
    

    if (command === "TURN_ON") {
      port.write("TURN_ON\n");
    } else if (command === "TURN_OFF") {
      port.write("TURN_OFF\n");
    }

    res.json({ message: "Comando enviado al Arduino" });
  }
};

export default handle;
