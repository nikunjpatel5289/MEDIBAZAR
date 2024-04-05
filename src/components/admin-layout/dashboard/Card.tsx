import Loder from "@/components/ExtraComponent/Loder";
import Link from "next/link";

interface prop {
  title: string;
  totalCount: number;
  extraTitle?: string;
  extraTotalCount?: number;
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
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {title === "Total Product's" ? (
        <svg
          className="w-[38px] h-[38px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z" />
          <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z" />
        </svg>
      ) : (
        <svg
          className="w-[38px] h-[38px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.2"
            d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      )}

      <div className="flex justify-between">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        {totalCount != null ? (
          <p className="mb-1 font-normal text-xl text-gray-500 dark:text-gray-400">
            {totalCount}
          </p>
        ) : (
          <Loder />
        )}
      </div>

      {extraTitle && extraTotalCount && (
        <div className="flex justify-between">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {extraTitle}
          </h5>
          <p className="mb-1 font-normal text-xl text-gray-500 dark:text-gray-400">
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
