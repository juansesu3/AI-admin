import { useRouter } from "next/router";
import Editor from "./Editor";
import { useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";

const ArticleForm = ({
  _id,
  title: existingTitle,
  summary: existingSumary,
  content: existingContent,
  author: existingAuthor,
  imgAuthor: existingImgAuthor,
}) => {
  const { data: session } = useSession();
  const [title, setTitle] = useState(existingTitle || "");
  const [summary, setSummary] = useState(existingSumary || "");
  const [content, setContent] = useState(existingContent || "");
  const [author, setAuthor] = useState(existingAuthor || session?.user?.name);
  const [imgAuthor, setImgAuthor] = useState(
    existingImgAuthor || session?.user?.image
  );
  const [goToArticles, setGoToArticles] = useState(false);

  const router = useRouter();
  

  const saveArticle = async (ev) => {
    ev.preventDefault();
    const data = { title, summary, content, author, imgAuthor };
    if (_id) {
      //update
      await axios.put("/api/articles", { ...data, _id });
    } else {
      //create
      await axios.post("/api/articles", data);
    }
    setGoToArticles(true);
  };
  if (goToArticles) {
    //use router
    router.push("/articles");
  }

  return (
    <form onSubmit={saveArticle}>
      <label>Article name</label>
      <input
        type="text"
        placeholder="article name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <label>Article summary</label>
      <textarea
        placeholder="summary"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      ></textarea>
      <label>Article content</label>
      <Editor value={content} onChange={setContent} />
      <label>Article author</label>
      <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden mb-2">
        <img
          src={imgAuthor}
          alt="image-boss"
          className="w-8 h-8 rounded-md mt-1 ml-1.5"
          readOnly
        />
        <input
          className="mt-1.5 mr-1"
          type="text"
          placeholder="author"
          value={author}
          readOnly
        />
      </div>
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
};

export default ArticleForm;
