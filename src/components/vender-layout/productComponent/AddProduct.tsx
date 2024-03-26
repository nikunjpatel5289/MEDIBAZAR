
const AddProduct = () => {
  return (
    <form className="font-[sans-serif] text-[#292828] max-w-4xl mx-auto px-1 my-6">
    <div className="grid sm:grid-cols-2 gap-10">
      <div className="relative flex items-center ">
        <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
          Product name
        </label>
        <input
          type="text"
          placeholder="Enter Product name"
          className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
        />
      </div>
      <div className="relative flex items-center ">
        <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
          Product category
        </label>
        <select className="py-3 mt-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-100 dark:border-transparent dark:text-gray-500 dark:focus:ring-gray-600">
          <option>Open this select menu</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="relative flex items-center sm:col-span-2">
        <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
          Product description
        </label>
        <textarea
          placeholder="Description..."
          className="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded"
          rows={3}
          defaultValue={""}
        />
      </div>
      <div className="relative flex items-center sm:col-span-2">
        <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
          Product benefits
        </label>
        <textarea
          placeholder="Benefits..."
          className="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded"
          rows={3}
          defaultValue={""}
        />
      </div>
      <div className="relative flex items-center sm:col-span-2">
        <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
          Product use
        </label>
        <textarea
          placeholder="Use Of Product..."
          className="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded"
          rows={3}
          defaultValue={""}
        />
      </div>
      <div className="relative flex items-center">
        <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
          Product images
        </label>
        <input
          type="file"
          className="mt-4 w-full text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
          multiple={true}
        />
      </div>
      <div className="relative flex items-center sm:col-span-2">
        <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
          Product quentity
        </label>
        <input
          type="number"
          placeholder="Enter Product Quentity"
          className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
        />
      </div>
      <div className="relative flex items-center sm:col-span-2">
        <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
          Product price
        </label>
        <input
          type="number"
          placeholder="Enter Product Price"
          className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
        />
      </div>
      <div className="relative flex items-center sm:col-span-2">
        <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
          Product Expiery-Date
        </label>
        <input
          type="date"
          className="px-4 mt-3 py-3 bg-[#f0f1f2] text-black w-full text-sm outline-[#007bff] rounded"
        />
      </div>
      {/* <div className="relative flex items-center sm:col-span-2">
        <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
          Confirm-Password
        </label>
        <input
          type="password"
          autoComplete="new-password"
          placeholder="Enter Confirm-password"
          className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
        />
      </div> */}
    </div>
    <button
      type="button"
      className="mt-10 px-2 py-2.5 w-full rounded text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
    >
      Save
    </button>
  </form>
  )
}

export default AddProduct