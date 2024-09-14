import NavBar from "@/components/admin-layout/NavBar";
import SideBar from "@/components/admin-layout/SideBar";
import Cards from "@/components/admin-layout/dashboard/Cards";
import DayChart from "@/components/admin-layout/dashboard/DayChart";
import MonthChart from "@/components/admin-layout/dashboard/MonthChart";

const Page = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-2 mt-14">
          {/* <div className="text-start text-gray-600 font-sans text-4xl mb-6">
            <span className="font-semibold">Dashboard</span>
          </div> */}

          <div className="grid grid-cols-3 grid-rows-1 gap-4">
            <Cards />
          </div>
          <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <MonthChart />
            <DayChart />
          </div>
          {/* <div className="grid grid-cols-1 mt-4 h-auto">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-600">
                <svg
                  className="w-[38px] h-[38px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.2"
                    d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
          
              <div className="flex justify-between">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  sdfs
                </h5>
                <p className="mb-1 font-normal text-xl text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione vel non nam illo, beatae est porro earum quibusdam
                  quas soluta laborum aut praesentium quam assumenda, natus rem
                  molestiae sed alias.
                </p>
              </div>
            </div>
          </div> */}
          {/* Other Components */}
        </div>
      </div>
    </>
  );
};

export default Page;
