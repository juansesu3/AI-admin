import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { withSwal } from "react-sweetalert2";

const Catarticles = ({ swal }) => {
  //States
  const [editedCategoryArticle, setEditedCategoryArticle] = useState(null);
  const [name, setName] = useState("");
  const [parentArticleCategory, setParentArticleCategory] = useState("");
  const [categoriesArticle, setCategoriesArticle] = useState([]);
  const [topics, setTopics] = useState([]);

  //getting article categories
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios.get("/api/catarticles").then((result) => {
      setCategoriesArticle(result.data);
    });
  };

  //Save category function
  const saveCategoryArticle = async (ev) => {
    ev.preventDefault();
    const data = {
      name,
      parentArticleCategory,
      topics: topics.map((t) => ({
        name: t.name,
        values: t.values.split(","),
      })),
    };

    if (editedCategoryArticle) {
      data._id = editedCategoryArticle._id;
      await axios.put("/api/catarticles", data);
      setEditedCategoryArticle(null);
    } else {
      await axios.post("/api/catarticles", data);
    }
    setName("");
    setParentArticleCategory("");
    setTopics([]);
    fetchCategories();
  };

  //edit category function
  const editCategoryArticle = (categoryArticle) => {
    setEditedCategoryArticle(categoryArticle);
    setName(categoryArticle.name);
    //setParentArticleCategory("");
    setParentArticleCategory(categoryArticle.parent?._id);
  };

  const deleteCategoryArticle = (categoryArticle) => {
    swal
      .fire({
        title: "Are you sure? ",
        text: `Do you want to delete "${categoryArticle.name}?"`,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "yes, Delete!",
        confirmButtonColor: "#d55",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const { _id } = categoryArticle;
          await axios.delete("/api/catarticles?_id=" + _id);
          fetchCategories();
        }
        // when confirmed and promise resolved...
      });
  };

  const addTopic = () => {
    setTopics((prev) => {
      return [...prev, { name: "", value: "" }];
    });
  };

  const handleTopicNameChange = (index, topic, newName) => {
    setTopics((prev) => {
      const topics = [...prev];
      topics[index].name = newName;
      return topics;
    });
  };

  const handleTopicValuesChange = (index, topic, newValues) => {
    setTopics((prev) => {
      const topics = [...prev];
      topics[index].values = newValues;
      return topics;
    });
  };

  const removeTopic = (indexToRemove) => {
    setTopics((prev) => {
      return [...prev].filter((t, tIndex) => {
        return tIndex !== indexToRemove;
      });
    });
  };

  return (
    <Layout>
      <h1>Article categories</h1>
      <label>
        {editedCategoryArticle
          ? `Edit article category "${editedCategoryArticle.name}"`
          : "Create new article categoty"}
      </label>
      <form onSubmit={saveCategoryArticle}>
        <div className="flex gap-1">
          <input
            type="text"
            placeholder="Category name"
            onChange={(ev) => setName(ev.target.value)}
            value={name}
          />
          <select
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
        </div>
        <div className="mb-2">
          <label className="block">Topics</label>
          <button
            onClick={addTopic}
            type="button"
            className="btn-default text-sm mb-2"
          >
            Add new topic
          </button>
          {topics.length > 0 &&
            topics.map((topic, index) => (
              <div key={index} className="flex gap-1 mb-2">
                <input
                  type="text"
                  className="mb-0"
                  value={topic.name}
                  onChange={(ev) =>
                    handleTopicNameChange(index, topic, ev.target.value)
                  }
                  placeholder="topic name (example: let variables )"
                />
                <input
                  type="text"
                  className="mb-0"
                  onChange={(ev) =>
                    handleTopicValuesChange(index, topic, ev.target.value)
                  }
                  value={topic.values}
                  placeholder="values, (comma separated)"
                />
                <button
                  type="button"
                  onClick={() => removeTopic(index)}
                  className="btn-default "
                >
                  Remove
                </button>
              </div>
            ))}
        </div>
        <div className="flex gap-1">
          {editedCategoryArticle && (
            <button
              onClick={() => {
                setEditedCategoryArticle(null);
                setName("");
                setParentArticleCategory("");
              }}
              className="btn-default"
            >
              Cancel
            </button>
          )}

          <button type="submit" className="btn-primary">
            Save
          </button>
        </div>
      </form>
      {!editedCategoryArticle && (
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
                    <button
                      onClick={() => deleteCategoryArticle(categoryArticle)}
                      className="btn-primary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
};

export default withSwal(({ swal }, ref) => <Catarticles swal={swal} />);
