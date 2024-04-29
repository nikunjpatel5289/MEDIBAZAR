interface prop {
  setProfileMOdel: (val: boolean) => void;
  venderProfile?: any;
}

const VenderProfilePopUp = ({ setProfileMOdel, venderProfile }: prop) => {
  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
        <div className="flex items-center pb-3 border-b text-black">
          <h3 className="text-xl font-bold flex-1">
            {venderProfile.info.businessName} Profile
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setProfileMOdel(false)}
            className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
            viewBox="0 0 320.591 320.591"
          >
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"
            />
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"
            />
          </svg>
        </div>
        <div className="my-6 flex flex-col items-center justify-center">
          <img
            className="object-cover w-32 h-32 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-black"
            src={venderProfile.info.profile}
            alt="Bordered avatar"
          />
          <div className="items-center">
            <h4 className="font-bold mt-1">
              {venderProfile.info.firstName} {venderProfile.info.lastName}
            </h4>
          </div>
          <span className="text-sm text-gray-700">
            {venderProfile.info.businessName}
          </span>
        </div>
        <div className="my-4">
          <span className="font-bold">
            About {venderProfile.info.businessName}
          </span>
          <br />
          <span className="text-gray-700">
            {" "}
            <b>Owner: </b> {venderProfile.info.firstName}{" "}
            {venderProfile.info.lastName}
          </span>
          <br />
          <span className="text-gray-700">
            <b>Email: </b> {venderProfile.info.email}{" "}
          </span>
          <br />
          <span className="text-gray-700">
            <b>Contect Info: </b> {venderProfile.info.phone}{" "}
          </span>
          <br />
          <span className="text-gray-700">
            <b>Address: </b> {venderProfile.address.address},{" "}
            {venderProfile.address.city}, {venderProfile.address.state}
          </span>
        </div>
        <div className="my-4">
          <table className="min-w-full bg-gray-200 font-[sans-serif] rounded-xl shadow-xl">
            <tbody className="whitespace-nowrap">
              <tr className="odd:bg-gray-50">
                <td className="pl-6 w-8 text-md">Total Products</td>
                <td className="px-6 py-3 text-sm">
                  {venderProfile.totalproducts.TotalProduct}
                </td>
              </tr>
              <tr className="odd:bg-gray-50">
                <td className="pl-6 w-8 text-md">Total orders</td>
                <td className="px-6 py-3 text-sm">
                  {venderProfile.totalotders.TotalOrder}
                </td>
              </tr>
              <tr className="odd:bg-gray-50">
                <td className="pl-6 w-8 text-md">Total Sold Amount</td>
                <td className="px-6 py-3 text-sm">
                  {venderProfile.totalSalse.totalOrderAmount}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-t flex justify-end pt-6 space-x-4">
          <button
            type="button"
            onClick={() => setProfileMOdel(false)}
            className="px-6 py-2 rounded-md text-black text-sm border-none outline-none bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenderProfilePopUp;
