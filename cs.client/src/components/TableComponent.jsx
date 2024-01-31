import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const TableComponent = ({
  tableColumn,
  tableRows,
  handleEdit,
  handleDelete,
}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {tableColumn.map((item) => (
            <th key={item}>{item}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tableRows.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.company}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>
              <ButtonGroup aria-label="action-button">
                <Button
                  variant="secondary"
                  onClick={() => {
                    handleEdit(item);
                  }}
                >
                  EDIT
                </Button>

                <Button
                  variant="secondary"
                  onClick={() => {
                    handleDelete(item);
                  }}
                >
                  DELETE
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
