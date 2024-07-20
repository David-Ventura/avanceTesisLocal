import React from 'react'
import useModals from '../Hooks/useModals';
import DesingModal from './DesignModalExp';
import Button from 'react-bootstrap/Button';
import { GrDocumentStore } from "react-icons/gr";
const NewExpedient = () =>{
    const [isOpen,openModal,closeModal] = useModals();
    return (
        <div className="App">
    
        <h3>Nuevos Expedientes</h3>
        < Button variant="success" className='btn btn-succes' onClick={openModal} ><GrDocumentStore /> Nuevo Expediente</Button>
        <DesingModal show={isOpen} handleClose={closeModal} />
      </div>
  
    );
}

export default NewExpedient