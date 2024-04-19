"use client";
import NavBar from "@/components/admin-layout/NavBar";
import SideBar from "@/components/admin-layout/SideBar";
import InHouseInvoice from "@/components/admin-layout/orders/InHouseInvoice";
import { useParams } from "next/navigation";

const page = () => {
  const param = useParams();
  const ID :any = param.id;
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          <div className="text-start text-gray-600 font-sans text-4xl mb-4">
            <span className="font-semibold">Order Invoice</span>
          </div>
        </div>
        <InHouseInvoice PAYID={ID}/>
      </div>
    </>
  );
};

export default page;
