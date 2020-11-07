import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";

import ImpactGauge from "./ImpactGauge";

const EatingPlan = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm="6" className="text-left"></Col>
          <Col sm="2" className="text-center">
            Environmental impact
          </Col>
          <Col sm="2" className="text-center">
            Animal welfare
          </Col>
          <Col sm="2" className="text-center">
            Economic efficiency
          </Col>
        </Row>
        <Row>
          <Col sm="6" className="text-left">
            <h5>What do you want to eat?</h5>
            <Form>
              <Form.Control as="select">
                <option>Choose your meal...</option>
                <option>Spaghetti Bolognese</option>
                <option>Chicken Curry</option>
                <option>Fried Salmon</option>
                <option>Vegetable Soup</option>
              </Form.Control>
            </Form>
          </Col>
          <Col sm="2" className="text-center">
            <ImpactGauge
              chartDivId="environment-gauge"
              value={60}
              referenceValue={40}
            />
          </Col>
          <Col sm="2" className="text-center">
            <ImpactGauge chartDivId="welfare-gauge" value={60} />
          </Col>
          <Col sm="2" className="text-center">
            <ImpactGauge chartDivId="economic-gauge" value={35} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EatingPlan;
