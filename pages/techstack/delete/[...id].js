import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DeleteTechPage = () => {
  const router = useRouter();
  const [techInfo, setTechInfo] = useState(null);

  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/techstack?id=" + id).then((response) => {
      setTechInfo(response.data);
    });
  }, [id]);

  const goBack = () => {
    router.push("/techstack");
  };

  const deleteTechnology = async () => {
    await axios.delete("/api/techstack?id=" + id);
    goBack();
  };

  return (
    <Layout>
      <h1 className="text-center">
        Do you really want to delete&nbsp;&quot;{techInfo?.name}&quot;
        technology?
      </h1>
      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={deleteTechnology}>
          Yes
        </button>
        <button className="btn-default" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  );
};

export default DeleteTechPage;
