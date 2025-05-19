import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function QuizPage() {
  const { id } = useParams();
  const [preguntas, setPreguntas] = useState([]);
  const [cuestionario, setCuestionario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Obtener datos del cuestionario
    fetch(`http://localhost:3000/Cuestionarios/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Cuestionario:", data);
        setCuestionario(data);
      });

    // 2. Obtener preguntas asociadas
    fetch(`http://localhost:3000/PreguntasCuestionario?cuestionarioId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Preguntas obtenidas:", data);
        setPreguntas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar preguntas:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="page-container">Cargando preguntas...</div>;
  }

  if (!cuestionario) {
    return <div className="page-container">Cuestionario no encontrado</div>;
  }

  return (
    <div className="page-container">
      <h1>{cuestionario.Nombre}</h1>
      <p>{cuestionario.Descripcion}</p>

      <h2 style={{ marginTop: "2rem" }}>Preguntas</h2>
      {preguntas.length > 0 ? (
        preguntas.map((pregunta) => (
          <Link key={pregunta.id} to={`/quiz/${id}/question/${pregunta.id}`}>
            <button>{pregunta.titulo}</button>
          </Link>
        ))
      ) : (
        <p>No hay preguntas disponibles para este cuestionario.</p>
      )}

      <Link to="/home">
        <button style={{ marginTop: "20px" }}>Volver</button>
      </Link>
    </div>
  );
}

export default QuizPage;