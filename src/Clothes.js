import React from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import ClothesCard from "./ClothesCard";

function Clothes(props) {
  return (
    <Container className="section">
      <Container fluid="md">
        <h1>{props.babyName}'s guardrobe:</h1>
        <Row className="mt-4">
          <Col>
            <ButtonGroup className=" me-3 paragraph" aria-label="Filter Season">
              <span className="d-flex align-items-center me-1">Season: </span>
              {props.clothesSeason.map((season) => (
                <Button variant="outline-success" value={season} key={season}>
                  {season}
                </Button>
              ))}
            </ButtonGroup>
            <ButtonGroup
              className="display-inline-block paragraph"
              aria-label="Filter Owner"
            >
              <span className="d-flex align-items-center me-1">Owner: </span>
              {props.owner.map((owner) => (
                <Button
                  variant="outline-success"
                  value={owner.name}
                  key={owner.name}
                >
                  {owner.name}
                </Button>
              ))}
            </ButtonGroup>
            <ButtonGroup
              className="display-inline-block paragraph"
              aria-label="Filter Size"
            >
              <span className="d-flex align-items-center me-1">Size: </span>
              {props.clothesSize.map((size) => (
                <Button variant="outline-success" value={size} key={size}>
                  {size}
                </Button>
              ))}
            </ButtonGroup>
            <ButtonGroup
              className="display-inline-block paragraph"
              aria-label="Filter Type of Clothes"
            >
              <span className="d-flex align-items-center me-1">
                Type of Clothes:{" "}
              </span>
              {props.clothesType.map((type) => (
                <Button
                  variant="outline-success"
                  value={type.type}
                  key={type.type}
                >
                  {type.type}
                </Button>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="section">
              <h2 className="text-center">Body</h2>
              <Row xs={2} md={3} lg={4} xl={5}>
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
              <Row xs={2} md={3} lg={4} xl={5}>
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
