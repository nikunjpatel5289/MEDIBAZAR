"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const History = () => {
  const [history, setHistory] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getOrederData = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token") || "");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      setLoading(true);
      const result = await axios.get(
        "http://127.0.0.1:3000/order/userOrderGet",
        config
      );

      if (result) {
        // console.info(result.data.data);
        // console.info(result.data.data.map((item : any) => {
        //     return (
        //         item._id,
        //         item.products.map((data :any) => {
        //             return (
        //                 [
        //                     data.productId['prodName'],
        //                     data.qty
        //                 ]
        //             )
        //         })
        //     )
        // }));
        setHistory(result.data.data);
        setLoading(false);
      }
    } catch (error: any) {
      console.info(error.response);
    }
  };

  const handelDownloadInvoice = async (id: string) => {
    try {
      if (id !== "") {
        const response = await axios.get(`http://127.0.0.1:3000/order/${id}`);
        if (response) {
          // console.info(response.data.url);
          const URL = response.data.url;
          // const url = window.URL.createObjectURL(new Blob([URL]));
          const link = document.createElement("a");
          link.href = URL;
          link.target = "_blank"
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          // window.URL.revokeObjectURL(url);
        }
      } else {
        console.info("this Invoice Id Not Found....");
      }
    } catch (error: any) {
      console.info(error);
    }
  };

  useEffect(() => {
    getOrederData();
  }, []);

  return (
    <>
      {loading ? (
        <div
          aria-label="Loading..."
          role="status"
          className="flex items-center justify-center align-middle space-x-2"
        >
          <svg
            className="h-20 w-20 animate-spin stroke-gray-500"
            viewBox="0 0 256 256"
          >
            <line
              x1={128}
              y1={32}
              x2={128}
              y2={64}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1={224}
              y1={128}
              x2={192}
              y2={128}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1={128}
              y1={224}
              x2={128}
              y2={192}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1={32}
              y1={128}
              x2={64}
              y2={128}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            ></line>
          </svg>
          <span className="text-4xl font-medium text-gray-500">Loading...</span>
        </div>
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pb-24">
            {history.length >= 1 ? (
              <>
                <div className="max-w-xl">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Order history
                  </h1>
                  {/* <p className="mt-2 text-sm text-gray-500">
                        Check the status of recent orders, manage returns, and download
                        invoices.
                        </p> */}
                </div>

                <div className="mt-16">
                  <h2 className="sr-only">Recent orders</h2>

                  <div className="space-y-20">
                    {history.map((item: any) => {
                      const date = new Date(item.orderDate);
                      const year = date.getFullYear();
                      const month = String(date.getMonth() + 1).padStart(
                        2,
                        "0"
                      );
                      const day = String(date.getDate()).padStart(2, "0");
                      const formattedDate = `${year}-${month}-${day}`;
                      return (
                        <>
                          <div key={item._id}>
                            <h3 className="sr-only">
                              Order placed on
                              <time dateTime={formattedDate}>
                                {formattedDate}
                              </time>
                            </h3>

                            <div className="rounded-lg bg-gray-200 px-4 pt-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
                              <dl className="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-900 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                                <div className="flex justify-between sm:block">
                                  <dt className="font-medium text-gray-900">
                                    Date placed
                                  </dt>
                                  <dd className="sm:mt-1">
                                    <time dateTime={formattedDate}>
                                      {formattedDate}
                                    </time>
                                  </dd>
                                </div>
                                {/* <div className="flex justify-between pt-6 sm:block sm:pt-0">
                                  <dt className="font-medium text-gray-900">
                                    Order number
                                  </dt>
                                  <dd className="sm:mt-1">{item.paymentId}</dd>
                                </div> */}
                                {/* ms-10 */}
                                <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                                  <dt>Total amount</dt>
                                  <dd className="sm:mt-1">
                                    Rs. {item.orderTotal}
                                  </dd>
                                </div>
                              </dl>
                              <button
                                type="button"
                                onClick={() =>
                                  handelDownloadInvoice(item.invoiceId)
                                }
                                className="mb-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto"
                              >
                                Download Invoice
                                {/* <span className="sr-only">
                                  for order 
                                </span> */}
                              </button>
                            </div>

                            <table className="mt-4 w-full text-gray-500 sm:mt-6">
                              {/* <caption className="sr-only">Products</caption> */}
                              <thead className="text-left text-sm text-black sm:not-sr-only">
                                <tr>
                                  <th
                                    scope="col"
                                    className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3"
                                  >
                                    Product
                                  </th>
                                  <th
                                    scope="col"
                                    className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    className="hidden py-3 pr-8 font-normal sm:table-cell"
                                  >
                                    Status
                                  </th>
                                  <th
                                    scope="col"
                                    className="w-0 py-3 text-right font-normal"
                                  >
                                    Info
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                                {item.products.map((product: any) => (
                                  <tr key={product._id}>
                                    <td className="py-6 pr-8">
                                      <div className="flex items-center">
                                        <img
                                          src={product.productId["images"][0]}
                                          alt={product.productId["prodName"]}
                                          className="mr-6 h-16 w-16 rounded object-cover object-center"
                                        />
                                        <div>
                                          <div className="font-medium text-wrap w-[290px] text-gray-900">
                                            {product.productId.prodName}
                                          </div>
                                          <div className="mt-1 sm:hidden">
                                            {product.productId["prodPrice"]}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="hidden py-6 pr-8 sm:table-cell text-gray-900">
                                      Rs. {product.productId.prodPrice}
                                    </td>
                                    <td className="hidden py-6 pr-8 sm:table-cell text-gray-900">
                                      {product.qty}
                                    </td>
                                    <td className="hidden py-6 pr-8 sm:table-cell text-gray-900">
                                      {item.orderStatus}
                                    </td>
                                    <td className="whitespace-nowrap py-6 text-right font-medium">
                                      <Link
                                        href={`/products/${product.productId._id}`}
                                        className="text-indigo-600"
                                      >
                                        View
                                        <span className="hidden lg:inline">
                                          Product
                                        </span>
                                        {/* <span className="sr-only">
                                        , {product.name}
                                      </span> */}
                                      </Link>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center text-2xl">
                {" "}
                No Order Placed Yet...{" "}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default History;
