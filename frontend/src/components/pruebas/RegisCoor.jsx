import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import MySelectComponent from './MySelectComponent';

const RegisCoor = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  // Función para obtener opciones desde la API
  const fetchOptions = async () => {
    try {
      const response = await fetch('http://localhost:4000/sse/v1/datos'); // Reemplaza con la URL de tu API
 
      if (!response.ok) {
        throw new Error('Error al obtener datos');
      }
      const data = await response.json();
        console.log(data)
      return data.map(item => ({ value: item.id, label: item.title }));
    } catch (error) {
      console.error('Error fetching options:', error);
      return [];
    }
  };

  useEffect(() => {
    const loadOptions = async () => {
      const optionsFromServer = await fetchOptions();
      setOptions(optionsFromServer);
    };

    loadOptions();
  }, []);

  // Función para manejar el cambio de selección
  const handleSelect = async (selected) => {
    setSelectedOption(selected);


    try {
      await saveSelectionToDatabase(selected);
    } catch (error) {
      console.error('Error saving selection:', error);
    }
  };

  // Función para guardar la selección en la base de datos
  const saveSelectionToDatabase = async (selected) => {
    try {
      await fetch('http://localhost:4000/sse/v1/createTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedValue: selected ? selected.value : null
        }),
      });
    } catch (error) {
      console.error('Error saving selection:', error);
    }
  };

  return (
    <div>
      <h1>Mi Selección</h1>
      <Select
        options={data}
        onChange={handleSelect}
        value={selectedOption}
        isClearable
      />
    </div>
  );
};

export default RegisCoor;