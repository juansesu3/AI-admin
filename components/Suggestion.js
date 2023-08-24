import OpenAIKey, { key } from "@/lib/openAIKey";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Suggestion = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const openaiKey = process.env.OPENAI_API_KEY;
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmails] = useState([]);
  const [proyects, setProyects] = useState([]);
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    axios.get("/api/emails").then((response) => {
      setEmails(response.data);
    });
    axios.get("api/proyects").then((response) => {
      setProyects(response.data);
    });
    axios.get("/api/profiles").then((response) => {
      setProfiles(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    const OutPrompt = {
      message: `${inputValue} `,
    };

    e.preventDefault();
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: OutPrompt.message },
    ]);
    sendMessage(inputValue);
    setInputValue("");
  };
  const sendMessage = (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    };
    const data = {
      /*model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],*/

      model: "gpt-3.5-turbo",
      temperature: 0.8,
      n: 1,
      stream: false,
      messages: [
        {
          role: "system",
          content: `Welcome to the user, respond the user as Mr. ${session?.user?.name
            .split(" ")
            .shift()} and say  I'm here to help you my master!  Your behavior will be like a responsible, attentive and nice woman 
          Limit the response to 200 caracters `,
        },
        {
          role: "user",
          content: `Hi there, provide of the following data:
          ${JSON.stringify(profiles)},

          ${JSON.stringify(proyects)},

      
          ${inputValue}`,
        },
      ],
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
        console.log(chatLog);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="relative ">
      <div
        className={`fixed bottom-0 right-6 w-64  shadow-lg flex flex-col gap-2 p-4 rounded-md  bg-[#1d1d1f]   mb-20 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="max-h-80 overflow-y-auto custom-scrollbar">
          {chatLog.map((message, index) => (
            <>
              <div
                className={` text-white pt-2 pb-0  ${
                  message.type === "user" ? "text-end" : "text-start"
                }`}
              >
                {message.type.replace("bot", "Geniuss: ").replace("user", `me`)}
              </div>

              <div
                key={index}
                className={`${
                  message.type === "user"
                    ? "text-white text-end  shadow-md py-1 pr-4 mt-2 rounded-lg bg-[#4d61fc]  "
                    : "text-[#4d61fc] text-start  shadow-md py-2  mt-2  px-1 rounded-lg bg-white "
                }`}
              >
                {message.message}
              </div>
            </>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className=" full flex flex-col gap-2 rounded-md  bg-transparent ">
            <div>
              <span class="relative flex flex-col h-6 w-6 mx-auto my-2 ">
                <span
                  class={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                    isLoading ? "bg-red-400" : "bg-sky-400"
                  } opacity-75`}
                ></span>
                <span
                  class={`relative inline-flex rounded-full h-6 w-6${
                    isLoading ? " bg-red-500" : " bg-sky-500 "
                  } `}
                ></span>
              </span>
            </div>
            <div className="flex gap-1 ">
              <input
                className="m-0 px-2 py-1 shadow-md"
                type="text"
                placeholder="How can I help you?"
                value={inputValue}
                onChange={(ev) => setInputValue(ev.target.value)}
              />
              <button type="submit" className="shadow-md btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      <button
        className="fixed bottom-8 right-6 w-10 h-10 flex items-center justify-center shadow-md rounded-full bg-sky-500"
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <span className="animate-ping flex items-center justify-center w-6 h-6 rounded-full bg-sky-400 opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
              />
            </svg>
          </span>
        )}
      </button>
    </div>
  );
};

export default Suggestion;
