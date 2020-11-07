import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Friends = () => {
  return (
    <Container>
      <Row style={{ marginBottom: "24px" }}>
        <Col sm="12">
          Here you can see your friends and share your favorite recipes with
          them!
        </Col>
      </Row>
      <Row style={{ marginBottom: "24px" }}>
        <Col sm="1">
          <i
            className="material-icons"
            style={{ fontSize: "50px", color: "hotpink" }}
          >
            face
          </i>
        </Col>
        <Col sm="11">
          <div>Jane Doe</div>
          <div>12 recipes shared</div>
        </Col>
      </Row>
      <Row style={{ marginBottom: "24px" }}>
        <Col sm="1">
          <i
            className="material-icons"
            style={{ fontSize: "50px", color: "lightskyblue" }}
          >
            face
          </i>
        </Col>
        <Col sm="11">
          <div>Jack Smith</div>
          <div>6 recipes shared</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Friends;
