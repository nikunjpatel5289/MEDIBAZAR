import axios from "axios";
import React, { useEffect, useState } from "react";
interface prop {
  PAYID: string;
}

const InHouseInvoice = ({ PAYID }: prop) => {
  const [data, setData] = useState<any>([]);
  const date = new Date(data.orderDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${day}-${month}-${year}`;
  var total: number = 0;

  const tokenData = () => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return config;
  };

  const getInvoiceData = async () => {
    try {
      const config = tokenData();

      const result = await axios.get(
        `http://127.0.0.1:3000/order/OrderInvoiceDashBoard/${PAYID}`,
        config
      );

      if (result) {
        setData(result.data.data[0]);
      }
    } catch (error: any) {
      console.info(error.response);
    }
  };

  useEffect(() => {
    getInvoiceData();
  }, []);

  return (
    <>
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
        <div className="sm:w-11/12 lg:w-3/4 mx-auto">
          <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-neutral-800">
            <div className="flex justify-between">
              <div>
                <h1 className="mt-4 text-lg md:text-xl font-semibold text-blue-600 dark:text-white">
                  MediBazar Inc.
                </h1>
              </div>
              <div className="text-end">
                <address className="mt-4 not-italic text-gray-800 dark:text-neutral-200">
                  17 Uttran Gam
                  <br />
                  Patel street
                  <br />
                  Nrear Railway Bridge
                  <br />
                  Amroli, Surat
                  <br />
                </address>
              </div>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Bill to: {data.name}
                </h3>
                <address className="mt-2 not-italic text-gray-500 dark:text-neutral-500">
                  {data.address}
                  <br />
                  {data.city}, {data.state}
                  <br />
                  {data.country}
                  <br />
                </address>
              </div>
              <div className="sm:text-end space-y-2">
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                      Order date:
                    </dt>
                    <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                      {formattedDate}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
                <div className="hidden sm:grid sm:grid-cols-5">
                  <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Item
                  </div>
                  <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    {/* Qty */}
                  </div>
                  <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Qty
                  </div>
                  <div className="text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Amount
                  </div>
                </div>
                <div className="hidden sm:block border-b border-gray-200 dark:border-neutral-700" />
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {data?.orderProducts?.map((item: any) => {
                    total += item.orderQTY * item.prodPrice;
                    return (
                      <>
                        <div className="col-span-full sm:col-span-2">
                          <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Item
                          </h5>
                          <p className="font-medium text-gray-800 dark:text-neutral-200">
                            {item.prodName}
                          </p>
                        </div>
                        <div>
                          <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            {/* Qty */}
                          </h5>
                          <p className="text-gray-800 dark:text-neutral-200"></p>
                        </div>
                        <div>
                          <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Qty
                          </h5>
                          <p className="text-gray-800 dark:text-neutral-200">
                            {item.orderQTY}
                          </p>
                        </div>
                        <div>
                          <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Amount
                          </h5>
                          <p className="sm:text-end text-gray-800 dark:text-neutral-200">
                            Rs. {item.prodPrice}
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 flex sm:justify-end">
              <div className="w-full max-w-2xl sm:text-end space-y-2">
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                      Subtotal:
                    </dt>
                    <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                      Rs. {total}
                    </dd>
                  </dl>
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                      Total:
                    </dt>
                    <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                      Rs. {total}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Thank you!
              </h4>
              <div className="mt-2">
                <p className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                  MediBazar@gmail.com
                </p>
                <p className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                  +91 9429914390
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm text-gray-500 dark:text-neutral-500">
              © 2023 MediBazar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InHouseInvoice;
