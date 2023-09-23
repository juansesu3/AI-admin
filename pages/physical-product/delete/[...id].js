import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DeletePhysicalProductPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/physicalProducts?id=" + id).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  const goBack = () => {
    router.push("/physical-products");
  };

  const deleteProduct = async () => {
    await axios.delete("/api/physicalProducts?id=" + id);
    goBack();
  };
  return (
    <Layout>
      {" "}
      <h1 className="text-center text-white">
        Do you really want to delete&nbsp;&quot;
        <span className="text-primary">{product?.name}</span>&quot; physical
        product?
      </h1>
      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={deleteProduct}>
          Yes
        </button>
        <button className="btn-default" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  );
};

export default DeletePhysicalProductPage;
