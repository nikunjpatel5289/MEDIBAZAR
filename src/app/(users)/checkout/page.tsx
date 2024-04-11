"use client";

import "@/app/main.css";
import Header from "@/components/user-layout/Header";
import BillingData from "@/components/user-layout/checkoutComponent/BillingData";
import OrderData from "@/components/user-layout/checkoutComponent/OrderData";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

interface FormValues {
  name: string;
  phone: number;
  // email: string;
  address: string;
  country: string;
  state: string;
  zip: number;
}

const page = () => {
  const [cartData, setCartData] = useState<any>([]);
  const [subtotal, setSubTotal] = useState<number>(0);
  const [finalTotal, setFinalTotal] = useState<number>(0);
  const [copenCode, setCoopenCode] = useState<number>(0);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.number().required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.number().required("Zip Code is required"),
  });

  const getCartData = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token") || "");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      const response = await axios.get("http://127.0.0.1:3000/cart", config);
      if (response) {
        const data = response.data.data.products;
        const TOTAL = data.map((item: any) => {
          return item.qty * item.productId["prodPrice"];
        });
        const FINALTOTAL = TOTAL.reduce(
          (acc: number, cur: number) => acc + cur,
          0
        );
        setSubTotal(FINALTOTAL);
        setFinalTotal(FINALTOTAL);
        // console.info("TOTAL", TOTAL, FINALTOTAL);

        setCartData(response.data.data.products);
      }
    } catch (error: any) {
      console.info(error.response.data);
    }
  };

  const handelApplyCoopenCode = async (code: string) => {
    try {
      // console.info(code);
      const result = await axios.post("http://127.0.0.1:3000/promo/apply", {
        promcodename: code,
      });
      if (result.data.data.IsActive === true) {
        // console.info(result.data.data);
        let didectAmount: number;
        if (result.data.data.promotype === "Flat") {
          setFinalTotal(subtotal - result.data.data.promocodeamount);
          setCoopenCode(result.data.data.promocodeamount);
        } else {
          didectAmount = (subtotal * result.data.data.promocodeamount) / 100;
          setCoopenCode(didectAmount);
          setFinalTotal(subtotal - didectAmount);
        }
      }
    } catch (error: any) {
      console.info(error.response.data.message);
    }
  };

  const handleSubmit = async (values: FormValues) => {
    try {
      console.info("Call", values);
    } catch (error: any) {
      console.info(error);
      // toast("Somthig Wrong Try Again...");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "" as any,
      address: "",
      country: "",
      state: "",
      zip: "" as any,
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <>
      <Header />
      <div className="site-section">
        <div className="container">
          <div className="row">
            <BillingData formik={formik}/>
            <OrderData
              data={cartData}
              handelApplyCoopenCode={handelApplyCoopenCode}
              subtotal={subtotal}
              finalTotal={finalTotal}
              copenCode={copenCode}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
