import { mongooseConnect } from "@/lib/mongoose";
import { CategoryArticle } from "@/models/CategoryArticle";

const handle = async (req, res) => {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await CategoryArticle.find());
  }

  if (method === "POST") {
    const { name } = req.body;
    const categoryArticleDoc = await CategoryArticle.create({ name });
    res.json(categoryArticleDoc);
  }
};

export default handle;
