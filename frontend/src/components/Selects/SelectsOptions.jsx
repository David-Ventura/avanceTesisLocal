import React from 'react';
import Select from 'react-select';

import useFetchOptionsSelec from '../Hooks/useFetchOptionsSelec';


const ReactSelectComponent = () => {
  const { options, loading, error } = useFetchOptionsSelec('http://localhost:4000/sse/v1/datos');
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  const reactSelectOptions = options.map(option => ({
    value: option.id,
    label: option.text
  }));

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={reactSelectOptions}
        placeholder="Select an option..."
      />
  {/*  <div>Selected Option: {selectedOption ? selectedOption.label : 'None'}</div>*/ }   
    </div>
  );
};

export default ReactSelectComponent;
