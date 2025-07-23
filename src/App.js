import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({ id: 1, name: "Juan Profesional" });
  const [services, setServices] = useState([]);
  const [newServiceName, setNewServiceName] = useState("");
  const [newServiceDuration, setNewServiceDuration] = useState("");
  const [reservations, setReservations] = useState([]);
  const [reservationForm, setReservationForm] = useState({
    serviceId: "",
    clientName: "",
    date: "",
    time: "",
  });

  const addService = () => {
    if (!newServiceName || !newServiceDuration) {
      alert("Por favor completa nombre y duración");
      return;
    }
    const newService = {
      id: Date.now(),
      name: newServiceName,
      duration: newServiceDuration,
    };
    setServices([...services, newService]);
    setNewServiceName("");
    setNewServiceDuration("");
  };

  const handleReservation = () => {
    if (
      !reservationForm.serviceId ||
      !reservationForm.clientName ||
      !reservationForm.date ||
      !reservationForm.time
    ) {
      alert("Completa todos los campos de reserva");
      return;
    }
    const newReservation = {
      id: Date.now(),
      ...reservationForm,
    };
    setReservations([...reservations, newReservation]);
    setReservationForm({
      serviceId: "",
      clientName: "",
      date: "",
      time: "",
    });
    alert("Cita reservada con éxito");
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20, fontFamily: "Arial" }}>
      <h1>Bienvenido, {user.name}</h1>

      <section style={{ marginBottom: 40 }}>
        <h2>Servicios</h2>
        <input
          placeholder="Nombre del servicio"
          value={newServiceName}
          onChange={(e) => setNewServiceName(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <input
          placeholder="Duración (min)"
          value={newServiceDuration}
          onChange={(e) => setNewServiceDuration(e.target.value)}
          style={{ width: 100, marginRight: 10 }}
          type="number"
        />
        <button onClick={addService}>Agregar Servicio</button>
        <ul>
          {services.map((s) => (
            <li key={s.id}>
              {s.name} - {s.duration} min
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Reservar Cita (cliente)</h2>
        <select
          value={reservationForm.serviceId}
          onChange={(e) => setReservationForm({ ...reservationForm, serviceId: e.target.value })}
          style={{ marginRight: 10 }}
        >
          <option value="">Selecciona un servicio</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Nombre cliente"
          value={reservationForm.clientName}
          onChange={(e) => setReservationForm({ ...reservationForm, clientName: e.target.value })}
          style={{ marginRight: 10 }}
        />
        <input
          type="date"
          value={reservationForm.date}
          onChange={(e) => setReservationForm({ ...reservationForm, date: e.target.value })}
          style={{ marginRight: 10 }}
        />
        <input
          type="time"
          value={reservationForm.time}
          onChange={(e) => setReservationForm({ ...reservationForm, time: e.target.value })}
          style={{ marginRight: 10 }}
        />
        <button onClick={handleReservation}>Reservar</button>

        <h3>Citas reservadas</h3>
        <ul>
          {reservations.map((r) => {
            const service = services.find((s) => s.id === Number(r.serviceId));
            return (
              <li key={r.id}>
                {r.clientName} - {service ? service.name : "Servicio eliminado"} - {r.date} {r.time}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
