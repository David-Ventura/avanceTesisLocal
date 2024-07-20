import React from 'react'
import useModals from '../Hooks/useModals';
import Button from 'react-bootstrap/Button';
import RegisExpEstudent from '../Forms/RegisExpEstudent'
import Nav from 'react-bootstrap/Nav'
import { GrDocumentStore } from "react-icons/gr";
import RegisSolicitud from '../Forms/RegisSolicitud'

const NewExpedient = () => {
  const [isOpen, openModal, closeModal] = useModals();
  return (
    <div className="App">
      <h3>Nuevos Expedientes</h3>
      <Button onClick={openModal}>Nuevo Expediente</Button>
      <RegisExpEstudent show={isOpen} handleClose={closeModal} />
    </div>
  );
};

export const NewExpedientForms = () => {
  return (
    <div>
      <Button href="RegisExpEstudent">
        {" "}
        <GrDocumentStore /> Apertura Expediente
      </Button>
    </div>
  );
};

export const NewSolicitudEstudentForm = () => {
  return (
    <div>
      <Button href="RegisSolicitud">
        {" "}
        <GrDocumentStore /> Solicitud Estudiantes
      </Button>
    </div>
  );
};

export const NewSolicitudCoordinadorForm = () => {
  return (
    <div>
      <Button href="RegisSolicitudCoor">
        {" "}
        <GrDocumentStore /> Solicitud de Estudiantes Coordinadores
      </Button>
    </div>
  );
};

export const NewSolicitudInstructoriasForm = () => {
  return (
    <div>
      <Button href="RegisSolicitudInstru">
        {" "}
        <GrDocumentStore /> Solicitud de Instructorias
      </Button>
    </div>
  );
};

export default NewExpedient