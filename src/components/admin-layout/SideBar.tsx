"use client";
import { userLogOut } from "@/app/redux/slices/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SideBar = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const [shoeCategories, setShowCategories] = useState(false);
  const [showList, setShowList] = useState(false);
  const [order, setShowOrder] = useState(false);
  const [report, setReport] = useState(false);
  const handleLogOut = () => {
    dispatch(userLogOut());
    route.replace("/login");
  };
  return (
    <aside
      // id="logo-sidebar"
      // bg-white border-r border-gray-200 <= Change Effect Color
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full  sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      // aria-label="Sidebar"
    >
      {/* bg-white <= Change Effect Color */}
      <div className="h-full px-3 pb-4 overflow-y-auto  dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/admin"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-2"
                viewBox="0 0 512 512">
                <path
                  d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
                  data-original="#000000" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              // aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={() => setShowCategories(!shoeCategories)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-2"
                viewBox="0 0 511.414 511.414">
                <path
                  d="M497.695 108.838a16.002 16.002 0 0 0-9.92-14.8L261.787 1.2a16.003 16.003 0 0 0-12.16 0L23.639 94.038a16 16 0 0 0-9.92 14.8v293.738a16 16 0 0 0 9.92 14.8l225.988 92.838a15.947 15.947 0 0 0 12.14-.001c.193-.064-8.363 3.445 226.008-92.837a16 16 0 0 0 9.92-14.8zm-241.988 76.886-83.268-34.207L352.39 73.016l88.837 36.495zm-209.988-51.67 71.841 29.513v83.264c0 8.836 7.164 16 16 16s16-7.164 16-16v-70.118l90.147 37.033v257.797L45.719 391.851zM255.707 33.297l55.466 22.786-179.951 78.501-61.035-25.074zm16 180.449 193.988-79.692v257.797l-193.988 79.692z"
                  data-original="#000000" />
              </svg>
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Categories
              </span>
              <svg
                className="w-3 h-3"
                // aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {shoeCategories && (
              <ul
                // id="dropdown-example"
                className={`${shoeCategories ? "" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <Link
                    href="/admin/categories"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Add New Categories
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Categories
                  </Link>
                </li> */}
              </ul>
            )}
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={() => setShowList(!showList)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-2"
                viewBox="0 0 511.414 511.414">
                <path
                  d="M497.695 108.838a16.002 16.002 0 0 0-9.92-14.8L261.787 1.2a16.003 16.003 0 0 0-12.16 0L23.639 94.038a16 16 0 0 0-9.92 14.8v293.738a16 16 0 0 0 9.92 14.8l225.988 92.838a15.947 15.947 0 0 0 12.14-.001c.193-.064-8.363 3.445 226.008-92.837a16 16 0 0 0 9.92-14.8zm-241.988 76.886-83.268-34.207L352.39 73.016l88.837 36.495zm-209.988-51.67 71.841 29.513v83.264c0 8.836 7.164 16 16 16s16-7.164 16-16v-70.118l90.147 37.033v257.797L45.719 391.851zM255.707 33.297l55.466 22.786-179.951 78.501-61.035-25.074zm16 180.449 193.988-79.692v257.797l-193.988 79.692z"
                  data-original="#000000" />
              </svg>
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Products
              </span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {showList && (
              <ul
                id="dropdown-example"
                className={`${showList ? "" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <Link
                    href="/admin/products/add"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Add New Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/products/all"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Products
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* <li>
            <Link
              href="/admin/products"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
            </Link>
          </li> */}
           <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              // aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={() => setShowOrder(!order)}
            >
               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-2"
                  viewBox="0 0 511.877 511.877">
                  <path
                    d="M442.706 340.677c-11-68.6-93.8-175.7-120.1-208.2 4.2-3.5 6.9-8.7 6.9-14.6 0-4.2-1.4-8-3.7-11.1 2.3-3.1 3.7-7 3.7-11.1 0-6.6-3.4-12.4-8.5-15.7 8.1-33.1 31.3-59.5 32.4-60.7.8-.9 1.3-1.9 1.6-3 .7-2.4.1-5.1-1.5-7.1-1-1.2-2.3-2.1-3.8-2.5-63.1-17.5-114.9 4.1-129.7 11.4-12.3-7.5-24.5-14-39.9-16.2-5-.7-10.1-1-15.7-1a7.719 7.719 0 0 0-6.9 11.2s.6 1.1 1 1.6c.3.3 26.7 31.7 35.2 66.2-5.1 3.4-8.5 9.2-8.5 15.7 0 4.2 1.4 8 3.7 11.1-2.3 3.1-3.7 7-3.7 11.1 0 5.1 2 9.7 5.3 13.1-25.1 31-110.2 140-121.3 209.8-1.2 5.8-17.4 86.9 23.1 135.8 19.4 23.5 48.5 35.4 86.4 35.4 1.5 0 2.9 0 4.4-.1h145.7c1.5 0 3 .1 4.4.1 37.9 0 66.9-11.9 86.4-35.4 40.4-48.9 24.3-130 23.1-135.8zm-239.2-219.5h-.1c-1.6-.3-2.7-1.7-2.7-3.3 0-1.9 1.5-3.4 3.4-3.4h106.6c1.9 0 3.4 1.5 3.4 3.4s-1.5 3.4-3.4 3.4h-106.7c-.2-.1-.3-.1-.5-.1zm-2.9-25.6c0-1.8 1.5-3.3 3.3-3.4h106.7c1.8 0 3.3 1.5 3.3 3.4s-1.5 3.4-3.4 3.4h-106.5c-1.9 0-3.4-1.5-3.4-3.4zm124.3-78.4c-1.1.7-2.2 1.4-3.2 2.1 0 0-.1.1-.2.1-2.3 1.5-4.5 2.9-6.8 4.3-9.5 5.8-19.2 9.3-29.5 10.9-11.2 1.7-22.9 1.1-33.9-1.5-4.8-1.2-9.4-2.8-14.2-5.1-.2-.1-.3-.2-.5-.2 17.1-6.9 49.6-16.2 88.3-10.6zm-106.8 17.9 1.3.8c9.7 6 18.7 9.9 28.2 12.2 12.9 3.1 26.7 3.7 39.8 1.8 12-1.8 23.1-5.8 34.1-12.2-6.2 11-12.3 24.4-15.9 39.1h-96.9c-5.7-23.4-18.7-45.4-28.1-59 13.7 2.5 24.8 9.4 37.5 17.3zm189.5 431.5c-17 20.6-43.5 30.6-78.5 29.7h-146.3c-35.1.8-61.5-9.1-78.5-29.7-36.3-43.7-20.1-122.1-19.9-122.9 0-.1.1-.3.1-.4 10.9-69.1 104.5-186 121.3-206.6h100.3c16.5 20.1 110.4 137.4 121.3 206.6 0 .1 0 .3.1.4.1.8 16.4 79-19.9 122.9zm-151.7-233.7c-46.1 0-83.6 37.5-83.6 83.6s37.5 83.6 83.6 83.6 83.6-37.5 83.6-83.6c.1-46.1-37.5-83.6-83.6-83.6zm0 151.7c-37.6 0-68.1-30.6-68.1-68.1s30.6-68.1 68.1-68.1 68.1 30.5 68.1 68.1-30.5 68.1-68.1 68.1zm28.1-53.6c0 11.6-9 21.2-20.3 22.1v4c0 4.3-3.5 7.8-7.8 7.8s-7.8-3.5-7.8-7.8v-3.9h-5.5c-4.3 0-7.8-3.5-7.8-7.8s3.5-7.8 7.8-7.8h19.1a6.7 6.7 0 0 0 0-13.4h-11.7c-12.3 0-22.2-10-22.2-22.2 0-11.6 9-21.2 20.3-22.1v-4c0-4.3 3.5-7.8 7.8-7.8s7.8 3.5 7.8 7.8v3.9h5.5c4.3 0 7.8 3.5 7.8 7.8s-3.5 7.8-7.8 7.8h-19.1a6.7 6.7 0 0 0 0 13.4h11.7c12.2-.1 22.2 9.9 22.2 22.2z"
                    data-original="#000000" />
                </svg>
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Sales
              </span>
              <svg
                className="w-3 h-3"
                // aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {order && (
              <ul
                // id="dropdown-example"
                className={`${order ? "" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <Link
                    href="/admin/order"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    In-House Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/order/allorder"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Orders
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              data-collapse-toggle="dropdown-example"
              onClick={() => setReport(!report)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-2"
                viewBox="0 0 16 16">
                <path
                  d="M13 .5H3A2.503 2.503 0 0 0 .5 3v10A2.503 2.503 0 0 0 3 15.5h10a2.503 2.503 0 0 0 2.5-2.5V3A2.503 2.503 0 0 0 13 .5ZM14.5 13a1.502 1.502 0 0 1-1.5 1.5H3A1.502 1.502 0 0 1 1.5 13v-.793l3.5-3.5 1.647 1.647a.5.5 0 0 0 .706 0L10.5 7.207V8a.5.5 0 0 0 1 0V6a.502.502 0 0 0-.5-.5H9a.5.5 0 0 0 0 1h.793L7 9.293 5.354 7.647a.5.5 0 0 0-.707 0L1.5 10.793V3A1.502 1.502 0 0 1 3 1.5h10A1.502 1.502 0 0 1 14.5 3Z"
                  data-original="#000000" />
              </svg>
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Reports
              </span>
              <svg
                // className="w-3 h-3"
                className={`w-3 ml-3 h-3 ${
                  report ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {report && (
              <ul
                className={`${report ? "" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <Link
                    href="/admin/reports"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    In House Product Sale
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* <li>
            <Link
              href="/admin/order"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Sales</span>
            </Link>
          </li> */}
          <li>
            <Link
              href="/admin/venders"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-2"
                viewBox="0 0 512 512">
                <path
                  d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                  data-original="#000000" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Venders</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-2"
                viewBox="0 0 512 512">
                <path
                  d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                  data-original="#000000" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/contect"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" className="w-[18px] h-[18px] mr-2"
              viewBox="0 0 682.667 682.667">
              <defs>
                <clipPath id="b" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000" />
                </clipPath>
              </defs>
              <mask id="a">
                <rect width="100%" height="100%" data-original="#ffffff" />
                <path
                  d="M374.667 341.333c0 18.40929-14.92396 33.33325-33.33325 33.33325S308.0005 359.74229 308.0005 341.333s14.92396-33.33325 33.33325-33.33325S374.667 322.92371 374.667 341.333m133.333 0c0 18.40929-14.92396 33.33325-33.33325 33.33325S441.3335 359.74229 441.3335 341.333s14.92396-33.33325 33.33325-33.33325S508 322.92371 508 341.333m-266.667 0c0 18.40929-14.92396 33.33325-33.33325 33.33325S174.6665 359.74229 174.6665 341.333s14.92396-33.33325 33.33325-33.33325S241.333 322.92371 241.333 341.333"
                  data-original="#ffffff" />
              </mask>
              <g mask="url(#a)">
                <g clip-path="url(#b)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40"
                    d="M256 492C125.661 492 20 386.339 20 256c0-45.885 13.109-88.702 35.766-124.937L20 20l111.063 35.766C167.298 33.109 210.115 20 256 20c130.339 0 236 105.661 236 236S386.339 492 256 492Z"
                    data-original="#000000" />
                  <path
                    d="M281 256c0-13.807-11.193-25-25-25s-25 11.193-25 25 11.193 25 25 25 25-11.193 25-25m100 0c0-13.807-11.193-25-25-25s-25 11.193-25 25 11.193 25 25 25 25-11.193 25-25m-200 0c0-13.807-11.193-25-25-25s-25 11.193-25 25 11.193 25 25 25 25-11.193 25-25"
                    data-original="#000000" />
                </g>
              </g>
            </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">
                User Contect Us
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/promocode"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-2"
                viewBox="0 0 512.003 512.003">
                <path
                  d="M475.244 264.501a15.592 15.592 0 0 1 0-16.998l18.698-28.74c17.032-26.178 5.556-61.348-23.554-72.491l-32.02-12.26a15.596 15.596 0 0 1-9.992-13.754l-1.765-34.24c-1.608-31.184-31.563-52.902-61.667-44.802l-33.109 8.902a15.598 15.598 0 0 1-16.167-5.254l-21.555-26.665c-19.631-24.284-56.625-24.245-76.223 0l-21.556 26.666a15.597 15.597 0 0 1-16.167 5.254l-33.111-8.902c-30.163-8.112-60.063 13.678-61.667 44.802l-1.765 34.24a15.598 15.598 0 0 1-9.992 13.753l-32.018 12.26c-29.171 11.166-40.555 46.365-23.556 72.492l18.699 28.739a15.596 15.596 0 0 1 0 16.998L18.061 293.24c-17.034 26.181-5.554 61.352 23.554 72.492l32.02 12.26a15.598 15.598 0 0 1 9.992 13.754l1.765 34.24c1.608 31.19 31.568 52.899 61.667 44.802l33.109-8.902a15.602 15.602 0 0 1 16.168 5.254l21.555 26.664c19.635 24.291 56.628 24.241 76.223 0l21.555-26.664a15.607 15.607 0 0 1 16.167-5.254l33.111 8.902c30.155 8.115 60.062-13.674 61.667-44.802l1.765-34.24a15.598 15.598 0 0 1 9.992-13.753l32.018-12.26c29.169-11.166 40.554-46.364 23.557-72.493l-18.702-28.739zm-16.806 70.02-32.02 12.26c-18.089 6.926-30.421 23.9-31.418 43.243l-1.765 34.24c-.511 9.921-10.036 16.821-19.612 14.249l-33.111-8.902c-18.705-5.032-38.661 1.455-50.836 16.518l-21.553 26.664c-6.245 7.725-18.009 7.709-24.242 0l-21.553-26.664c-9.438-11.676-23.55-18.198-38.132-18.198-4.229 0-8.499.548-12.706 1.68l-33.111 8.902c-9.596 2.576-19.1-4.348-19.612-14.249l-1.765-34.24c-.997-19.343-13.33-36.318-31.418-43.243l-32.02-12.261c-9.277-3.552-12.896-14.744-7.49-23.053l18.698-28.739c10.563-16.236 10.563-37.218 0-53.452l-18.698-28.739c-5.418-8.326-1.768-19.509 7.491-23.054l32.02-12.26c18.089-6.926 30.421-23.9 31.418-43.243l1.765-34.24c.511-9.921 10.036-16.821 19.612-14.249l33.111 8.902c18.705 5.031 38.66-1.455 50.836-16.518l21.555-26.665c6.245-7.724 18.01-7.708 24.241 0l21.555 26.666c12.178 15.063 32.129 21.549 50.836 16.517l33.111-8.902c9.595-2.577 19.1 4.348 19.612 14.249L395 121.98c.997 19.343 13.33 36.318 31.418 43.243l32.021 12.261c9.276 3.55 12.895 14.744 7.49 23.053l-18.697 28.738c-10.565 16.235-10.565 37.217-.001 53.453l18.698 28.738c5.416 8.328 1.768 19.51-7.491 23.055z"
                  data-original="#000000" />
                <path
                  d="M339.485 170.845c-6.525-6.525-17.106-6.525-23.632 0L159.887 326.811c-6.525 6.525-6.525 17.106.001 23.632 3.263 3.263 7.54 4.895 11.816 4.895s8.554-1.632 11.816-4.895l155.966-155.967c6.526-6.524 6.526-17.105-.001-23.631zm-151.071-4.895c-18.429 0-33.421 14.993-33.421 33.421 0 18.429 14.994 33.421 33.421 33.421 18.429 0 33.421-14.993 33.421-33.421.001-18.428-14.992-33.421-33.421-33.421zm122.545 122.545c-18.429 0-33.421 14.993-33.421 33.421 0 18.429 14.993 33.421 33.421 33.421s33.421-14.993 33.421-33.421c.001-18.428-14.992-33.421-33.421-33.421z"
                  data-original="#000000" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Promo Code</span>
            </Link>
          </li>
          {/* <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
          </li> */}
          {/* <li>
            <Link
              href="/admin/profile"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
            </Link>
          </li> */}
          <li>
            
            <button
              onClick={handleLogOut}
              className="flex w-full text-start items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-2"
                    viewBox="0 0 6.35 6.35">
                    <path
                      d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                      data-original="#000000" />
                  </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
            </button>
            
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
