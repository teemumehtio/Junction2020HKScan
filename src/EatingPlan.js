import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FoodSelector from "./FoodSelector";
import FoodAlternatives from "./FoodAlternatives";

import FoodOptions from "./FoodOptions";

const EatingPlan = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  const selectedFoodArray = FoodOptions.filter(
    food => selectedFood !== null && food.id === parseInt(selectedFood)
  );
  const selectedFoodItem =
    selectedFoodArray.length > 0 ? selectedFoodArray[0] : null;

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
          selectedFoodItem={selectedFoodItem}
          setSelectedFood={setSelectedFood}
        />
        {selectedFoodItem !== null ? (
          <>
            <FoodAlternatives
              selectedFoodItem={selectedFoodItem}
              alternatives={
                selectedFoodItem !== null
                  ? selectedFoodItem.ingredientOptions
                  : null
              }
              title="Compare the different options making the food"
              chartIdPrefix="ing"
              enableInfo={true}
            />
            <FoodAlternatives
              selectedFoodItem={selectedFoodItem}
              alternatives={
                selectedFoodItem !== null
                  ? selectedFoodItem.alternativeFoods
                  : null
              }
              title="You might want to try also these foods"
              chartIdPrefix="alt"
            />
          </>
        ) : null}
      </Container>
    </>
  );
};

export default EatingPlan;
