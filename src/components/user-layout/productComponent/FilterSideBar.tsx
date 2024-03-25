// "use client";
// import { useState } from "react";
import SideFilterBar from "./SideFilterBar";
import TopFilterBar from "./TopFilterBar";

export default function FilterSideBar ({children} : Readonly<{ children: React.ReactNode }>)  {
//   const [showSort, setShowSort] = useState(false);
  // const [search,setSearch] = useState("")
  // const onSearchChange = (e:any) => {
  //       setSearch(e.target.value)
  // }
  return (
    <>
      <div className="bg-white">
        <div>
          <main className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
            <TopFilterBar />

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              {/* <h2 id="products-heading" className="sr-only">
                Products
              </h2> */}

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* <form className="hidden lg:block">
                  <h3 className="mb-3">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    <li>
                      <a href="#">Totes</a>
                    </li>
                    <li>
                      <a href="#">Backpacks</a>
                    </li>
                    <li>
                      <a href="#">Travel Bags</a>
                    </li>
                    <li>
                      <a href="#">Hip Bags</a>
                    </li>
                    <li>
                      <a href="#">Laptop Sleeves</a>
                    </li>
                  </ul>

                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <span className="font-medium text-gray-900 mb-3">
                        Color
                      </span>
                    </h3>
                    <div className="pt-6" id="filter-section-0">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            id="filter-color-0"
                            name="color[]"
                            value="white"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-0"
                            className="ml-3 text-sm text-gray-600"
                          >
                            White
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-1"
                            name="color[]"
                            value="beige"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-1"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Beige
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-2"
                            name="color[]"
                            value="blue"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-2"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Blue
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-3"
                            name="color[]"
                            value="brown"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-3"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Brown
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-4"
                            name="color[]"
                            value="green"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-4"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Green
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-5"
                            name="color[]"
                            value="purple"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-5"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Purple
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form> */}
                <SideFilterBar />
                <div className="lg:col-span-3">
                    {children}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};
