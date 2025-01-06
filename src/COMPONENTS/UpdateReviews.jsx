import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const UpdateReviews = () => {
  const updateReviews = useLoaderData();
  const { _id, photo, name, description, rating, year, genres } = updateReviews;
  const { user, theme } = useContext(AuthContext);

  const handleUpdateReviews = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const photo = formData.get("photo");
    const name = formData.get("name");
    const description = formData.get("description");
    const rating = formData.get("rating");
    const year = formData.get("year");
    const genres = formData.get("genres");
    const email = formData.get("email");

    // console.log({ photo, name, description, rating, year, genres });

    const updateReview = {
      photo,
      name,
      description,
      rating: Number(rating),
      year,
      genres,
      email,
    };

    fetch(`https://a-game-review-application-server.vercel.app/update/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Update your Review");
        }
      });
  };

  return (
    <div className={`px-6 md:px12  p-4 md:py-12 ${theme}`}>
      <h2 className="text-2xl font-bold mb-4">Update Your Review</h2>

      <form onSubmit={handleUpdateReviews} className="space-y-6 ">
        <div>
          <label
            htmlFor="gameCoverImage"
            className={`block text-sm font-semibold text-gray-700 ${theme}`}
          >
            Game Cover Image URL
          </label>
          <input
            name="photo"
            type="text"
            id="gameCoverImage"
            defaultValue={photo}
            // onChange={(e) => setGameCoverImage(e.target.value)}
            className="w-full p-2 mt-2 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter game cover image URL"
          />
        </div>

        <div>
          <label
            htmlFor="gameTitle"
            className={`block text-sm font-semibold text-gray-700 ${theme}`}
          >
            Game Title/Name
          </label>
          <input
            name="name"
            type="text"
            id="gameTitle"
            defaultValue={name}
            // onChange={(e) => setGameTitle(e.target.value)}
            className="w-full p-2 mt-2 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter game title"
          />
        </div>

        <div>
          <label
            htmlFor="reviewDescription"
            className={`block text-sm font-semibold text-gray-700 ${theme}`}
          >
            Review Description
          </label>
          <textarea
            name="description"
            id="reviewDescription"
            defaultValue={description}
            // onChange={(e) => setReviewDescription(e.target.value)}
            className="w-full p-2 mt-2 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Write your detailed review"
            rows="4"
          />
        </div>

        <div>
          <label
            htmlFor="rating"
            className={`block text-sm font-semibold text-gray-700 ${theme}`}
          >
            Rating (1-10)
          </label>
          <input
            name="rating"
            type="number"
            id="rating"
            defaultValue={rating}
            // onChange={(e) => setRating(e.target.value)}
            className="w-full p-2 mt-2 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            min="1"
            max="10"
          />
        </div>

        {/* Publishing Year */}
        <div>
          <label
            htmlFor="publishingYear"
            className={`block text-sm font-semibold text-gray-700 ${theme}`}
          >
            Publishing Year
          </label>
          <input
            name="year"
            type="number"
            id="publishingYear"
            defaultValue={year}
            // onChange={(e) => setPublishingYear(e.target.value)}
            className="w-full p-2 mt-2 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter publishing year"
          />
        </div>

        <div>
          <label
            htmlFor="genre"
            className={`block text-sm font-semibold text-gray-700 ${theme}`}
          >
            Genres
          </label>
          <select
            name="genres"
            id="genre"
            defaultValue={genres}
            // onChange={(e) => setGenre(e.target.value)}
            className="w-full p-2 mt-2 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option defaultValue="">Select Genre</option>
            <option defaultValue="Action">Action</option>
            <option defaultValue="RPG">RPG</option>
            <option defaultValue="Adventure">Adventure</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="userEmail"
            className={`block text-sm font-semibold text-gray-700 ${theme}`}
          >
            User Email
          </label>
          <input
            name="email"
            type="email"
            id="userEmail"
            defaultValue={user?.email}
            // defaultValue="user@example.com" // Replace with logged-in user email
            readOnly
            className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Update Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReviews;
