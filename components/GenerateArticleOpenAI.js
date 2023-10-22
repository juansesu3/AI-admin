import React from "react";

const GenerateArticleOpenAI = () => {
  /*
  const generateArticle = async (topic, focusOn, mainKeyword) => {
    const prompt = `Article topic: ${topic}, focus: ${focusOn}.
    1. Answer the user's query on ${focusOn}.
    2. Main keyword: ${mainKeyword}.
    3. Maximize user retention; use an open loop at the beginning.
    4. No filler content, only useful information.
    5. Keep language simple for a 10-year-old.
    `;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    };

    const data = {
      prompt,
      max_tokens: 4000, // Puedes ajustar esto según tus necesidades
    };

    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-002/completions",
      data,
      { headers }
    );

    const generatedText = response.data.choices[0]?.text.trim();

    // Aquí dividimos el contenido en resumen y contenido principal
    const indexOfFirstParagraph = generatedText.indexOf("\n");
    const summary = generatedText.slice(0, indexOfFirstParagraph);
    const mainContent = generatedText.slice(indexOfFirstParagraph + 1);

    return { summary, mainContent };
  };

  const onClickGenerate = async () => {
    const { summary, mainContent } = await generateArticle(
      topic,
      focusOn,
      mainKeyword
    );
    setSummary(summary);
    setContent(mainContent);
  };
*/
  return {
    /*
      <label>Topic</label>
      <input
        type="text"
        placeholder="article topic"
        value={topic}
        onChange={(ev) => setTopic(ev.target.value)}
      />
      <label>Focus On</label>
      <input
        type="text"
        placeholder="article focus on"
        value={focusOn}
        onChange={(ev) => setFocusOn(ev.target.value)}
      />
      <label>Main Keyword</label>
      <input
        type="text"
        placeholder="main  keyword"
        value={mainKeyword}
        onChange={(ev) => setMainKeyword(ev.target.value)}
      />

      <button type="button" className="btn-primary" onClick={onClickGenerate}>
        Generar Contenido
      </button>
      <br />
      <br />
      
 */
  };
};

export default GenerateArticleOpenAI;
