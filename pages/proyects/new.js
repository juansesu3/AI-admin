import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";

import { useState } from "react";

const NewProduct = () => {
  //states to storage my data proyect
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [linkCode, setLinkCode] = useState("");
  const [linkDeploy, setLinkDeploy] = useState("");

  //back to proyects after created a new one
  const [goToProyects, setGoToProyects] = useState(false);

  //hook from  next/router
  const router = useRouter();

  //async arrow function to create a new proyect our database
  const createProduct = async (ev) => {
    ev.preventDefault();
    const data = { title, description, linkCode, linkDeploy };
    await axios.post("/api/proyects", data);
    setGoToProyects(true);
  };

  if (goToProyects) {
    //use router
    router.push("/proyects");
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Proyect</h1>
        <label>Proyect name</label>
        <input
          type="text"
          placeholder="proyect name"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
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
    </Layout>
  );
};

export default NewProduct;
