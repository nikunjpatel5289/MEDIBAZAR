"use client";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

interface FormValues {
  promcodename: string;
  promotype: string;
  promocodeamount: number;
  startDate: Date;
  endDate: Date;
  noUse: number;
}

const AddPromo = () => {
  const validationSchema = Yup.object().shape({
    promcodename: Yup.string().required("PromCode Name is required"),
    promotype: Yup.string().required("Promotype is required"),
    promocodeamount: Yup.number().required("PromoCode Type Mustbe Enter"),
    startDate: Yup.date().required(),
    // .max(new Date(), "Future date not allowed")
    // .typeError("Invalid Started date"),
    endDate: Yup.date()
      .required()
      .min(Yup.ref("startDate"), "End date must be later than Start date"),
    noUse: Yup.number().required("Number Of Use is requires"),
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

  const handleSubmit = async (values: FormValues) => {
    try {
      const config = getTokenData();
      const response = await axios.post(
        `http://127.0.0.1:3000/promo`,
        values,
        config
      );

      if (response) {
        toast.success("PromoCode Are Generated...");
        formik.values.promcodename = "";
        formik.values.promotype = "";
        formik.values.promocodeamount = "" as any;
        formik.values.startDate = "" as any;
        formik.values.endDate = "" as any;
        formik.values.noUse = "" as any;
      }
    } catch (error: any) {
      // console.info(error.response.data.message);
      if (error.response.data.message.match(/E11000/gi)) {
        toast.warn(
          "Promo Code Already Generatedd With This Name... Try New One"
        );
      } else {
        toast.error(error.response.data.message);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      promcodename: "",
      promotype: "",
      startDate: undefined as any,
      endDate: undefined as any,
      noUse: undefined as any,
      promocodeamount: undefined as any,
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <div>
        <div className="text-end text-gray-600 font-sans text-4xl mb-4">
          <Link
            href={"/admin/promocode/all"}
            className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#333] hover:bg-[#222] active:bg-[#333]"
          >
            Show All Promo Code
          </Link>
        </div>
      </div>
      <ToastContainer />
      <form
        className="font-[sans-serif] text-[#292828] max-w-4xl mx-auto px-1 my-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="relative flex items-center ">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.promcodename &&
                formik.errors.promcodename &&
                "text-red-600"
              }`}
            >
              PromoCode name *
            </label>
            <input
              type="text"
              placeholder="Enter Promocode name"
              name="promcodename"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-300 focus:border-[#333] outline-none"
              value={formik.values.promcodename}
              onChange={formik.handleChange}
            />
          </div>

          <div className="relative flex items-center ">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.promotype &&
                formik.errors.promotype &&
                "text-red-600"
              }`}
            >
              Promo Code Type *
            </label>
            <select
              name="promotype"
              value={formik.values.promotype}
              onChange={formik.handleChange}
              className="py-3 mt-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-100 dark:border-transparent dark:text-gray-700 dark:focus:ring-gray-600"
            >
              <option>Select type</option>
              <option>Percent (%)</option>
              <option>Flat</option>
            </select>
          </div>
          {formik.values.promotype === "Percent (%)" && (
            <div className="relative flex items-center sm:col-span-2">
              <label
                className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                  formik.touched.promocodeamount &&
                  formik.errors.promocodeamount &&
                  "text-red-600"
                }`}
              >
                Promocode Percentage Amount *
              </label>
              <input
                type="number"
                name="promocodeamount"
                placeholder="Enter Promocode Percentage Amount"
                className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
                value={formik.values.promocodeamount}
                onChange={formik.handleChange}
              />
            </div>
          )}
          {formik.values.promotype === "Flat" && (
            <div className="relative flex items-center sm:col-span-2">
              <label
                className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                  formik.touched.promocodeamount &&
                  formik.errors.promocodeamount &&
                  "text-red-600"
                }`}
              >
                Promocode Diascount Amount *
              </label>
              <input
                type="number"
                name="promocodeamount"
                placeholder="Enter Promocode Diascount Amount"
                className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
                value={formik.values.promocodeamount}
                onChange={formik.handleChange}
              />
            </div>
          )}
          <div className="relative flex items-center sm:col-span-2">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.startDate &&
                formik.errors.startDate &&
                "text-red-600"
              }`}
            >
              Promocode Start-Date *
            </label>
            <input
              type="date"
              name="startDate"
              className="px-4 mt-3 py-3 bg-[#f0f1f2] text-black w-full text-sm outline-[#007bff] rounded"
              value={formik.values.startDate as any}
              onChange={formik.handleChange}
            />
            <br />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.endDate &&
                formik.errors.endDate &&
                "text-red-600"
              }`}
            >
              Promocode End-Date *
            </label>
            <input
              type="date"
              name="endDate"
              className="px-4 mt-3 py-3 bg-[#f0f1f2] text-black w-full text-sm outline-[#007bff] rounded"
              value={formik.values.endDate as any}
              onChange={formik.handleChange}
            />
          </div>
          {formik.touched.endDate && formik.errors.endDate && (
            <div className="error text-red-500 text-sm">
              {formik.errors.endDate as any}
            </div>
          )}

          <div className="relative flex items-center sm:col-span-2">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.noUse && formik.errors.noUse && "text-red-600"
              }`}
            >
              Promocode Number Of Use *
            </label>
            <input
              type="number"
              name="noUse"
              placeholder="Enter Promocode Number Use"
              className="px-2 pt-5 bg-white w-full text-sm border-b-2 border-gray-300 focus:border-[#333] outline-none"
              value={formik.values.noUse}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-10 px-2 py-2.5 w-full rounded text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
        >
          Save
        </button>
      </form>
    </>
  );
};

export default AddPromo;
