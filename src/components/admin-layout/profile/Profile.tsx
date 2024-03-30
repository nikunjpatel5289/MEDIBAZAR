"use client"

const Profile = () => {
  
  return (
    <form className="font-[sans-serif] text-[#292828] max-w-4xl mx-auto px-2 my-6">
      <div className="grid sm:grid-cols-2 gap-10">
        <div className="relative flex items-center">
          <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
          />
        </div>
        <div className="relative flex items-center">
          <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter last name"
            className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
          />
        </div>
        <div className="relative flex items-center">
          <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
            Phone No
          </label>
          <input
            type="number"
            placeholder="Enter phone no."
            className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
          />
        </div>
        {/* <div className="relative flex items-center">
          <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
            Country
          </label>
          <input
            type="text"
            placeholder="Enter country"
            className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
          />
        </div> */}
        <div className="relative flex items-center sm:col-span-2">
          <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
          />
        </div>
        <div className="relative flex items-center sm:col-span-2">
          <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
            Password
          </label>
          <input
            type="password"
            autoComplete="new-password"
            placeholder="Enter password"
            className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
          />
        </div>
        <div className="relative flex items-center sm:col-span-2">
          <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
            Confirm-Password
          </label>
          <input
            type="password"
            autoComplete="new-password"
            placeholder="Enter Confirm-password"
            className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
          />
        </div>

        <div className="relative flex items-center">
          <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">
            Profile Image
          </label>
          <input
            type="file"
            className="mt-4 w-full text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
            multiple={true}
          />
        </div>

        <img className="w-20 h-20 rounded" src="#" alt="Large avatar"></img>
      </div>
      <button
        type="button"
        className="mt-10 px-2 py-2.5 w-full rounded text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
      >
        Submit
      </button>
    </form>
  );
};

export default Profile;
