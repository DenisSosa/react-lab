import React, { useEffect, useState } from 'react'

// Componente que lista usuarios en una tabla
export default function UsersTable() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // URL de la API. Cambiarla si se dispone de la API real.
    const API_URL = 'https://jsonplaceholder.typicode.com/users'

    async function fetchUsers() {
      try {
        setLoading(true)
        const res = await fetch(API_URL)
        if (!res.ok) throw new Error('Error en la respuesta de la API')
        const data = await res.json()
        // Mapear a campos solicitados: id, nombre, email
        const mapped = data.map(u => ({ id: u.id, nombre: u.name, email: u.email }))
        setUsers(mapped)
      } catch (err) {
        setError(err.message || 'Error al cargar usuarios')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <div className="center">Cargando usuarios...</div>
  if (error) return <div className="center">Error: {error}</div>

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.nombre}</td>
            <td>{u.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
