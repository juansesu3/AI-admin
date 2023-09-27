import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { withSwal } from "react-sweetalert2";
const PProductsCategory = ({ swal }) => {
  const [editedCategory, setEditedCategory] = useState(null);
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

    if (editedCategory) {
      data._id = editedCategory._id;
      await axios.put("/api/ppcategories", data);
      setEditedCategory(null);
    } else {
      await axios.post("/api/ppcategories", data);
    }

    setName("");
    fetchPpCategories();
  };

  const editCategory = (ppcategory) => {
    setEditedCategory(ppcategory);
    setName(ppcategory.name);
    setParentPpCategory(ppcategory.parent?._id);
  };

  const deleteCategory = (ppcategory) => {
    swal
      .fire({
        title: "Are you sure? ",
        text: `Do you want to delete "${ppcategory.name}?"`,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "yes, Delete!",
        confirmButtonColor: "#d55",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const { _id } = ppcategory;
          await axios.delete("/api/ppcategories?_id=" + _id);
          fetchPpCategories();
        }
        // when confirmed and promise resolved...
      });
  };

  return (
    <Layout>
      <h1 className="text-white">
        Physical <span className="text-primary">Products</span> Categories
      </h1>
      <label>
        {editedCategory
          ? `Edit category ${editedCategory?.name}`
          : "Create new category"}
      </label>
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
                <td>{ppcategory?.parent?.name}</td>
                <td className="flex flex-col gap-1 md:flex-row md:justify-end">
                  <button
                    onClick={() => editCategory(ppcategory)}
                    className="btn-default flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteCategory(ppcategory)}
                    className="btn-red flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default withSwal(({ swal }, ref) => <PProductsCategory swal={swal} />);
