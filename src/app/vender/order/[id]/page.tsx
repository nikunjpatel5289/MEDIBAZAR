"use client";
import NavBar from "@/components/vender-layout/NavBar";
import SideBar from "@/components/vender-layout/SideBar";
import InvoiceShow from "@/components/vender-layout/orderComponents/InvoiceShow";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const ID: any = params.id;
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          <div className="text-start text-gray-600 font-sans text-4xl mb-4">
            <span className="font-semibold">Invoice</span>
          </div>
        </div>
        {/* Content */}
        <InvoiceShow PAYID={ID} />
      </div>
    </>
  );
};

export default Page;
