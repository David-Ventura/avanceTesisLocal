import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import useFetchOptionsvariosSelectEstudents from '../Hooks/useFetchOptionsVariosSelec';

const ReactSelectComponentVariosEstudiantes = ({ selectedOptionsE, onSelectionChange }) => {
  const { options, loading, error } = useFetchOptionsvariosSelectEstudents('http://localhost:4000/sse/v1/estudiantes');

  console.log('Options:', options); // Verifica que se obtienen los datos
  console.log('Loading:', loading); // Verifica el estado de carga
  console.log('Error:', error); // Verifica si hay errores

  // Handle loading state
  if (loading) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Error loading data: {error.message}</div>;

  // Map options to the format expected by react-select
  const reactSelectOptionsEs = options.map(option => ({
    value: option.idestudiantes,
    label: option.Nombre // Asegúrate de que `Nombre` es el campo correcto para el label
  }));

  console.log('React Select Options:', reactSelectOptionsEs); // Verifica el formato de las opciones

  return (
    <div>
      <Select
        isMulti
        value={selectedOptionsE}
        onChange={onSelectionChange}
        options={reactSelectOptionsEs}
        placeholder="Seleccione un estudiante..."
        isClearable={true} // Permite limpiar la selección
        closeMenuOnSelect={false} // Permite seleccionar múltiples opciones sin cerrar el menú
      />
      {/* Opcionalmente mostrar opciones seleccionadas */}
      {/* <div>Selected Options: {selectedOptionsE.map(option => option.label).join(', ')}</div> */}
    </div>
  );
};


export default ReactSelectComponentVariosEstudiantes;