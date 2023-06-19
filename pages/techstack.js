import Layout from "@/components/Layout";
import Link from "next/link";

const TechStack = () => {
  return (
    <Layout>
      <h1>Technologies Stack</h1>

      <Link
        className="bg-blue-900 text-white py-1 px-2 rounded-lg"
        href={"/techstack/new"}
      >
        Add new Technology
      </Link>
    </Layout>
  );
};

export default TechStack;
