import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ProfilePage = () => {
  const { data } = useSession();

  const [name, setName] = useState(data?.user.name);

  const [greeting, setGreeting] = useState("");
  const [shortIntro, setShortIntro] = useState("");
  const [introYourSelf, setIntroYourSelf] = useState();

  //Start array experiences
  const [experinces, setExperinces] = useState([]);
  const [startDateExp, setStartDateExp] = useState(new Date());
  const [endDateExp, setEndDateExp] = useState(new Date());
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [urlCompany, setUrlCompany] = useState("");
  const [roldescription, setRolDescription] = useState("");
  //End array experiences

  //Start array education
  const [education, setEducation] = useState([]);
  const [startDateEdu, setStartDateEdu] = useState(null);
  //End array education

  const [languages, setLanguage] = useState([]);
  const [skills, setSkils] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const data = {
      name,
      greeting,
      shortIntro,
      introYourSelf,
      experinces,
      education,
      languages,
      skills,
    };
  };

  const addExperince = () => {
    const dataExp = {
      startDateExp: startDateExp,
      endDateExp: endDateExp,
      company: company,
      position: position,
      urlCompany: urlCompany,
      roldescription: roldescription,
    };

    setExperinces((prev) => {
      return [...prev, dataExp];
    });
  };

  const handleStartDateChange = (index, experince, date) => {
    setExperinces((prev) => {
      const experiences = [...prev];
      experiences[index].startDateExp = date;
      return experiences;
    });
  };
  const handleEndtDateChange = (index, experince, date) => {
    setExperinces((prev) => {
      const experiences = [...prev];
      experiences[index].endDateExp = date;
      return experiences;
    });
  };

  const handleCompanyChange = (index, experince, ev) => {
    setExperinces((prev) => {
      const experiences = [...prev];
      experiences[index].company = ev.target.value;
      return experiences;
    });
  };

  const handlePositionChange = (index, experince, ev) => {
    setExperinces((prev) => {
      const experiences = [...prev];
      experiences[index].position = ev.target.value;
      return experiences;
    });
  };
  const handleUrlComChange = (index, experince, ev) => {
    setExperinces((prev) => {
      const experiences = [...prev];
      experiences[index].urlCompany = ev.target.value;
      return experiences;
    });
  };
  const handleRolDescChange = (index, experince, ev) => {
    setExperinces((prev) => {
      const experiences = [...prev];
      experiences[index].roldescription = ev.target.value;
      return experiences;
    });
  };
  const removeExperinces = (indexToRemove) => {
    setExperinces((prev) => {
      return [...prev].filter((t, tIndex) => {
        return tIndex !== indexToRemove;
      });
    });
  };

  return (
    <Layout>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <input readOnly={true} value={name} />

        <input
          value={greeting}
          onChange={(ev) => setGreeting(ev.target.value)}
          type="text"
          placeholder="say hi!"
        />
        <textarea
          value={shortIntro}
          onChange={(ev) => setShortIntro(ev.target.value)}
          type="text"
          placeholder="Short introduction"
        ></textarea>
        <textarea
          value={introYourSelf}
          onChange={(ev) => setIntroYourSelf(ev.target.value)}
          type="text"
          placeholder="Introduce yourself"
        ></textarea>
        {/*Fecha, empresa, cargo */}
        <div>
          <label>Experiences:</label>
          {experinces.length > 0 &&
            experinces.map((experince, index) => (
              <div key={index} className="flex flex-col gap-1 mb-2">
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <label>Start Date:</label>
                    <DatePicker
                      placeholderText="start date"
                      selected={experince.startDateExp}
                      value={experince.startDateExp}
                      onChange={(date) =>
                        handleStartDateChange(index, experince, date)
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>End Date:</label>
                    <DatePicker
                      placeholderText="end date"
                      selected={experince.endDateExp}
                      value={experince.endDateExp}
                      onChange={(date) =>
                        handleEndtDateChange(index, experince, date)
                      }
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <input
                    value={experince.company}
                    onChange={(ev) => handleCompanyChange(index, experince, ev)}
                    type="text"
                    placeholder="company"
                  />
                  <input
                    value={experince.position}
                    onChange={(ev) =>
                      handlePositionChange(index, experince, ev)
                    }
                    type="text"
                    placeholder="position"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    value={experince.urlCompany}
                    onChange={(ev) => handleUrlComChange(index, experince, ev)}
                    type="text"
                    placeholder="url company"
                  />
                  <textarea
                    value={experince.roldescription}
                    onChange={(ev) => handleRolDescChange(index, experince, ev)}
                    placeholder="description"
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={() => removeExperinces(index)}
                  className="btn-red w-60"
                >
                  Remove
                </button>
              </div>
            ))}
          <div className="flex justify-around">
            <button onClick={addExperince} className="btn-primary">
              Add Experinces
            </button>
          </div>
        </div>
        {/*Fecha, institution, Certificacion*/}
        <div>
          <label>Education</label>
          <div>
            <label>When you got it?</label>
            <DatePicker
              placeholderText="date when you got it"
              selected={startDateEdu}
              onChange={(date) => setStartDateEdu(date)}
            />
          </div>
          <input type="text" placeholder="certification" />
          <input type="text" placeholder="institution" />
          <input type="text" placeholder="url image certification" />
          <button className="btn-default">Add Education</button>
        </div>
        <div>
          <label>Others</label>
          <div>
            <input type="text" placeholder="language" />
            <button className="btn-default">Add Lang</button>
          </div>
          <div>
            <input type="text" placeholder="skill" />
            <button className="btn-default">Add Skill</button>
          </div>
        </div>
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
};

export default ProfilePage;
