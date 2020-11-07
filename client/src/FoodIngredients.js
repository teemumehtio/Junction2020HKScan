import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ImpactGauge from "./ImpactGauge";

const FoodIngredients = ({ selectedFoodItem }) => {
  const ingredientRows =
    selectedFoodItem !== null
      ? selectedFoodItem.ingredientOptions.map((ing, index) => {
          return (
            <Row className="align-middle">
              <Col
                sm="6"
                className="text-left"
                style={{ display: "flex", alignItems: "center" }}
              >
                {ing.name}
              </Col>
              <Col sm="2" className="text-center">
                <ImpactGauge
                  chartDivId={`environment-gauge-ing-${index}`}
                  value={ing.environmentalImpact}
                  referenceValue={selectedFoodItem.environmentalImpact}
                  width="80%"
                  height="100px"
                />
              </Col>
              <Col sm="2" className="text-center">
                <ImpactGauge
                  chartDivId={`welfare-gauge-ing-${index}`}
                  value={ing.animalWelfare}
                  referenceValue={selectedFoodItem.animalWelfare}
                  width="80%"
                  height="100px"
                />
              </Col>
              <Col sm="2" className="text-center">
                <ImpactGauge
                  chartDivId={`cost-gauge-ing-${index}`}
                  value={ing.cost}
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
          <h5>Compare the different options making the food</h5>
        </Col>
      </Row>
      {ingredientRows}
    </>
  );
};

export default FoodIngredients;
