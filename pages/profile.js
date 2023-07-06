import Layout from "@/components/Layout";
import React from "react";

const ProfilePage = () => {
  return (
    <Layout>
      <h1>Profile</h1>
      <form>
        <input type="text" placeholder="say hi!" />
        <textarea type="text" placeholder="Short introduction"></textarea>
        <textarea type="text" placeholder="Introduce yourself"></textarea>
        {/*Fecha, empresa, cargo */}
        <div>
          <label>Experinces</label>
          <input type="text" placeholder="date" />
          <input type="text" placeholder="company" />
          <input type="text" placeholder="position" />
          <input type="text" placeholder="url company" />
          <textarea placeholder="description"></textarea>
          <button className="btn-default">Add Experinces</button>
        </div>

        {/*Fecha, institution, Certificacion*/}
        <div>
          <label>Education</label>
          <input type="text" placeholder="date" />
          <input type="text" placeholder="certification" />
          <input type="text" placeholder="institution" />
          <input type="text" placeholder="url image certification" />
          <button className="btn-default">Add Education</button>
        </div>

        <div>
          <label>Other</label>
          <div>
            <input type="text" placeholder="language" />
            <button className="btn-default">Add Lang</button>
          </div>
          <div>
            <input type="text" placeholder="skills" />
            <button className="btn-default">Add Skill</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default ProfilePage;
