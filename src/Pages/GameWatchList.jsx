import { useLoaderData } from "react-router-dom";

const GameWatchList = () => {
  const watchlist = useLoaderData();
  console.log(watchlist);
  return (
    <div className="min-h-screen bg-watchListBanner bg-cover bg-no-repeat py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Your Watchlist
        </h1>
        <p className="text-white mb-12 text-center">
          My Watchlist" is a personalized feature in the Gaming Reviews platform
          designed to help users curate and manage their favorite games
          effortlessly. Users can easily add games to their Watchlist for quick
          access, keeping track of titles they're interested in exploring or
          reviewing later. The intuitive and user-friendly interface ensures
          seamless navigation, offering a streamlined way to organize and
          revisit selected games at any time. Perfect for gaming enthusiasts who
          want to stay organized and focused on their top picks!
        </p>

        {/* Watchlist Items */}
        {watchlist.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {watchlist.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>

                  {/* Key Details */}
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <p>
                      <span className="font-bold">Genre:</span> {item.genres}
                    </p>
                    <p>
                      <span className="font-bold">Year:</span> {item.year}
                    </p>
                  </div>

                  {/* Rating */}
                  <p className="text-yellow-500 text-lg font-semibold">
                    Rating: {item.rating} / 5
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-12">
            Your watchlist is empty. Start adding your favorite reviews now!
          </p>
        )}
      </div>
    </div>
    // <div>watchList</div>
    // <div className="min-h-screen bg-gray-100 py-8">
    //   <div className="max-w-4xl mx-auto px-4">
    //     {/* Header */}
    //     <h1 className="text-4xl font-bold text-indigo-600 text-center mb-6">
    //       Watchlist Details
    //     </h1>

    //     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    //       {/* Image */}
    //       <img src={photo} alt={name} className="w-full h-64 object-cover" />

    //       {/* Content */}
    //       <div className="p-6">
    //         <h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
    //         <p className="text-gray-600 text-base mb-6">{description}</p>

    //         {/* Key Details */}
    //         <div className="grid grid-cols-2 gap-6 text-gray-700 text-lg">
    //           <p>
    //             <span className="font-semibold">Genre:</span> {genres}
    //           </p>
    //           <p>
    //             <span className="font-semibold">Year:</span> {year}
    //           </p>
    //           <p>
    //             <span className="font-semibold">Rating:</span> {rating}/5
    //           </p>
    //         </div>

    //         {/* Watchlist Button */}
    //         <button className="mt-8 w-full bg-indigo-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-indigo-700 transition">
    //           Add to Watchlist
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default GameWatchList;
