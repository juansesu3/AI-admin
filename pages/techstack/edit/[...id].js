import Layout from "@/components/Layout";
import TechForm from "@/components/TechForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditTechPage = () => {
  const [techInfo, setTechInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/techstack?id=" + id).then((response) => {
      setTechInfo(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1 className="text-primary">Edit technology</h1>
      {techInfo && <TechForm {...techInfo} />}
    </Layout>
  );
};

export default EditTechPage;
