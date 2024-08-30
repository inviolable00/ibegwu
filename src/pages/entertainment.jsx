import React from "react";
import { Link } from "react-router-dom";
import { SpeedDiall } from "../components/speeddial";
import Sidebar from "../Sidebar";

function FunPage() {
  const features = [
    {
      title: "Games",
      icon: "🕹️",
      path: "/entertainment",
      image: "/game.jpg",
    },
    {
      title: "Riddles",
      icon: "🤔",
      path: "/entertainment",
      image: "/riddle.jpg",
    },
    {
      title: "Adage",
      icon: "🗣️",
      path: "/entertainment",
      image: "/adage.jpg",
    },
    {
      title: "Quiz",
      icon: "🎭",
      path: "/quiz",
      image: "/landing.jpg",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0  bg-black bg-opacity-20">
        <Sidebar />
      </div>
      <main className="relative z-10 xl:max-w-[70rem] lg:max-w-[55rem] md:max-w-[40rem] mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14 text-white">
        <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
          <div
            className="button w-[70%] sm:w-[55%] lg:w-[50%] "
            data-text="Awesome"
          >
            <span className="actual-text">&nbsp;entertainment&nbsp;</span>
            <span aria-hidden="true" class="hover-text">
              &nbsp;entertainment&nbsp;
            </span>
          </div>
          <p className="text-xl mt-6">
            Lets have some fun shall we.... What are you doing?
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:w-full sm:m-auto lg:grid-cols-4 gap-6 lg:gap-8 m-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <Link
                  to={feature.path}
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <span className="text-4xl mb-2">{feature.icon}</span>
                  <button className="glitch text-xl font-semibold">
                    {feature.title}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <SpeedDiall />
    </div>
  );
}

export default FunPage;
