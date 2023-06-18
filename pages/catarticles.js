import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Catarticles = () => {
  const [name, setName] = useState("");

  const [categoriesArticle, setCategoriesArticle] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios.get("/api/catarticles").then((result) => {
      setCategoriesArticle(result.data);
    });
  };

  const saveCategoryArticle = async (ev) => {
    ev.preventDefault();
    await axios.post("/api/catarticles", { name });
    setName("");
    fetchCategories();
  };

  return (
    <Layout>
      <h1>Article categories</h1>
      <label>New category name</label>
      <form onSubmit={saveCategoryArticle} className="flex gap-1">
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
      <table className="basic mt-4">
        <thead>
          <tr>
            <td>Category name</td>
          </tr>
        </thead>
        <tbody>
          {categoriesArticle.length > 0 &&
            categoriesArticle.map((categoryArticle) => (
              <tr key={categoryArticle._id}>
                <td>{categoryArticle.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Catarticles;
