import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1>
              Add new clothes for <code>{this.props.babyName}</code>
            </h1>
            <div className="section">
              <h4>
                Number of clothes in wardrobe:
                <code>{this.props.totalStock}</code>
              </h4>
            </div>
            <div class="section">
              {this.props.clothesType.map((types) => (
                <a
                  href="/add-item"
                  className="custom-btn btn paragraph"
                  key={types}
                  type={types}
                >
                  Add New {types}
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
