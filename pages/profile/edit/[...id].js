import Layout from "@/components/Layout";
import ProfileForm from "@/components/ProfileForm";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EditProfilePage = () => {
  const [profoileInfo, setProfoileInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/profiles?id=" + id).then((response) => {
      setProfoileInfo(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1 className="text-primary">Edit Profile</h1>
      {profoileInfo && <ProfileForm {...profoileInfo} />}
    </Layout>
  );
};

export default EditProfilePage;
