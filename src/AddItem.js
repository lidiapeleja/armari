import React from "react";
import { FloatingLabel } from "react-bootstrap";
import {
  Form,
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
} from "react-bootstrap";

class AddItem extends React.Component {
  render() {
    return (
      <div>
        <Container className="section">
          <h1>Add new Item</h1>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className="section">
                  <FloatingLabel controlId="floatingSelect" label="Select size">
                    <Form.Select aria-label="Size">
                      {this.props.clothesSize.map((size) => (
                        <option value={size} key={size}>
                          {size}
                        </option>
                      ))}
                    </Form.Select>
                  </FloatingLabel>
                </div>
                <div className="paragraph">
                  Select Clothe's season
                  <ButtonGroup size="lg" className="mb-2">
                    <Button>Summer Season</Button>
                    <Button>Spring/Fall Season</Button>
                    <Button>Winter Season</Button>
                  </ButtonGroup>
                </div>
                <div className="paragraph">
                  <FloatingLabel controlId="floatingSelect" label="Belongs to">
                    <Form.Select aria-label="Belongs to">
                      <option value={this.props.babyName}>
                        {this.props.babyName}
                      </option>
                      <option value="52">Lorena</option>
                      <option value="54">Nur</option>
                    </Form.Select>
                  </FloatingLabel>
                </div>
                <div className="paragraph">
                  <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Upload Picture</Form.Label>
                    <Form.Control type="file" size="lg" />
                  </Form.Group>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="section">
                  <img
                    alt="bla blabla"
                    src="https://images.pexels.com/photos/6951990/pexels-photo-6951990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=360"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default AddItem;
