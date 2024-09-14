"use client";
import NavBar from "@/components/admin-layout/NavBar";
import SideBar from "@/components/admin-layout/SideBar";
import AllOrderInvoice from "@/components/admin-layout/orders/AllOrderInvoice";
import { useParams } from "next/navigation";

const Page = () => {
  const param = useParams();
  const ID: any = param.id;
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
        <AllOrderInvoice PAYID={ID} />
      </div>
    </>
  );
};

export default Page;
