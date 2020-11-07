import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FoodSelector from "./FoodSelector";
import ImpactGauge from "./ImpactGauge";

import FoodOptions from "./FoodOptions";

const EatingPlan = () => {
  const [selectedFood, setSelectedFood] = useState(null);

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
        <FoodSelector
          foodOptions={FoodOptions}
          selectedFood={selectedFood}
          setSelectedFood={setSelectedFood}
        />
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
            {/* <ImpactGauge
              chartDivId="environment-gauge-alternative-1"
              value={60}
              referenceValue={60}
              width="80%"
              height="100px"
            /> */}
          </Col>
          <Col sm="2" className="text-center">
            {/* <ImpactGauge
              chartDivId="welfare-gauge-alternative-1"
              value={60}
              referenceValue={60}
              width="80%"
              height="100px"
            /> */}
          </Col>
          <Col sm="2" className="text-center">
            {/* <ImpactGauge
              chartDivId="cost-gauge-alternative-1"
              value={35}
              referenceValue={35}
              width="80%"
              height="100px"
            /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EatingPlan;
