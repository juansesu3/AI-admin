import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const ProfilePage = () => {
  const { data } = useSession();

  const [name, setName] = useState(data?.user.name);

  const [startDateExp, setStartDateExp] = useState(null);
  const [endDateExp, setEndDateExp] = useState(null);
  const [startDateEdu, setStartDateEdu] = useState(null);

  const handleSubmit =(ev)=>{
    ev.preventDefault();

  }

  return (
    <Layout>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <input readOnly={true} value={name} />
       
        <input type="text" placeholder="say hi!" />
        <textarea type="text" placeholder="Short introduction"></textarea>
        <textarea type="text" placeholder="Introduce yourself"></textarea>
        {/*Fecha, empresa, cargo */}
        <div>
          <label>Experinces</label>
          <div>
            <label>Fecha de inicio:</label>
            <DatePicker
              selected={startDateExp}
              onChange={(date) => setStartDateExp(date)}
            />
          </div>
          <div>
            <label>Fecha de fin:</label>
            <DatePicker
              selected={endDateExp}
              onChange={(date) => setEndDateExp(date)}
            />
          </div>
          <input type="text" placeholder="company" />
          <input type="text" placeholder="position" />
          <input type="text" placeholder="url company" />
          <textarea placeholder="description"></textarea>
          <button className="btn-default">Add Experinces</button>
        </div>
        {/*Fecha, institution, Certificacion*/}
        <div>
          <label>Education</label>
          <div>
            <label>Fecha de inicio:</label>
            <DatePicker
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
        <button type="submit" className="btn-primary">Save</button>
      </form>
    </Layout>
  );
};

export default ProfilePage;
