"use client";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const VenderList = () => {
  const [data, setData] = useState<any>([]);
  const [search,setSerch] = useState<string>("")
  let i:number = 1;

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

  const getVenderData = async () => {
    try {
      const config = getTokenData();

      const response = await axios.get(
        `http://127.0.0.1:3000/user/venders?keyword=${search}`,
        config
      );

      if (response) {
        setData(response.data.data);
      }
    } catch (error: any) {
      console.info(error.response.data);
    }
  };

  useEffect(() => {
    getVenderData()
  },[])

  const handleVenderActivation = async (venderId: string) => {
    try {
      const config = getTokenData();
      const response = await axios.patch(`http://127.0.0.1:3000/user/vnderDeactive/${venderId}`,null, config);
      if(response) {
        getVenderData()
      }
    } catch (error : any) {
      console.info(error.response.data)
    } 
  }
 
  return (
    <>
      <div className="flex border border-black overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input
          type="email"
          placeholder="Search Vender First Name..."
          onChange={(e:any) => setSerch(e.target.value)}
          className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
        />
         <button
          type="button"
          onClick={getVenderData}
          className="flex items-center justify-center bg-black px-5 text-sm text-white">
          Search
        </button>
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
                Business Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Active
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {data?.map((item : any) => {
              return (
                <tr className="odd:bg-gray-50">
                  <td className="pl-6 w-8">
                    {i++}
                  </td>
                  <td className="px-6 py-3 text-sm">
                    <div className="flex items-center cursor-pointer">
                      {/* <img src={item.profile} className="w-9 h-9 rounded-full shrink-0" /> */}
                      <div className="ml-4">
                        <p className="text-sm text-black">{item.firstName} {item.lastName}</p>
                        <p className="text-xs text-gray-400">{item.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm">{item.role}</td>
                  <td className="px-6 py-3 text-sm">{item.businessName}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          item.isActive ? `bg-green-500` : `bg-red-500`
                        } me-2`}
                      />{" "}
                      {item.isActive ? "Active" : "De-Active"}
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <label className="relative cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        onChange={() => handleVenderActivation(item._id)}
                        checked={item.isActive ? true : false}
                      />
                      <div className="w-11 h-6 flex items-center bg-red-500 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                    </label>
                  </td>
                </tr>
              )
            })}
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

export default VenderList;
