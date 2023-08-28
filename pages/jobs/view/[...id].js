import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ViewJob = () => {
  const [job, setJob] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/jobApplication?id=" + id).then((response) => {
      setJob(response.data);
    });
  }, [id]);
  console.log(job);
  return (
    <Layout>
      <div>
        <h1 className="text-center text-primary">My job Application</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="m-0 font-medium text-gray-500">Job Name</h2>
          <span className="rounded-md shadow-md font-medium  p-4 bg-tableBg text-white text-center">
            {job?.jobName}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="m-0 font-medium text-gray-500">Company</h2>
          <span className="rounded-md shadow-md p-4 font-medium bg-tableBg text-primary text-center">
            {job?.company}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="m-0 font-medium text-gray-500">Requirements</h2>
          <span className="flex flex-wrap justify-around items-center gap-2 rounded-md shadow-md p-4 bg-tableBg text-white text-center">
            {job?.requirements.split(",").length > 0 &&
              job?.requirements.split(",").map((jobreq) => (
                <div
                  className="bg-bgGray  px-4 py-2 text-xl  rounded-sm text-primary shadow-md"
                  key={jobreq}
                >
                  {jobreq}
                </div>
              ))}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="m-0 font-medium text-gray-500">Job Description</h2>
          <span className="rounded-md shadow-md p-4 bg-tableBg text-white text-center">
            {job?.jobDescription}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="m-0 font-medium text-gray-500">Job Contacts</h2>
          <span className="flex flex-col gap-2 rounded-md shadow-md p-4 bg-tableBg text-white text-center">
            {job?.jobContacts.split(",").length > 0 &&
              job?.jobContacts.split(",").map((jobcont) => (
                <div
                  className="bg-bgGray  px-4 py-2 text-xl rounded-sm text-primary shadow-md"
                  key={jobcont}
                >
                  {jobcont}
                </div>
              ))}
          </span>
        </div>
        <div className="flex flex-row gap-2 justify-center">
          <button className="bg-[#FFC42E]  animate-bright-glow px-4 py-2  rounded-md text-gray-100 font-medium">
            Interview
          </button>
          <button className="bg-green-500 animate-bright-glow px-4 py-2 rounded-md text-gray-100 font-medium">
            Was Hired
          </button>
          <button className="bg-red-500 animate-bright-glow px-4 py-2 rounded-md text-gray-100 font-medium">
            Head Shot
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ViewJob;
