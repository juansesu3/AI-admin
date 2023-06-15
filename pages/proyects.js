import Layout from "@/components/Layout";
import Link from "next/link";

const Proyects = () => {
  return (
    <Layout>
      <Link
        className="bg-blue-900 text-white py-1 px-2 rounded-lg"
        href={"/proyects/new"}
      >
        Add new proyect
      </Link>
    </Layout>
  );
};

export default Proyects;
