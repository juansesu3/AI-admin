import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DeleteProyectPage = () => {
  const router = useRouter();
  const [proyectInfo, setProyectInfo] = useState(null);

  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/proyects?id=" + id).then((response) => {
      setProyectInfo(response.data);
    });
  }, [id]);

  const goBack = () => {
    router.push("/proyects");
  };

  const deleteProduct = async () => {
    await axios.delete("/api/proyects?id=" + id);
    goBack();
  };

  return (
    <Layout>
      <h1 className="text-center">
        Do you really want to delete&nbsp;&quot;{proyectInfo?.title}&quot;
        proyect?
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

export default DeleteProyectPage;
