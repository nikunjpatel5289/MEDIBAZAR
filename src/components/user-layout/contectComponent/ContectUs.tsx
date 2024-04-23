"use client";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContectUs = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/contect",
        values
      );

      toast("Your response has Submited...");

      formik.values.firstName = "";
      formik.values.lastName = "";
      formik.values.message = "";
      formik.values.email = "";
    } catch (error: any) {
      // console.info(error);
      toast("Somthig Wrong Try Again...");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
      firstName: "",
      lastName: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="row">
      <ToastContainer />
      <div className="col-md-12">
        <form onSubmit={formik.handleSubmit} method="POST">
          <div className="p-3 p-lg-5 border">
            <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="firstname" className="text-black">
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="firstname"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="error text-red-500">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="text-black">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="error text-red-500">
                    {formik.errors.lastName}
                  </div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                <label htmlFor="email" className="text-black">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error text-red-500">
                    {formik.errors.email}
                  </div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                <label htmlFor="message" className="text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={7}
                  className="form-control"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="error text-red-500">
                    {formik.errors.message}
                  </div>
                )}
              </div>
            </div>
            <div className="form-group row justify-center">
              <div className="col-lg-12">
                <button
                  type="submit"
                  className="btn btn-dark btn-lg btn-block"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContectUs;
