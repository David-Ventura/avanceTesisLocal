import React from 'react'
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { NewSolicitudInstructoriasForm } from '../Buttons/NewExpedient'
 function ListSolicitudInstruc() {
  return (
    <div>
        <div className="container justify-content-center">
          <div>
                <NewSolicitudInstructoriasForm />
          </div>
          <h2>Solicitudes Instructorias</h2>
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
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
  )
}
export default ListSolicitudInstruc