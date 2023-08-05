import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

const ProyectForm = ({
  _id,
  title: existingTitle,
  description: existingDescription,
  selectedTech: existingSelectedTech,
  linkCode: existingLinkCode,
  linkDeploy: existingLinkDeploy,
  images: existingImages,
  about: existingAbout,
  client: existingClient,
  service: existingService,
  proyectType: existingProyectType,
  releaseDate: existingReleaseDate,
}) => {
  //states to storage my data proyect
  const [title, setTitle] = useState(existingTitle || "");

  //new feature
  const [about, setAbout] = useState(existingAbout || "");
  const [client, setClient] = useState(existingClient || "");
  const [service, setService] = useState(existingService || "");
  const [proyectType, setProyectType] = useState(existingProyectType || "");
  //

  const [description, setDescription] = useState(existingDescription || "");
  const [releaseDate, setReleaseDate] = useState(existingReleaseDate || "");
  const [linkCode, setLinkCode] = useState(existingLinkCode || "");
  const [linkDeploy, setLinkDeploy] = useState(existingLinkDeploy || "");
  const [images, setImages] = useState(existingImages || []);

  //technologies come from our DB
  const [technologies, setTechnologies] = useState([]);

  // Selected  Technologies
  const [selectedTech, setSelectedTech] = useState(existingSelectedTech || []);

  //back to proyects after created a new one
  const [goToProyects, setGoToProyects] = useState(false);

  const [isUploading, setIsUploading] = useState(false);

  //hook from  next/router
  const router = useRouter();

  useEffect(() => {
    axios.get("/api/techstack").then((response) => {
      setTechnologies(response.data);
    });
  }, []);

  //async arrow function to create a new proyect our database
  const saveProyect = async (ev) => {
    ev.preventDefault();
    const data = {
      title,
      about,
      description,
      client,
      service,
      proyectType,
      selectedTech,
      releaseDate,
      linkCode,
      linkDeploy,
      images,
    };

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

  const handleCheckBoxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedTech((prev) => [...prev, value]);
    } else {
      setSelectedTech((prev) => prev.filter((item) => item !== value));
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
      <label className="">Proyect about</label>
      <textarea
        placeholder="proyect about"
        value={about}
        onChange={(ev) => setAbout(ev.target.value)}
      ></textarea>
      <label>Photos</label>
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
              >{console.log(link)}
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
      <label>Proyect description</label>
      <textarea
        placeholder="proyect description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      ></textarea>
      <label>Client</label>
      <input
        type="text"
        placeholder="client"
        value={client}
        onChange={(ev) => setClient(ev.target.value)}
      />
      <label>Service</label>
      <input
        type="text"
        placeholder="Service"
        value={service}
        onChange={(ev) => setService(ev.target.value)}
      />
      <label>Proyect</label>
      <input
        type="text"
        placeholder="Dynamic or Static"
        value={proyectType}
        onChange={(ev) => setProyectType(ev.target.value)}
      />

      <label>Stack of technologies</label>
      <div className="flex flex-wrap gap-4 mb-2">
        {technologies.length > 0 &&
          technologies.map((t) => (
            <label className="flex gap-1" key={t._id}>
              <input
                className="mb-0"
                type="checkbox"
                id={t._id}
                value={t._id}
                checked={selectedTech.includes(t._id)}
                onChange={handleCheckBoxChange}
              />
              {t.name}
            </label>
          ))}
      </div>
      <label>Release date</label>
      <input
        type="text"
        placeholder="format(MM/DD/YYYY)"
        value={releaseDate}
        onChange={(ev) => setReleaseDate(ev.target.value)}
      />

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
