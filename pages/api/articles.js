import { mongooseConnect } from "@/lib/mongoose";
import { Article } from "@/models/Articles";

const handle = async (req, res) => {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Article.findOne({ _id: req.query.id }));
    } else {
      res.json(await Article.find());
    }
  }

  if (method === "POST") {
    const { title, summary, content, author, imgAuthor, images, articleCat } =
      req.body;
    const articleDoc = await Article.create({
      title,
      summary,
      content,
      author,
      imgAuthor,
      images,
      articleCat,
    });
    res.json(articleDoc);
  }
  if (method === "PUT") {
    const {
      title,
      summary,
      content,
      author,
      imgAuthor,
      images,
      articleCat,
      _id,
    } = req.body;
    await Article.updateOne(
      { _id },
      { title, summary, content, author, imgAuthor, images, articleCat }
    );
    res.json(true);
  }
  if (method === "DELETE") {
    if (req.query?.id) {
      await Article.deleteOne({ _id: req.query.id });
      res.json(true);
    }
  }
};

export default handle;
