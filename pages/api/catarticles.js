import { mongooseConnect } from "@/lib/mongoose";
import { CategoryArticle } from "@/models/CategoryArticle";
import { isAdminRequest } from "./auth/[...nextauth]";

const handle = async (req, res) => {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
    res.json(await CategoryArticle.find().populate("parent"));
  }

  if (method === "POST") {
    const { name, parentArticleCategory, topics } = req.body;
    const categoryArticleDoc = await CategoryArticle.create({
      name,
      parent: parentArticleCategory || undefined,
      topics,
    });
    res.json(categoryArticleDoc);
  }

  if (method === "PUT") {
    const { name, parentArticleCategory, topics, _id } = req.body;
    const categoryArticleDoc = await CategoryArticle.updateOne(
      { _id },
      {
        name,
        parent: parentArticleCategory || undefined,
        topics,
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
