import Loder from "@/components/ExtraComponent/Loder";
import Link from "next/link";

interface prop {
  title: string;
  totalCount: any;
  extraTitle?: string;
  extraTotalCount?: any;
  link: string;
}

const Card = ({
  title,
  totalCount,
  extraTitle,
  extraTotalCount,
  link,
}: prop) => {
  return (
    <div className="max-w-screen-md border-2 p-6 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-800">
      {title === "Total Product" ? (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="37"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5" />
        <path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z" />
        </svg>
      ) : title === "Total User" || title === "Total Vender" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="41"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
      )}

      <div className="flex justify-between items-baseline">
        <h5 className="my-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-800">
          {title}
        </h5>
        {totalCount != null ? (
          <p className="mb-1 font-normal text-xl text-gray-500 dark:text-gray-800">
            {totalCount}
          </p>
        ) : (
          <Loder />
        )}
      </div>

      {extraTitle && extraTotalCount && (
        <div className="flex justify-between items-baseline">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-800">
            {extraTitle}
          </h5>
          <p className="mb-1 font-normal text-xl text-gray-500 dark:text-gray-800">
            {extraTotalCount}
          </p>
        </div>
      )}

      <Link
        href={link}
        className="inline-flex font-medium items-center text-blue-600 hover:underline"
      >
        See All Deatails
      </Link>
    </div>
  );
};

export default Card;
