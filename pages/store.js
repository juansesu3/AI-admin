import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const StorePage = () => {
  return (
    <>
      <Layout>
        <div className="flex gap-4 flex-col">
          <Link
            className="transition duration-300 ease-in-out bg-[#8f8f8f1c] hover:bg-primary p-10 text-center text-xl text-primary hover:text-white font-semibold shadow-md rounded-md"
            href={"/digital-products"}
          >
            Digital Products
          </Link>
          <Link
            className="transition duration-300 ease-in-out bg-[#8f8f8f1c] hover:bg-primary p-10 text-center text-xl text-primary  hover:text-white font-semibold shadow-md rounded-md"
            href={"/physical-products"}
          >
            Physical Products
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default StorePage;
