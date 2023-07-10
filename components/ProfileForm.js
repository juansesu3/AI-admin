import Layout from "@/components/Layout";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ProfileForm = () => {
  const { data } = useSession();

  const [username, setName] = useState(data?.user.name);

  const [greeting, setGreeting] = useState("");
  const [shortIntro, setShortIntro] = useState("");
  const [introYourSelf, setIntroYourSelf] = useState();

  //Start array experiences
  const [experinces, setExperinces] = useState([]);
  /*const [startDateExp, setStartDateExp] = useState(new Date());
    const [endDateExp, setEndDateExp] = useState(new Date());
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [urlCompany, setUrlCompany] = useState("");
    const [roldescription, setRolDescription] = useState("");*/
  //End array experiences

  //Start array education
  const [education, setEducation] = useState([]);
  /*-const [gotDate, setGotDate] = useState("");
    const [certificationName, setNameCertificationName] = useState("");
    const [institutionName, setInstitutionName] = useState("");
    const [imageCertification, setImageCertification] = useState("");*/

  //End array education

  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("");
  const [skills, setSkils] = useState([]);
  const [skill, setSkill] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const data = {
      username,
      greeting,
      shortIntro,
      introYourSelf,
      experinces: experinces.map((e) => ({
        company: e.company,
        endDateExp: e.endDateExp,
        position: e.position,
        roldescription: e.roldescription,
        urlCompany: e.urlCompany,
        startDateExp: e.startDateExp,
      })),
      education: education.map((edu) => ({
        certificationName: edu.certificationName,
        gotDate: edu.gotDate,
        imageCertification: edu.imageCertification,
        institutionName: edu.institutionName,
      })),
      languages: languages.map((lang) => ({
        language: lang.language,
      })),
      skills: skills.map((ski) => ({
        skill: ski.skilll,
      })),
    };
    console.log(data);
    const dataWithoutCircular = data;
    await axios.post("/api/profile", dataWithoutCircular);
  };

  const addExperince = () => {
    const dataExp = {
      startDateExp: "",
      endDateExp: "",
      company: "",
      position: "",
      urlCompany: "",
      roldescription: "",
    };

    setExperinces((prev) => {
      return [...prev, dataExp];
    });
  };

  const handleStartDateChange = (index, experince, date) => {
    setExperinces((prev) => {
      const experiences = [...prev];
      console.log(typeof date);
      console.log(index);

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

  const addEducation = () => {
    const dataEdu = {
      gotDate: "",
      certificationName: "",
      institutionName: "",
      imageCertification: "",
    };

    setEducation((prev) => {
      return [...prev, dataEdu];
    });
  };

  const handleDateGotItChange = (indexEd, edu, ev) => {
    setEducation((prev) => {
      const education = [...prev];
      education[indexEd].gotDate = ev;
      return education;
    });
  };

  const handleCertificationChange = (indexEd, edu, ev) => {
    setEducation((prev) => {
      const education = [...prev];
      education[indexEd].certificationName = ev.target.value;
      return education;
    });
  };
  const handleinstitutionChange = (indexEd, edu, ev) => {
    setEducation((prev) => {
      const education = [...prev];
      education[indexEd].institutionName = ev.target.value;
      return education;
    });
  };

  const handleImgChange = (indexEd, edu, ev) => {
    setEducation((prev) => {
      const education = [...prev];
      education[indexEd].imageCertification = ev.target.value;
      return education;
    });
  };

  const removeEducation = (indexToRemove) => {
    setEducation((prev) => {
      return [...prev].filter((e, eIndex) => {
        return eIndex !== indexToRemove;
      });
    });
  };

  const addLang = () => {
    const dataLang = {
      languages: languages,
    };

    setLanguages((prev) => {
      return [...prev, dataLang];
    });
  };
  const handleLanguagesChange = (indexLang, lang, ev) => {
    setLanguages((prev) => {
      const languages = [...prev];
      languages[indexLang].language = ev.target.value;
      console.log(languages);
      return languages;
    });
  };

  const removeLang = (indexToRemove) => {
    setLanguages((prev) => {
      return [...prev].filter((l, lindex) => {
        return lindex !== indexToRemove;
      });
    });
  };

  const addSkill = () => {
    const dataSkill = {
      skills: skills,
    };

    setSkils((prev) => {
      return [...prev, dataSkill];
    });
  };
  const handleSkillChange = (indexSki, skilll, ev) => {
    setSkils((prev) => {
      const skills = [...prev];

      skills[indexSki].skilll = ev.target.value;
      console.log(skills);
      return skills;
    });
  };
  const removeSkill = (indexToRemove) => {
    setSkils((prev) => {
      return [...prev].filter((s, sindex) => {
        return sindex !== indexToRemove;
      });
    });
  };
  return (
   <>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input readOnly={true} value={username} name="username" />
        </label>
        <label>
          Greeting!
          <input
            name="greeting"
            value={greeting}
            onChange={(ev) => setGreeting(ev.target.value)}
            type="text"
            placeholder="greeting"
          />
        </label>
        <label>
          Short introduction
          <textarea
            value={shortIntro}
            onChange={(ev) => setShortIntro(ev.target.value)}
            type="text"
            placeholder="Short introduction"
          ></textarea>
        </label>
        <label>
          Introduce yourself
          <textarea
            value={introYourSelf}
            onChange={(ev) => setIntroYourSelf(ev.target.value)}
            type="text"
            placeholder="Introduce yourself"
          ></textarea>
        </label>
        {/*Fecha, empresa, cargo */}
        <div>
          <label>
            Experinces
            {experinces.length > 0 &&
              experinces.map((experince, index) => (
                <div key={index} className="flex flex-col gap-1 mb-2">
                  <div className="flex gap-4 ">
                    <div className="flex flex-col">
                      <label>
                        Start Date:
                        <DatePicker
                          placeholderText="start date"
                          selected={experince.startDateExp}
                          value={experince.startDateExp}
                          onChange={(date) =>
                            handleStartDateChange(index, experince, date)
                          }
                        />
                      </label>
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
                  <div className="flex gap-4 md:flex flex-col">
                    <input
                      value={experince.company}
                      onChange={(ev) =>
                        handleCompanyChange(index, experince, ev)
                      }
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
                  <div className="flex gap-4 md:flex flex-col">
                    <input
                      value={experince.urlCompany}
                      onChange={(ev) =>
                        handleUrlComChange(index, experince, ev)
                      }
                      type="text"
                      placeholder="url company"
                    />
                    <textarea
                      value={experince.roldescription}
                      onChange={(ev) =>
                        handleRolDescChange(index, experince, ev)
                      }
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
          </label>
          <div className="flex justify-around mb-2">
            <button
              type="button"
              onClick={addExperince}
              className="btn-primary"
            >
              Add Experinces
            </button>
          </div>
        </div>
        {/*Fecha, institution, Certificacion*/}
        <label>
          Education
          {education.length > 0 &&
            education.map((edu, indexEd) => (
              <div className="mb-2" key={edu}>
                <div className="flex flex-col w-60">
                  <label>When you got it?</label>
                  <DatePicker
                    selected={edu.gotDate}
                    value={edu.gotDate}
                    onChange={(ev) => handleDateGotItChange(indexEd, edu, ev)}
                  />
                </div>
                <input
                  value={edu.certificationName}
                  onChange={(ev) => handleCertificationChange(indexEd, edu, ev)}
                  type="text"
                  placeholder="certification"
                />
                <input
                  value={edu.institutionName}
                  onChange={(ev) => handleinstitutionChange(indexEd, edu, ev)}
                  type="text"
                  placeholder="institution"
                />
                <input
                  value={edu.imageCertification}
                  type="text"
                  placeholder="url image certification"
                  onChange={(ev) => handleImgChange(indexEd, edu, ev)}
                />
                <button
                  type="button"
                  onClick={() => removeEducation(indexEd)}
                  className="btn-red w-60"
                >
                  Remove
                </button>
              </div>
            ))}
        </label>

        <div className="flex justify-around">
          <button type="button" onClick={addEducation} className="btn-primary">
            Add Education
          </button>
        </div>

        <div>
          <div>
            <label>
              Languages
              {languages.length > 0 &&
                languages.map((lang, indexLang) => (
                  <div className="mt-2" key={indexLang}>
                    <input
                      value={lang?.language}
                      onChange={(ev) =>
                        handleLanguagesChange(indexLang, lang, ev)
                      }
                      type="text"
                      placeholder="language"
                    />
                    <button
                      type="button"
                      onClick={() => removeLang(indexLang)}
                      className="btn-red w-60"
                    >
                      Remove
                    </button>
                  </div>
                ))}
            </label>
            <div className="flex justify-around mb-2">
              <button
                type="button"
                onClick={addLang}
                className="btn-primary mt-2 mb-4"
              >
                Add Lang
              </button>
            </div>
          </div>
          <label>
            Skills
            {skills.length > 0 &&
              skills.map((skill, indexSki) => (
                <div className="mt-2" key={indexSki}>
                  <input
                    value={skill?.skilll}
                    onChange={(ev) => handleSkillChange(indexSki, skill, ev)}
                    type="text"
                    placeholder="skill"
                  />
                  <button
                    type="button"
                    onClick={() => removeSkill(indexSki)}
                    className="btn-red w-60"
                  >
                    Remove
                  </button>
                </div>
              ))}
          </label>
          <div className="flex justify-around mb-2">
            <button
              type="button"
              onClick={addSkill}
              className="btn-primary mt-2 mb-4"
            >
              Add Skill
            </button>
          </div>
        </div>
        <button type="submit" className="mt-4 btn-primary">
          Save
        </button>
      </form>
      </>
  );
};

export default ProfileForm;
