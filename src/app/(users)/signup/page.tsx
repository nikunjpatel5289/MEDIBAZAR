"use client";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "@/app/redux/slices/userSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  password: string;
  confirmPassword: string;
}

const page = () => {
  const route = useRouter();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const response = useSelector((state: any) => state.user);
  const [err, seterr] = useState();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    phone:Yup.number().min(10).required("Phone Number is requires"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      // console.info(values);
      
      dispatch(userRegister(values));

      if (response.error) {
        throw "Email Are Already Exist Try Again...";
      }

      route.replace("/login");
    } catch (error: any) {
      seterr(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: 0
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <section className="bg-gray-50 h-[800px] dark:bg-gray-300 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black"
          >
            MediBazar
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-50 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-4">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create your account
              </h1>
              {err && (
                <h1 className="text-xl font-bold leading-tight tracking-tight text-red-500 md:text-2xl">
                  {err}
                </h1>
              )}
              <form
                className="space-y-4 md:space-y-4"
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
                <div className="m-2">
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
                    <div className="error text-red-500">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className="m-2">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Phone number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    placeholder="1234567890"
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
                      <div className="error text-red-500">
                        {formik.errors.password}
                      </div>
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
                        <div className="error text-red-500">
                          {formik.errors.confirmPassword}
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
                <p className="text-sm font-light text-gray-500 dark:text-gray-800">
                  Create Vender Account?{" "}
                  <Link
                    href="/venderSignup"
                    className="font-medium text-black hover:underline dark:text-primary-500"
                  >
                    Sign Up
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

export default page;
