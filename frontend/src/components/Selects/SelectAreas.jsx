/*import React from 'react'
import Select from 'react-select';
import { useFetchAreas } from '../Hooks/useFetchOptionsVariosSelec'

const SelectAreas = () => {
    const {options, loading, error} = useFetchAreas('http://localhost:4000/sse/v1/areas');
    const [selectedOption, setSelectedOption] = React.useState(null);

    const handleChange = (selected) => {
      setSelectedOption(selected);
    };

    if(loading) return <div>Cargando datos....</div>
        if(error) return <div>Error al cargar los datos {error.message}</div>

        const selectioAreas = options.map(option => ({
            value: option.idareaTrabajoUso,
            label: option.text
          }));

  return (
    <div>
        <Select
              value={selectedOption}
              onChange={handleChange}
              options={selectioAreas}
              placeholder="Seleccione una area..."
        />     
    </div>
  )
}

export default SelectAreas
*/
import React from 'react';
import Select from 'react-select';

import useFetchAreasUso from '../Hooks/useFetchAreasUso';



const SelectAreas = ({ selectedOptionsA, onSelectionChange }) => {
  const { options, loading, error } = useFetchAreasUso('http://localhost:4000/sse/v1/areas');
// Verifica que se obtienen los datos
 // // Verifica el estado de carga
 //console.log('Loading:', loading); 
  // Verifica si hay errores
  //console.log('Error:', error); 

  // Handle loading state
  if (loading) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Error loading data: {error.message}</div>;

  // Maps react-select
  const reactSelectOptionsA = options.map(option => ({
    value: option.idareaTrabajoUso,
    label: option.areaTrabajoUso 
  }));
//mostrando la impresion del select
  //console.log('React Select Options:', reactSelectOptionsEs); 

  return (
    <div>
      <Select
         value={selectedOptionsA}
        onChange={onSelectionChange}
        options={reactSelectOptionsA}
        placeholder="Seleccione un area..."
    //    isClearable={true} // Permite limpiar la selección
    //    closeMenuOnSelect={false} // Permite seleccionar múltiples opciones sin cerrar el menú
 
      />
      {/* Opcionalmente mostrar opciones seleccionadas */}
      {/* <div>Selected Options: {selectedOptionsE.map(option => option.label).join(', ')}</div> */}
    </div>
  );
};

export default SelectAreas;
