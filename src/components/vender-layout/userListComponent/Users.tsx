"use client";
import CenterLoder from "@/components/ExtraComponent/CenterLoder";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState<any>([]);
  const [search, setSearch] = useState<string>("");
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
        `http://127.0.0.1:3000/user?keyword=${search}`,
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
  }, [search]);

  return (
    <>
      <div className="flex border border-black overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input
          type="search"
          placeholder="Search By User First Name..."
          onChange={(e: any) => setSearch(e.target.value)}
          className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
        />
        {/* <button
          type="button"
          onClick={handleGetData}
          className="flex items-center justify-center bg-black px-5 text-sm text-white"
        >
          Search
        </button> */}
      </div>
      {load ? (
        <CenterLoder />
      ) : (
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
                          <p className="text-xs text-gray-400">{item.email}</p>
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
      )}
    </>
  );
};

export default Users;
