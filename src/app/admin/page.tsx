import NavBar from "@/components/admin-layout/NavBar";
import SideBar from "@/components/admin-layout/SideBar";
import Cards from "@/components/admin-layout/dashboard/Cards";

const page = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          <div className="text-start text-gray-600 font-sans text-4xl mb-6">
            <span>Dashboard</span>
          </div>
          
          <div className="grid grid-cols-3 grid-rows-1 gap-4">
            <Cards />
          </div>

          {/* Other Components */}
        </div>
      </div>
    </>
  );
};

export default page;
