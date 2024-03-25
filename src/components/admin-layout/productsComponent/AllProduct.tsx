"use client";
import { useState } from "react";

const AllProduct = () => {
  const [showDel, setShowDel] = useState(false);
  return (
    <>
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
              className="px-6 py-2.5 rounded-md text-white text-sm font-semibold border-none outline-none bg-red-600 hover:bg-red-700 active:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
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
            <tr className="odd:bg-blue-50">
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
                <button className="mr-4" title="Edit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 fill-blue-500 hover:fill-blue-700"
                    viewBox="0 0 348.882 348.882"
                  >
                    <path
                      d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                      data-original="#000000"
                    />
                    <path
                      d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
                <button
                  className="mr-4"
                  title="Delete"
                  onClick={() => setShowDel(!showDel)}
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
          </tbody>
        </table>
        <div className="md:flex mt-4 px-6">
          {/* <p className="text-sm text-gray-400 flex-1">
                        Showind 1 to 5 of 100 entries
                    </p> */}
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
        </div>
      </div>
    </>
  );
};

export default AllProduct;
