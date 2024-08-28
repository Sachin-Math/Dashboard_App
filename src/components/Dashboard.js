import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions/dataActions";
import TableComponent from "./TableComponent";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.scss";
import { FaDatabase, FaChartPie, FaFileAlt } from "react-icons/fa";

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (!data.table_headers) return <div>Loading...</div>;

  return (
    <>
      <Container>
        <Row className="menu">
          <Col className="d-flex align-items-center">
            <span className="menu-item">
              <FaDatabase className="menu-icon" />
              <span>Data</span>
            </span>
            <span className="menu-item">
              <FaChartPie className="menu-icon" />
              <span>Summary</span>
            </span>
            <span className="menu-item">
              <FaFileAlt className="menu-icon" />
              <span>Logs</span>
            </span>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="menu-bar">
          <Col>
            <p>
              <span className="text-secondary-custom">Project:</span>
              {data.project_name}
            </p>
          </Col>
          <Col>
            <p>
              <span className="text-secondary-custom">Output:</span>
              {data.output_name}
            </p>
          </Col>
          <Col>
            <p>
              <span className="text-secondary-custom">Created:</span>
              {new Date(data.created).toLocaleDateString()}
            </p>
          </Col>
        </Row>
        <Row>
          <TableComponent headers={data.table_headers} data={data.table_data} />
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
