const AddCategories = () => {  
  return (
    <>
      <form className="font-[sans-serif] text-[#292828] max-w-4xl mx-auto px-1 my-6">
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="relative flex items-center ">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Category name
            </label>
            <input
              type="text"
              placeholder="Enter Category name"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
              Category Description
            </label>
            <textarea
              placeholder="Small Description..."
              className="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded"
              rows={3}
              defaultValue={""}
            />
          </div>
        </div>
        <button
          type="button"
          className="!mt-4 px-6 py-2 text-sm bg-[#333] text-white rounded hover:bg-[#222]"
        >
          Save Category
        </button>
      </form>
    </>
  );
};

export default AddCategories;
