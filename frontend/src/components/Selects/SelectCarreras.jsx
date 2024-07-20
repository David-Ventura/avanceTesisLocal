import React from 'react'
import Select from 'react-select';
import useFetchCarrerasUso from '../Hooks/useFetchCarrerasUso';

const SelectCarreras = ({ selectedOptionsC, onSelectionChange }) => {
    const { options, loading, error } = useFetchCarrerasUso('http://localhost:4000/sse/v1/carreras');

 
  // Handle loading state
  if (loading) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Error loading data: {error.message}</div>;

  // Maps react-select
  const reactSelectOptionsC = options.map(option => ({
    value: option.iduso_carreras,
    label: option.Nombre 
  }));
  return (
    <div>
      <Select
         value={selectedOptionsC}
        onChange={onSelectionChange}
        options={reactSelectOptionsC}
        placeholder="Seleccione un area..."
        />
    </div>
  )
}

export default SelectCarreras
