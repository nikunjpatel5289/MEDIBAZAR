"use client";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormValues {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  profile?: File;
  address: string;
  city: string;
  state: string;
  pincode : number;
}

const Profile = () => {
  const route = useRouter()
  const [userDataVal, setUserDataVal] = useState<Array<any>>([]);
  const [err, setError] = useState<any>(null);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.number().min(10).required("phone is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("state is required"),
    city: Yup.string().required("city is required"),
  });

  useEffect(() => {
    const callUserData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token") || "");
        const { id }: any = jwtDecode(token);
        let config = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        // console.info(id);
        
        const userData = await axios.get(
          `http://127.0.0.1:3000/user/${id}`,
          config
        );
        const data = await userData.data;
        // console.info(userData);
          
        setUserDataVal(data.data);
        formik.values.firstName = data.data.firstName;
        formik.initialValues.lastName = data.data.lastName;
        formik.initialValues.phone = data.data.phone;
        formik.initialValues.email = data.data.email;
        formik.initialValues.city = data.data.city;
        formik.initialValues.address = data.data.address;
        formik.initialValues.state = data.data.state;
        formik.initialValues.profile = data.data.profile;
        formik.initialValues.pincode = data.data.pincode;

      } catch (error) {
        setError(error);
      }
    };
    callUserData();
  }, []);

  const handleSubmit = async (values: FormValues) => {
    try {
      // console.info("CAll",values);
      // let IMG = values.profile;
      // if (IMG !== formik.initialValues.profile) {
      //   IMG = values.profile;
      // } else {
      //   IMG = undefined;
      // }
      // console.log(IMG);

      // const value = { ...values, profile: IMG };
      const formData = new FormData();
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("email", values.email);
      formData.append("address", values.address);
      formData.append("city", values.city);
      formData.append("state", values.state);
      formData.append("profile", values?.profile as File || undefined);
      formData.append("phone", Number(values.phone) as any);
      formData.append("pincode", Number(values.pincode) as any);

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
        toast("Your Profile Updated Succefully...");
      }

      route.replace("/");
    } catch (error: any) {
      // console.info(error);
      toast(error.response.data);
      // seterr(error)
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      phone: 0,
      lastName: "",
      profile: undefined,
      address: "",
      city: "",
      state: "",
      pincode: 0
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <ToastContainer />
      <div className="float-end mt-8 mr-[175px]">
        <Link href={'/orderhistory'}
              className="mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto">
            Your Order History
          {/* <span className="sr-only">for order</span> */}
        </Link>
      </div>
      <main className="ms-64 w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">
                Public Profile
              </h2>

              <div className="grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  <img
                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-black"
                    // src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    src={formik.initialValues.profile}
                    alt="Bordered avatar"
                  />
                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <label
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      htmlFor="profile"
                    >
                      Upload file
                    </label>
                    <input
                      type="file"
                      name="profile"
                      onChange={(event: any) => {
                        formik.setFieldValue(
                          "profile",
                          event.currentTarget.files[0]
                        );
                      }}
                      className="w-full text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
                    />
                  </div>
                </div>

                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                  <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div className="w-full">
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                      >
                        Your first name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="Your first name"
                      />
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="lastName"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                      >
                        Your last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="your.email@mail.com"
                    />
                  </div>

                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                    >
                      Phone No.
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="+91 15935762483"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="Address"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                    >
                      Address
                    </label>
                    <textarea
                      id="Address"
                      name="address"
                      rows={4}
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                      placeholder="Address..."
                    ></textarea>
                  </div>

                  <div className="mb-2 sm:mb-6">
                    <label
                      htmlFor="pincode"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                    >
                      Pincode No.
                    </label>
                    <input
                      type="number"
                      id="pincode"
                      name="pincode"
                      value={formik.values.pincode}
                      onChange={formik.handleChange}
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="494105"
                      required
                    />
                  </div>

                  <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div className="w-full">
                      <label
                        htmlFor="City"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="City"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="City..."
                        required
                      />
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="State"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-black"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="State"
                        name="state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="State..."
                        required
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="mt-2 text-white bg-black  hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-500 dark:focus:ring-indigo-800"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Profile;
