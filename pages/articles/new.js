import Editor from "@/components/Editor";
import Layout from "@/components/Layout";
import React, { useState } from "react";

const NewArticle = () => {
  const [content, setContent] = useState("");

  return (
    <Layout>
      <input type="text" placeholder="article name" />
      <textarea placeholder="introduction"></textarea>
      <Editor value={content} onChange={setContent} />
      <input type="text" placeholder="author" />
      <input type="text" placeholder="article name" />
    </Layout>
  );
};

export default NewArticle;
