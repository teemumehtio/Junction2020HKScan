import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ImpactGauge from "./ImpactGauge";

const FoodAlternatives = ({
  selectedFoodItem,
  alternatives,
  title,
  chartIdPrefix
}) => {
  const rows =
    selectedFoodItem !== null && alternatives !== null
      ? alternatives.map((alt, index) => {
          return (
            <Row className="align-middle" key={index}>
              <Col
                sm="6"
                className="text-left"
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "45px"
                }}
              >
                {alt.name}
              </Col>
              <Col sm="2" className="text-center">
                <ImpactGauge
                  chartDivId={`environment-gauge-${chartIdPrefix}-${index}`}
                  value={alt.environmentalImpact}
                  referenceValue={selectedFoodItem.environmentalImpact}
                  width="80%"
                  height="100px"
                />
              </Col>
              <Col sm="2" className="text-center">
                <ImpactGauge
                  chartDivId={`welfare-gauge-${chartIdPrefix}-${index}`}
                  value={alt.animalWelfare}
                  referenceValue={selectedFoodItem.animalWelfare}
                  width="80%"
                  height="100px"
                />
              </Col>
              <Col sm="2" className="text-center">
                <ImpactGauge
                  chartDivId={`cost-gauge-${chartIdPrefix}-${index}`}
                  value={alt.cost}
                  referenceValue={selectedFoodItem.cost}
                  width="80%"
                  height="100px"
                />
              </Col>
            </Row>
          );
        })
      : null;

  return (
    <>
      <Row>
        <Col sm="12">
          <h5>{title}</h5>
        </Col>
      </Row>
      {rows}
    </>
  );
};

export default FoodAlternatives;
