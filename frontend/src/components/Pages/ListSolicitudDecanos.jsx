import React from 'react'
import Table from "react-bootstrap/Table";

import "bootstrap/dist/css/bootstrap.min.css";

export default function ListSolicitudDecanos() {
  return (

        <div>
        <div className="container justify-content-center">
          <div>
    
          </div>
          <h2>Solicitudes Decanos de Facultad</h2>
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
