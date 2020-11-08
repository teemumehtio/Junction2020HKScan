import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import HistoryChart from "./HistoryChart";

const History = () => {
  const historyData = [
    { week: 39, environmentalImpact: 20, animalWelfare: 30, cost: 70 },
    { week: 40, environmentalImpact: 40, animalWelfare: 50, cost: 30 },
    { week: 41, environmentalImpact: 60, animalWelfare: 60, cost: 40 },
    { week: 42, environmentalImpact: 60, animalWelfare: 80, cost: 75 },
    { week: 43, environmentalImpact: 40, animalWelfare: 20, cost: 90 },
    { week: 44, environmentalImpact: 85, animalWelfare: 80, cost: 65 }
  ];

  return (
    <Container>
      <Row>
        <Col sm="12">
          <h5>Your weekly history</h5>
          <HistoryChart data={historyData} chartDivId="history-chart" />
        </Col>
      </Row>
    </Container>
  );
};

export default History;
