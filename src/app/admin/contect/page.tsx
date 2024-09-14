import NavBar from "@/components/admin-layout/NavBar";
import SideBar from "@/components/admin-layout/SideBar";
import ContectList from "@/components/admin-layout/userContectUsComponent/ContectList";

const Page = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          <div className="text-start text-gray-600 font-sans text-4xl mb-4">
            <span className="font-semibold">{`User Contect's`}</span>
          </div>
        </div>
        <ContectList />
      </div>
    </>
  );
};

export default Page;
