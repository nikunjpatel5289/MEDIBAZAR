"use client";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

interface FormValues {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  profile?: any;
  address: string;
  city: string;
  state: string;
  pincode: number;
  businessName: string;
  GSTNumber: string;
}

const Profile = () => {
  const [data, setData] = useState<any>([]);
  const route = useRouter();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.number().min(10).required("phone is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("state is required"),
    city: Yup.string().required("city is required"),
    pincode: Yup.number().required("Pincode is required"),
    businessName: Yup.string().required("Business Name is Required"),
    GSTNumber: Yup.string().required("GST Number is Required"),
  });

  const getUserData = async () => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    const { id }: any = jwtDecode(token);
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const userData = await axios.get(
      `http://127.0.0.1:3000/user/${id}`,
      config
    );
    const data = await userData.data;
    // console.info(data.data);

    setData(data.data);
    formik.values.firstName = data.data.firstName;
    formik.initialValues.lastName = data.data.lastName;
    formik.initialValues.phone = data.data.phone;
    formik.initialValues.email = data.data.email;
    formik.initialValues.city = data.data.city;
    formik.initialValues.address = data.data.address;
    formik.initialValues.state = data.data.state;
    // formik.initialValues.profile = data.data.profile;
    formik.initialValues.pincode = data.data.pincode;
    formik.initialValues.businessName = data.data.businessName;
    formik.initialValues.GSTNumber = data.data.GSTNumber;
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleSubmit = async (values: FormValues) => {
    try {
      const formData = new FormData();
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("email", values.email);
      formData.append("address", values.address);
      formData.append("city", values.city);
      formData.append("state", values.state);

      // if (values.profile === undefined) {
      formData.append("profile", (values?.profile as File) || undefined);
      // } else {
      //   formData.append("profile", values?.profile as File);
      // }

      formData.append("phone", Number(values.phone) as any);
      formData.append("pincode", Number(values.pincode) as any);
      formData.append("businessName", values.businessName);
      formData.append("GSTNumber", values.GSTNumber);

      const token = JSON.parse(localStorage.getItem("token") || "");
      const { id }: any = jwtDecode(token);
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      // console.info(formData);

      const response = await axios.patch(
        `http://127.0.0.1:3000/user/${id}`,
        formData,
        config
      );

      if (response.status === 200) {
        toast("Your Profile Updated Succefully Changes Maay see Letter...");
      }

      route.replace("/vender");
    } catch (error: any) {
      toast(error.response.data);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      phone: "" as any,
      lastName: "",
      profile: undefined as any,
      address: "",
      city: "",
      state: "",
      pincode: "" as any,
      businessName: "",
      GSTNumber: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <ToastContainer />
      <form
        className="font-[sans-serif] text-[#292828] max-w-4xl mx-auto px-2 my-6"
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
      >
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="relative flex items-center">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              First Name
            </label>
            <input
              type="text"
              name="forstName"
              placeholder="Enter first name"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Phone No
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Enter phone no."
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              City
            </label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.city}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              State
            </label>
            <input
              type="text"
              name="state"
              placeholder="Enter State"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.state}
              onChange={formik.handleChange}
            />
          </div>

          <div className="relative flex items-center">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Business Logo
            </label>
            <input
              type="file"
              name="profile"
              onChange={(event: any) => {
                formik.setFieldValue("profile", event.currentTarget.files[0]);
              }}
              className="mt-4 w-full text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
            />
          </div>

          <img
            className="w-20 h-20 rounded"
            src={data.profile}
            alt="Large avatar"
          ></img>

          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              placeholder="Enter Business Name"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.businessName}
              onChange={formik.handleChange}
            />
          </div>

          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              GSTIN Number
            </label>
            <input
              type="text"
              name="GSTNumber"
              placeholder="Enter GST Number"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.GSTNumber}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-10 px-2 py-2.5 w-full rounded text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Profile;
