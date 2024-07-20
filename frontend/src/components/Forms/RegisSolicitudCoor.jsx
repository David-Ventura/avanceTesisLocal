import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from "react-select";
import { Alert } from 'react-bootstrap';
import { useState } from 'react';
import { BsFillFloppyFill } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";
import useFetchOptionsvariosSelect from '../Hooks/useFetchOptionsVariosSelec';

import ReactSelectComponentVarios from '../Selects/SelectVariasSelections';

function RegisSolicitudCoor() {
  const [validated, setValidated] = useState(false);
 // const [selectedOptions, setSelectedOptions] = useState([]);
  const [observaciones, setObservaciones] = useState('');
  const [actividadesRealizadas, setActividadesRealizadas] = useState('');
  const [date, setDate] = useState(new Date());


    // Estado para almacenar las selecciones
    const [seleccionGrupo1, setSeleccionGrupo1] = useState('');
    const [seleccionGrupo2, setSeleccionGrupo2] = useState('');
 
  const [error, setError] = useState('');

  // Opciones para el react-select
  /*
  const options = [
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
    { value: 'option3', label: 'Opción 3' },
  ];
  */

  /*-----------capturando <datos-----*/


  /*------------fin-------------------*/

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

   const handleObservacionesChange = (e) => {
    setObservaciones(e.target.value);
  };

  const handleActividadesRealizarChange = (e) => {
    setActividadesRealizadas(e.target.value);
  };
/*validando envios*/
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;


    /*---------2 <opciones------------*/
      // Validar si se han seleccionado opciones en ambos grupos
      if (!seleccionGrupo1) {
        setErrorOption('Por favor, selecciona una opción');
      } else {
        setErrorOption('');
        // Aquí puedes manejar el envío de datos del formulario
        console.log('Formulario enviado con éxito');
      }


    /*---------------------------------*/
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      if (new Date(endDate) < new Date(startDate)) {
        setError('La fecha de finalización no puede ser anterior a la fecha de inicio');
        return;
      }
    }
    /*
    if (!selectedOption) {
      setErrorOption('Por favor, selecciona una opción.');
    } 
      */
    //validando cajas de genero//
    setErrorGenero({ M: '', F: '' });

     // Validate that at least one of the inputs is filled
     let valid = true;
     const newErrors = { M: '', F: '' };
 
     if (!M && !F) {
       newErrors.M = 'Por favor, ingrese al menos un género.';
       newErrors.F = 'Por favor, ingrese al menos un género.';
       valid = false;
     }
     if (valid) {
      // Handle form submission if validation passes
      console.log('Género M:', M);
      console.log('Género F:', F);
    } else {
      setErrorGenero(newErrors);
    }
    
    setValidated(true);
  };

  /*--fin-*/
