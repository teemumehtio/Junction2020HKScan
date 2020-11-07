import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Modal from "react-bootstrap/Modal";

import ImpactGauge from "./ImpactGauge";

const FoodAlternatives = ({
  selectedFoodItem,
  alternatives,
  title,
  chartIdPrefix,
  enableInfo
}) => {
  const [infoShown, setInfoShown] = useState(false);

  const showInfo = event => {
    setInfoShown(true);
  };

  const closeInfo = () => {
    setInfoShown(false);
  };

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
                {enableInfo === true ? (
                  <i
                    className="material-icons-outlined"
                    onClick={event => showInfo()}
                  >
                    info
                  </i>
                ) : null}
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
      <Modal show={infoShown} onHide={closeInfo} centered>
        <Modal.Header closeButton>
          <Modal.Title>Why you should use HKScan's products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            More than 80 per cent of beef derives from the animals in the dairy
            production chain, due to which the carbon footprint of the
            production is relatively smaller than in separated beef production.
            In addition to dairy and beed products, every bit of a cow's carcass
            is utilised, thereby also yielding leather and gelatine, for
            example.
          </p>
          <p>
            HKScan requires that animals grow in good conditions in the right
            type of environment and receive good care. In terms of animal health
            and welfare, sustainability covers genetics, feeding and rearing
            conditions, as well as animal care on farms, during transport and in
            slaughterhouse operations.
          </p>
          <p>
            HKScan invests in animal health and good conditions in all animal
            species and at all stages of growth. Animals are treated with
            antibiotics only when necessary, and only prescribed and supervised
            by a vet.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FoodAlternatives;
