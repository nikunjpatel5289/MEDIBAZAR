"use client";
import NavBar from "@/components/admin-layout/NavBar";
import SideBar from "@/components/admin-layout/SideBar";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  categoryName: string;
  categoryDescription: string;
  id:string;
}

const Page = () => {
  const reoute = useRouter()
  const [data,setData] = useState<any>([])
  const param = useParams();

  const validationSchema = Yup.object().shape({
    categoryName: Yup.string().required("Category Name is required"),
    categoryDescription: Yup.string().required(
      "category Description is required"
    ),
  });

  const getTokenData = () => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return config;
  };

  const categoryDataGet = async (id: any) => {
    try {
      const config = getTokenData()
      const response = await axios.get(`http://127.0.0.1:3000/category/${id}`,config)
      if(response) {
        setData(response.data.data)
        formik.values.categoryName = response.data.data.categoryName;
        formik.values.categoryDescription = response.data.data.categoryDescription;
        formik.initialValues.id = response.data.data._id;
      }
    } catch (error : any) {
      console.info(error.response.data.message)
    }
  };

  useEffect(() => {
    categoryDataGet(param.id);
  }, []);

  const handleSubmit = async (values: FormValues) => {
    try {
      const config = getTokenData();
      const id = values.id;
      const response = await axios.patch(
        `http://127.0.0.1:3000/category/${id}`,
        values,
        config
      );

      if (response) {
        // formik.values.categoryName = "";
        // formik.values.categoryDescription = "";
        reoute.replace('/admin/categories')
      }
    } catch (error: any) {
      // toast(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      categoryName: "",
      categoryDescription: "",
      id: ""
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          <div className="text-start text-gray-600 font-sans text-4xl mb-4">
            <span className="font-semibold">Edit Category</span>
          </div>
        </div>

        <form className="font-[sans-serif] text-[#292828] max-w-4xl mx-auto px-1 my-6" onSubmit={formik.handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="relative flex items-center mb-6">
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
          <button
            type="submit"
            className="!mt-4 px-6 py-2 text-sm bg-[#333] text-white rounded hover:bg-[#222]"
          >
            Save Change
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;
