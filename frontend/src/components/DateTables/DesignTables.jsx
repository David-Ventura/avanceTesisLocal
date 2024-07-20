import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { NewExpedientForms, NewSolicitudEstudentForm } from '../Buttons/NewExpedient';


const MyDataTable = () => {
  // Navegador para redirección
  const navigate = useNavigate();

  // Datos de ejemplo
  const initialData = [
    { id: 1, col1: 'Dato 1', col2: 'Dato 2', col3: 'Dato 3', col4: 'Dato 4' },
    { id: 2, col1: 'Dato 5', col2: 'Dato 6', col3: 'Dato 7', col4: 'Dato 8' },
    { id: 3, col1: 'Dato 9', col2: 'Dato 10', col3: 'Dato 11', col4: 'Dato 12' },
    // Más datos si es necesario
  ];

  // Estado para los datos y el filtro
  const [data, setData] = useState(initialData);
  const [searchText, setSearchText] = useState('');

  // Filtrar datos según el texto de búsqueda
  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  // Definición de las columnas
  const columns = [
    { name: 'Columna 1', selector: row => row.col1, sortable: true },
    { name: 'Columna 2', selector: row => row.col2, sortable: true },
    { name: 'Columna 3', selector: row => row.col3, sortable: true },
    { name: 'Columna 4', selector: row => row.col4, sortable: true },
    {
      name: 'Acciones',
      cell: row => (
        <div className="text-center">
          <button
            className="btn btn-warning mx-1"
            onClick={() => handleEdit(row.id)}
          >
            <FaEdit size={20} />
          </button>
          <button
            className="btn btn-danger mx-1"
            onClick={() => handleDelete(row.id)}
          >
            <MdDelete size={20} />
          </button>
        </div>
      ),
      ignoreRowClick: true,
  
    }
  ];

  // Función para manejar la edición
  const handleEdit = (id) => {
    navigate(`/edit/${id}`); // Usa el id del registro para la navegación
  };

  // Función para manejar la eliminación
  const handleDelete = (id) => {
    console.log(`Delete ${id}`);
    // Implementa tu lógica de eliminación aquí
  };

  // Manejar el cambio en el campo de búsqueda
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="container mt-4">
      <div className="alert alert-primary text-center" role="alert">
        <h2>Lista de Registros</h2>

    
      </div>
    <NewSolicitudEstudentForm />
    <br />
      {/* Caja de búsqueda */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar..."
          value={searchText}
          onChange={handleSearch}
        />
      </div>

      {/* Tabla de datos */}
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        responsive
        striped
        customStyles={{
          headCells: {
            style: {
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#f8f9fa',
            },
          },
          cells: {
            style: {
              fontSize: '14px',
            },
          },
        }}
      />
    </div>
  );
};

export default MyDataTable;
