import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() !== "") {
      localStorage.setItem("username", username);
      navigate("/home");
    }
  };

  return (
    <div className="page-container">
      <h1 style={{ marginBottom: "1.5rem" }}>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            marginBottom: "20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxSizing: "border-box"
          }}
        />
        <button type="submit" style={{ width: "100%" }}>
          Entrar
        </button>
      </form>
    </div>
  );
}
