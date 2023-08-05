import ArticleForm from "@/components/ArticleForm";
import Layout from "@/components/Layout";

const NewArticle = () => {
  return (
    <Layout>
      <h1 className="text-primary">New article</h1>
      <ArticleForm />
    </Layout>
  );
};

export default NewArticle;
