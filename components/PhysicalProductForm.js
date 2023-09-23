import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Spinner from "./Spinner";
import { useRouter } from "next/router";
import axios from "axios";

const PhysicalProductForm = ({
  _id,
  name: existingName,
  description: existingDescription,
  price: existingPrice,
  images: existingImage,
  stock: existingStock,
}) => {
  const [name, setName] = useState(existingName || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [images, setImages] = useState(existingImage || []);
  const [stock, setStock] = useState(existingStock || "");
  const [isUploading, setIsUploading] = useState(false);
  const [goToFisicalProducts, setGoToFisicalProducts] = useState(false);

  //hook from  next/router
  const router = useRouter();

  const uploadImages = async (ev) => {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  };
  const updateImagesOrder = (images) => {
    setImages(images);
  };

  const createProduct = async (ev) => {
    ev.preventDefault();
    const data = {
      name,
      description,
      price,
      images,
      stock,
    };

    if (_id) {
      await axios.put("/api/physicalProducts", { ...data, _id });
    } else {
      await axios.post("/api/physicalProducts", data);
    }
    setGoToFisicalProducts(true);
  };
  if (goToFisicalProducts) {
    router.push("/physical-products");
  }

  return (
    <>
      <form onSubmit={createProduct}>
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />

        <label>Category</label>
        <input type="text" placeholder="category" />

        <label>Images</label>
        <div className="mb-2 flex flex-wrap gap-1">
          <ReactSortable
            list={images}
            className="flex flex-wrap gap-1"
            setList={updateImagesOrder}
          >
            {!!images?.length &&
              images.map((link) => (
                <div
                  key={link}
                  className=" h-24 bg-white p-2 shadow-sm rounded-lg border border-gray-100"
                >
                  <img src={link} alt="image-proyect" className="rounded-lg" />
                </div>
              ))}
          </ReactSortable>
          {isUploading && (
            <div className="h-24 flex items-center ">
              <Spinner />
            </div>
          )}
          <label className=" w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-lg bg-white shadow-sm border border-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <div>Add image</div>
            <input type="file" onChange={uploadImages} className="hidden" />
          </label>
        </div>

        <label>Description</label>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />

        <label>Price</label>
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(ev) => setPrice(+ev.target.value)}
        />

        <label>Stock</label>
        <input
          type="number"
          placeholder="stock"
          value={stock}
          onChange={(ev) => setStock(ev.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
};

export default PhysicalProductForm;
