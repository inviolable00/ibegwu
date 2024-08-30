import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import { SpeedDiall } from "../components/speeddial";
import Sidebar from "../Sidebar";

function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <Header />
      <main className="relative z-10 container mx-auto px-4 py-16 md:py-16 lg:py-20 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="button w-[92%]"
            data-text="Awesome"
          >
            <span className="actual-text">
              &nbsp;Welcome to Our Tribal Heritage&nbsp;
            </span>
            <span aria-hidden="true" class="hover-text">
              &nbsp;Welcome to Our Tribal Heritage&nbsp;
            </span>
          </div>
          <p className="text-xl md:text-2xl mb-16 mt-6">
            Discover the rich culture, traditions, and stories of the Igala
            People. Join us in celebrating our heritage and preserving the
            legacy for future generations.
          </p>
          <Link to="/home">
            <button class="glitch">Explore</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
