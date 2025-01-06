import { MdSportsEsports } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { GiLaurelsTrophy } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const GameHighLights = () => {
  const { theme } = useContext(AuthContext);

  return (
    <div className={`bg-black text-white py-12 ${theme}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Card 1 */}
          <div className="border border-orange-500 p-8 rounded-lg">
            <div className="flex justify-center mb-4">
              <MdSportsEsports className={`text-5xl text-white ${theme}`} />
            </div>
            <h3 className="text-xl font-bold mb-2">Incredible Atmosphere</h3>
            <p className="text-sm leading-relaxed">
              Dive into an immersive world where every detail enhances the
              gaming experience. Feel the magic in every moment.
            </p>
          </div>
          {/* Card 2 */}
          <div className="border border-orange-500 p-8 rounded-lg">
            <div className="flex justify-center mb-4">
              <FaFireAlt className={`text-5xl text-white ${theme}`} />
            </div>
            <h3 className="text-xl font-bold mb-2">Catchy Battles</h3>
            <p className="text-sm leading-relaxed">
              Experience thrilling combat mechanics that keep you on the edge of
              your seat. Every battle tells a story.
            </p>
          </div>
          {/* Card 3 */}
          <div className="border border-orange-500 p-8 rounded-lg">
            <div className="flex justify-center mb-4">
              <GiLaurelsTrophy className={`text-5xl text-white ${theme}`} />
            </div>
            <h3 className="text-xl font-bold mb-2">28 Awards</h3>
            <p className="text-sm leading-relaxed">
              A game recognized for its innovation and excellence with 28
              prestigious awards. Play the best, feel the best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHighLights;
