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
import "./AddItem.css";
import uploadImg from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-image-100.png";

class AddItem extends React.Component {
  render() {
    return (
      <div>
        <Container className="section">
          <h1>Add new Item</h1>
          <Container fluid="md">
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
                    {this.props.clothesSeason.map((season) => (
                      <Button
                        variant="outline-dark"
                        value={season}
                        key={season}
                      >
                        {season}
                      </Button>
                    ))}
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
                  <Form.Group controlId="formFileLg" className="mb-1">
                    <Form.Label>Upload Clothe's Picture</Form.Label>
                    <Form.Control type="file" size="lg" />
                  </Form.Group>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="paragraph upload-image">
                  <img alt="bla blabla" src={String(uploadImg)} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="article d-flex justify-content-center">
                  <Button size="lg">Save Item</Button>
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
