import { mongooseConnect } from "@/lib/mongoose";
import { CategoryArticle } from "@/models/CategoryArticle";

const handle = async (req, res) => {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await CategoryArticle.find().populate("parent"));
  }

  if (method === "POST") {
    const { name, parentArticleCategory } = req.body;
    const categoryArticleDoc = await CategoryArticle.create({
      name,
      parent: parentArticleCategory,
    });
    res.json(categoryArticleDoc);
  }

  if (method === "PUT") {
    const { name, parentArticleCategory, _id } = req.body;
    const categoryArticleDoc = await CategoryArticle.updateOne(
      { _id },
      {
        name,
        parent: parentArticleCategory,
      }
    );
    res.json(categoryArticleDoc);
  }

  if (method === "DELETE"){
    const {_id} = req.query;
    await CategoryArticle.deleteOne({_id});
    res.json('ok');

  }
};

export default handle;
