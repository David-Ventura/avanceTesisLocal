import React, { useMemo } from 'react';
import { useTable, useFilters } from 'react-table';
import { Table, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ColumnFilter } from './ColumnFilter'; // Componente personalizado para los filtros de columna

const DataTable = ({ data }) => {
  // Configuración de la tabla con react-table
  const columns = useMemo(
    () => [
      {
        Header: 'Información del Estudiante',
        columns: [
          {
            Header: 'ID',
            accessor: 'id',
            Filter: ColumnFilter, // Componente de filtro personalizado
          },
          {
            Header: 'Nombre',
            accessor: 'name',
            Filter: ColumnFilter,
          },
          {
            Header: 'Edad',
            accessor: 'age',
            Filter: ColumnFilter,
          },
          {
            Header: 'Carrera',
            accessor: 'career',
            Filter: ColumnFilter,
          },
        ],
      },
    ],
    []
  );

  // Hook de react-table para gestionar la tabla y sus filtros
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useFilters);

  // Obtener el filtro global de react-table
  const { globalFilter } = state;

  return (
    <>
      {/* Sección de filtros */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Control
            type="text"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Buscar..."
          />
        </Col>
      </Row>

      {/* DataTable */}
      <Table striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default DataTable;
