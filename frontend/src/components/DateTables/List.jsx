import React from 'react'
import DataTable from './TestDateTable'

export default function List() {
    const data = [
        { id: 1, name: 'John Doe', age: 25, career: 'Engineering' },
        { id: 2, name: 'Jane Smith', age: 30, career: 'Medicine' },
        { id: 3, name: 'Michael Johnson', age: 28, career: 'Law' },
      ];
  return (
    <div className="container">
      <h1>DataTable con Filtros y Sección en React</h1>
      <DataTable data={data} />
    </div>
  )
}
