"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contect = () => {
  const [data,setData] = useState<any>([])
  let i =1;

  const getTokenData = () => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    // const { id }: any = jwtDecode(token);
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return config;
  }

  const getUserContect = async () => {
    try {
      const config = getTokenData();

      const response = await axios.get(
        `http://127.0.0.1:3000/contect`,
        config
      );

      if (response) {
        setData(response.data.data);
      }
    } catch (error: any) {
      toast(error.response.data)
      // console.info("ERROR",error.response.data);
    }
  }

  useEffect(() => {
    getUserContect()
  },[])

  return (
    <div className="overflow-x-auto py-8">
      <ToastContainer />
      <table className="min-w-full bg-gray-200 font-[sans-serif]">
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
          {data.map((item:any) => {
             const date = new Date(item.createdAt);
             const year = date.getFullYear();
             const month = String(date.getMonth() + 1).padStart(2, '0');
             const day = String(date.getDate()).padStart(2, '0');
             const formattedDate = `${year}/${month}/${day}`;
            return (
              <tr className="odd:bg-blue-50">
                <td className="px-6 py-3 text-sm">{i++}</td>
                <td className="px-6 py-3 text-sm">
                  <div className="flex items-center cursor-pointer">
                    <div className="ml-4">
                      <p className="text-lg text-black">{item.firstName} {item.lastName}</p>
                      {/* h-16 overflow-y-scroll below */}
                      <p className="text-xs text-gray-600 text-wrap ">
                        {item.message}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 text-sm">{item.email}</td>
                <td className="px-6 py-3 text-sm">{formattedDate}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Contect;
