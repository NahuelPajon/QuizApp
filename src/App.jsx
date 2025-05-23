import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/quiz/:id" element={<QuizPage />} />
      <Route
        path="/quiz/:quizId/question/:questionId"
        element={<QuestionPage />}
      />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
