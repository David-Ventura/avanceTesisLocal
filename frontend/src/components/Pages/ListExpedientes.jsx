import React,{ useState } from 'react'
import Table from "react-bootstrap/Table";
import NewExpedient,{} from '../Modals/NewExpedient';
import "bootstrap/dist/css/bootstrap.min.css";
import RegisExpEstudent from '../Forms/RegisExpEstudent'
import Nav from 'react-bootstrap/Nav'
import { NewExpedientForms } from '../Buttons/NewExpedient';


export default function ListExpedientes() {
  


  return (
    <>
      <div>
        <div className="container justify-content-center">
          <div>
            {/* 
                <NewExpedient />
            */}
            <br />
            <NewExpedientForms />
          </div>
          <br />
          <div className="alert alert-primary text-center" role="alert">
            <h2>Listado de expedientes de Estudiantes</h2>
          </div>

          <br />
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name </th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td> </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