/*---mandando a guardar el select*/
  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:4000/sse/v1/createTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedOptions: selectedOptions.map(option => option.value), // Enviar solo valores
       //   observaciones,
     //     startDate,
      //    endDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al guardar los datos');
      }

      alert('Datos guardados correctamente');
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      setError('Error al guardar los datos. Por favor, intente de nuevo.');
    }
  };
  /*-fin--*/
  /*------uso del select */
  /*
  const { options, loading } = useFetchOptionsvariosSelect('http://localhost:4000/sse/v1/datos');
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  const reactSelectOptions = options.map(option => ({
    value: option.id,
    label: option.text
  }));
  */
  /*-find*/
  const [selectedOptions, setSelectedOptions] = useState([]);


  // Maneja el cambio de selección
  const handleSelectionChange = (selected) => {
    setSelectedOptions(selected);
  };

  /*---*/

  /*-----validando las <fechas----*/
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errorDate, setErrorDate] = useState('');

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    validateDates(e.target.value, endDate);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    validateDates(startDate, e.target.value);
  };

  const validateDates = (start, end) => {
    if (start && end && new Date(start) > new Date(end)) {
      setErrorDate('La fecha de finalización no puede ser menor que la fecha de inicio.');
    } else {
      setErrorDate('');
    }
  };
  /*---fin---*/

  /*valindando radiobuttons */


    const [selectedOption, setSelectedOption] = useState('');
    const [errorOption, setErrorOption] = useState('');
  
    const handleRadioChange = (e) => {
      setSelectedOption(e.target.value);
    };
  /*---------*/

  /*---valindado cajas de*/
  const [M, setM] = useState('');
  const [F, setF] = useState('');
  const [errorGenero, setErrorGenero] = useState({ M: '', F: '' });
  /*--fin--*/

  return (
    <div>
      <Container className="align-items-center justify-content-center">
        <div className="alert alert-success text-center" role="alert">
          <h4>
            ¡Captura de datos de Solicitud de SSE Coordinadores de Carrera!
          </h4>
        </div>

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="shadow-lg p-3 mb-5 bg-body rounded"
        >
          <Form.Label
            as={Col}
            md="12"
            style={{
              backgroundColor: "#F5C451",
              color: "#000000",
              padding: "8px",
              borderRadius: "5px",
            }}
          >
            Datos Generales
          </Form.Label>

          <Row>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationSeleccione"
              className="mb-3"
            >
              <Form.Label>Seleccione el area de trabajo</Form.Label>
{
  /*
    <ReactSelectComponentVarios
                selectedOptions={selectedOptions}
                onSelectionChange={handleSelectionChange}
                placeholder="Seleccione una opcion..."
                required
              />
  */
}
            
              {/*<div>Selected Options: {selectedOptions.map(option => option.label).join(', ')}</div> */}
              <Form.Control.Feedback type="invalid">
                Por favor seleccione una opción.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="3"
              controlId="selectOptions"
              className="mb-3"
            >
              <Form.Label>Selecciona responsable del proyecto</Form.Label>
              {/*

   <ReactSelectComponentVarios
                selectedOptions={selectedOptions}
                onSelectionChange={handleSelectionChange}
                placeholder="Seleccione una opcion..."
                required
              />

*/

              }
           
              {/*<div>Selected Options: {selectedOptions.map(option => option.label).join(', ')}</div> */}
              <Form.Control.Feedback type="invalid">
                Por favor seleccione una opción.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              controlId="nameProyecto"
              className="mb-3"
            >
              <Form.Label>Nombre del proyecto a realizar</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre proyecto a realizar"
              />
              <Form.Control.Feedback type="invalid">
                Por favor seleccione una opción.
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="nameProyecto"
                className="mb-3"
              >
                <Form.Label>
                  Lugar de ejecucion del proyecto a realizar
                </Form.Label>
                <Form.Control
                  required
                  name="nameProyectoRealizar"
                  type="text"
                  placeholder="Lugar proyecto a realizar"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor seleccione una opción.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="3"
                controlId="startDate"
                className="mb-3"
              >
                <Form.Label>Fecha Inicio</Form.Label>
                <Form.Control
                  required
                  type="date"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="endDate" className="mb-3">
                <Form.Label>Fecha Fin</Form.Label>
                <Form.Control
                  type="date"
                  value={endDate}
                  onChange={handleEndDateChange}
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            {/* Mostrar el mensaje de error debajo de los dos campos */}
            {errorDate && (
              <Row className="justify-content-end">
                <Col md="6" className="text-end">
                  <div className="text-danger text-center">{errorDate}</div>
                </Col>
              </Row>
            )}
          </Row>
          <Row>
            <Form.Group
              as={Col}
              md="12"
              controlId="descripcion"
              className="mb-3"
            >
              <Form.Label>Descripcion de actividades a realizar</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={observaciones}
                onChange={handleObservacionesChange}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Cuenta con los estudiantes</Form.Label>
              <Col sm={10}>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                   
                    name="radioGroup"
                    value="opcion1"
                    checked={seleccionGrupo1  === "opcion1"}
                    onChange={(e) => setSeleccionGrupo1(e.target.value)}
                    label="Si"
                    className="me-3"
                  />
                  <Form.Check
                    type="radio"
                
                    name="radioGroup"
                    value="opcion2"
                    checked={seleccionGrupo1  === "opcion2"}
                    onChange={(e) => setSeleccionGrupo1(e.target.value)}
                    label="No"
                  />
                </div>
              </Col>
              {errorOption && (
                <div className="">
                  <div className="">
                    <div className="text-danger mt-1">{errorOption}</div>
                  </div>
                </div>
              )}
            </Form.Group>

            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Estudiantes que requiere</Form.Label>
              <Col sm={12}>
                <Form.Control
                  required
                  type="number"
                  min="0"
                  placeholder="Cantidad"
                />
              </Col>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Estudiantes que solicita</Form.Label>
              <Col sm={12}>
                <Form.Control
                  required
                  type="number"
                  min="0"
                  placeholder="Cantidad"
                />
              </Col>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Año de estudiantes</Form.Label>
              <Form.Control required type="number" min="0" placeholder="Año" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

           
          </Row>

          <Row className="mb-3"></Row>

          <Row>
          <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Carrera</Form.Label>
              <Form.Control
                required
                type="number"
                min="0"
                placeholder="Ciclo"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Genero de los estudiantes</Form.Label>
              <Col sm={10}>
                <div className="d-flex">
                  <Form.Control
                    type="number"
                    placeholder="M"
                    min="0"
                    value={M}
                    onChange={(e) => setM(e.target.value)}
                    isInvalid={!!errorGenero.M}
                    className="me-3"
                  />

                  <Form.Control
                    type="number"
                    placeholder="F"
                    min="0"
                    value={F}
                    onChange={(e) => setF(e.target.value)}
                    isInvalid={!!errorGenero.F}
                  />
                  <Form.Control.Feedback type="invalid">
                    
                  </Form.Control.Feedback>
                </div>
              </Col>
              
              <div className='text-danger'>
                 {errorGenero.F}
              </div>
              
            </Form.Group>

            {/* Select de estudiantes */}

            <Form.Group
              as={Col}
              md="4"
              controlId="validationSeleccione"
              className="mb-3"
            >
              <Form.Label>Seleccione los estudiantes a necesitar</Form.Label>
{
  /*
   <ReactSelectComponentVarios
                selectedOptions={selectedOptions}
                onSelectionChange={handleSelectionChange}
                placeholder="Seleccione una opcion..."
                required
              />
  */
}
             
              {/*<div>Selected Options: {selectedOptions.map(option => option.label).join(', ')}</div> */}
              <Form.Control.Feedback type="invalid">
                Por favor seleccione un estudiante.
              </Form.Control.Feedback>
            </Form.Group>

            {/* ------------------ */}
          </Row>

          <Form.Group as={Col} md="12" controlId="descripcion" className="mb-3">
            <Form.Label>Observaciones</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={actividadesRealizadas}
              onChange={handleActividadesRealizarChange}
            />
          </Form.Group>

          <Row></Row>

          <div className="text-center">
            <Button variant="success" type="submit" className="mr-2">
              <BsFillFloppyFill /> Enviar
            </Button>{" "}
            <Button variant="danger">
              <BsExclamationCircle /> Cancelar
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default RegisSolicitudCoor;
