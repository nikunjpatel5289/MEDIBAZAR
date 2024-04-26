"use client";

import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

interface prop {
  getCategoryData(): any;
  getTokenData(): any;
  toast(val: string): any;
}

interface FormValues {
  categoryName: string;
  categoryDescription: string;
}

const AddCategories = ({ getCategoryData, getTokenData, toast }: prop) => {
  const [showDilog, setShowDilog] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    categoryName: Yup.string().required("Category Name is required"),
    categoryDescription: Yup.string().required(
      "category Description is required"
    ),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      const config = getTokenData();
      const response = await axios.post(
        `http://127.0.0.1:3000/category`,
        values,
        config
      );

      if (response) {
        toast("Category Added...");
        formik.values.categoryName = "";
        formik.values.categoryDescription = "";
        setShowDilog(false);
        getCategoryData();
      }
    } catch (error: any) {
      toast(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      categoryName: "",
      categoryDescription: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      {/* <form
        className="font-[sans-serif] text-[#292828] max-w-4xl mx-auto px-1 my-6"
        onSubmit={formik.handleSubmit}
        method="POST"
      >
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="relative flex items-center ">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.categoryName &&
                formik.errors.categoryName &&
                "text-red-600"
              }`}
            >
              Category name *
            </label>
            <input
              type="text"
              name="categoryName"
              placeholder="Enter Category name"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.categoryName}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.categoryDescription &&
                formik.errors.categoryDescription &&
                "text-red-600"
              }`}
            >
              Category Description *
            </label>
            <textarea
              placeholder="Small Description..."
              name="categoryDescription"
              className="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded"
              rows={3}
              value={formik.values.categoryDescription}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="!mt-4 px-6 py-2 text-sm bg-[#333] text-white rounded hover:bg-[#222]"
        >
          Save Category
        </button>
      </form> */}
      <button
        onClick={() => setShowDilog(true)}
        type="button"
        className="ms-[178px] px-6 py-2 text-sm bg-[#414040] text-white rounded-md hover:bg-[#222]"
      >
        Add Category
      </button>
      <br />
      {showDilog && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
            <svg
              onClick={() => setShowDilog(false)}
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 float-right"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              />
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              />
            </svg>
            <div className="my-6 text-center">
              <h4 className="text-3xl text-[#333] font-extrabold">
                Add Categories
              </h4>
            </div>
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              <div className="relative flex items-center">
                <input
                  type="text"
                  name="categoryName"
                  placeholder="Enter Categories Name"
                  className={`px-4 py-3 bg-white text-[#333] w-full text-sm border-2 rounded-lg ${
                    formik.touched.categoryName && formik.errors.categoryName
                      ? "border-[#ff0000]"
                      : "outline-[#007bff] "
                  }`}
                  value={formik.values.categoryName}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="relative flex items-center">
                <textarea
                  name="categoryDescription"
                  className={`px-4 py-3 w-full text-sm border-2 rounded-lg ${
                    formik.touched.categoryDescription &&
                    formik.errors.categoryDescription
                      ? "border-[#ff0000]"
                      : "outline-[#007bff] "
                  }`}
                  cols={10}
                  rows={10}
                  placeholder="Enter Description"
                  value={formik.values.categoryDescription}
                  onChange={formik.handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 !mt-8 w-full font-semibold bg-gray-800 hover:bg-gray-600 text-white text-sm rounded-full"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCategories;
