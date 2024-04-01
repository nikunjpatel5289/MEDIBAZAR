"use client";
import Link from "next/link";
// import { useState } from "react";

interface prop {
  catData: [];
  removeCategory(id: string): any;
}

const AllCategories = ({ catData, removeCategory }: prop) => {
  let i = 1;
  // const [showDel, setShowDel] = useState(false);
  return (
    <>
      {/* <div
        className={`${
          showDel ? "" : "hidden"
        } fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]`}
      >
        <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
          <div className="my-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 fill-red-500 inline"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000"
              />
              <path
                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000"
              />
            </svg>
            <h4 className="text-lg font-semibold mt-6">
              Are you sure you want to delete this Category?
            </h4>
          </div>
          <div className="text-center space-x-4">
            <button
              type="button"
              onClick={() => setShowDel(!showDel)}
              className="px-6 py-2.5 rounded-md text-black text-sm font-semibold border-none outline-none bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-6 py-2.5 rounded-md text-white text-sm font-semibold border-none outline-none bg-red-600 hover:bg-red-700 active:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div> */}

      <div className="overflow-x-auto text-center mx-44">
        <table className="mt-6 min-w-[600px] bg-gray-200 font-[sans-serif]">
          <thead className="bg-gray-100 whitespace-nowrap">
            <tr>
              <th className="px-6 py-3  text-xs font-semibold text-gray-700">
                Index
              </th>
              <th className="px-6 py-3  text-xs font-semibold text-gray-700">
                Name
              </th>
              <th className="px-6 py-3  text-xs font-semibold text-gray-700">
                Description
              </th>
              <th className="px-6 py-3  text-xs font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {catData?.map((item: any) => {
              return (
                <tr className="" key={item._id}>
                  <td className="px-6 py-4 text-base">{i++}</td>
                  <td className="px-6 py-4 text-base">{item.categoryName}</td>
                  <td className="px-6 py-3 text-sm">
                    <div className="flex items-center cursor-pointer">
                      <div className="ml-4">
                        {/*text-xs text-wrap h-16 overflow-y-scroll */}
                        <p className="text-sm text-gray-600 ">
                          {item.categoryDescription}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/admin/categories/edit/${1223}`}
                      className="text-blue-500 hover:text-blue-700 mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      className="mr-4"
                      // title="Delete"
                      onClick={() => removeCategory(item._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 fill-red-500 hover:fill-red-700"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                          data-original="#000000"
                        />
                        <path
                          d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                          data-original="#000000"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllCategories;
