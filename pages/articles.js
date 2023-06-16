import Layout from "@/components/Layout";
import Link from "next/link";

const Articles = () => {
  return (
    <Layout>
      <Link className="bg-blue-900 text-white py-1 px-2 rounded-md"  href={'/articles/new'}>Add new article</Link>
    </Layout>
  );
};

export default Articles;
