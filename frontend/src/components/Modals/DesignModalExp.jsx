import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Modal, Button,Form, Col} from "react-bootstrap";
import Input from "react-bootstrap/InputGroup"
import { BsFillFloppyFill } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

const DesingModal = ({ show, handleClose }) => {

  const options = [
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
    { value: 'option3', label: 'Opción 3' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  //validando campos
  const [validated, setValidated] = useState(false);



const handleChange = selectedOption => {
  setSelectedOption(selectedOption);
  console.log(`Option selected:`, selectedOption);
};


  const handleSubmit = (event) => {
     event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false  || selectedOption === null) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{backgroundColor: "#153647", color: "#FFFFFF", padding: "10px", borderRadius: "5px" }}>
        <Modal.Title>
          Captura de datos
        </Modal.Title>
      </Modal.Header>
      <Form noValidate validated={validated} onSubmit={handleSubmit} >
        <Modal.Body>
        <Modal.Title style={{backgroundColor: "#487186", color: "#FFFFFF", padding: "2px", borderRadius: "5px" }}>
            Datos Generales
          </Modal.Title>
          <br />
        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01" >
          <Form.Label># Expediente</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Num Expedient"
         
          />
            <Form.Control.Feedback type="invalid">
            Por favor ingrese el # de expediente.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Cod Estudiante</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Cod Estudent"
          />
            <Form.Control.Feedback type="invalid">
            Por favor ingrese el cod estudiante.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationNombres" >
          <Form.Label>Nombres</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombres"
         
          />
            <Form.Control.Feedback type="invalid">
            Por favor ingrese sus Nombres.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationApellidos">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellidos"

          />
            <Form.Control.Feedback type="invalid">
            Por favor ingrese sus Apellidos.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCarrera" >
          <Form.Label>Carrera</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Carrera"
         
          />
            <Form.Control.Feedback type="invalid">
            Por favor seleccione una carrera.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationMaterias">
          <Form.Label># Materias</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="# Materias"
            readOnly

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Modal.Title style={{backgroundColor: "#235875", color: "#FFFFFF", padding: "2px", borderRadius: "5px", textAlign: "left"}}>
          Referencias Academicas
          </Modal.Title>
        <br />
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationSeleccione" >
          <Form.Label>Seleccione un bachillerato</Form.Label>
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            required
            className={validated && selectedOption === null ? 'is-invalid' : ''}
          />
          <Form.Control.Feedback type="invalid">
            Por favor seleccione una opción.
          </Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="6" controlId="validationSeleccione" >
          <Form.Label>Seleccione otro estudio</Form.Label>
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            required
            className={validated && selectedOption === null ? 'is-invalid' : ''}
          />
          <Form.Control.Feedback type="invalid">
            Por favor seleccione una opción.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationSeleccione" >
          <Form.Label>Seleccione Acreditaciones</Form.Label>
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            required
            className={validated && selectedOption === null ? 'is-invalid' : ''}
          />
          <Form.Control.Feedback type="invalid">
            Por favor seleccione una opción.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationSeleccione" >
          <Form.Label>Seleccione Capacitaciones</Form.Label>
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            required
            className={validated && selectedOption === null ? 'is-invalid' : ''}
          />
          <Form.Control.Feedback type="invalid">
            Por favor seleccione una opción.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Modal.Title style={{backgroundColor: "#235875", color: "#FFFFFF", padding: "2px", borderRadius: "5px", textAlign: "left"}}>
          Datos Laborales
          </Modal.Title>
          <br />
        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationSeleccione" >
          <Form.Label>Nombre de la empresa </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Empresa"

          />
          <Form.Control.Feedback type="invalid">
            Por favor seleccione una opción.
          </Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="6" controlId="validationSeleccione" >
          <Form.Label>Cargo que desempeña</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Cargo"
          />
          <Form.Control.Feedback type="invalid">
            Por favor seleccione una opción.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>



      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Observaciones</Form.Label>
          <Form.Control type="text" placeholder="Observaciones" required />
          <Form.Control.Feedback type="invalid">
          Por favor Ingrese una observacion.
          </Form.Control.Feedback>
        </Form.Group>


        {/* 

            <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      


        */}
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            <BsExclamationCircle /> Close
          </Button>
          {/* Agrega aquí tu lógica para enviar datos a la API si es necesario */}
          <Button
            variant="success"
            type="submit"
          >
            {" "}
            <BsFillFloppyFill /> Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default DesingModal;

//configurando post
/*
const payload = {
  method: "POST",
  header: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(datos),
};

fetch(url, payload)
  .then((response) => respuesta.json())
  .then((datos) => {
    console.log("datos->", datos);
  })
  .catch((error) => {
    console.log("Error-->", error);
  });
*/