"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const ContectList = () => {
  const [data, setData] = useState<any>([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState()
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

  const getUserContect = async () => {
    try {
      const config = getTokenData();
      const response = await axios.get(`http://127.0.0.1:3000/contect`, config);

      if (response) {
        setData(response.data.data);
      }
    } catch (error: any) {
      console.info("ERROR", error.response.data);
    }
  };

  useEffect(() => {
    getUserContect();
  }, []);

  const handleSearchData = async () => {
    try {
      const config = getTokenData()
      const response = await axios.get(`http://127.0.0.1:3000/contect?start=${startDate}&end=${endDate}`, config)
      
      setData(response.data.data)
      
    } catch (error: any) {
      console.info(error.response.data);
    }
  };

  return (
    <>
      <div className="flex justify-start">
        <div className="mx-2">
          <label className="text-sm mb-2 block">Starting Date</label>
          <input
            type="date"
            onChange={(e: any) => setStartDate(e.target.value)}
            className="px-4 py-3 bg-[#f0f1f2] text-black text-sm outline-[#007bff] rounded"
          />
        </div>
        <div className="mx-2">
          <label className="text-sm mb-2 block">End Date</label>
          <input
            type="date"
            onChange={(e: any) => setEndDate(e.target.value)}
            className="px-4 py-3 bg-[#f0f1f2] text-black text-sm outline-[#007bff] rounded"
          />
        </div>
        <button
          type="button"
          onClick={handleSearchData}
          className="px-2 h-10 mt-8 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#333] hover:bg-[#222] active:bg-[#333]"
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto py-8">
        <table className="min-w-full bg-gray-200 font-[sans-serif] rounded-xl shadow-xl">
          <thead className="whitespace-nowrap">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Index
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                User Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Email
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {data.map((item: any) => {
              const date = new Date(item.createdAt);
              const year = date.getFullYear();
              const month = String(date.getMonth() + 1).padStart(2, "0");
              const day = String(date.getDate()).padStart(2, "0");
              const formattedDate = `${year}-${month}-${day}`;

              return (
                <tr className="odd:bg-gray-50" key={item._id}>
                  <td className="px-6 py-3 text-sm">{i++}</td>
                  <td className="px-6 py-3 text-sm">
                    <div className="flex items-center cursor-pointer">
                      <div className="ml-4">
                        <p className="text-lg text-black">
                          {item.firstName} {item.lastName}
                        </p>
                        {/* below p.message tag css =>  h-16 overflow-y-scroll */}
                        <p className="text-xs text-gray-600 text-wrap">
                          {item.message}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm">{item.email}</td>
                  <td className="px-6 py-3 text-sm">{formattedDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContectList;
