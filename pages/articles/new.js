import Editor from "@/components/Editor";
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const NewArticle = () => {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(session?.user?.name);
  const [imgAuthor, setImgAuthor] = useState(session?.user?.image);

  return (
    <Layout>
      <label>Article name</label>
      <input type="text" placeholder="article name" />
      <label>Article summary</label>
      <textarea placeholder="summary"></textarea>
      <label>Article content</label>
      <Editor value={content} onChange={setContent} />
      <label>Article author</label>
      <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden mb-2">
        <img
          src={imgAuthor}
          alt="image-boss"
          className="w-8 h-8 rounded-md mt-1 ml-1.5"
        />
        <input
          className="mt-1.5 mr-1"
          type="text"
          placeholder="author"
          value={author}
        />
      </div>
      <button className="btn-primary">Create </button>
    </Layout>
  );
};

export default NewArticle;
