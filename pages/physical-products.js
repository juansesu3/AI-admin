import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FisicalProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/physicalProducts").then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="flex gap-4">
        <Link className="btn-primary" href={"/physical-product/new"}>
          Add New Products
        </Link>
      </div>
      <div className="mt-4">
        <h1 className="text-center font-semibold text-2xl text-white">
          Products<span className="text-[#0070e2]"> Stock</span>
        </h1>
      </div>
      <div>
        <h2 className="text-center">Best selling products</h2>
        <div>
          <p className="text-[#0070e2] font-light">Version.alpha.1.1</p>
          <p className="text-white font-medium">Name 3</p>
          <p className="text-gray-300/50 font-medium">Slogan here!</p>
        </div>
        <div className="md:w-72  h-52 shadow-md mb-6">
          <img
            className=" h-full rounded-md shadow-md"
            src="https://placehold.co/600x400/000000/FFFFFF/png"
          />
        </div>
      </div>
      <div className="w-full h-px bg-gray-300 my-4" />
      <div className="flex flex-col justify-center gap-4">
        {products?.length > 0 &&
          products.map((product) => (
            <div key={product._id}>
              <div className="flex gap-2 items-start">
                <div className="w-16 h-full shadow-md ">
                  <img
                    className="w-full rounded-xl shadow-lg"
                    src={product?.images[0]}
                  />
                </div>

                <div className="w-full">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <h2 className="text-white/90 text-md m-0">
                        {product.name}
                      </h2>
                      <p className="text-white/40 text-md m-0">
                        Planer, Erinnerrung
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-end gap-1">
                      <Link
                        href={"/physical-product/edit/" + product._id}
                        className="flex justify-center bg-white/10 text-sm w-full text-[#0070e2] px-4 py-0 rounded-lg font-medium"
                      >
                        Edit
                      </Link>
                      <Link
                        href={"/physical-product/delete/" + product._id}
                        className="flex justify-center bg-red-500 text-sm w-full text-white px-4 py-0 rounded-lg font-medium"
                      >
                        Delete
                      </Link>
                      <p className="text-sm text-white/40">
                        Stock:{" "}
                        <span className="text-[#0070e2]"> {product.stock}</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-300 mt-2" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default FisicalProductsPage;
