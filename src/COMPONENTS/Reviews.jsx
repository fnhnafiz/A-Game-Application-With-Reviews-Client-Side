import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Reviews = ({ review }) => {
  const { _id, photo, name, description, rating, year, genres } = review;

  const { theme } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div
        className={`flex flex-col gap-2 max-w-5xl w-full bg-gradient-to-r from-orange-500 to-purple-600  p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150 border border-orange-500 space-y-5 ${theme}`}
      >
        {/* Header with user's name and review date */}
        <div className="flex flex-row justify-between w-full">
          <div className="flex items-center space-x-3">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={photo}
              alt=""
            />
            <p className="text-2xl font-semibold">
              <span className="text-white">{name}</span>
            </p>
          </div>

          <h3 className="text-xl font-bold">Genre: {genres}</h3>
        </div>

        {/* Review title and star rating */}
        <div className="flex flex-row justify-between w-full">
          <p className="text-xl font-semibold ">
            Year: <span className="text-white">{year}</span>
          </p>
          <div className="text-xs flex flex-row  items-center">
            <p className="text-sm mr-3">
              <span className="font-bold text-xl">Rating:</span> {rating}/10
            </p>
            {/* Filled stars */}
            {Array(4)
              .fill()
              .map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z" />
                </svg>
              ))}
            {/* Empty star */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z" />
            </svg>
          </div>
        </div>

        {/* Review content */}
        <div className="flex gap-5 justify-between">
          <div className="text-sm flex-1">
            <span className="font-bold text-xl underline mr-3">
              Review Details:
            </span>{" "}
            {description}
          </div>
          <div className="mt-4 text-center  ">
            <Link to={`/review-details/${_id}`}>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                Explore Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
