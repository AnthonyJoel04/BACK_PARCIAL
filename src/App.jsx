import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    age: "",
    photoUrl: ""
  })
  const [feedback, setFeedback] = useState("")

  // Obtener usuarios actualizados
  function fetchUsers() {
    axios.get('http://localhost:3000/users')
      .then(response => setUsers(response.data.users))
      .catch(() => setFeedback("Error al cargar usuarios"))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  // Validar y enviar formulario
  function handleSubmit(e) {
    e.preventDefault()
    for (const value of Object.values(form)) {
      if (!value) {
        setFeedback("Todos los campos son obligatorios")
        return
      }
    }
    axios.post('http://localhost:3000/users', form)
      .then(() => {
        setFeedback("Usuario creado exitosamente")
        setForm({ name: "", phone: "", email: "", address: "", age: "", photoUrl: "" })
        fetchUsers()
      })
      .catch(() => setFeedback("Error al agregar usuario, intenta nuevamente"))
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Función para borrar usuario
  function handleDelete(id) {
    if (!window.confirm("¿Seguro que quieres borrar este usuario?")) return
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        setFeedback("Usuario borrado correctamente")
        fetchUsers()
      })
      .catch(() => setFeedback("Error al borrar usuario"))
  }

  return (
    <div style={{ padding: 45, fontFamily: "Arial" }}>
      <h1><center>Lista de usuarios</center></h1>
      <p style={{ textAlign: "center" }}>Anthony Montañez</p>
      <p style={{ textAlign: "center" }}>Andres Valencia</p>
      {/* Formulario */}
      <form onSubmit={handleSubmit} style={{ marginBottom: 20, display: "flex", flexWrap: "wrap", gap: "5px" }}>
        <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
        <input name="phone" placeholder="Teléfono" value={form.phone} onChange={handleChange} />
        <input name="email" placeholder="Correo" value={form.email} onChange={handleChange} />
        <input name="address" placeholder="Dirección" value={form.address} onChange={handleChange} />
        <input name="age" type="number" placeholder="Edad" value={form.age} onChange={handleChange} />
        <input name="photoUrl" placeholder="URL foto perfil" value={form.photoUrl} onChange={handleChange} />
        <button type="submit">Agregar usuario</button>
        <button type="button" onClick={fetchUsers}>Actualizar lista</button>
      </form>

      {feedback && <div style={{ marginBottom: 20, color: "#095" }}>{feedback}</div>}

      {/* Lista usuarios con animacion */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {users.map(user => (
          <div
            key={user.id}
            className="user-card"
            style={{
              border: "3px solid #ccc",
              borderRadius: "20px",
              padding: "20px",
              width: "220px",
              textAlign: "center",
              animation: "fadeInScale 0.3s ease forwards",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
              cursor: "default"
            }}
          >
            <img src={user.photoUrl} alt={user.name} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
            <h3>{user.name}</h3>
            <p>📞 {user.phone}</p>
            <p>📧 {user.email}</p>
            <p>🏠 {user.address}</p>
            <p>🎂 {user.age} años</p>
            <button
              onClick={() => handleDelete(user.id)}
              style={{
                marginTop: 8,
                background: "#c62828",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "4px 12px",
                cursor: "pointer"
              }}
            >
              Borrar
            </button>
          </div>
        ))}
      </div>

      {/* Animacion en CSS */}
      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .user-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  )
}

export default App  