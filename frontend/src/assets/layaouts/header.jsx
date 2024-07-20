import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoMdPersonAdd } from "react-icons/io";
import { FaListCheck } from "react-icons/fa6";
import useModals from '../../components/Hooks/useModals';

export default function TemplateHeader() {




  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="" id="header">
      <Container>
        <Navbar.Brand href="/" className="text-warning">
          React-Bootstrap SSE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Solicitudes" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="DesignTables">
                SolicitudEstudiantesSSE
              </NavDropdown.Item>
              <NavDropdown.Item href="ListExpedientes">
                AperturaexEstudiantes
              </NavDropdown.Item>
              <NavDropdown.Item href="ListSolicitudDecanos">Decanos</NavDropdown.Item>
              <NavDropdown.Item href="ListSolicitudCoorCa">C_Carreras</NavDropdown.Item>
              <NavDropdown.Item href="ListSolicitudInstruc">Instructorias</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="RegisTes">
               Regis Test
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mantenimiento" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="ListExpedientes">
                Insti. Educ
              </NavDropdown.Item>
              <NavDropdown.Item href="ListSolicitudDecanos">Insti. Servicios</NavDropdown.Item>
              <NavDropdown.Item href="ListSolicitudCoorCa">Cursos Estudiant</NavDropdown.Item>
              <NavDropdown.Item href="ListSolicitudCoorCa">Referencias Academicas</NavDropdown.Item>
              <NavDropdown.Item href="ListSolicitudCoorCa">Otros Estudios</NavDropdown.Item>
              <NavDropdown.Item href="ListSolicitudCoorCa">Cursos Uso</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Estados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tipo Solicitudes</NavDropdown.Item>
            </NavDropdown>
             {/*   <NavDropdown.Item href="List">List</NavDropdown.Item>         */}   
            <Nav.Link href="DesignTables">ListDate</Nav.Link>
        {/*
            <Nav.Link href="ListExpedientes">
              <FaListCheck /> Listar
            </Nav.Link>
                <Nav.Link href="OtroModals">OtroModal</Nav.Link>
          

          <Nav.Link href="NewExpedient">
              <IoMdPersonAdd /> Solicitud Estudiante{" "}
            </Nav.Link>

     
           <Nav.Link href="RegisExpEstudent">
              <IoMdPersonAdd /> Test Design{" "}
            </Nav.Link>
                */}
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="Ded">selectReact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="RegisCoor">re</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }
  
