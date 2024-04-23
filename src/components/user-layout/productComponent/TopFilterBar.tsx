import { useState } from "react";

interface prop {
  handleSearchData : (data?:string) => void
}

const TopFilterBar = ({handleSearchData}:prop) => {
  const [search, setSearch] = useState("");
  const onSearchChange = (e: any) => {
    setSearch(e.target.value);
    setTimeout(() => {
      handleSearchData(search)
    }, 800);
  };

  // const handleSearch = () => {
  //     handleSearchData(search)
  // }

  return (
    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        Filter Your Choice
      </h1>

      <div className="flex items-center">
        <div className="relative inline-block text-left">
          <form className="flex items-center max-w-sm mx-auto">
            {/* <label htmlFor="simple-search" className="sr-only">Search</label> */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-100 dark:border-black dark:placeholder-gray-500 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Your Choice..."
                onChange={onSearchChange}
              />
            </div>
            {/* <button
              type="button"
              onClick={() => handleSearch()}
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button> */}
          </form>
        </div>
      </div>

      {/* <div className="flex items-center">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
            onClick={() => setShowSort(!showSort)} onBlur={()=>setShowSort(!showSort)}>
            Sort
            <svg
              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {showSort && (
          <div
            className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="font-medium text-gray-900 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                Most Popular
              </a>
              <a
                href="#"
                className="text-gray-500 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-1"
              >
                Best Rating
              </a>
              <a
                href="#"
                className="text-gray-500 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-2"
              >
                Newest
              </a>
              <a
                href="#"
                className="text-gray-500 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-3"
              >
                Price: Low to High
              </a>
              <a
                href="#"
                className="text-gray-500 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-4"
              >
                Price: High to Low
              </a>
            </div>
          </div>
        )}
      </div>
    </div> */}
    </div>
  );
};

export default TopFilterBar;
