import NavBar from "@/components/admin-layout/NavBar";
import SideBar from "@/components/admin-layout/SideBar";
import AddCategories from "@/components/admin-layout/categoriesComponents/AddCategories";
import AllCategories from "@/components/admin-layout/categoriesComponents/AllCategories";

const page = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          <div className="text-start text-gray-600 font-sans text-4xl mb-4">
            <span className="font-semibold">Add Categories</span>
          </div>
        </div>
        <AddCategories />
        <hr />
        <AllCategories />
      </div>
    </>
  );
};

export default page;
