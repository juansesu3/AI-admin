import Layout from "@/components/Layout";
import ProfileForm from "@/components/ProfileForm";
import React from "react";

const NewProfile = () => {
  return (
    <Layout>
      <h1 className="text-primary">New Profile</h1>
      <ProfileForm />
    </Layout>
  );
};

export default NewProfile;
