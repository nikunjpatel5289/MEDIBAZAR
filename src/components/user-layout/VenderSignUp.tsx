"use client";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { venderRegistr } from "@/app/redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  businessName: string;
  GSTNumber: string;
}

const VenderSignUp = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const userState = useSelector((state: any) => state.user);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is require"),
    lastName: Yup.string().required("Last Name is require"),
    phone: Yup.string().min(10).required("Phone number is require"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    businessName: Yup.string().required("Business Name is require"),
    GSTNumber: Yup.string().required("GST Number is require"),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      dispatch(venderRegistr(values));
      if (userState.error) {
        if (userState.error.match(/E11000/gi)) {
          toast("Email Are Exist Try New Email...");
        }
      }
      toast("Your Account Succesfully create Wait for Admin Approval... ");
    } catch (error: any) {
      toast(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
      businessName: "",
      GSTNumber: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <ToastContainer />
      <section className="bg-gray-50 h-[850px] dark:bg-gray-300 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black"
          >
            MediBazar
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-50 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-4 sm:p-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create your Vender account
              </h1>
              <form
                className="space-y-4 md:space-y-5"
                onSubmit={formik.handleSubmit}
                method="POST"
              >
                <div className="flex flex-row">
                  <div className="m-2">
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="jhon"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className="error text-red-500 text-sm">
                        {formik.errors.lastName}
                      </div>
                    )}
                  </div>
                  <div className="m-2">
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className="error text-red-500 text-sm">
                        {formik.errors.lastName}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="error text-red-500 text-sm">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Phone number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1234567890"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="error text-red-500 text-sm">
                      {formik.errors.phone}
                    </div>
                  )}
                </div>
                <div className="flex flex-row">
                  <div className="m-2">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <span className="error text-red-500 text-sm">
                        {formik.errors.password}
                      </span>
                    )}
                  </div>
                  <div className="m-2">
                    <label
                      htmlFor="confirmPassword"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <div className="error text-red-500 text-sm">
                          {formik.errors.confirmPassword}
                        </div>
                      )}
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="m-2">
                    <label
                      htmlFor="businessName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      id="businessName"
                      placeholder="Business Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={formik.values.businessName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.businessName &&
                      formik.errors.businessName && (
                        <div className="error text-red-500 text-sm">
                          {formik.errors.businessName}
                        </div>
                      )}
                  </div>
                  <div className="m-2">
                    <label
                      htmlFor="GSTNumber"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      GST Number
                    </label>
                    <input
                      type="text"
                      name="GSTNumber"
                      id="GSTNumber"
                      placeholder="GST number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={formik.values.GSTNumber}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.GSTNumber && formik.errors.GSTNumber && (
                      <div className="error text-red-500 text-sm">
                        {formik.errors.GSTNumber}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-black bg-gray-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-gray-600 dark:focus:ring-primary-800"
                >
                  Create An Account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-800">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-black hover:underline dark:text-primary-500"
                  >
                    Login
                  </Link>{" "}
                  here
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VenderSignUp;
