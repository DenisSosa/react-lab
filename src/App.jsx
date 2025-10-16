import React from 'react'
import UsersTable from './components/UsersTable'

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Listado de Usuarios</h1>
      <p>API usada: <code>https://jsonplaceholder.typicode.com/users</code></p>
      <UsersTable />
    </div>
  )
}
