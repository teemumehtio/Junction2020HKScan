import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";

import ImpactGauge from "./ImpactGauge";

const FoodSelector = ({ foodOptions, selectedFoodItem, setSelectedFood }) => {
  const foodSelectOptions = () => {
    return foodOptions.map(food => {
      return <option value={food.id}>{food.name}</option>;
    });
  };

  return (
    <>
      <Row>
        <Col sm="6" className="text-left">
          <h5>What do you want to eat?</h5>
          <Form>
            <Form.Control
              as="select"
              placeholder="Choose your meal..."
              value={selectedFoodItem !== null ? selectedFoodItem.id : ""}
              onChange={event => setSelectedFood(event.target.value)}
              style={{ marginBottom: "8px" }}
            >
              <option value="">Choose your meal...</option>
              {foodSelectOptions()}
            </Form.Control>
          </Form>
        </Col>
        <Col sm="2" className="text-center">
          {selectedFoodItem !== null ? (
            <ImpactGauge
              chartDivId="environment-gauge"
              value={
                selectedFoodItem ? selectedFoodItem.environmentalImpact : null
              }
            />
          ) : null}
        </Col>
        <Col sm="2" className="text-center">
          {selectedFoodItem !== null ? (
            <ImpactGauge
              chartDivId="welfare-gauge"
              value={selectedFoodItem ? selectedFoodItem.animalWelfare : null}
            />
          ) : null}
        </Col>
        <Col sm="2" className="text-center">
          {selectedFoodItem !== null ? (
            <ImpactGauge
              chartDivId="cost-gauge"
              value={selectedFoodItem ? selectedFoodItem.cost : null}
            />
          ) : null}
        </Col>
      </Row>
    </>
  );
};

export default FoodSelector;
