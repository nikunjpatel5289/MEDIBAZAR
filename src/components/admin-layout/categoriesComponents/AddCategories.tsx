"use client";

import axios from "axios";
import { useFormik } from "formik";
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
      <form
        className="font-[sans-serif] text-[#292828] max-w-4xl mx-auto px-1 my-6"
        onSubmit={formik.handleSubmit}
        method="POST"
      >
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="relative flex items-center ">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Category name
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
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Category Description
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
      </form>
    </>
  );
};

export default AddCategories;
