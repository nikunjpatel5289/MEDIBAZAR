import React from "react";

const Contect = () => {
  return (
    <div className="overflow-x-auto py-8">
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
          <tr className="odd:bg-blue-50">
            <td className="px-6 py-3 text-sm">1</td>
            <td className="px-6 py-3 text-sm">
              <div className="flex items-center cursor-pointer">
                <div className="ml-4">
                  <p className="text-lg text-black">Gladys Jones</p>
                  <p className="text-xs text-gray-600 text-wrap h-16 overflow-y-scroll">
                    gladys@example.com Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Accusantium numquam non dolores dolorum,
                    obcaecati molestiae, ab nostrum quod, aspernatur
                    exercitationem consequuntur dignissimos enim ad porro harum
                    voluptate maxime reiciendis repellat?s Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Ex hic distinctio eum
                    eveniet veritatis voluptatum voluptatem, inventore saepe
                    similique, ipsam nobis adipisci quis fugiat in voluptates
                    eius. Sed, non aliquam. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Nisi commodi reprehenderit
                    voluptate quia voluptatum debitis labore qui, exercitationem
                    quod eum quibusdam culpa omnis cum animi cumque magni
                    voluptatem quidem dolores? Impedit repudiandae, facere omnis
                    distinctio quia similique eveniet accusantium asperiores
                    corrupti quibusdam ipsam voluptates voluptatum commodi?
                    Eaque, atque necessitatibus. Sequi, quas distinctio aliquid
                    quia ipsam beatae ad accusamus inventore alias.
                  </p>
                </div>
              </div>
            </td>
            <td className="px-6 py-3 text-sm">acb@123gmail.com</td>
            <td className="px-6 py-3 text-sm">2020/25/30</td>
          </tr>
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
  );
};

export default Contect;
