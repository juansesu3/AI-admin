import axios from "axios";
import React, { useState } from "react";

const Suggestion = () => {
  const openaiKey = process.env.OPENAI_API_KEY;
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);
    sendMessage(inputValue);
    setInputValue("");
  };
  const sendMessage = (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    };
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    };
    setIsLoading(true);
    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        {!isLoading && (
          <span class="relative flex h-6 w-6 mx-auto my-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
          </span>
        )}
        {isLoading && <div className="w-4 h-4 bg-blue-200 rounded-lg"></div>}
      </div>

      {chatLog.map((message, index) => (
        <div key={index}>{message.message}</div>
      ))}

      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            className="m-0 px-2 py-1 shadow-md"
            type="text"
            placeholder="How can I help you?"
            value={inputValue}
            onChange={(ev) => setInputValue(ev.target.value)}
          />
          <button type="submit" className="shadow-md btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Suggestion;
