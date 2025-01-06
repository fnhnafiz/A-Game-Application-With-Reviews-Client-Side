import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Home = () => {
  const highestReviews = useLoaderData();
  // console.log(highestReviews);
  const { theme } = useContext(AuthContext);

  return (
    <div>
      <Banner></Banner>
      <div className=" bg-gray-200">
        <div className="bg-gray-100">
          <div className={`px-8 md:px-12 py-8  mx-auto  ${theme}`}>
            <h2
              className={`text-3xl font-bold text-center text-gray-900 mb-6 ${theme}`}
            >
              Top-Rated Reviews
            </h2>
            <p className="text-center pb-5 text-gray-400">
              Explore our Top Reviews section to discover the most-loved games
              as rated by our passionate community of gamers. From action-packed
              adventures to immersive RPGs, these reviews highlight the best
              gaming experiences out there. Dive into detailed critiques,
              insightful ratings, and expert opinions to guide your next epic
              journey. Let the Top Reviews be your ultimate gaming companion!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highestReviews?.map((review) => (
                <div
                  key={review._id}
                  className="flex flex-col justify-center items-center space-y-4"
                >
                  <div className="flex flex-col gap-2 max-w-5xl w-full bg-gradient-to-r from-orange-400 via-pink-500 to-red-500   p-5 rounded-md mt-8 shadow-md  space-y-5 ring-2 ring-orange-500">
                    {/* Header with user's name and review date */}
                    <div className="flex flex-row items-center justify-between w-full ">
                      <div className="flex items-center space-x-3">
                        <img
                          className="w-12 h-12 rounded-full object-cover"
                          src={review.photo}
                          alt=""
                        />
                        <p className="text-xl font-thin">
                          <span className="text-white">{review.name}</span>
                        </p>
                      </div>

                      <h3 className="text-xl text-white font-bold">
                        Genre: {review.genres}
                      </h3>
                    </div>

                    {/* Review title and star rating */}
                    <div className="flex flex-row justify-between w-full">
                      <p className="text-xl font-semibold text-white">
                        Year:{" "}
                        <span className="text-white font-thin">
                          {review.year}
                        </span>
                      </p>
                      <div className="text-xs flex flex-row  items-center">
                        <p className="text-sm text-white mr-3">
                          <span className="font-bold text-xl">Rating:</span>{" "}
                          {review.rating}/10
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
                    <div className="flex gap-5 justify-between text-white">
                      <div className="text-sm flex-1">
                        <span className="font-semibold text-xl  mr-3 ">
                          Review Details :
                        </span>{" "}
                        {review.description}
                      </div>
                      <div className="mt-4 text-center  ">
                        <Link
                          data-tooltip-id="my-tooltip-1"
                          to={`/review-details/${review._id}`}
                        >
                          <button className="bg-white font-semibold text-orange-500 px-4 py-2 rounded-md ">
                            Explore Details
                          </button>
                          <ReactTooltip
                            id="my-tooltip-1"
                            place="top"
                            content="Here You Can See Review Details"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`pt-12 ${theme}`}>
        <Link to="/all-reviews">
          <button className="block mx-auto bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            See More Reviews
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
