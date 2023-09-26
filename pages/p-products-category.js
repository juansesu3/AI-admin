import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PProductsCategory = () => {
  const [name, setName] = useState("");
  const [parentPpCategory, setParentPpCategory] = useState("");
  const [ppcategories, setPpCategories] = useState([]);

  const fetchPpCategories = () => {
    axios.get("/api/ppcategories").then((response) => {
      console.log(response.data);
      setPpCategories(response.data);
    });
  };

  useEffect(() => {
    fetchPpCategories();
  }, []);

  const saveCategory = async (ev) => {
    ev.preventDefault();
    const data = { name, parentPpCategory };
    await axios.post("/api/ppcategories", data);
    setName("");
    fetchPpCategories();
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
        <select
          className="mb-0"
          onChange={(ev) => setParentPpCategory(ev.target.value)}
          value={parentPpCategory}
        >
          <option value="">No parent category</option>
          {ppcategories.length > 0 &&
            ppcategories.map((ppcategory) => (
              <option key={ppcategory._id} value={ppcategory._id}>
                {ppcategory.name}
              </option>
            ))}
        </select>
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Category name</td>
            <td>Parent category</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {ppcategories.length > 0 &&
            ppcategories.map((ppcategory) => (
              <tr key={ppcategory._id}>
                <td>{ppcategory.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default PProductsCategory;
