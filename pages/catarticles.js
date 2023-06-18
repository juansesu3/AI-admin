import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Catarticles = () => {
  const [editedCategoryArticle, setEditedCategoryArticle] = useState(null);
  const [name, setName] = useState("");
  const [parentArticleCategory, setParentArticleCategory] = useState("");
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
    await axios.post("/api/catarticles", { name, parentArticleCategory });
    setName("");
    fetchCategories();
  };
  const editCategoryArticle = (categoryArticle) => {
    setEditedCategoryArticle(categoryArticle);
    setName(categoryArticle.name)
    setParentArticleCategory(categoryArticle.parent?._id)
  };

  return (
    <Layout>
      <h1>Article categories</h1>
      <label>
        {editedCategoryArticle
          ? `Edit article category "${editedCategoryArticle.name}"`
          : "Create new article categoty"}
      </label>
      <form onSubmit={saveCategoryArticle} className="flex gap-1">
        <input
          className="mb-0"
          type="text"
          placeholder="Category name"
          onChange={(ev) => setName(ev.target.value)}
          value={name}
        />
        <select
          className="mb-0"
          onChange={(ev) => setParentArticleCategory(ev.target.value)}
          value={parentArticleCategory}
        >
          <option value="0">No parent category</option>
          {categoriesArticle.length > 0 &&
            categoriesArticle.map((categoryArticle) => (
              <option key={categoryArticle._id} value={categoryArticle._id}>
                {categoryArticle.name}
              </option>
            ))}
        </select>
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
      <table className="basic mt-4">
        <thead>
          <tr>
            <td>Category name</td>
            <td>Parent category</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {categoriesArticle.length > 0 &&
            categoriesArticle.map((categoryArticle) => (
              <tr key={categoryArticle._id}>
                <td>{categoryArticle.name}</td>
                <td>{categoryArticle?.parent?.name}</td>
                <td>
                  <button
                    onClick={() => editCategoryArticle(categoryArticle)}
                    className="btn-primary mr-1"
                  >
                    Edit
                  </button>
                  <button className="btn-primary">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Catarticles;
