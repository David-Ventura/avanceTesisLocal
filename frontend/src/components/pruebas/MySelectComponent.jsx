import React, { useState } from 'react';
import Select from 'react-select';

const MySelectComponent = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    onSelect(selected);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
    />
  );
};

export default MySelectComponent;
