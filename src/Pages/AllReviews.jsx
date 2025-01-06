import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Reviews from "../COMPONENTS/Reviews";
// import { TypeAnimation } from "react-type-animation";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../Provider/AuthProvider";

const AllReviews = () => {
  window.scroll("smooth", 0);

  const { theme } = useContext(AuthContext);

  const allReviewsData = useLoaderData();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(allReviewsData);
  }, [allReviewsData]);

  const handleGenresChange = (genre) => {
    fetch(
      `https://a-game-review-application-server.vercel.app/filter-reviews/${genre}`
    )
      .then((result) => result.json())
      .then((data) => {
        setReviews(data);
      });
  };

  const handleSorted = (sortKey) => {
    if (sortKey === "default") {
      setReviews(allReviewsData);
      return;
    }
    const urlMap = {
      default: "default",
      highestReview: "reviews/rating/asc",
      lowestReview: "reviews/rating/desc",
      highestYear: "reviews/year/asc",
      lowestYear: "reviews/year/desc",
    };

    const url = `https://a-game-review-application-server.vercel.app/sort-${urlMap[sortKey]}`;

    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.error("Error fetching sorted data:", error));
  };

  return (
    <div className={`pb-12 bg-gray-200 ${theme}`}>
      <div className=" bg-orange-900 h-[500px] rounded-b-xl bg-reviewImageBg bg-cover bg-center ">
        <div className="blurssss h-full w-full rounded-b-xl">
          <div className="pt-12 space-y-8">
            <h1 className="text-center font-extrabold text-2xl sm:text-5xl p-6 text-white">
              TOTAL
              <span style={{ color: "red", fontWeight: "bold" }}>
                <Typewriter
                  words={[
                    "GAME REVIEWS",
                    "REVIEWS HERE",
                    "GAME REVIEWS",
                    "REVIEWS HERE",
                  ]}
                  loop={15}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="px-5 md:px-32 text-white text-center">
              Discover a world of gaming insights with our Total Reviews
              section, featuring every review shared by our community. From
              classic favorites to the latest releases, explore diverse
              perspectives, detailed feedback, and honest opinions on a wide
              range of games. Whether you're looking for recommendations or
              sharing your thoughts, this collection celebrates the passion and
              diversity of gamers everywhere!
            </p>
          </div>
          <div>
            <div className="">
              <select
                onChange={(e) => handleGenresChange(e.target.value)}
                className={`w-1/2 block mx-auto my-12 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${theme}`}
              >
                <option value="default">Select Genre</option>
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>
            <div className="flex justify-end gap-3 items-center px-8">
              <label
                htmlFor="sortOptions"
                className=" text-sm font-medium text-white"
              >
                Sort By:
              </label>
              <select
                onChange={(e) => handleSorted(e.target.value)}
                className={`border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${theme}`}
              >
                <option value="default">Default</option>
                <option value="highestReview">Highest Review</option>
                <option value="lowestReview">Lowest Review</option>
                <option value="highestYear">Highest Year</option>
                <option value="lowestYear">Lowest Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2   gap-5 container mx-auto my-12">
        {reviews.map((review) => (
          <Reviews key={review._id} review={review}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
{
  /* <select
            name="genres"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
          </select> */
}
