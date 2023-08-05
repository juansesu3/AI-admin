import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DeleteProyectPage = () => {
  const router = useRouter();
  const [articleInfo, setArticlesInfo] = useState(null);

  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/articles?id=" + id).then((response) => {
        setArticlesInfo(response.data);
    });
  }, [id]);

  const goBack = () => {
    router.push("/articles");
  };

  const deleteArticles = async () => {
    await axios.delete("/api/articles?id=" + id);
    goBack();
  };

  return (
    <Layout>
      <h1 className="text-center text-primary">
        Do you really want to delete&nbsp;&quot;{articleInfo?.title}&quot;
        article?
      </h1>
      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={deleteArticles}>
          Yes
        </button>
        <button className="btn-default" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  );
};

export default DeleteProyectPage;
