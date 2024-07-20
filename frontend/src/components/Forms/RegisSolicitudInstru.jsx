import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from "react-select";
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsFillFloppyFill } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";


 function RegisSolicitudInstru() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  /*Inicio select*/
    const options = [
      { value: 'option1', label: 'Opción 1' },
      { value: 'option2', label: 'Opción 2' },
      { value: 'option3', label: 'Opción 3' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = selectedOption => {
      setSelectedOption(selectedOption);
      console.log(`Option selected:`, selectedOption);
    };
    /*fin select*/
  return (
    <Container className="align-items-center justify-content-center">
      <div className="alert alert-success text-center" role="alert">
        <h4> ¡Captura de datos de Solicitud de Instructorias para SSE!</h4>
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
          {" "}
          Captura de datos{" "}
        </Form.Label>

        <Row>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationSeleccione"
            className="mb-3"
          >
            <Form.Label>Seleccione el estudiante</Form.Label>
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={options}
              required
              className={
                validated && selectedOption === null ? "is-invalid" : ""
              }
            />
            <Form.Control.Feedback type="invalid">
              Por favor seleccione una opción.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationSeleccioneAs"
            className="mb-3"
          >
            <Form.Label>Seleccione la asignatura</Form.Label>
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={options}
              required
              className={
                validated && selectedOption === null ? "is-invalid" : ""
              }
            />
            <Form.Control.Feedback type="invalid">
              Por favor seleccione una opción.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationSeleccione"
            className="mb-3"
          >
            <Form.Label>Seleccione el docente</Form.Label>
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={options}
              required
              className={
                validated && selectedOption === null ? "is-invalid" : ""
              }
            />
            <Form.Control.Feedback type="invalid">
              Por favor seleccione una opción.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="mb-3"
          >
            <Form.Label>Ciclo</Form.Label>
            <Form.Control required type="number" min="0" placeholder="Ciclo" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom02"
            className="mb-3"
          >
            <Form.Label>Grupo</Form.Label>
            <Form.Control required type="number" min="0" placeholder="Grupo" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="mb-3"
          >
            <Form.Label>N° apoximado de estudiantes en el grupo</Form.Label>
            <Form.Control required type="number" min="0" placeholder="Numero" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationSeleccione"
            className="mb-3"
          >
            <Form.Label>Nivel de complejidad de la asignatura</Form.Label>
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={options}
              required
              className={
                validated && selectedOption === null ? "is-invalid" : ""
              }
            />
            <Form.Control.Feedback type="invalid">
              Por favor seleccione una opción.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom02"
            className="mb-3"
          >
            <Form.Label>Telefono Fijo</Form.Label>
            <Form.Control required type="text" placeholder="0000-0000" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

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
          {" "}
          Datos del docente{" "}
        </Form.Label>

        <Row className="">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom02"
            className="mb-3"
          >
            <Form.Label>N° de grupos atendidos por el docente</Form.Label>
            <Form.Control
              required
              type="numer"
              min="0"
              placeholder="N° de grupos de la misma asignatura"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom02"
            className="mb-3"
          >
            <Form.Label>
              N° aprox de alumnos en los grupos atendidos por el docente
            </Form.Label>
            <Form.Control
              required
              type="number"
              min="0"
              placeholder="Numero aproximado"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom02"
            className="mb-3"
          >
            <Form.Label>
              N° total de etudiantes atendidos por el docente
            </Form.Label>
            <Form.Control
              required
              type="number"
              min="0"
              placeholder="Total de estudiantes"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Label
          as={Col}
          md="12"
          style={{
            backgroundColor: "#58A696",
            color: "#000000",
            padding: "8px",
            borderRadius: "5px",
          }}
        >
          {" "}
          Uso exclusivo de SSE{" "}
        </Form.Label>
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
          {" "}
          Historial del estudiante{" "}
        </Form.Label>
        <Row>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom02"
            className="mb-3"
          >
            <Form.Label>Asignaturas aprobadas</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Asignaturas aprobadas"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom02"
            className="mb-3"
          >
            <Form.Label>Cum</Form.Label>
            <Form.Control required type="number" min="0" placeholder="CUM" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom02"
            className="mb-3"
          >
            <Form.Label>Nota obtenida en esa asignatura</Form.Label>
            <Form.Control
              required
              type="number"
              min="0"
              placeholder="Nota 6.5"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Servicios realizados anteriormente</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" type="submit" className="mr-2">
            <BsFillFloppyFill /> Enviar
          </Button>{" "}
          <Button variant="danger">
            <BsExclamationCircle /> Cancelar
          </Button>
        </div>
      </Form>
    </Container>
  );
}
export default RegisSolicitudInstru
