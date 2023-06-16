import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const ProyectForm = ({
  _id,
  title: existingTitle,
  description: existingDescription,
  linkCode: existingLinkCode,
  linkDeploy: existingLinkDeploy,
  images: existingImages,
}) => {
  //states to storage my data proyect
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [linkCode, setLinkCode] = useState(existingLinkCode || "");
  const [linkDeploy, setLinkDeploy] = useState(existingLinkDeploy || "");
  const [images, setImages] = useState(existingImages || []);

  //back to proyects after created a new one
  const [goToProyects, setGoToProyects] = useState(false);

  //hook from  next/router
  const router = useRouter();

  //async arrow function to create a new proyect our database
  const saveProyect = async (ev) => {
    ev.preventDefault();
    const data = { title, description, linkCode, linkDeploy, images };

    if (_id) {
      //update
      await axios.put("/api/proyects", { ...data, _id });
    } else {
      //create
      await axios.post("/api/proyects", data);
    }
    setGoToProyects(true);
  };

  if (goToProyects) {
    //use router
    router.push("/proyects");
  }

  const uploadImages = async (ev) => {
    const files = ev.target?.files;
    if (files.length > 0) {
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
    }
  };

  return (
    <form onSubmit={saveProyect}>
      <label>Proyect name</label>
      <input
        type="text"
        placeholder="proyect name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <label>Photos</label>
      <div className="mb-2 flex flex-wrap gap-2">
        {!!images?.length && images.map((link) => (
        <div key={link} className=" h-24">
          <img src={link} alt="image-proyect" className="rounded-lg"/>
        </div>
        ))}
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
        {!images?.length && <div>No photos in this proyect</div>}
      </div>
      <label>Proyect description</label>
      <textarea
        placeholder="proyect description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      ></textarea>
      <label>Link code</label>
      <input
        type="text"
        placeholder="link code (GitHub)"
        value={linkCode}
        onChange={(ev) => setLinkCode(ev.target.value)}
      />
      <label>Link deploy</label>
      <input
        type="text"
        placeholder="link deploy"
        value={linkDeploy}
        onChange={(ev) => setLinkDeploy(ev.target.value)}
      />
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
};

export default ProyectForm;
