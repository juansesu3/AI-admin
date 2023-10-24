import React, { useState } from "react";
import Swal from "sweetalert2";

const Prompt = () => {
  const numberStyle = "text-primary font-medium";
  const listStyle = "mb-2";
  const inputsPrompt = "w-auto h-6 text-center";

  const [inputs, setInputs] = useState({
    expertTopic: "",
    websiteAbout: "",
    userQuestion: "",
    numberWords: "",
    mainKeyword: "",
    secondaryKeywords1: "",
    secondaryKeywords2: "",
    secondaryKeywords3: "",
    // ...other states
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const InfoCopie = () => {
    Swal.fire({
      title: "Ready ",
      text: "Your prompt has been copied to the clipboard. Head over to Chat GPT to paste it and generate your article.",
      icon: "success",
      confirmButtonText: "Ok!",
    });
  };

  const InfoCompleteInputs = () => {
    Swal.fire({
      title: "incomplete",
      text: "Please complete all fields before copying.",
      icon: "error",
      confirmButtonText: "Ok!",
    });
  };

  const areInputsEmpty = () => {
    return Object.values(inputs).some((value) => value === "");
  };

  const handleCopyClick = async () => {
    if (areInputsEmpty()) {
      InfoCompleteInputs();
      return;
    }
    const promptDiv = document.getElementById("prompt");
    let textToCopy = "";

    // Iterar a través de cada elemento hijo del div
    promptDiv.childNodes.forEach((node) => {
      if (node.nodeName === "INPUT") {
        // Si es un input, añadir su valor
        textToCopy += node.value + " ";
      } else if (node.nodeName === "OL") {
        // Si es una lista ordenada, iterar a través de sus elementos
        node.childNodes.forEach((li) => {
          li.childNodes.forEach((subNode) => {
            if (subNode.nodeName === "INPUT") {
              // Si es un input dentro de la lista, añadir su valor
              textToCopy += subNode.value + " ";
            } else {
              // De lo contrario, añadir el texto
              textToCopy += subNode.textContent + " ";
            }
          });
          textToCopy += "\n";
        });
      } else {
        // De lo contrario, añadir el texto del nodo
        textToCopy += node.textContent + " ";
      }
    });

    // Copiar el texto al portapapeles
    try {
      await navigator.clipboard.writeText(textToCopy.trim());
      console.log(textToCopy);
      console.log("Texto copiado al portapapeles");
    } catch (err) {
      console.error("Error al copiar texto: ", err);
    }
    InfoCopie();
  };

  const handleSvgClick = (info) => {
    Swal.fire({
      title: "Information",
      text: info,
      icon: "info",
      confirmButtonText: "Understood",
    });
  };

  return (
    <div
      id="prompt"
      className="bg-tableBg text-white p-4 shadow-lg rounded-md mb-8"
    >
      <h2 className="text-primary font-bold text-2xl mb-4">Prompt: </h2>

      <div>
        Write like an SEO expert and{" "}
        <span className="inline-flex">
          <input
            name="expertTopic"
            value={inputs.expertTopic}
            onChange={handleInputChange}
            className={inputsPrompt}
            type="text"
            placeholder="expert topic"
            
          />{" "}
          <span className="hidden">{inputs.expertTopic}</span>
          <span
            className="cursor-pointer  hover:text-primary"
            onClick={() =>
              handleSvgClick(
                "Please enter the specific topic of your expertise on which you plan to write your article. For example, if you are an expert in machine learning, you could write 'Implementing Neural Networks in Python."
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </span>
        </span>{" "}
        an article for my{" "}
        <span className="inline-flex">
          <input
            name="websiteAbout"
            value={inputs.websiteAbout}
            onChange={handleInputChange}
            className={inputsPrompt}
            type="text"
            placeholder="what is your website about?"
            
          />
          <span className="hidden">{inputs.websiteAbout}</span>
          <span
            className="cursor-pointer hover:text-primary"
            onClick={() =>
              handleSvgClick(
                "What is your website about? Please specify the core subject or niche you focus on. For example, if your website is about personal development, you could write 'Personal Development Techniques and Mindfulness Practices."
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </span>
        </span>
        Follow these guidelines:
      </div>
      <ol>
        <li className={listStyle}>
          <span className={numberStyle}>1. </span>
          Address the search intent of a user who wants to know{" "}
          <span className="inline-flex ">
            <input
              name="userQuestion"
              value={inputs.userQuestion}
              onChange={handleInputChange}
              className={inputsPrompt}
              type="text"
              placeholder="answer user question"
              
            />
            <span className="hidden">{inputs.userQuestion}</span>
            <span
              className="cursor-pointer hover:text-primary"
              onClick={() =>
                handleSvgClick(
                  "Please specify here the key topic or question that your website aims to address, to better align with the search intent of your users. For instance, if your website is focused on fitness, you could write 'How to achieve a balanced lifestyle through fitness and nutrition."
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </span>
          </span>
          .
        </li>
        <li className={listStyle}>
          <span className={numberStyle}>2. </span>
          The post should have a length of:{" "}
          <span className="inline-flex">
            <input
              name="numberWords"
              value={inputs.numberWords}
              onChange={handleInputChange}
              className={inputsPrompt}
              type="number"
              placeholder="number of words or length"
              
            />
            <span className="hidden">{inputs.numberWords}</span>
            <span
              className="cursor-pointer hover:text-primary"
              onClick={() =>
                handleSvgClick(
                  "The post should have a length of: __ number of words or length in words. For example, if you're writing a comprehensive guide, aim for at least 2000 words; for a quick update, 500 words might be sufficient."
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </span>
          </span>
          words.
        </li>
        <li className={listStyle}>
          <span className={numberStyle}>3. </span>
          The main keyword for SEO optimizations is{" "}
          <span className="inline-flex">
            <input
              name="mainKeyword"
              value={inputs.mainKeyword}
              onChange={handleInputChange}
              className={inputsPrompt}
              type="text"
              placeholder="primary keywords for SEO"
              
            />
            <span className="hidden">{inputs.mainKeyword}</span>
            <span
              className="cursor-pointer hover:text-primary"
              onClick={() =>
                handleSvgClick(
                  "The main keyword for SEO optimizations is ____. For example, if your article is about 'sustainable fashion,' your main keyword might be 'sustainable fashion trends'."
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </span>
          </span>
          .
        </li>
        <li className={listStyle}>
          <span className={numberStyle}>4. </span>
          The secondary keywords are{" "}
          <input
            name="secondaryKeywords1"
            value={inputs.secondaryKeywords1}
            onChange={handleInputChange}
            className="w-auto h-6 text-center"
            type="text"
            placeholder="secondary keywords"
            
          />
          <span className="hidden">{inputs.secondaryKeywords1}</span>,{" "}
          <input
            name="secondaryKeywords2"
            value={inputs.secondaryKeywords2}
            onChange={handleInputChange}
            className="w-auto h-6 text-center"
            type="text"
            placeholder="secondary keywords"
            
          />
          <span className="hidden">{inputs.secondaryKeywords2}</span>, and{" "}
          <span className="inline-flex">
            <input
              name="secondaryKeywords3"
              value={inputs.secondaryKeywords3}
              onChange={handleInputChange}
              className="w-auto h-6 text-center"
              type="text"
              placeholder="secondary keywords"
            />
            <span className="hidden">{inputs.secondaryKeywords3}</span>
            <span
              className="cursor-pointer hover:text-primary"
              onClick={() =>
                handleSvgClick(
                  "The secondary keywords are ____. These are additional keywords that support your main keyword. For example, if your main keyword is 'sustainable fashion trends,' your secondary keywords could be 'eco-friendly clothing,' 'organic materials,' and 'ethical fashion brands."
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </span>
          </span>
          .
        </li>
        <li className={listStyle}>
          <span className={numberStyle}>5. </span>
          Include a single H1 at the beginning.
        </li>
        <li className={listStyle}>
          <span className={numberStyle}>6. </span>
          You can use as many H2 and H3 headers as you deem necessary to satisfy
          the search intent of the article; you don&apos;t have to optimize
          them.
        </li>
        <li className={listStyle}>
          <span className={numberStyle}>7. </span>
          The article should be informational, as users are at the first level
          of awareness in the customer journey, far from making a purchase.
        </li>
        <li className={listStyle}>
          <span className={numberStyle}>8. </span>
          Maximize user retention so that they finish reading the article; use
          an open loop at the beginning to generate intrigue.
        </li>
        <li className={listStyle}>
          <span className={numberStyle}>9. </span>
          Do not add content that does not provide value; do not invent data;
          the entire article should be useful.
        </li>
        <li className={listStyle}>
          <span className={numberStyle}>10. </span>
          Use direct and simple language that a 10-year-old can understand.
        </li>
      </ol>
      <button
        className="btn-primary mt-4"
        id="copyButton"
        type="button"
        onClick={handleCopyClick}
      >
        Copie prompt
      </button>
    </div>
  );
};

export default Prompt;
