import NavBar from "@/components/admin-layout/NavBar";
import SideBar from "@/components/admin-layout/SideBar";
import InHouseReport from "@/components/admin-layout/reportComponent/InHouseReport";

const page = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          <div className="text-start text-gray-600 font-sans text-4xl mb-4">
            <span className="font-semibold">In-House Reports</span>
          </div>
        </div>
        <InHouseReport />
      </div>
    </>
  );
};

export default page;
