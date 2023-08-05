import ArticleForm from "@/components/ArticleForm";
import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get("/api/articles?id=" + id).then((response) => {
      setArticleInfo(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1 className="text-primary">Edit article</h1>
      {articleInfo && <ArticleForm {...articleInfo} />}
    </Layout>
  );
};

export default EditArticlePage;
