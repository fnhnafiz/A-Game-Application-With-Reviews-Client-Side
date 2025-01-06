import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GameHighLights from "./GameHighLights";
import Testimonial from "./Testimonial";
import CreativitySection from "./CreativitySection";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="min-h-[calc(100vh-270px)]">
        <section>
          <Outlet></Outlet>
        </section>
        <section className=" ">
          <GameHighLights></GameHighLights>
        </section>
        <section>
          <Testimonial></Testimonial>
        </section>
        <section>
          <CreativitySection></CreativitySection>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
