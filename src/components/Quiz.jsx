import { Link } from "react-router-dom";
import React from "react";

function QuizHome({ quizzes, setQuizData }) {
  const handleSelectedQuiz = (quiz) => {
    setQuizData(quiz);
  };

  return (
    <div>
      <div className="absolute inset-0  bg-opacity-50"></div>
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8  mx-auto">
        <div className="relative p-6 ">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-4 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
                Welcome to the Igala Quiz!
              </h2>
              <p className="mt-5 text-gray-600 dark:text-gray-400">
                Pick a subject to get started and test your knowledge.
              </p>
              <nav
                className="grid gap-4 mt-5 "
                aria-label="Quizzes"
                role="tablist"
              >
                {quizzes.map((quiz) => (
                  <Link
                    key={quiz.title}
                    to="/question"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    onClick={() => handleSelectedQuiz(quiz)}
                    role="tab"
                  >
                    <span className="flex gap-x-6">
                      <span
                        className="flex-shrink-0 size-10 flex items-center justify-center rounded-lg"
                        style={{ backgroundColor: quiz.iconbg }}
                      >
                        <img
                          src={quiz.icon}
                          alt={quiz.title}
                          className="size-6"
                        />
                      </span>
                      <span className="grow">
                        <span className="block text-lg font-semibold text-gray-800 dark:text-neutral-200">
                          {quiz.title}
                        </span>
                        <span className="block mt-1 text-gray-800 dark:text-neutral-200">
                          Start the quiz
                        </span>
                      </span>
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="lg:col-span-6">
              <div className="relative">
                <img
                  className="w-full shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                  src="landing.jpg"
                  alt="Quiz background"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                  <h3 className="text-xl font-bold text-white">
                    Test Your Igala Knowledge
                  </h3>
                  <p className="mt-2 text-white text-sm">
                    Explore various subjects and challenge yourself with our
                    interactive quizzes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizHome;