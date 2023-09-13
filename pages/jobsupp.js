import Layout from "@/components/Layout";
import axios from "axios";
import { subHours } from "date-fns";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [state, setState] = useState("");

  const states = [
    {
      name: "Hot",
      color: "LawnGreen",
    },
    {
      name: "Alive",
      color: "orange",
    },
    {
      name: "Cold",
      color: "DodgerBlue",
    },
    {
      name: "Zombie",
      color: "DarkMagenta",
    },
  ];
  useEffect(() => {
    axios.get("/api/jobApplication").then((response) => {
      setJobs(response.data);
    });
  }, []);

  return (
    <Layout>
      <Link className="btn-primary " href={"/jobs/new"}>
        Add job Application
      </Link>
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Job Name</td>
            <td>State</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0 &&
            jobs.map((job) => {
              let stateColor = "#3dff2b"; // Initialize stateColor for each job
              if (new Date(job.createdAt) > subHours(new Date(), 24 * 7)) {
                stateColor = states[0].color;
              } else if (
                new Date(job.createdAt) > subHours(new Date(), 24 * 15)
              ) {
                stateColor = states[1].color;
              } else if (
                new Date(job.createdAt) > subHours(new Date(), 24 * 20)
              ) {
                stateColor = states[2].color;
              } else if (
                new Date(job.createdAt) > subHours(new Date(), 24 * 30)
              ) {
                stateColor = states[3].color;
              }

              return (
                <tr key={job._id}>
                  <td>{job.jobName}</td>
                  <td className="flex flex-row items-center justify-start my-4 gap-1 p-0">
                    <div
                      className="w-4 h-4 shadow-md  border-0  rounded-full"
                      style={{ backgroundColor: stateColor }}
                    />
                    {job.seconState === "interview" && (
                      <div
                        className="w-4 h-4 shadow-md  border-0  rounded-full"
                        style={{ backgroundColor: "#ffc42e" }}
                      />
                    )}
                    {job.seconState === "hired" && (
                      <div
                        className="w-4 h-4 shadow-md  border-0  rounded-full"
                        style={{ backgroundColor: "LawnGreen" }}
                      />
                    )}
                    {job.seconState === "hedShot" && (
                      <div
                        className="w-4 h-4 shadow-md  border-0  rounded-full"
                        style={{ backgroundColor: "red" }}
                      />
                    )}
                  </td>
                  <td>
                    <Link
                      href={"/jobs/view/" + job._id}
                      className="btn-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Layout>
  );
};

export default JobsPage;
