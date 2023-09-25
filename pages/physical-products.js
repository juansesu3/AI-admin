import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FisicalProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  useEffect(() => {
    setIsUploading(true);
    axios.get("/api/physicalProducts").then((response) => {
      setProducts(response.data);
      console.log(response.data);
      setIsUploading(false);
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

      <div className="w-full h-px bg-gray-300 my-4" />
      <div className="flex flex-col justify-center gap-4">
        {isUploading && (
          <div className="h-24 flex items-center m-auto">
            <Spinner />
          </div>
        )}
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
                        className="flex justify-center bg-white/10 text-sm w-full text-[#0070e2] px-4 py-1 rounded-lg font-medium"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </Link>
                      <Link
                        href={"/physical-product/delete/" + product._id}
                        className="flex justify-center bg-red-500 text-sm w-full text-white px-4 py-1 rounded-lg font-medium"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
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
