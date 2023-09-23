import Layout from "@/components/Layout";
import React from "react";

const digitalProducts = () => {
  return (
    <Layout>
      <div className="mt-4">
        <h1 className="text-center font-semibold text-2xl text-white">
          App<span className="text-[#0070e2]"> Stock</span>
        </h1>
      </div>
      <div>
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
        <div className="flex gap-2">
          <div className="w-16 shadow-lg">
            <img
              className="w-full rounded-xl shadow-lg"
              src="https://placehold.co/400"
            />
          </div>

          <div className="w-full">
            <div className="flex justify-between mb-2">
              <div className="flex flex-col">
                <h2 className="text-white/90 text-md m-0">Focus - Name</h2>
                <p className="text-white/40 text-md m-0">Planer, Erinnerrung</p>
              </div>

              <div className="flex flex-col items-center justify-end">
                <button className="bg-white/10 text-sm  text-[#0070e2] px-4 py-0 rounded-xl font-medium">
                  VIEW
                </button>
                <p className="text-xs text-white/40">some test!</p>
              </div>
            </div>
            <div className="w-full h-px bg-gray-300 " />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-16 shadow-lg">
            <img
              className="w-full rounded-xl shadow-lg"
              src="https://placehold.co/400"
            />
          </div>

          <div className="w-full">
            <div className="flex justify-between mb-2">
              <div className="flex flex-col">
                <h2 className="text-white/90 text-md m-0">Focus - Name</h2>
                <p className="text-white/40 text-md m-0">Planer, Erinnerrung</p>
              </div>

              <div className="flex flex-col items-center justify-end">
                <button className="bg-white/10 text-sm  text-[#0070e2] px-4 py-0 rounded-xl font-medium">
                  VIEW
                </button>
                <p className="text-xs text-white/40">some test!</p>
              </div>
            </div>
            <div className="w-full h-px bg-gray-300 " />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-16 shadow-lg">
            <img
              className="w-full rounded-xl shadow-lg"
              src="https://placehold.co/400"
            />
          </div>

          <div className="w-full">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h2 className="text-white/90 text-md m-0">Focus - Name</h2>
                <p className="text-white/40 text-md m-0">Planer, Erinnerrung</p>
              </div>

              <div className="flex flex-col items-center justify-end">
                <button className="bg-white/10 text-sm  text-[#0070e2] px-4 py-0 rounded-xl font-medium">
                  VIEW
                </button>
                <p className="text-xs text-white/40">some test!</p>
              </div>
            </div>
            <div className="w-full h-px bg-gray-300 " />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default digitalProducts;
