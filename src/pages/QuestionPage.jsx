import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function QuestionPage() {
  const [questions, setQuestions] = useState([]); // stored fetched questions
  const [responses, setResponses] = useState([]); // stored fetched responses
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error handling state

  const username = localStorage.getItem("username");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/question/p3");
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const url = "http://localhost:3000/Preguntas";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuestions(data); // actualiza el estado de questions con los datos obtenidos
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const url = "http://localhost:3000/Respuestas";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setResponses(data); // actualiza el estado de questions con los datos obtenidos
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, []);

  const { id: paramId } = useParams();
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const question = questions.find((question) => question.id === paramId);
  //   const response = responses.find((response) => response.username === username);

  if (!question) return <p>Pregunta no encontrada</p>;

  return (
    <div className="question-page">
      <div key={question.id} className="question-item">
        <h2>{question.Titulo}</h2>
        <p>{question.Pregunta}</p>
        <div>
          Respuesta: {question.Tipo}
          {question.Opciones.length !== 0 ? (
            question.Opciones.map((opcion, index) => (
              <div key={index}>
                {opcion}
                {index < question.Opciones.length - 1 ? ", " : ""}
              </div>
            ))
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Escribe tu respuesta" />
              <button type="submit">Enviar</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
