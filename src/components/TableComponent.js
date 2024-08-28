import React from "react";
import { Table, Dropdown } from "react-bootstrap";
import "../styles.scss";

const TableComponent = ({ headers, data }) => {
  const filteredHeaders = headers.filter((header) => header.type !== "serial");
  const filteredData = data.map((row) => row.slice(1));

  return (
    <div style={{ width: "100%" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            {filteredHeaders.map((header, idx) => (
              <th key={idx} className="col-width">
                {header.name}
                <span
                  className="delete-icon"
                  onClick={() => console.log("Delete", header.name)}
                >
                  🗑️
                </span>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id={`dropdown-${idx}`}>
                    {header.type}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>string</Dropdown.Item>
                    <Dropdown.Item>int</Dropdown.Item>
                    <Dropdown.Item>float</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
