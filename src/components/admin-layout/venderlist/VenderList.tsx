"use client";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import VenderProfilePopUp from "./VenderProfilePopUp";

const VenderList = () => {
  const [data, setData] = useState<any>([]);
  const [search, setSerch] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);
  const [profileModel, setProfileMOdel] = useState<boolean>(false)
  const [venderProfile, setVenderProfile] = useState<any>([])
  let i: number = 1;

  const getTokenData = () => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    // const { id }: any = jwtDecode(token);
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return config;
  };

  const getVenderData = async () => {
    try {
      const config = getTokenData();
      // var str = `http://127.0.0.1:3000/user/venders`;
      // if(search !== ""){str += `&keyword=${search}`}
      // if(isActive !== undefined) {str += `?active=${isActive}`}

      const response = await axios.get(
        `http://127.0.0.1:3000/user/venders?keyword=${search}&active=${isActive}`,
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
    // setTimeout(() => {
    getVenderData();
    // }, 300);
  }, [isActive]);

  const handleVenderActivation = async (venderId: string) => {
    try {
      const config = getTokenData();
      const response = await axios.patch(
        `http://127.0.0.1:3000/user/vnderDeactive/${venderId}`,
        null,
        config
      );
      if (response) {
        getVenderData();
      }
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  const handelGetVenderProfile = async (ID : string) => {
    try {
      const config = getTokenData();
      const result = await axios.get(`http://127.0.0.1:3000/order/VenderProfile/${ID}`,config)
      
      if(result.status === 200) {
        setProfileMOdel(!profileModel)
        setVenderProfile(result.data)
      }
    } catch (error : any) {
      toast.error(error)
    }
  }

  return (
    <>
      <ToastContainer />
      {profileModel && (
        <VenderProfilePopUp setProfileMOdel={setProfileMOdel} venderProfile={venderProfile && venderProfile}/>
      )}
      <div className="flex">
        <div className="flex border border-black  max-w-md mx-auto font-[sans-serif]">
          <input
            type="email"
            placeholder="Search Vender First Name..."
            onChange={(e: any) => setSerch(e.target.value)}
            className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
          />
          <button
            type="button"
            onClick={getVenderData}
            className="flex items-center justify-center bg-black px-5 text-sm text-white"
          >
            Search
          </button>
        </div>

        <div className="relative font-[sans-serif] w-max mx-auto">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="px-6 py-2.5 border-2 rounded-md border-gray-300 text-gray-500 text-sm font-semibold outline-none bg-white hover:bg-gray-50 active:bg-white"
          >
            Filter by Approvel
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
              <li
                className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
                onClick={() => {
                  setIsActive(true);
                  setIsOpen(false);
                }}
              >
                Approved
              </li>
              <li
                className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
                onClick={() => {
                  setIsActive(false);
                  setIsOpen(false);
                }}
              >
                Non-Approved
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="overflow-x-auto py-5">
        <table className="min-w-full bg-gray-200 font-[sans-serif] rounded-xl shadow-xl">
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
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Options
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {data?.map((item: any) => {
              return (
                <tr className="odd:bg-gray-50" key={item._id}>
                  <td className="pl-6 w-8">{i++}</td>
                  <td className="px-6 py-3 text-sm">
                    <div className="flex items-center cursor-pointer">
                      {/* <img src={item.profile} className="w-9 h-9 rounded-full shrink-0" /> */}
                      <div className="ml-4">
                        <p className="text-sm text-black">
                          {item.firstName} {item.lastName}
                        </p>
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
                  <td className="px-6 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 mb-1 hover:cursor-pointer" viewBox="0 0 512 512" onClick={() => handelGetVenderProfile(item._id)}>
                      <path
                        d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                        data-original="#000000" />
                    </svg>
                  </td>
                </tr>
              );
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
