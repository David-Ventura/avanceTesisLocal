import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from "react-select";
import { useState,useRef,useEffect } from 'react';
import { BsFillFloppyFill } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";
import $ from 'jquery';

import ReactSelectComponent from '../Selects/SelectsOptions';
import 'select2';

function RegisSolicitud() {
  const [validated, setValidated] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({
    bachillerato: '',
    otrosEstudios: '',
    acreditaciones: '',
    cursosCapacitaciones: ''
  });

 

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleSelectChange = (value, fieldName) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center">
        <br /> <br />
        <br />
        <br />
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
            Captura de datos para solicitud de horas
          </Form.Label>

          <Row>
      
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Cod Estudiante</Form.Label>
              <Form.Control required type="text" placeholder="Cod Estudiante" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Cod Expediente</Form.Label>
              <Form.Control required type="text" placeholder="Cod Expediente" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="3"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Materias ganadas</Form.Label>
              <Form.Control required type="text" placeholder="Materias ganadas" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Nombres</Form.Label>
              <Form.Control required type="text" placeholder="Nombres" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Apellidos</Form.Label>
              <Form.Control required type="text" placeholder="Apellidos" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Carrera</Form.Label>
              <Form.Control required type="text" placeholder="Carrera" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Telefono Movil</Form.Label>
              <Form.Control required type="text" placeholder="0000-0000" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
            Referencias Académicas
          </Form.Label>
          <Row className="">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationSeleccioneBachillerato"
              className="mb-3"
            >
              <Form.Label>Seleccione un bachillerato</Form.Label>
         
              <ReactSelectComponent />
        
    
              <Form.Control.Feedback type="invalid">
                Por favor seleccione una opción.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              controlId="validationSeleccioneOtrosEstudios"
              className="mb-3"
            >
              <Form.Label>Otros estudios</Form.Label>
              <Select
                value={selectedOptions.otrosEstudios}
                onChange={(value) => handleSelectChange(value, 'otrosEstudios')}
                options={options}
                required
                className={
                  validated && !selectedOptions.otrosEstudios ? "is-invalid" : ""
                }
              />
              <Form.Control.Feedback type="invalid">
                Por favor seleccione una opción.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              controlId="validationSeleccioneAcreditaciones"
              className="mb-3"
            >
              <Form.Label>Acreditaciones estudiantes</Form.Label>
              <Select
                value={selectedOptions.acreditaciones}
                onChange={(value) => handleSelectChange(value, 'acreditaciones')}
                options={options}
                required
                className={
                  validated && !selectedOptions.acreditaciones ? "is-invalid" : ""
                }
              />
              <Form.Control.Feedback type="invalid">
                Por favor seleccione una opción.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              controlId="validationSeleccioneCursos"
              className="mb-3"
            >
              <Form.Label>Cursos o capacitaciones</Form.Label>
              <Select
                value={selectedOptions.cursosCapacitaciones}
                onChange={(value) => handleSelectChange(value, 'cursosCapacitaciones')}
                options={options}
                required
                className={
                  validated && !selectedOptions.cursosCapacitaciones ? "is-invalid" : ""
                }
              />
              <Form.Control.Feedback type="invalid">
                Por favor seleccione una opción.
              </Form.Control.Feedback>
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
            Datos laborales
          </Form.Label>
          <Row>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustomEmpresa"
              className="mb-3"
            >
              <Form.Label>Nombre de la empresa</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Empresa S.A. de C.V."
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustomCargo"
              className="mb-3"
            >
              <Form.Label>Cargo que desempeña</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Encargado de área"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustomTelefonoEmpresa"
              className="mb-3"
            >
              <Form.Label>Teléfono de la empresa</Form.Label>
              <Form.Control required type="text" placeholder="0000-0000" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Observaciones</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <div className="text-center">
            <Button variant="success" type="submit" className="mr-2">
              <BsFillFloppyFill /> Enviar
            </Button>
            {' '}
            <Button variant="danger">
              <BsExclamationCircle /> Cancelar
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default RegisSolicitud;