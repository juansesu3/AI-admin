import Layout from "@/components/Layout";
import Suggestion from "@/components/Suggestion";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Home = () => {
  const { data: session } = useSession();
  const conte =
    "w-full md:w-1/3 p-4 bg-inputColor flex flex-col items-center justify-between rounded-md shadow-lg";

  const [emails, setEmails] = useState([]);
  const [proyects, setProyects] = useState([]);
  const [technologies, settechnologies] = useState([]);


  useEffect(() => {
    axios.get("/api/emails").then((response) => {
      setEmails(response.data);
    });
    axios.get("/api/proyects").then((response) => {
      setProyects(response.data);
    });
    axios.get("/api/techstack").then((response) => {
      settechnologies(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="text-primary flex justify-between">
        <h2>
          {" "}
          <span className="text-white">Hi Mr,</span>
          <br /> <b>{session?.user?.name}</b>
        </h2>
        <div className="flex gap-1 text-white rounded-lg overflow-hidden">
          <img
            src={session?.user?.image}
            alt="image-boss"
            className="w-12 h-12 rounded-md"
          />
        </div>
      </div>
      <h1 className="text-white text-center mt-4">Principal info</h1>

      <div className="flex gap-2 flex-wrap justify-center mt-4">
       
        <div className={conte}>
          <h3 className="text-gray-400 font-medium">Emails</h3>

          <p className="text-primary text-4xl">{emails && emails.length}</p>
          <p className="text-gray-500 text-center">
            Last email from:
            <br /> {emails && emails[0]?.email}
          </p>
        </div>
        <div className={conte}>
          <h3 className="text-gray-400 font-medium">Job Application</h3>
          <p className="text-primary text-4xl">5</p>
          <p className="text-gray-500">your last job application</p>
        </div>
        <div className={conte}>
          <h3 className="text-gray-400 font-medium">Proyects</h3>
          <p className="text-primary text-4xl">{proyects && proyects.length}</p>
          <p className="text-gray-500">the most popular proyect</p>
        </div>
        <div className={conte}>
          <h3 className="text-gray-400 font-medium">TechStack</h3>
          <p className="text-primary text-4xl">{technologies && technologies.length}</p>
          <p className="text-gray-500">your favorite technology</p>
        </div>
      </div>
      <h2 className="text-center text-white font-medium text-xl mt-4">
        Contracts
      </h2>
      <div className="flex gap-4 flex-wrap justify-center mt-4">
        <div className="flex w-full justify-between gap-2 flex-col md:flex-row">
          <div className={conte}>
            <h3 className="text-gray-400 font-medium">Contracts</h3>
            <p className="text-primary text-4xl">1</p>
            <p className="text-gray-500">priority contract: finansupp</p>
          </div>
          <div className={conte}>
            <h3 className="text-gray-400 font-medium">Expenses</h3>
            <p className="text-primary text-4xl">200.00 €</p>
            <p className="text-gray-500">capacity: 75%</p>
          </div>
          <div className={conte}>
            <h3 className="text-gray-400 font-medium">Revenue</h3>
            <p className="text-primary text-4xl">600.00 €</p>
            <p className="text-gray-500">last week: 300.00 €</p>
          </div>
          <div className={conte}>
            <h3 className="text-gray-400 font-medium">Profit</h3>
            <p className="text-primary text-4xl">400.00 €</p>
            <p className="text-gray-500 ">last week: $2000</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
