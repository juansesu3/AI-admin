import Layout from "@/components/Layout";
import TechForm from "@/components/TechForm";
import React from "react";

const newTechnology = () => {
  return (
    <Layout>
      <h1 className="text-primary">New Tech</h1>
      <TechForm />
    </Layout>
  );
};

export default newTechnology;

/*import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";

const TechStack = () => {
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [goToProyects, setGoToProyects] = useState(false);
  const [docLink, setDocLink] = useState("");

  const router = useRouter();

  //Save technologi
  const saveTechnology = async (ev) => {
    ev.preventDefault();
    const dataTech = { name, docLink, images };
    await axios.post("/api/techstack", dataTech);
    setName("");
    setDocLink("");
    setImages([]);
    setGoToProyects(true);
  };

  if (goToProyects) {
    //use router
    router.push("/techstack");
  }

  //Upload images function
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

  return (
    <Layout>
      <h1>Technologies Stack</h1>

      <form onSubmit={saveTechnology} className="flex flex-col gap-1">
        <label>New technology name</label>
        <input
          className="mb-0"
          type="text"
          placeholder="Technology name"
          onChange={(ev) => setName(ev.target.value)}
          value={name}
        />
        <label>Photos</label>
        <div className="mb-2 flex flex-wrap gap-1">
          <ReactSortable
            list={images}
            className="flex flex-wrap gap-1"
            setList={updateImagesOrder}
          >
            {!!images?.length &&
              images.map((link) => (
                <div key={link} className=" h-24">
                  <img src={link} alt="image-proyect" className="rounded-lg" />
                </div>
              ))}
          </ReactSortable>
          {isUploading && (
            <div className="h-24 flex items-center ">
              <Spinner />
            </div>
          )}
          <label className=" w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-gray-500 rounded-lg bg-gray-200">
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
            <div>Upload</div>
            <input type="file" onChange={uploadImages} className="hidden" />
          </label>
        </div>
        <label>Documentation link</label>
        <input
          className="mb-0"
          type="text"
          placeholder="link to docs"
          onChange={(ev) => setDocLink(ev.target.value)}
          value={docLink}
        />
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
};

export default TechStack;*/
