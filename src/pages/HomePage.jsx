import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [cuestionarios, setCuestionarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/Cuestionarios")
      .then((res) => res.json())
      .then((data) => {
        setCuestionarios(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los cuestionarios:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="page-container">Cargando cuestionarios...</div>;
  }

  return (
    <div className="page-container">
      <h1>Cuestionarios</h1>
      {cuestionarios.map((quiz) => (
        <div key={quiz.id} style={{ marginBottom: "1.5rem" }}>
          <h2>{quiz.Nombre}</h2>
          <p>{quiz.Descripcion}</p>
          <Link to={`/quiz/${quiz.id}`}>
            <button>Ver preguntas</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
