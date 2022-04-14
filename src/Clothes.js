import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ClothesCard from "./ClothesCard";

function Clothes(props) {
  const { clothes } = useParams();
  return (
    <Container className="section">
      <Container fluid="md">
        <h1>Your guardrobe:</h1>

        <Row>
          <Col>
            <div className="section">
              <h2 className="text-center">Body</h2>
              <Row xs={2} md={3} lg={4}>
                <Col>
                  <ClothesCard></ClothesCard>
                </Col>
                <Col>
                  <ClothesCard></ClothesCard>
                </Col>
                <Col>
                  <ClothesCard></ClothesCard>
                </Col>
                <Col>
                  <ClothesCard></ClothesCard>
                </Col>
              </Row>
            </div>
            <div className="section">
              <h2 className="text-center">Leggins</h2>
              <Row xs={2} md={3} lg={4}>
                <Col>
                  <ClothesCard></ClothesCard>
                </Col>
                <Col>
                  <ClothesCard></ClothesCard>
                </Col>
                <Col>
                  <ClothesCard></ClothesCard>
                </Col>
                <Col>
                  <ClothesCard></ClothesCard>
                </Col>
                <Col>
                  <ClothesCard></ClothesCard>
                </Col>
                <Col>
                  <ClothesCard></ClothesCard>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Clothes;
