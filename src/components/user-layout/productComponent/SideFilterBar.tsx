import axios from "axios";
import { useEffect, useState } from "react";

interface prop {
  handelCateSearch: (data?: string) => void;
  setOrder: number | any
}

const SideFilterBar = ({ handelCateSearch, setOrder }: prop) => {
  const [catData, setCatData] = useState<Array<any>>([]);
  const handelCategoryGet = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:3000/category");
      if (result) {
        setCatData(result.data.data);
      }
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    handelCategoryGet();
  }, []);

  return (
    <form className="hidden lg:block">
      <h3 className="mb-3">Categories</h3>
      <ul
        role="list"
        className="space-y-4 border-b border-gray-500 pb-6 text-sm font-medium text-gray-900"
      >
        {catData.map((item: any) => {
          return (
            <li key={item.id}>
              <span
                onClick={() => handelCateSearch(item.id)}
                className="hover:cursor-pointer hover:text-slate-500"
              >
                {item.categoryName}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="border-b border-gray-500 py-6">
        <h3 className="-my-3 flow-root">
          <span className="font-medium text-gray-500 mb-3">Sort Price</span>
        </h3>
        <div className="pt-6" id="filter-section-0">
          <div className="space-y-4">
            <div className="flex items-center">
              <span
                onClick={()=> setOrder(1)}
                className=" text-m text-black hover:cursor-pointer hover:text-gray-600"
              >
                By Price : Low To High
              </span>
            </div>
            <div className="flex items-center">
              <span
                onClick={()=> setOrder(-1)}
                className=" text-m text-black hover:cursor-pointer hover:text-gray-600"
              >
                By Price : High To Low
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="border-b border-gray-200 py-6">
        <h3 className="-my-3 flow-root">
          <span className="font-medium text-gray-900 mb-3">Color</span>
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
      </div> */}
    </form>
  );
};

export default SideFilterBar;
