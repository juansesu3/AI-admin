import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const StorePage = () => {
  return (
    <>
      <Layout>
        <div className="flex gap-4">
          <Link className="btn-primary p-10" href={"/digital-products"}>
            Digital Products
          </Link>
          <Link className="btn-primary" href={"/physical-products"}>
            Fisical Products
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default StorePage;
