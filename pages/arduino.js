import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ArduinoPage = () => {
  const [buttonStates, setButtonStates] = useState([]);

  const fetchButtonStates = async () => {
    await axios.get("/api/arduino").then((response) => {
      setButtonStates(response.data);
    });
  };

  useEffect(() => {
    // Obtener el estado inicial desde MongoDB
    // Asume que tienes una API de servidor que pueda devolver el último estado del botón
    fetchButtonStates();
    // Aquí podrías usar Websockets o similar para obtener actualizaciones en tiempo real
  }, []);

  const sendCommandToArduino = async (buttonState) => {
    try {
      const response = await axios.post("/api/arduino", { buttonState });
      console.log(response.data);
    } catch (error) {
      console.error("Error enviando comando al Arduino:", error);
    }
    fetchButtonStates();
  };

  return (
    <Layout>
      <div className="flex gap-2 mb-2">
        <button
          className="btn-primary"
          onClick={() => sendCommandToArduino("SwitchState: HIGH")}
        >
          Encender
        </button>

        <button
          className="btn-red"
          onClick={() => sendCommandToArduino("SwitchState: LOW")}
        >
          Apagar
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {buttonStates.map((state, index) => (
          <div key={index} className="bg-tableBg px-4 py-2 flex flex-col">
            <span>Button State: {state.buttonState}</span>
            <span>Created At: {state.createdAt}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ArduinoPage;
