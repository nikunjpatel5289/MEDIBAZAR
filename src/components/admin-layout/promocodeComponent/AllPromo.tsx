"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllPromo = () => {
  const [data, setData] = useState<any>([]);
  const [showDel, setShowDel] = useState(false);
  const [val, setVal] = useState<string>("");
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

  const getPromoCode = async () => {
    try {
      const config = getTokenData();
      const response = await axios.get(`http://127.0.0.1:3000/promo`, config);
      if (response) {
        setData(response.data.data);
      }
    } catch (error: any) {
      toast.warn(error.response.data);
    }
  };

  useEffect(() => {
    getPromoCode();
  }, []);

  const handlePromoActivation = async (promoId: string) => {
    try {
      const config = getTokenData();
      const response = await axios.patch(
        `http://127.0.0.1:3000/promo/${promoId}`,
        null,
        config
      );
      if (response) {
        getPromoCode();
      }
    } catch (error: any) {
      toast.warn(error.response.data);
    }
  };

  const handleRemovePromoCode = async (promoId: string) => {
    try {
      const config = getTokenData();
      const response = await axios.delete(
        `http://127.0.0.1:3000/promo/${promoId}`,
        config
      );
      if (response) {
        getPromoCode();
        toast.success("Promo Code Removed...");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <div
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
              Are you sure you want to delete this Product?
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
              onClick={() => {
                handleRemovePromoCode(val);
                setShowDel(!showDel);
              }}
              className="px-6 py-2.5 rounded-md text-white text-sm font-semibold border-none outline-none bg-red-600 hover:bg-red-700 active:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <table className="min-w-full bg-gray-200 font-[sans-serif] mt-5 rounded-xl shadow-xl">
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
          {data.map((item: any) => {
            const date = new Date(item.startDate);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");
            const formattedDate = `${day}/${month}/${year}`;

            const date1 = new Date(item.endDate);
            const year1 = date1.getFullYear();
            const month1 = String(date1.getMonth() + 1).padStart(2, "0");
            const day1 = String(date1.getDate()).padStart(2, "0");
            const endDate = `${day1}/${month1}/${year1}`;

            return (
              <tr className="odd:bg-gray-50" key={item._id}>
                <td className="px-6 py-3 text-sm">{i++}</td>
                <td className="px-6 py-3 text-sm">
                  <div className="flex items-center cursor-pointer">
                    <div className="ml-4">
                      <p className="text-sm text-black">{item.promcodename}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 text-sm">{formattedDate}</td>
                <td className="px-6 py-3 text-sm">{endDate}</td>
                <td className="px-6 py-3 text-sm">{item.promotype}</td>
                <td className="px-6 py-3 text-sm">
                  {item.promocodeamount}{" "}
                  {item.promotype === "Flat" ? `Rs` : `(%)`}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        item.IsActive ? `bg-green-500` : `bg-red-500`
                      } me-2`}
                    />
                    {item.IsActive ? "" : "De-"}Active
                  </div>
                </td>
                <td className="px-6 py-3 flex justify-center items-center">
                  <label className="relative cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      onChange={() => handlePromoActivation(item._id)}
                      checked={item.IsActive ? true : false}
                    />
                    <div className="w-11 h-6 flex items-center bg-red-500 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                  <label>
                    <button
                      className="mx-1 my-2"
                      onClick={() => {
                        setShowDel((prev) => !prev);
                        setVal(item._id);
                      }}
                      title="Delete"
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
                  </label>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AllPromo;
