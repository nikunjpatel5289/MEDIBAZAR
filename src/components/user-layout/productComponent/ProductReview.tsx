import axios, { HttpStatusCode } from "axios";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductReview = () => {
  const param = useParams();
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (comment === "" || rating < 1) {
      setError(true);
    } else {
      setError(false);
      //   console.info(rating, "<- Rating Comment ->", comment, " Parma->", param.id);
      try {
        const token = JSON.parse(localStorage.getItem("token") || "");
        if (token === "") {
          toast("Login Your Self Then Give Review...");
        } else {
          let config = {
            headers: {
              Authorization: "Bearer " + token,
            },
          };

          const result = await axios.post(
            "http://127.0.0.1:3000/review",
            {
              productID: param.id,
              rate: rating,
              message: comment,
            },
            config
          );

          if (result.status === 200) {
            setRating(0);
            setComment("");
            toast("Your Review Has Recoderd Thankyou...");
          }
        }
      } catch (error: any) {
        // console.info(error.response.data);
        toast(error.response.data.message);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <h3 className="text-center my-3 text-black">Product Review</h3>
      <form
        className="space-y-4 font-[sans-serif] max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center space-x-2 my-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="w-6 cursor-pointer"
              fill={index < rating ? "#facc15" : "#CED5D8"}
              viewBox="0 0 14 13"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleStarClick(index)}
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          ))}
        </div>

        <div className="max-w-md mx-auto w-full font-[sans-serif] my-4">
          <label className="text-black text-[19px] block mb-2">Message</label>
          <div className="w-full">
            <textarea
              placeholder="Type Message"
              className="p-4 bg-gray-100  w-full text-lg border rounde outline-[#007bff]"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            {error && (
              <p className="text-sm text-red-500 mt-0.5">
                Pleace Enter Your Comment!
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm font-semibold bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Share Your Review
        </button>
      </form>
    </>
  );
};

export default ProductReview;
