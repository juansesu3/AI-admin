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
      for (const edu of response?.data?.education) {
        let cleanDate = edu.gotDate
          .split("T")
          .shift()
          .replaceAll("-", "/")
          .split("/");

        let y = cleanDate[0];
        let m = cleanDate[1];
        let d = cleanDate[2];
        const orderDate = `${m}/${d}/${y}`;
        response.data.education[0].gotDate = orderDate;
      }
      for (const exp of response?.data?.experinces) {
        let cleanDate = exp.endDateExp

          .split("T")
          .shift()
          .replaceAll("-", "/")
          .split("/");

        let y = cleanDate[0];
        let m = cleanDate[1];
        let d = cleanDate[2];
        const orderDate = `${m}/${d}/${y}`;
        response.data.experinces[0].endDateExp = orderDate;
      }
      for (const exp of response?.data?.experinces) {
        let cleanDate = exp.startDateExp

          .split("T")
          .shift()
          .replaceAll("-", "/")
          .split("/");

        let y = cleanDate[0];
        let m = cleanDate[1];
        let d = cleanDate[2];
        const orderDate = `${m}/${d}/${y}`;
        response.data.experinces[0].startDateExp = orderDate;
      }

      setProfoileInfo(response.data);
      console.log(profoileInfo);
    });
  }, [id]);

  return (
    <Layout>
      <h1>Edit Profile</h1>
      {profoileInfo && <ProfileForm {...profoileInfo} />}
    </Layout>
  );
};

export default EditProfilePage;
