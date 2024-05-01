"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const InHouseReport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [selCat, setSelCat] = useState(true);
  const [reportData, setReportData] = useState([]);

  const getTokenData = () => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return { config };
  };

  const getCategory = async () => {
    try {
      const { config } = getTokenData();
      const response = await axios.get(
        "http://127.0.0.1:3000/category",
        config
      );

      if (response) {
        setCategory(response.data.data);
      }
    } catch (error: any) {
      console.info(error.response.data);
    }
  };

  const handelGetReportData = async () => {
    try {
      const { config } = getTokenData();
      const result = await axios.get(
        `http://127.0.0.1:3000/order/Report/Category?CATID=${selCat}`,
        config
      );

      if (result.status === 200) {
        // console.info(result.data.data);
        setReportData(result.data.data);
      }
    } catch (error: any) {
      console.info(error.response.data);
    }
  };

  useEffect(() => {
    handelGetReportData();
    getCategory();
  }, [selCat]);

  return (
    <>
      <div className="relative font-[sans-serif] w-max mx-auto">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-2.5 border-2 rounded-md border-gray-300 text-gray-500 text-sm font-semibold outline-none bg-white hover:bg-gray-50 active:bg-white"
        >
          Filter by Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3 fill-gray-500 inline ml-3 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clipRule="evenodd"
              data-original="#000000"
            />
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute shadow-lg bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto">
            {category?.map((item: any) => {
              return (
                <li
                  key={item._id}
                  className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
                  onClick={() => {
                    setSelCat(item._id);
                    setIsOpen(false);
                  }}
                >
                  {item.categoryName}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="overflow-x-auto py-5">
        <table className="min-w-full bg-gray-200 font-[sans-serif] rounded-xl shadow-xl">
          <thead className="whitespace-nowrap">
            <tr>
              <th className="px-6 py-3 text-center text-sm font-semibold text-black">
                Product Name
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-black">
                Quentity
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-black">
                Salse
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {reportData?.map((item: any, key: number) => {
              return (
                <tr className="odd:bg-gray-50" key={key}>
                  <td className="px-6 py-3 text-sm">
                    <div className="flex items-center cursor-pointer">
                      <div className="ml-4">
                        <p className="text-sm text-black">{item._id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center text-sm">
                    {item.totalQuantity}
                  </td>
                  <td className="px-6 py-3 text-center text-sm">
                    RS. {item.totalSales}
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

export default InHouseReport;
