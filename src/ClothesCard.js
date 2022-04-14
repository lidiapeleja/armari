import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import uploadImg from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-image-100.png";
import "./ClothesCard.css";

function ClothesCard(props) {
  return (
    <Card className="section">
      <Card.Img variant="top" src={uploadImg} />
      <Card.Body className="text-center">
        <Card.Title>Body</Card.Title>
        <Card.Text>
          <Row>
            <Col>
              <span className="fw-bold">Size:</span> <span>hello</span>
            </Col>
          </Row>
          <Row>
            <span className="fw-bold">Owner:</span> <span>hello</span>
          </Row>
          <Row>
            <span className="fw-bold">Season:</span> <span>hello</span>
          </Row>
        </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
  );
}

export default ClothesCard;
