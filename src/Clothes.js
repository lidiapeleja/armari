import React from "react";
import { useParams } from "react-router-dom";
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
              <div className="paragraph">
                <Row>
                  <Col>
                    <ClothesCard></ClothesCard>
                  </Col>
                  <Col>
                    <Col>
                      <ClothesCard></ClothesCard>
                    </Col>
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
            </div>
            <div className="section">
              <h2 className="text-center">Leggins</h2>
              <div className="paragraph">
                <Row>
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
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Clothes;
