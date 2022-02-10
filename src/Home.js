import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
            <h6>
              Current Size of {this.props.babyName}
              <code>{this.props.currentBabySize}</code>
            </h6>
            <div className="section">
              <h4>
                Number of clothes in wardrobe:
                <code>{this.props.totalStock}</code>
              </h4>
            </div>
            <div className="section buttons-wrapper">
              {this.props.typeOfClothes.map((clothes) => (
                <Link
                  to="/add-item"
                  className="custom-btn paragraph"
                  key={clothes.type}
                >
                  <img alt={clothes.type} src={clothes.imgUrl} />
                  Add {clothes.type}
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
