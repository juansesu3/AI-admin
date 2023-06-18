import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState } from "react";

const Catarticles = () => {
  const [name, setName] = useState("");

  const saveTechnology = async () => {
    await axios.post('/api/catarticles', {name});
    setName('');
  };

  return (
    <Layout>
      <h1>Article categories</h1>
      <label>New category name</label>
      <form onSubmit={saveTechnology} className="flex gap-1">
        <input
          className="mb-0"
          type="text"
          placeholder="Category name"
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

export default Catarticles;
