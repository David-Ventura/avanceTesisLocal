import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import { Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { BsFillFloppyFill } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";
import useFetchOptionsvariosSelect from "../Hooks/useFetchOptionsVariosSelec";

import ReactSelectComponentVarios from "../Selects/SelectVariasSelections";

import SelectAreas from "../Selects/SelectAreas";

import ReactSelectComponentVariosEstudiantes from "../Selects/ReactSelectComponentVariosEstudiantes ";

const  Ded =()=> {

  const [selectedOptionsE, setSelectedOptionsE] = useState([]);

  const handleSelectionChange = (selectedOptions) => {
    setSelectedOptionsE(selectedOptions);
  };

  return (
    <div>
      <h1>Selecciona Estudiantes</h1>
      <ReactSelectComponentVariosEstudiantes
        selectedOptionsE={selectedOptionsE}
        onSelectionChange={handleSelectionChange}
      />
    </div>
  );
}
  /*
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('http://localhost:4000/sse/v1/estudiantes');
        
        // Check if response is ok
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        // Parse JSON data
        const data = await response.json();
        
        // Format options
        const formattedOptions = data.map(option => ({
          value: option.idestudiantes,
          label: option.Nombre
        }));
        
        // Set options in state
        setOptions(formattedOptions);
      } catch (error) {
        console.error('Error fetching options:', error);
      } finally {
        // Set loading to false once data is fetched or an error occurs
        setLoading(false);
      }
    };

    fetchOptions();
  }, []);

  // Handle change event for the select
  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };
 

  return (
    <div>
       <Select
      isMulti
      value={selectedOptions}
      onChange={handleChange}
      options={options}
      placeholder="Select options..."
    />
      </div>
  
  );
}
*/
export default Ded;
