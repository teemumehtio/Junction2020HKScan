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
            Cost
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
            <ImpactGauge chartDivId="environment-gauge" value={60} />
          </Col>
          <Col sm="2" className="text-center">
            <ImpactGauge chartDivId="welfare-gauge" value={60} />
          </Col>
          <Col sm="2" className="text-center">
            <ImpactGauge chartDivId="cost-gauge" value={35} />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <h5>Compare the different options making the food</h5>
          </Col>
        </Row>
        <Row className="align-middle">
          <Col
            sm="6"
            className="text-left"
            style={{ display: "flex", alignItems: "center" }}
          >
            Basic meat
          </Col>
          <Col sm="2" className="text-center">
            <ImpactGauge
              chartDivId="environment-gauge-alternative-1"
              value={60}
              referenceValue={60}
              width="80%"
              height="100px"
            />
          </Col>
          <Col sm="2" className="text-center">
            <ImpactGauge
              chartDivId="welfare-gauge-alternative-1"
              value={60}
              referenceValue={60}
              width="80%"
              height="100px"
            />
          </Col>
          <Col sm="2" className="text-center">
            <ImpactGauge
              chartDivId="cost-gauge-alternative-1"
              value={35}
              referenceValue={35}
              width="80%"
              height="100px"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EatingPlan;
