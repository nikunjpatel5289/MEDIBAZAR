import Link from "next/link";
import { useEffect, useState } from "react";

interface prop {
  data: [any];
  MAXCOUNT: number;
  handlePgination: (data: number) => void;
}

const ProductList = ({ data, MAXCOUNT, handlePgination }: prop) => {
  // console.log("DATA CHANGE", data, MAXCOUNT);

  const [cnt, setCnt] = useState<number>(1);
  let ele: any = [];

  for (let i = 1; i <= MAXCOUNT; i++) {
    ele.push(
      <li className={cnt === i ? `active` : ""}>
        <span>{i}</span>
      </li>
    );
  }

  const increment = () => {
    setCnt(cnt !== MAXCOUNT ? cnt + 1 : cnt);
  };

  const decrement = () => {
    setCnt(cnt !== 1 ? cnt - 1 : cnt);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    handlePgination(cnt);
  }, [cnt]);

  return (
    <>
      {data.length > 0 ? (
        <>
          <div className="row">
            {data.map((item: any) => {
              return (
                <>
                  <div className="col-sm-6 col-lg-4 text-center item mb-4 shadow-md">
                    {/* <span className="tag">Sale</span> */}
                    <Link href={`/products/${item._id}`}>
                      <img
                        src={item.images[0]}
                        className="ms-6 h-[230px] m-auto rounded"
                        width={"250px"}
                        alt={item.prodName}
                      />
                      <h3 className="text-dark mt-3 text-sm">
                        <span>{item.prodName}</span>
                      </h3>
                      <p className="price">
                        {/* <del>95.00</del> &mdash; $55.00 */}
                        Rs. {item.prodPrice}
                      </p>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
          <div className="row mt-4 float-end">
            <div className="col-md-12 text-center">
              <div className="site-block-27">
                <ul>
                  <li>
                    <button
                      onClick={() => decrement()}
                      className="m-2 p-2 hover:cursor-pointer outline-none text-black text-xl bg-slate-400 rounded-lg hover:bg-slate-500"
                    >
                      &lt;Previous
                    </button>
                  </li>
                  {ele}
                  <li>
                    {/* bg-slate-400 rounded-lg hover:bg-slate-500 */}
                    <button
                      onClick={() => increment()}
                      className="m-2 p-2 hover:cursor-pointer outline-none text-black text-xl bg-slate-400 rounded-lg hover:bg-slate-500"
                    >
                      Next&gt;
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* <div className="text-center rounded-lg text-black bg-gray-200 p-2 w-25 m-auto text-xl">
          No Product Found... 
          </div> */}
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
        </>
      )}
    </>
  );
};

export default ProductList;
