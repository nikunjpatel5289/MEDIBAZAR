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
            <Link
              href="/admin/order"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Sales</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/venders"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Venders</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/contect"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
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
              <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
            </button>
            
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
