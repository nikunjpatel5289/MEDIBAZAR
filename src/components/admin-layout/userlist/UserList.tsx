"use client";
import { useState } from "react";
import UserData from "./UserData";

const UserList = () => {
  const [sercah, setSearch] = useState("");
  const [limit, setlimit] = useState(2);
  const [page, setPage] = useState(1);
  // console.info(page)
  return (
    <>
      <div className="flex border border-black overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input
          type="search"
          placeholder="Search User First Name..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
        />
        {/* <button
          type="button"
          className="flex items-center justify-center bg-black px-5 text-sm text-white"
        >
          Search
        </button> */}
      </div>
      <div className="overflow-x-auto py-5">
        <table className="min-w-full bg-gray-200 font-[sans-serif] rounded-xl">
          <thead className="whitespace-nowrap">
            <tr>
              <th className="pl-6 w-8">Index</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Role
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Active
              </th>
            </tr>
          </thead>
          <UserData search={sercah} limit={limit} page={page}/>
          {/* <UserData search={sercah} /> */}
        </table>
        <div className="md:flex mt-4 px-6">
          <p className="text-sm text-gray-400 flex-1">
            Showind 1 to 5 of 100 entries
          </p>
          <div className="flex items-center max-md:mt-4">
            <p className="text-sm text-gray-800">Display</p>
            <select
              onChange={(e: any) => setlimit(e.target.value)}
              className="text-sm text-black border border-gray-500 rounded h-7 mx-4 outline-none"
            >
              <option>2</option>
              <option>5</option>
              <option>10</option>
              <option>50</option>
              <option>100</option>
            </select>
            <ul className="flex space-x-1 ml-2">
              <li className={`${page > 1 ? "cursor-pointer bg-gray-300" : "bg-gray-100"}  w-20 rounded`}>
                <div className="flex items-center justify-center mt-[2px]">
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
                  <span onClick={() => setPage(prev => prev > 1 ? prev - 1 : prev )}>Prev</span>
                </div>
              </li>
              
              <li className="cursor-pointer bg-gray-300 w-20 rounded">
                <div className="flex items-center justify-center mt-[2px]">
                  <span onClick={() => setPage(prev => prev + 1)}>Next</span>
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
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
