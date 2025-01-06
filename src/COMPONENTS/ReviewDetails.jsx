import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const ReviewDetails = () => {
  const loadedDetails = useLoaderData();
  const { user } = useContext(AuthContext);

  const { _id, name, photo, description, genres, rating, year } = loadedDetails;

  const handleWatchList = () => {
    const watchlist = {
      id: _id,
      email: user?.email,
    };

    fetch("https://a-game-review-application-server.vercel.app/watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(watchlist),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Add to Watchlist",
            text: "You are successfully added to the watchlist ",
            icon: "success",
          });
        }
        if (data.message) {
          Swal.fire({
            title: "You already added",
            text: "You Have Added This",
            icon: "warning",
          });
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section with Background Image */}
        <div className="relative">
          <img src={photo} alt={name} className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-80"></div>
          <h1 className="absolute bottom-4 left-6 text-white text-3xl font-bold drop-shadow-md">
            {name}
          </h1>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-4">
          {/* Key Details */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 font-semibold text-sm">
                Release Year
              </p>
              <p className="text-lg font-bold">{year}</p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold text-sm">Genre</p>
              <p className="text-lg font-bold">{genres}</p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold text-sm">Rating</p>
              <p className="text-lg font-bold text-yellow-500">{rating} / 5</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              Review Description
            </h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 p-4 text-center">
          <button
            onClick={handleWatchList}
            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
