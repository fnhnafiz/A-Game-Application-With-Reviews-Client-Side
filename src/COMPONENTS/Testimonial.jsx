import { useContext } from "react";
import gamer1 from "../../public/assets/gamer-1.webp";
import gamer2 from "../../public/assets/gamer-2.webp";
import gamer3 from "../../public/assets/gamer-3.webp";
import { AuthContext } from "../Provider/AuthProvider";

const Testimonial = () => {
  const { theme } = useContext(AuthContext);

  return (
    <div className={`bg-gray-900 py-12 px-4 ${theme}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className={`text-4xl font-extrabold text-white mb-6 ${theme}`}>
          What Gamers Say
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Real feedback from our gaming community!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 space-y-3">
            <div className="flex items-center mb-4">
              <img
                src={gamer1}
                alt="Gamer 1"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">Alex Gamer</h3>
                <p className="text-sm text-gray-400">RPG Enthusiast</p>
              </div>
            </div>
            <p className="text-gray-300 text-left">
              "Chill Gamer is my go-to site for honest and detailed game
              reviews. The community feedback has helped me discover hidden
              gems!"
            </p>
            <div className="flex">
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

          {/* Testimonial Card 2 */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 space-y-3">
            <div className="flex items-center mb-4">
              <img
                src={gamer2}
                alt="Gamer 2"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">
                  Samantha Quest
                </h3>
                <p className="text-sm text-gray-400 text-left">
                  Adventure Gamer
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-left">
              "The reviews here are spot-on! I always check Chill Gamer before
              purchasing a new title."
            </p>
            <div className="flex">
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

          {/* Testimonial Card 3 */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 space-y-3">
            <div className="flex items-center mb-4">
              <img
                src={gamer3}
                alt="Gamer 3"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white text-left">
                  Ryan Player
                </h3>
                <p className="text-sm text-gray-400 text-left">
                  Competitive Gamer
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-left">
              "Chill Gamer's user-friendly interface and in-depth reviews make
              it my favorite place to explore new games!"
            </p>
            <div className="flex">
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
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
