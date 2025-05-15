import { Route, Routes, Navigate } from "react-router-dom";

import './App.css'

function App() {
  return (
    <>
      <Routes>
        {/* you can use 👇 character (* or wildcard) to any other route
        in combination with the Navigate component you can redirect the user to a default page */}
        <Route path="/*" element={<Navigate replace to="/login" />} />

          
        {/* </Route> */}
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/quiz:id" element={<QuizPage />} />
        <Route path="/quiz:id/question:id" element={<QuestionPage />} />
      </Routes>
    </>
  )
}

export default App
