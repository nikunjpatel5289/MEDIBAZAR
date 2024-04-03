"use client";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormValues {
  prodName: string;
  prodDescription: string;
  prodBenifits: string;
  prodUse: string;
  prodSaftyInfo: string;
  images: [];
  prodSize?: string;
  prodFlavour?: string;
  prodQty: number;
  prodPrice: number;
  prodExpiryDate: Date;
  categoryId: string;
}

const AddProduct = () => {
  const [category, setCategory] = useState([]);

  const validationSchema = Yup.object().shape({
    prodName: Yup.string().required("product Name is required"),
    prodDescription: Yup.string().required("product Description is required"),
    prodBenifits: Yup.string().required("product Benifits is required"),
    prodUse: Yup.string().required("product Use is required"),
    prodSaftyInfo: Yup.string().required("product SaftyInfo is required"),
    prodQty: Yup.number().required("product Qty is required"),
    images: Yup.string().required("Product Image Are required..."),
    prodPrice: Yup.number().required("product Price is required"),
    prodExpiryDate: Yup.date()
      .required("product ExpiryDate is required")
      .min(new Date(), "Date Must Br greatr then Tody Date..."),
    categoryId: Yup.string().required(),
  });

  const getTokenData = () => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    const { id }: any = jwtDecode(token);
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return { config, USERID: id };
  };
  const getCategory = async () => {
    try {
      const { config, USERID } = getTokenData();
      const response = await axios.get(
        "http://127.0.0.1:3000/category",
        config
      );

      if (response) {
        setCategory(response.data.data);
      }
    } catch (error: any) {
      toast(error.response.data);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleSubmit = async (values: FormValues) => {
    try {
      const { config, USERID } = getTokenData();
      // if( values.prodFlavour?.match(/[a-zA-Z]+\s,\s[a-zA-Z]/gi)){
      //   console.log("MATCH");
      // }
      // if(values.prodSize?.match(/[a-zA-Z]+\s,\s[a-zA-Z]/gi)) {
      //   console.log("MATCH");
      // }
      const formData = new FormData();
      formData.append("prodName", values.prodName);
      formData.append("prodDescription", values.prodDescription);
      formData.append("prodBenifits", values.prodBenifits);
      formData.append("prodUse", values.prodUse);
      formData.append("prodSaftyInfo", values.prodSaftyInfo);
      formData.append("prodQty", Number(values.prodQty) as any);
      formData.append("prodPrice", Number(values.prodPrice) as any);
      formData.append("prodExpiryDate", new Date(values.prodExpiryDate) as any);
      formData.append("prodSize", values.prodSize || "");
      formData.append("prodFlavour", values.prodFlavour || "");
      formData.append("categoryId", values.categoryId);
      formData.append("userId", USERID);

      for (let i = 0; i < values.images.length; i++) {
        formData.append("images[]", values.images[i]);
      }

      const response = await axios.post(
        `http://127.0.0.1:3000/product`,
        formData,
        config
      );

      if (response) {
        toast("Product Created...");
        formik.values.prodName = "";
        formik.values.prodDescription = "";
        formik.values.prodBenifits = "";
        formik.values.prodUse = "";
        formik.values.prodSaftyInfo = "";
        formik.values.prodQty = "" as any;
        formik.values.prodPrice = "" as any;
        formik.values.prodExpiryDate = "" as any;
        formik.values.prodSize = "";
        formik.values.prodFlavour = "";
        formik.values.categoryId = "";
      }
    } catch (error: any) {
      // console.log(error.response.data);
      toast(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      prodName: "",
      prodDescription: "",
      prodBenifits: "",
      prodUse: "",
      prodSaftyInfo: "",
      prodQty: "" as any,
      prodPrice: "" as any,
      prodExpiryDate: undefined as any,
      categoryId: "",
      images: [] as any,
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    // https://stackoverflow.com/questions/62142940/how-to-upload-multiple-images-to-cloudinary
    <>
      <ToastContainer />
      <form
        className="font-[sans-serif] text-[#292828] max-w-4xl mx-auto px-1 my-6"
        onSubmit={formik.handleSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="relative flex items-center ">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.prodName &&
                formik.errors.prodName &&
                "text-red-600"
              }`}
            >
              Product name *
            </label>
            <input
              type="text"
              name="prodName"
              placeholder="Enter Product name"
              value={formik.values.prodName}
              onChange={formik.handleChange}
              className={
                "px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              }
            />
          </div>
          <div className="relative flex items-center ">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.categoryId &&
                formik.errors.categoryId &&
                "text-red-600"
              }`}
            >
              Product category *
            </label>
            <select
              name="categoryId"
              value={formik.values.categoryId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="py-3 mt-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-100 dark:border-transparent dark:text-gray-500 dark:focus:ring-gray-600"
            >
              <option>Open this select Category</option>
              {category?.map((item: any) => {
                return (
                  <>
                    <option key={item._id} value={item._id}>
                      {item.categoryName}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.prodDescription &&
                formik.errors.prodDescription &&
                "text-red-600"
              }`}
            >
              Product description *
            </label>
            <textarea
              placeholder="Description..."
              className="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded"
              rows={3}
              name="prodDescription"
              value={formik.values.prodDescription}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.prodBenifits &&
                formik.errors.prodBenifits &&
                "text-red-600"
              }`}
            >
              Product benefits *
            </label>
            <textarea
              placeholder="Benefits..."
              className="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded"
              rows={3}
              name="prodBenifits"
              value={formik.values.prodBenifits}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.prodUse &&
                formik.errors.prodUse &&
                "text-red-600"
              }`}
            >
              Product use *
            </label>
            <textarea
              placeholder="Use Of Product..."
              className="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded"
              rows={3}
              name="prodUse"
              value={formik.values.prodUse}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.prodSaftyInfo &&
                formik.errors.prodSaftyInfo &&
                "text-red-600"
              }`}
            >
              Product SafetyInformation *
            </label>
            <textarea
              placeholder="Safety Information Of Product..."
              className="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded"
              rows={3}
              name="prodSaftyInfo"
              value={formik.values.prodSaftyInfo}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.images && formik.errors.images && "text-red-600"
              }`}
            >
              Product images *
            </label>
            <input
              type="file"
              multiple
              name="images"
              onChange={(event: any) => {
                formik.setFieldValue("images", event.currentTarget.files);
              }}
              className="mt-4 w-full text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
            />
          </div>

          <br />
          <span className="text-sm text-red-600">
            * Enter Flavour & Size Comma Seperated (,) ex. 10ml,20ml,50ml....
          </span>
          <br />
          <div className="relative flex items-center ">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Product Flavour
            </label>
            <input
              type="text"
              name="prodFlavour"
              placeholder="Enter Product Flavour"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.prodFlavour}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center ">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Product Sizes
            </label>
            <input
              type="text"
              name="prodSize"
              placeholder="Enter Product Sizes"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.prodSize}
              onChange={formik.handleChange}
            />
          </div>

          <div className="relative flex items-center sm:col-span-2">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.prodQty &&
                formik.errors.prodQty &&
                "text-red-600"
              }`}
            >
              Product quentity *
            </label>
            <input
              type="number"
              placeholder="Enter Product Quentity"
              name="prodQty"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.prodQty}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.prodPrice &&
                formik.errors.prodPrice &&
                "text-red-600"
              }`}
            >
              Product price *
            </label>
            <input
              type="number"
              name="prodPrice"
              placeholder="Enter Product Price"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
              value={formik.values.prodPrice}
              onChange={formik.handleChange}
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label
              className={`text-[13px] absolute top-[-10px] left-0 font-semibold ${
                formik.touched.prodExpiryDate &&
                formik.errors.prodExpiryDate &&
                "text-red-600"
              }`}
            >
              Product Expiery-Date *
            </label>
            <input
              type="date"
              name="prodExpiryDate"
              className="px-4 mt-3 py-3 bg-[#f0f1f2] text-black w-full text-sm outline-[#007bff] rounded"
              value={formik.values.prodExpiryDate as any}
              onChange={formik.handleChange}
            />
          </div>
          {formik.touched.prodExpiryDate && formik.errors.prodExpiryDate && (
            <span className="text-sm text-red-600">
              {formik.errors.prodExpiryDate as any}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="mt-10 px-2 py-2.5 w-full rounded text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
        >
          Save Product
        </button>
      </form>
    </>
  );
};

export default AddProduct;
