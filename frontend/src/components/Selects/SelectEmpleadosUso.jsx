/*import React from 'react'
import Select from 'react-select';
import { useFetchEmpleadosUso } from '../Hooks/useFetchOptionsVariosSelec'

const SelectEmpleadosUso = () => {
    const {options, loading, error} = useFetchEmpleadosUso('http://localhost:4000/sse/v1/empleados');
    const [selectedOption, setSelectedOption] = React.useState(null);

    const handleChange = (selected) => {
      setSelectedOption(selected);
    };

    if(loading) return <div>Cargando datos....</div>
        if(error) return <div>Error al cargar los datos {error.message}</div>

        const selectioEmpleados = options.map(option => ({
            value: option.iduso_trabajo,
            label: option.text
          }));

  return (
    <div>
        <Select
              value={selectedOption}
              onChange={handleChange}
              options={selectioEmpleados}
              placeholder="Seleccione una area..."
        />     
    </div>
  )
}

export default SelectEmpleadosUso
*/
import React from 'react'
import Select from 'react-select';
import useFetchEmpleadosUso from '../Hooks/useFetchEmpleadosUso';

const SelectEmpleadosUso = ({selectedOptionsE, onSelectionChange}) => {
  const { options, loading, error } = useFetchEmpleadosUso('http://localhost:4000/sse/v1/empleados');
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
    const reactSelectOptionsE = options.map(option => ({
      value: option.iduso_trabajo,
      label: option.Nombre 
    }));
  //mostrando la impresion del select
    //console.log('React Select Options:', reactSelectOptionsEs); 
  return (
    <div>
       <Select
         value={selectedOptionsE}
        onChange={onSelectionChange}
        options={reactSelectOptionsE}
        placeholder="Seleccione un Empleado..."
      />
    </div>
  )
}

export default SelectEmpleadosUso
