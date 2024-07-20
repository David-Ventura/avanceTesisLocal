import React from 'react';
import Select from 'react-select';
import useFetchOptionsvariosSelect from '../Hooks/useFetchOptionsVariosSelec';
import useFetchOptionsvariosSelectEstudents from '../Hooks/useFetchOptionsvariosSelectEstudents';


const ReactSelectComponentVariosEstudiantes = ({ selectedOptions, onSelectionChange }) => {
  const { options, loading, error } = useFetchOptionsvariosSelectEstudents('http://localhost:4000/sse/v1/estudiantes');
// Verifica que se obtienen los datos
 // console.log('Options:', options); 
  // Verifica el estado de carga
 // console.log('Loading:', loading); 
  // Verifica si hay errores
  //console.log('Error:', error); 

  // Handle loading state
  if (loading) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Error loading data: {error.message}</div>;

  // Maps react-select
  const reactSelectOptionsEs = options.map(option => ({
    value: option.idestudiantes,
    label: option.Estudiante 
  }));
//mostrando la impresion del select
  //console.log('React Select Options:', reactSelectOptionsEs); 

  return (
    <div>
      <Select
        isMulti
        value={selectedOptions}
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
