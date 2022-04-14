import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <Container className="paragraph text-center" fluid="md">
        <Row>
          <Col>
            <h1>{this.props.babyName}'s Wardrobe</h1>
            <Row className="justify-content-md-center">
              <Col xs lg="6">
                <Card className="section">
                  <Card.Body>
                    <h6>
                      {this.props.babyName}'s Size:{" "}
                      <Badge bg="info">{this.props.currentBabySize}</Badge>
                    </h6>
                    <h4>
                      Clothes in wardrobe:{" "}
                      <Badge bg="info">{this.props.totalStock} items</Badge>
                    </h4>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="section buttons-wrapper">
              <Row>
                {this.props.typeOfClothes.map((clothes) => (
                  <Link
                    to={`/clothes/${clothes.type}`}
                    className="custom-btn paragraph col"
                    key={clothes.type}
                  >
                    <img alt={clothes.type} src={clothes.imgUrl} />
                    Add {clothes.type}
                  </Link>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
