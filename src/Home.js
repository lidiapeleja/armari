import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <Container className="paragraph" fluid="md">
        <Row>
          <Col>
            <h1>
              <code>{this.props.babyName}</code>'s Wardrobe
            </h1>
            <div className="section">
              <h4>
                Number of clothes in wardrobe:
                <code>{this.props.totalStock}</code>
              </h4>
            </div>
            <div className="section buttons-wrapper">
              {this.props.typeOfClothes.map((clothes) => (
                <a
                  href="/add-item"
                  className="custom-btn paragraph"
                  key={clothes.type}
                >
                  <img alt={clothes.type} src={clothes.imgUrl} />
                  Add {clothes.type}
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
