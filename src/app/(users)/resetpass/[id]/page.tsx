"use client";
import { useParams, useRouter } from "next/navigation";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useState } from "react";

interface FormValues {
  password: string;
  confirmPassword: string;
}

const Page = () => {
  const param = useParams();
  const route = useRouter();
  const [error, setError] = useState<boolean>(false);
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      const TOKEN = param.id;
      // console.info("VALUES",values, param.id)
      const response = await axios.patch(
        `http://127.0.0.1:3000/user/resetPassword/${TOKEN}`,
        { password: values.password }
      );

      if (response.status === 200) {
        route.push("/login");
      }
    } catch (error: any) {
      toast(error.response.data.message);
      setError(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <ToastContainer />
      <section className="bg-gray-50 dark:bg-gray-300 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {/* <Link
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black"
          >
            MediBazar
          </Link> */}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-50 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Password assistance
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
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
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
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
                <button
                  type="submit"
                  className="w-full text-black bg-gray-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-gray-600 dark:focus:ring-primary-800"
                >
                  Submit
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-800">
                  Enter the New Password to your MediBazar account.
                </p>
                {error && (
                  <p className="text-sm font-light text-gray-500 dark:text-gray-800">
                    Your Password Reset Link has Expier Send New Link <br />{" "}
                    Click Hear
                    <Link
                      href={"/forgetPass"}
                      className="ms-1 text-blue-800 underline hover:underline hover:cursor-pointer"
                    >
                      Forget Password
                    </Link>{" "}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
