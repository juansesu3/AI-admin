import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState } from "react";

const PProductsCategory = () => {
  const [name, setName] = useState("");

  const saveCategory = async (ev) => {
    ev.preventDefault();
    await axios.post("/api/ppcategories", { name });
    setName("");
  };

  return (
    <Layout>
      <h1 className="text-white">
        Physical <span className="text-primary">Products</span> Categories
      </h1>
      <label>New Category Name</label>
      <form onSubmit={saveCategory} className="flex gap-1">
        <input
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          className="mb-0"
          type="text"
          placeholder="category name"
        />
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
};

export default PProductsCategory;
