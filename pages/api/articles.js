import { mongooseConnect } from "@/lib/mongoose";
import { Article } from "@/models/Articles";

const handle = async (req, res) => {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const { title, summary, content, author, imgAuthor } = req.body;
    const articleDoc = await Article.create({
      title,
      summary,
      content,
      author,
      imgAuthor,
    });
    res.json(articleDoc);
  }
};

export default handle;
