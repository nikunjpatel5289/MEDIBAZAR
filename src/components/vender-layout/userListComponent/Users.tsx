"use client";
import CenterLoder from "@/components/ExtraComponent/CenterLoder";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState<any>([]);
  const [search, setSearch] = useState<string>("");
  const [limit, setlimit] = useState(2);
  const [page, setPage] = useState(1);
  let i = 1;

  const getTokenData = () => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return config;
  };

  const handleGetData = async () => {
    try {
      setLoad(true);
      const config = getTokenData();
      const response = await axios.get(
        `http://127.0.0.1:3000/user?keyword=${search}&limit=${limit}&page=${page}`,
        config
      );

      if (response) {
        setData(response.data.data);
        // console.info(response.data.data);
      }
      setLoad(false);
    } catch (error: any) {
      // console.info(error.response.data);
      setData(error.response.data);
    }
  };

  useEffect(() => {
    handleGetData();
  }, [limit, page]);

  return (
    <>
      <div className="flex border border-black overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input
          type="search"
          placeholder="Search By User First Name..."
          onChange={(e: any) => setSearch(e.target.value)}
          className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
        />
        <button
          type="button"
          onClick={handleGetData}
          className="flex items-center justify-center bg-black px-5 text-sm text-white"
        >
          Search
        </button>
      </div>
      {load ? (
        <CenterLoder />
      ) : (
        <>
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
                {data.map((item: any) => {
                  return (
                    <tr className="odd:bg-blue-50">
                      <td className="pl-6 w-8">{i++}</td>
                      <td className="px-6 py-3 text-sm">
                        <div className="flex items-center cursor-pointer">
                          {/* <img src="#" className="w-9 h-9 rounded-full shrink-0" /> */}
                          <div className="ml-4">
                            <p className="text-sm text-black">
                              {item.firstName} {item.lastName}
                            </p>
                            <p className="text-xs text-gray-400">
                              {item.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm">+91 {item.phone}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div
                            className={`h-2.5 w-2.5 rounded-full ${
                              item.isActive ? `bg-green-500` : `bg-red-500`
                            } me-2`}
                          />
                          {item.isActive ? "Active" : "De-Active"}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="md:flex mt-4 px-6">
            <p className="text-sm text-gray-400 flex-1">
              Showind 1 to 5 of 100 entries
            </p>
            <div className="flex items-center max-md:mt-4">
              <p className="text-sm text-gray-400">Display</p>
              <select
                onChange={(e: any) => setlimit(e.target.value)}
                className="text-sm text-gray-400 border border-gray-400 rounded h-7 mx-4 outline-none"
              >
                <option>2</option>
                <option>5</option>
                <option>10</option>
                <option>50</option>
                <option>100</option>
              </select>
              <ul className="flex space-x-1 ml-2">
                <li
                  className={`${
                    page > 1 ? "cursor-pointer bg-gray-300" : "bg-gray-100"
                  }  w-20 rounded`}
                >
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
                    <span
                      onClick={() =>
                        setPage((prev) => (prev > 1 ? prev - 1 : prev))
                      }
                    >
                      Prev
                    </span>
                  </div>
                </li>

                <li className="cursor-pointer bg-gray-300 w-20 rounded">
                  <div className="flex items-center justify-center mt-[2px]">
                    <span onClick={() => setPage((prev) => prev + 1)}>
                      Next
                    </span>
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
        </>
      )}
    </>
  );
};

export default Users;
