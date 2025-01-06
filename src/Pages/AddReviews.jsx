import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddReviews = () => {
  const { user, theme } = useContext(AuthContext);

  const handleAddReviewSubmit = (e) => {
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

    const addReviews = {
      photo,
      name,
      description,
      rating: Number(rating),
      year,
      genres,
      email,
    };

    fetch("https://a-game-review-application-server.vercel.app/add-reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addReviews),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        // console.log(data);
        form.reset();
        if (data.insertedId) {
          Swal.fire({
            title: "Reviews Added",
            text: "You are successfully added to the all reviews ",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className={`px-8 md:px-12 mx-auto p-4 md:py-12 ${theme}`}>
      <h2 className="text-2xl font-bold mb-4">Add Your Review</h2>

      <form onSubmit={handleAddReviewSubmit} className="space-y-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Game Cover Image */}
          <div>
            <label
              htmlFor="gameCoverImage"
              className={`block text-sm font-semibold text-gray-700 ${theme}`}
            >
              Game Cover Image URL<span className="text-red-500">**</span>
            </label>
            <input
              required
              name="photo"
              type="text"
              id="gameCoverImage"
              // value={gameCoverImage}
              // onChange={(e) => setGameCoverImage(e.target.value)}
              className="w-full p-2 mt-2 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter game cover image URL"
            />
          </div>

          {/* Game Title */}
          <div>
            <label
              htmlFor="gameTitle"
              className={`block text-sm font-semibold text-gray-700 ${theme}`}
            >
              Game Title/Name<span className="text-red-500">**</span>
            </label>
            <input
              required
              name="name"
              type="text"
              id="gameTitle"
              // value={gameTitle}
              // onChange={(e) => setGameTitle(e.target.value)}
              className="w-full p-2 mt-2 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter game title"
            />
          </div>

          {/* Rating */}
          <div>
            <label
              htmlFor="rating"
              className={`block text-sm font-semibold text-gray-700 ${theme}`}
            >
              Rating (1-10)<span className="text-red-500">**</span>
            </label>
            <input
              required
              name="rating"
              type="number"
              id="rating"
              // value={rating}
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
              Publishing Year<span className="text-red-500">**</span>
            </label>
            <input
              required
              name="year"
              type="number"
              id="publishingYear"
              // value={publishingYear}
              // onChange={(e) => setPublishingYear(e.target.value)}
              className="w-full p-2 mt-2 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter publishing year"
            />
          </div>
        </div>
        {/* Genres */}
        <div className="w-full">
          <label
            htmlFor="genre"
            className={`block text-sm font-semibold text-gray-700 ${theme}`}
          >
            Genres<span className="text-red-500">**</span>
          </label>
          <select
            name="genres"
            id="genre"
            // value={genre}
            // onChange={(e) => setGenre(e.target.value)}
            className="w-full  p-2 mt-2 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
          </select>
        </div>

        {/* Review Description (Full Width) */}
        <div className="col-span-1 md:col-span-2">
          <label
            htmlFor="reviewDescription"
            className={`block text-sm font-semibold text-gray-700 ${theme}`}
          >
            Review Description<span className="text-red-500">**</span>
          </label>
          <textarea
            name="description"
            id="reviewDescription"
            // value={reviewDescription}
            // onChange={(e) => setReviewDescription(e.target.value)}
            className="w-full p-2 mt-2 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Write your detailed review"
            rows="4"
          />
        </div>

        {/* User Email (Full Width) */}
        <div className="col-span-1 md:col-span-2">
          <label
            htmlFor="userEmail"
            className={`block text-sm font-semibold text-gray-700 ${theme}`}
          >
            User Email
          </label>
          <input
            required
            name="email"
            type="email"
            id="userEmail"
            defaultValue={user.email}
            readOnly
            className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500"
          />
        </div>

        {/* Submit Button (Full Width) */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReviews;
