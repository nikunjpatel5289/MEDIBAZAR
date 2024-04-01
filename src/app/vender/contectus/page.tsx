import NavBar from "@/components/vender-layout/NavBar";
import SideBar from "@/components/vender-layout/SideBar";
import Contect from "@/components/vender-layout/contectusComponent/Contect";

const page = () => {
  return (
    // Try Contect Make Component And Load Both Side Admin as Well...
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          <div className="text-start text-gray-600 font-sans text-4xl mb-4">
            <span className="font-semibold">User Cotect-List</span>
          </div>
        </div>
        <Contect />
      </div>
    </>
  );
};

export default page;
