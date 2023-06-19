import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const TechStack = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    axios.get("/api/techstack").then((response) => {
      setTechnologies(response.data);
    });
  }, []);

  console.log(technologies);

  return (
    <Layout>
      <h1>Technologies Stack</h1>

      <Link
        className="bg-blue-900 text-white py-1 px-2 rounded-lg"
        href={"/techstack/new"}
      >
        Add new Technology
      </Link>
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Technology name</td>
            <td>Icon</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default TechStack;
