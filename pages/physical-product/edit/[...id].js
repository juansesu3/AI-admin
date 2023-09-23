import Layout from "@/components/Layout";
import PhysicalProductForm from "@/components/PhysicalProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EditPhysicalProductPage = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/physicalProducts?id=" + id).then((response) => {
      setProduct(response.data);
      console.log(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1 className="text-primary font-semibold">
        Edit <span className="text-white">Physical</span> Product
      </h1>
      {product && <PhysicalProductForm {...product} />}
    </Layout>
  );
};

export default EditPhysicalProductPage;
