import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <Container className="paragraph text-center" fluid="md">
        <Row>
          <Col>
            <h1>
              <code>{this.props.babyName}</code>'s Wardrobe
            </h1>
            <Row className="justify-content-md-center">
              <Col xs lg="6">
                <Card className="section">
                  <Card.Body>
                    <h6>
                      {this.props.babyName}'s Size:
                      <code>{this.props.currentBabySize}</code>
                    </h6>
                    <h4>
                      Clothes in wardrobe:
                      <code> {this.props.totalStock} items</code>
                    </h4>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="section buttons-wrapper">
              <Row>
                {this.props.typeOfClothes.map((clothes) => (
                  <Link
                    to="/add-item"
                    className="custom-btn paragraph col"
                    key={clothes.type}
                    saveItem={this.props.saveItem}
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
