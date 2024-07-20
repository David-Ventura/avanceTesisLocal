import React from 'react';
import Select from 'react-select';
import useFetchOptionsvariosSelect from '../Hooks/useFetchOptionsVariosSelec';

const ReactSelectComponentVarios = ({ selectedOptions, onSelectionChange }) => {
  const { options, loading, error } = useFetchOptionsvariosSelect('http://localhost:4000/sse/v1/estudiantes');
  //const [selectedOptions, setSelectedOptions] = React.useState([]);

 // const handleChange = (selected) => {
 //   setSelectedOptions(selected);
  //};

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  const reactSelectOptions = options.map(option => ({
    value: option.idestudiantes,
    label: option.text
  }));

  return (
    <div>
      <Select
        isMulti
        value={selectedOptions}
        onChange={onSelectionChange}
        options={reactSelectOptions}
        placeholder="Select options..."
      />
    {/*<div>Selected Options: {selectedOptions.map(option => option.label).join(', ')}</div> */}  
    </div>
  );
};

export default ReactSelectComponentVarios;
