import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <Container className="section" fluid="md">
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
              {this.props.clothesType.map((types) => (
                <a
                  href="/add-item"
                  className="custom-btn btn paragraph"
                  key={types}
                  type={types}
                >
                  <img
                    alt={types}
                    src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-clothes-baby-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
                  />
                  Add {types}
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
