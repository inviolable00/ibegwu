import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import History from "./pages/history";
import LearnPage from "./pages/learnPage";
import FirstPage from "./pages/firstPage";
import FunPage from "./pages/entertainment";
import QuizHome from "./components/Quiz";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import data from "../data.json";
import QuizPage from "./components/QuizPage";

function App() {
  const quizzes = data.quizzes;
  const [quizData, setQuizData] = useState({
    title: "",
    icon: "",
    iconbg: "",
    questions: [],
  });

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<FirstPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/entertainment" element={<FunPage />} />

          <Route
            path="/quiz"
            element={<QuizHome quizzes={quizzes} setQuizData={setQuizData} />}
          />
          <Route path="/question" element={<QuizPage quizData={quizData} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
