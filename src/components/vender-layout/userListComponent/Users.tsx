"use client";
import { useState } from "react";

const Users = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="flex border border-black overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input
          type="search"
          placeholder="Search By User Name..."
          className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
        />
        <button
          type="button"
          className="flex items-center justify-center bg-black px-5 text-sm text-white"
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto py-5">
        <table className="min-w-full bg-gray-200 font-[sans-serif]">
          <thead className="whitespace-nowrap">
            <tr>
              <th className="pl-6 w-8">Index</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            <tr className="odd:bg-blue-50">
              <td className="pl-6 w-8">1</td>
              <td className="px-6 py-3 text-sm">
                <div className="flex items-center cursor-pointer">
                  <img src="#" className="w-9 h-9 rounded-full shrink-0" />
                  <div className="ml-4">
                    <p className="text-sm text-black">Gladys Jones</p>
                    <p className="text-xs text-gray-400">gladys@example.com</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-3 text-sm">+91 1234567890</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      active ? `bg-green-500` : `bg-red-500`
                    } me-2`}
                  />
                  {active ? "Active" : "De-Active"}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className="md:flex mt-4 px-6">
          <p className="text-sm text-gray-400 flex-1">
            Showind 1 to 5 of 100 entries
          </p>
          <div className="flex items-center max-md:mt-4">
            <p className="text-sm text-gray-400">Display</p>
            <select className="text-sm text-gray-400 border border-gray-400 rounded h-7 mx-4 outline-none">
              <option>5</option>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
            <ul className="flex space-x-1 ml-2">
              <li className="flex items-center justify-center cursor-pointer bg-gray-300 w-7 h-7 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-gray-500"
                  viewBox="0 0 55.753 55.753"
                >
                  <path
                    d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                    data-original="#000000"
                  />
                </svg>
              </li>
              <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
                1
              </li>
              <li className="flex items-center justify-center cursor-pointer text-sm bg-[#007bff] text-white w-7 h-7 rounded">
                2
              </li>
              <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
                3
              </li>
              <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
                4
              </li>
              <li className="flex items-center justify-center cursor-pointer bg-gray-300 w-7 h-7 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-gray-500 rotate-180"
                  viewBox="0 0 55.753 55.753"
                >
                  <path
                    d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                    data-original="#000000"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Users;
