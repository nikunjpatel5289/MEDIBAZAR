"use client";
import NavBar from "@/components/admin-layout/NavBar";
import SideBar from "@/components/admin-layout/SideBar";
import EditProduct from "@/components/admin-layout/productsComponent/EditProduct";
import { useParams } from "next/navigation";

const Page = () => {
  const param = useParams();
  return (
    <>
      <NavBar />
      <SideBar />
      <EditProduct ID={param.id as string} />
    </>
  );
};

export default Page;
