"use client"

import "@/app/main.css";
import Header from "@/components/user-layout/Header";
import BillingData from "@/components/user-layout/checkoutComponent/BillingData";
import OrderData from "@/components/user-layout/checkoutComponent/OrderData";

const page = () => {
  return (
    <>
      <Header />
      <div className="site-section">
        <div className="container">
          <div className="row">
            <BillingData />
            <OrderData />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
