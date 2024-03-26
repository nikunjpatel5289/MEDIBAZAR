import React from "react";

const AddPromo = () => {
  return (
    <>
      <form className="font-[sans-serif] text-[#292828] max-w-4xl mx-auto px-1 my-6">
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="relative flex items-center ">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              PromoCode name
            </label>
            <input
              type="text"
              placeholder="Enter Promocode name"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
            />
          </div>
          <div className="relative flex items-center ">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Promo Code Type
            </label>
            <select className="py-3 mt-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-100 dark:border-transparent dark:text-gray-500 dark:focus:ring-gray-600">
              <option>Select type</option>
              <option>Percent (%)</option>
              <option>Flat</option>
            </select>
          </div>

          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Promocode Discount Amount
            </label>
            <input
              type="number"
              placeholder="Enter Promocode Discount Amount"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Promocode Start-Date
            </label>
            <input
              type="date"
              className="px-4 mt-3 py-3 bg-[#f0f1f2] text-black w-full text-sm outline-[#007bff] rounded"
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Promocode End-Date
            </label>
            <input
              type="date"
              className="px-4 mt-3 py-3 bg-[#f0f1f2] text-black w-full text-sm outline-[#007bff] rounded"
            />
          </div>

          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Promocode Number Of Use
            </label>
            <input
              type="number"
              placeholder="Enter Promocode Number Use"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
            />
          </div>
          
        </div>
        <button
          type="button"
          className="mt-10 px-2 py-2.5 w-full rounded text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
        >
          Save
        </button>
      </form>
    </>
  );
};

export default AddPromo;
