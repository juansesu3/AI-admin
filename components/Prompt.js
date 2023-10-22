import React from "react";

const Prompt = () => {
  const numberStyle = "text-primary font-medium";
  const listStyle = "mb-2";
  const inputsPrompt = "w-auto h-6 text-center";

  const handleCopyClick = async () => {
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
      console.log("Texto copiado al portapapeles");
    } catch (err) {
      console.error("Error al copiar texto: ", err);
    }
  };
  return (
    <div
      id="prompt"
      className="bg-tableBg text-white p-4 shadow-lg rounded-md mb-8"
    >
      <h2 className="text-primary font-bold text-2xl mb-4">Prompt: </h2>
      <div></div>
      <p>
        Write like an SEO expert and{" "}
        <input className={inputsPrompt} type="text" placeholder="xxxx" /> an
        article for my{" "}
        <input className={inputsPrompt} type="text" placeholder="xxxx" /> Follow
        these guidelines:
      </p>
      <ol>
        <li className={listStyle}>
          <span className={numberStyle}>1. </span>
          Address the search intent of a user who wants to know{" "}
          <input className={inputsPrompt} type="text" placeholder="xxxx" />.
        </li>
        <li className={listStyle}>
          <span className={numberStyle}>2. </span>
          The post should have a length of:{" "}
          <input className={inputsPrompt} type="text" placeholder="xxxx" />
          words.
        </li>
        <li className={listStyle}>
          <span className={numberStyle}>3. </span>
          The main keyword for SEO optimizations is{" "}
          <input className={inputsPrompt} type="text" placeholder="xxxx" />.
        </li>
        <li className={listStyle}>
          <span className={numberStyle}>4. </span>
          The secondary keywords are{" "}
          <input
            className="w-auto h-6 text-center"
            type="text"
            placeholder="xxxx"
          />
          ,{" "}
          <input
            className="w-auto h-6 text-center"
            type="text"
            placeholder="xxxx"
          />
          , and{" "}
          <input
            className="w-auto h-6 text-center"
            type="text"
            placeholder="xxxx"
          />
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
        Copiar prompt
      </button>
    </div>
  );
};

export default Prompt;
