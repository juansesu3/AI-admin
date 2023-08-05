import Layout from "@/components/Layout";
import ProyectForm from "@/components/ProyectForm";
import axios from "axios";
import { useRouter } from "next/router";

import { useState } from "react";

const NewProduct = () => {
  return (
    <Layout>
      <h1 className="text-primary">New proyect</h1>
      <ProyectForm />
    </Layout>
  );
};

export default NewProduct;
