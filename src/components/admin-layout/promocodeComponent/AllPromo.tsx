"use client";
import { useState } from "react";

const AllPromo = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <div className="text-start text-gray-600 font-sans text-4xl my-4">
        <span className="font-semibold">Promo-Code's</span>
      </div>
      <table className="min-w-full bg-gray-200 font-[sans-serif] mt-5">
        <thead className="whitespace-nowrap">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
              Index
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
              PromCode Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
              Start Data
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
              End Data
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
              Type Of Promcode
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
              Discount Amount
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="whitespace-nowrap min-w-full">
          <tr className="odd:bg-blue-50">
            <td className="px-6 py-3 text-sm">1</td>
            <td className="px-6 py-3 text-sm">
              <div className="flex items-center cursor-pointer">
                <div className="ml-4">
                  <p className="text-sm text-black">Gladys Jones</p>
                </div>
              </div>
            </td>
            <td className="px-6 py-3 text-sm">12/24/2024</td>
            <td className="px-6 py-3 text-sm">12/24/2024</td>
            <td className="px-6 py-3 text-sm">Flat</td>
            <td className="px-6 py-3 text-sm">Rs. 200</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    active ? `bg-green-500` : `bg-red-500`
                  } me-2`}
                />
                {active ? "" : "De-"}Active
              </div>
            </td>
            <td className="px-6 py-3 flex justify-center items-center">
              <label className="relative cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  onChange={() => setActive(!active)}
                  checked={active ? true : false}
                />
                <div className="w-11 h-6 flex items-center bg-red-500 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
              <label>
                <button className="mx-1 my-2" title="Delete">
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
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AllPromo;
