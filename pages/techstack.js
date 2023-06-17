import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

const TechStack = () => {
  const [name, setName] = useState("");

  const saveTechnology = async () => {
    await axios.post('/api/techstack', {name});
    setName('');



  };


  return (
    <Layout>
      <h1>Technologies Stack</h1>
      <label>New technology name</label>
      <form onSubmit={saveTechnology} className="flex gap-1">
        <input
          className="mb-0"
          type="text"
          placeholder="Technology name"
          onChange={(ev) => setName(ev.target.value)}
          value={name}
        />
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
};

export default TechStack;
