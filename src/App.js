import React, { useState } from "react";

function App() {
  const [user, setUser] = useState(null); // Ahora user está definido y listo para usarse si lo necesitas

  // Ejemplo de función para asignar usuario
  const handleLogin = () => {
    setUser({ name: "Juan" });
  };

  return (
    <div className="App">
      <h1>Bienvenido a Agenda Express</h1>
      {user ? (
        <p>Hola, {user.name}</p>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
  );
}

export default App;
