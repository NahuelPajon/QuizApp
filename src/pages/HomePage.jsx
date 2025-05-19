import React from "react";

function Cuestionarios() {
  const cuestionarios = [
    "Cuestionario de Introducción",
    "Preferencias Personales",
  ];

  const manejarClick = (nombre) => {
    alert(`Abriste el ${nombre}`);
  };

  return (
    <div style={estilos.contenedor}>
      <h1 style={estilos.titulo}>Cuestionarios</h1>
      <div style={estilos.botones}>
        {cuestionarios.map((nombre, index) => (
          <button
            key={index}
            onClick={() => manejarClick(nombre)}
            style={estilos.boton}
          >
            {nombre}
          </button>
        ))}
      </div>
    </div>
  );
}

const estilos = {
  contenedor: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  titulo: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  botones: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
  boton: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#f1f1f1",
    transition: "background 0.3s",
  },
};

export default Cuestionarios;
