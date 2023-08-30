import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const JobsApplicationForm = () => {
  const [company, setCompany] = useState("");
  const [jobName, setJobName] = useState("");
  const [requirements, setRequirements] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobContacts, setJobContacts] = useState("");
  const [jobtype, setJobType] = useState("");
  //back to proyects after created a new one
  const [goToJobs, setGoToJobs] = useState(false);
  const router = useRouter();

  const jobTypes = [
    {
      id_: Number("01"),
      name: "Remote",
      code: "RMT",
    },
    { id_: Number("02"), name: "Hybrid", code: "HYD" },
    { id_: Number("03"), name: "On-Site", code: "O-S-t" },
  ];

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const data = {
      company,
      jobName,
      requirements,
      jobDescription,
      jobContacts,
      jobtype,
    };

    await axios.post("/api/jobApplication", data);

    setGoToJobs(true);
  };

  if (goToJobs) {
    //use router
    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={company}
        onChange={(ev) => setCompany(ev.target.value)}
        placeholder="company"
      />
      <input
        type="text"
        value={jobName}
        onChange={(ev) => setJobName(ev.target.value)}
        placeholder="job name"
      />

      <select value={jobtype} onChange={(ev) => setJobType(ev.target.value)}>
        <option value="">Uncategorized</option>
        {jobTypes.length > 0 &&
          jobTypes.map((jobtype) => (
            <option key={jobtype._id} value={jobtype._id}>
              {jobtype.name}
            </option>
          ))}
      </select>

      <input
        type="text"
        value={requirements}
        onChange={(ev) => setRequirements(ev.target.value)}
        placeholder="requirements: (req1, req2, req3...)"
      />
      <input
        type="text"
        value={jobDescription}
        onChange={(ev) => setJobDescription(ev.target.value)}
        placeholder="job description"
      />
      <input
        type="text"
        value={jobContacts}
        onChange={(ev) => setJobContacts(ev.target.value)}
        placeholder="contact: (cnct1, cnct2, cnct3)"
      />

      <button className="btn-primary" type="submit">
        Create Job Applicarion
      </button>
    </form>
  );
};

export default JobsApplicationForm;
