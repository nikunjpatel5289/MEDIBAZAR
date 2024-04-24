"use client";
import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

interface FormValues {
  email: string;
}

const Page = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      const result = await axios.post(
        "http://127.0.0.1:3000/user/forgetPassword",
        values
      );

      if (result.status === 200) {
        toast("Reset-password Link Sent to Your Email...");
      }
    } catch (error: any) {
      toast(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <ToastContainer />
      <section className="bg-gray-50 dark:bg-gray-300 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black"
          >
            MediBazar
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-50 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Password assistance
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
                // method="POST"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="error text-red-500">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-black bg-gray-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-gray-600 dark:focus:ring-primary-800"
                >
                  Continue
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-800">
                  Enter the email address associated with your MediBazar
                  account.
                </p>
                <p className="text-sm font-light text-gray-500 dark:text-gray-800">
                  Has your email address changed? <br />
                  If you no longer use the e-mail address associated with your
                  MediBazar account, you may contact{" "}
                  <Link
                    href={"/contectus"}
                    className="text-blue-800 underline hover:underline hover:cursor-pointer"
                  >
                    Customer Service
                  </Link>{" "}
                  for help restoring access to your account.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
