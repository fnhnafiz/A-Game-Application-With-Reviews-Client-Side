const CreativitySection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Unleash Your Creativity
        </h2>
        <p className="text-lg mb-8">
          Gaming is an art, and your reviews are the masterpiece! Share your
          thoughts, add unique perspectives, and help others explore the hidden
          gems in the gaming world. Creativity fuels the next big gaming
          trends—make your voice heard.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-gradient-to-b from-blue-700 to-purple-600 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Expressive Reviews</h3>
            <p className="text-sm mb-6">
              Showcase your unique style with detailed and vivid reviews that
              stand out.
            </p>
            <button className="py-2 px-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-200">
              Start Reviewing
            </button>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-gradient-to-b from-purple-700 to-blue-600 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Build Your Watchlist</h3>
            <p className="text-sm mb-6">
              Keep track of the most creative and exciting games you want to
              explore next.
            </p>
            <button className="py-2 px-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-200">
              Add to Watchlist
            </button>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-gradient-to-b from-blue-600 to-purple-500 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Collaborate & Share</h3>
            <p className="text-sm mb-6">
              Inspire others by sharing your reviews and joining the gaming
              community.
            </p>
            <button className="py-2 px-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-300">
              Connect Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativitySection;
