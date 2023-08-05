import Layout from "@/components/Layout";
import ProyectForm from "@/components/ProyectForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditProyectPage = () => {
  const [proyectInfo, setProyectInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/proyects?id=" + id).then((response) => {
      setProyectInfo(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1 className="text-primary">Edit proyect</h1>
      {proyectInfo && <ProyectForm {...proyectInfo} />}
    </Layout>
  );
};

export default EditProyectPage;
