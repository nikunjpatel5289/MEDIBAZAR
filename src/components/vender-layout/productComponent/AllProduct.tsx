"use client";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProduct = () => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<any>([]);

  const getTokenData = () => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    const { id }: any = jwtDecode(token);
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return { config, USERID: id };
  };

  const getOwnProduct = async () => {
    try {
      const { config, USERID } = getTokenData();
      const resposen = await axios.get(
        `http://127.0.0.1:3000/product/own/${USERID}?keyword=${search}`,
        config
      );
      if (resposen) {
        // console.info(resposen.data.data);
        setData(resposen.data.data);
      }
    } catch (error: any) {
      // console.info(error.response.data);
      toast(error.response.data.message);
    }
  };

  useEffect(() => {
    getOwnProduct();
  }, []);

  const handleRemoveProduct = async (prodID: string) => {
    try {
      const { config } = getTokenData();
      const reponse = await axios.delete(
        `http://127.0.0.1:3000/product/${prodID}`,
        config
      );
      if (reponse) {
        toast("Product Removed...");
        getOwnProduct();
      }
    } catch (error: any) {
      toast(error.response.data.message);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="flex border border-black overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input
          type="search"
          placeholder="Search Something..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
        />
        <button
          type="button"
          onClick={getOwnProduct}
          className="flex items-center justify-center bg-black px-5 text-sm text-white"
        >
          Search
        </button>
      </div>

      <div className="overflow-x-auto py-8">
        <table className="min-w-full bg-gray-200 font-[sans-serif]">
          <thead className="whitespace-nowrap">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Product Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Category
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Stock
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Amount
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {data.map((item: any) => {
              return (
                <tr className="odd:bg-blue-50">
                  <td className="px-6 py-3 text-sm">
                    <div className="flex items-center cursor-pointer">
                      <img
                        src={item.images[0]}
                        className="w-10 h-10 rounded-md shrink-0"
                      />
                      <div className="ml-4">
                        <p className="text-lg text-black">{item.prodName}</p>
                        {/* h-16 overflow-y-scroll */}
                        <p className="text-xs text-gray-600 text-wrap ">
                          {item.prodDescription}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm">
                    {item.categoryId.categoryName}
                  </td>
                  <td className="px-6 py-3 text-sm">{item.prodQty}</td>
                  <td className="px-6 py-3 text-sm">Rs. {item.prodPrice}</td>
                  <td className="px-6 py-3">
                    <Link
                      href={`/vender/product/edit/${item._id}`}
                      className="text-blue-500 hover:text-blue-700 mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      className="mr-4"
                      onClick={() => handleRemoveProduct(item._id)}
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
                  </td>
                </tr>
              );
            })}
            {/* <tr className="odd:bg-blue-50">
              <td className="px-6 py-3 text-sm">
                <div className="flex items-center cursor-pointer">
                  <img
                    src="https://readymadeui.com/profile_4.webp"
                    className="w-10 h-10 rounded-md shrink-0"
                  />
                  <div className="ml-4">
                    <p className="text-lg text-black">Gladys Jones</p>
                    <p className="text-xs text-gray-600 text-wrap h-16 overflow-y-scroll">
                      gladys@example.com Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Accusantium numquam non dolores dolorum,
                      obcaecati molestiae, ab nostrum quod, aspernatur
                      exercitationem consequuntur dignissimos enim ad porro
                      harum voluptate maxime reiciendis repellat?s Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Ex hic
                      distinctio eum eveniet veritatis voluptatum voluptatem,
                      inventore saepe similique, ipsam nobis adipisci quis
                      fugiat in voluptates eius. Sed, non aliquam. Lorem ipsum
                      dolor, sit amet consectetur adipisicing elit. Nisi commodi
                      reprehenderit voluptate quia voluptatum debitis labore
                      qui, exercitationem quod eum quibusdam culpa omnis cum
                      animi cumque magni voluptatem quidem dolores? Impedit
                      repudiandae, facere omnis distinctio quia similique
                      eveniet accusantium asperiores corrupti quibusdam ipsam
                      voluptates voluptatum commodi? Eaque, atque
                      necessitatibus. Sequi, quas distinctio aliquid quia ipsam
                      beatae ad accusamus inventore alias.
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-3 text-sm">Covid-19</td>
              <td className="px-6 py-3 text-sm">50</td>
              <td className="px-6 py-3 text-sm">$150.66</td>
              <td className="px-6 py-3">
                <Link
                  href={`/vender/product/edit/${875}`}
                  className="text-blue-500 hover:text-blue-700 mr-4"
                >
                  Edit
                </Link>
                <button
                  className="mr-4"
                  title="Delete"
                  // onClick={() => setShowDel(!showDel)}
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
              </td>
            </tr> */}
          </tbody>
        </table>
        {/* <div className="md:flex mt-4 px-6">
          <div className="flex items-center max-md:mt-4">
            <p className="text-sm text-gray-500">Display</p>
            <select className="text-sm text-gray-500 border border-gray-500 rounded h-7 mx-4 outline-none">
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

export default AllProduct;
