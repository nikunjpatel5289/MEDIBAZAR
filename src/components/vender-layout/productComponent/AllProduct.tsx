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
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState<number>(1);
  const [showDel, setShowDel] = useState(false);
  const [val, setVal] = useState<string>("");

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
        `http://127.0.0.1:3000/product/own/${USERID}?keyword=${search}&limit=${limit}&page=${page}&sort=${sort}&order=${order}`,
        config
      );
      if (resposen) {
        // console.info(resposen.data.data);
        setData(resposen.data.data);
      }
    } catch (error: any) {
      // console.info(error.response.data);
      toast.warn(error.response.data.message);
    }
  };

  const handellimitChane = (val: any) => {
    setLimit(val);
    setPage(1);
  };

  useEffect(() => {
    getOwnProduct();
  }, [limit, page, sort, order]);

  const handleRemoveProduct = async (prodID: string) => {
    try {
      const { config } = getTokenData();
      const reponse = await axios.delete(
        `http://127.0.0.1:3000/product/${prodID}`,
        config
      );
      if (reponse) {
        toast.success("Product Removed...");
        getOwnProduct();
      }
    } catch (error: any) {
      toast.warn(error.response.data.message);
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
                handleRemoveProduct(val);
                setShowDel(!showDel);
              }}
              className="px-6 py-2.5 rounded-md text-white text-sm font-semibold border-none outline-none bg-red-600 hover:bg-red-700 active:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {data.length > 0 && (
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
      )}

      <div className="overflow-x-auto py-8">
        {data.length > 0 ? (
          <>
            <table className="min-w-full rounded-xl bg-gray-200 font-[sans-serif] shadow-xl">
              <thead className="whitespace-nowrap">
                <tr>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold text-black"
                    onClick={() => {
                      setSort("prodName");
                      setOrder(order === 1 ? -1 : 1);
                    }}
                  >
                    Product Name
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 fill-gray-400 inline ml-1"
                      viewBox="0 0 401.998 401.998"
                    >
                      <path
                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                        data-original="#000000"
                      />
                    </svg>
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold text-black"
                    onClick={() => {
                      setSort("categoryId");
                      setOrder(order === 1 ? -1 : 1);
                    }}
                  >
                    Category
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 fill-gray-400 inline ml-1"
                      viewBox="0 0 401.998 401.998"
                    >
                      <path
                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                        data-original="#000000"
                      />
                    </svg>
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold text-black cursor-pointer"
                    onClick={() => {
                      setSort("prodQty");
                      setOrder(order === 1 ? -1 : 1);
                    }}
                  >
                    Stock
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 fill-gray-400 inline ml-1"
                      viewBox="0 0 401.998 401.998"
                    >
                      <path
                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                        data-original="#000000"
                      />
                    </svg>
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold text-black cursor-pointer"
                    onClick={() => {
                      setSort("prodPrice");
                      setOrder(order === 1 ? -1 : 1);
                    }}
                  >
                    Amount
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 fill-gray-400 inline ml-1"
                      viewBox="0 0 401.998 401.998"
                    >
                      <path
                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                        data-original="#000000"
                      />
                    </svg>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="whitespace-nowrap">
                {data.map((item: any) => {
                  return (
                    <tr className="odd:bg-gray-50" key={item._id}>
                      <td className="px-6 py-3 text-sm">
                        <div className="flex items-center cursor-pointer">
                          <img
                            src={item.images[0]}
                            className="w-10 h-10 rounded-md shrink-0"
                          />
                          <div className="ml-4">
                            <p className="text-m text-black font-bold">
                              {item.prodName}
                            </p>
                            {/* h-16 overflow-y-scroll */}
                            <p className="text-xs text-gray-600 text-wrap h-16 overflow-y-auto">
                              {item.prodDescription}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm">
                        {item.categoryId.categoryName}
                      </td>
                      <td className="px-6 py-3 text-sm">{item.prodQty}</td>
                      <td className="px-6 py-3 text-sm">
                        Rs. {item.prodPrice}
                      </td>
                      <td className="px-6 py-3 items-baseline">
                        {/* <Link href={`/products/${item._id}`} target="_blank">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye text-blue-500 hover:text-blue-700 mr-2" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                          </svg>
                        </Link> */}
                        <Link
                          href={`/vender/product/edit/${item._id}`}
                          className="text-blue-500 hover:text-blue-700 mr-2"
                        >
                          Edit
                        </Link>
                        <button
                          className="mr-4"
                          onClick={() => {
                            // handleRemoveProduct(item._id)
                            setShowDel((prev) => !prev);
                            setVal(item._id);
                          }}
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
            <div className="md:flex mt-4 px-6 float-end">
              <div className="flex items-center max-md:mt-4">
                <p className="text-sm text-gray-800">Display</p>
                <select
                  onChange={(e: any) => handellimitChane(e.target.value)}
                  className="text-sm text-black border border-gray-500 rounded h-7 mx-4 outline-none"
                >
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                  <option>100</option>
                </select>
                <ul className="flex space-x-1 ml-2">
                  <li
                    className={`flex items-center justify-center w-20 ${
                      page > 1 ? "cursor-pointer bg-gray-300 " : "bg-gray-100"
                    } h-7 rounded`}
                  >
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
                  </li>

                  <li
                    className={`flex items-center justify-center w-20 h-7 rounded ${
                      data.length < limit
                        ? "bg-gray-100"
                        : "cursor-pointer  bg-gray-300"
                    } `}
                  >
                    <span
                      onClick={() =>
                        data.length < limit
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
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-xl">
            Create Produt and Start your Journey...{" "}
            <Link
              className="text-blue-700 hover:underline"
              href={"/vender/product/add"}
            >
              Click Hear
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default AllProduct;
