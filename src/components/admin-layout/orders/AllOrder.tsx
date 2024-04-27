"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllOrder = () => {
  let i = 1;
  const [orderData, setOrderData] = useState<any>([]);
  const [limit, setlimit] = useState(5);
  const [page, setPage] = useState(1);
  const [loder, setLoder] = useState<boolean>(false);

  const tokenData = () => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return config;
  };

  const getOrderData = async () => {
    try {
      //   setLoder(true);
      const config = tokenData();
      const result = await axios.get(
        `http://localhost:3000/order/AllOrderShowAdmin?limit=${limit}&page=${page}`,
        config
      );

      if (result) {
        setOrderData(result.data.data);
        // setLoder(false);
      }
    } catch (error: any) {
      console.info(error.response.data.message);
    }
  };
  
  const handelOrderStatusChange = async (id :string) => {
    try {
      const config = tokenData();
      const result = await axios.patch(`http://127.0.0.1:3000/order/orderStatus/${id}`,null,config)
      if(result.status === 200) {
        getOrderData()
      }
    } catch (error : any) {
      console.info(error.response.data.message)
    } 
  }

  const handelLimitchane = (val: number) => {
    setlimit(val);
    setPage(1);
  };

  useEffect(() => {
    getOrderData();
  }, [limit, page]);

  return (
    <>
      <div className="overflow-x-auto py-4">
        <table className="min-w-full bg-gray-200 font-[sans-serif] rounded-xl shadow-xl">
          <thead className="whitespace-nowrap">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Index
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Order Code
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Num. of Products
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Customer
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Order Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Delivery Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Payment Status
              </th>
              {/* <th className="px-6 py-4 text-left text-sm font-semibold text-black">
              Options
            </th> */}
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {orderData.map((item: any, index: number) => {
              const date = new Date(item.orderDate);
              const year = date.getFullYear();
              const month = String(date.getMonth() + 1).padStart(2, "0");
              const day = String(date.getDate()).padStart(2, "0");
              const formattedDate = `${day}/${month}/${year}`;
              return (
                <tr className="odd:bg-gray-50" key={index}>
                  <td className="px-6 py-4 text-sm">{i++}</td>
                  <td className="px-6 py-4 text-sm">{item.paymentId}</td>
                  <td className="px-6 py-4 text-sm">
                    {item.orderProducts.length}
                  </td>
                  <td className="px-6 py-4 text-sm">{item.name}</td>
                  <td className="px-6 py-4 text-sm">{formattedDate}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center cursor-pointer">
                      <div className="ml-2">
                      <div
                            className={`mx-auto px-3 py-1 ${
                              item.orderStatus == "In Process"
                                ? "bg-yellow-400"
                                : item.orderStatus == "Confirmed"
                                ? "bg-orange-600"
                                : item.orderStatus == "Delivered" &&
                                  "bg-green-400"
                            } w-max text-black rounded`}
                            onClick={()=> {item.orderStatus == "Delivered" ? "" : handelOrderStatusChange(item._id)}}
                          >
                            {item.orderStatus}
                          </div>
                        {/* <p className="text-sm text-black">{item.orderStatus}</p> */}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="w-[68px] block text-center py-0.5 border-2 border-green-500 text-green-500 font-semibold rounded text-xs">
                      {item.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/admin/order/allorder/${item.paymentId}`}
                      className="bg-white hover:cursor-pointer hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
                    >
                      Invoice
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="md:flex mt-4 px-6">
        <p className="text-sm text-gray-400 flex-1">
          {/* Show 1 to 5 of 100 entries */}
        </p>
        <div className="flex items-center max-md:mt-4">
          <p className="text-sm text-gray-800">Display</p>
          <select
            onChange={(e: any) => handelLimitchane(e.target.value)}
            className="text-sm text-black border border-gray-500 rounded h-7 mx-4 outline-none"
          >
            <option>5</option>
            <option>10</option>
            <option>50</option>
            <option>100</option>
          </select>
          <ul className="flex space-x-1 ml-2">
            <li
              className={`
        ${page > 1 ? "cursor-pointer bg-gray-300" : "bg-gray-100"}  
        w-20 rounded`}
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

            <li
              className={`${
                orderData.length < limit
                  ? "bg-gray-100"
                  : "cursor-pointer bg-gray-300"
              }   w-20 rounded`}
            >
              <div className="flex items-center justify-center mt-[2px]">
                <span
                  onClick={() =>
                    orderData.length < limit
                      ? setPage(page)
                      : setPage((prev) => prev + 1)
                  }
                >
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
  );
};

export default AllOrder;
