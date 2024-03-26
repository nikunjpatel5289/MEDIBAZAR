import NavBar from "@/components/vender-layout/NavBar";
import SideBar from "@/components/vender-layout/SideBar";
import Card from "@/components/vender-layout/dashboardComponent/Card";

const page = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          <div className="text-start text-gray-600 font-sans text-4xl mb-6">
            <span className="font-semibold">Your Dashboard</span>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 gap-4">
            <Card title="Total Reveniew" />
            <Card title="Users" />
            <Card title="Total Product" />
          </div>

          {/* Other Components */}
        </div>
      </div>
    </>
  );
};

export default page;
