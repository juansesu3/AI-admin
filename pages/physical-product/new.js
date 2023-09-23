import Layout from "@/components/Layout";
import PhysicalProductForm from "@/components/PhysicalProductForm";
import React from "react";

const NewPhysicalProductPage = () => {
  return (
    <Layout>
      <h1 className="text-primary font-semibold">
        New <span className="text-white">Physical</span> Product
      </h1>
      <PhysicalProductForm />
    </Layout>
  );
};

export default NewPhysicalProductPage;
