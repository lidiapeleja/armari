import React from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  FloatingLabel,
} from "react-bootstrap";

class Settings extends React.Component {
  render() {
    return (
      <Container fluid="md" className="section">
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={6}>
            <h1 className="text-center">Settings</h1>
            <h2 className="h6 text-center paragraph">
              Select your default settings for the Armari App.
            </h2>
            <Form onSubmit={this.props.handleNameSubmit} className="section">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Baby's Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.props.babyName}
                  onChange={this.props.handleNameChange}
                  placeholder="Enter Name"
                />
              </Form.Group>
              <p>{this.props.babyName}</p>

              <FloatingLabel
                className="paragraph"
                controlId="floatingSize"
                label="Select current baby's size*"
              >
                <Form.Select aria-label="Size">
                  <option key="unselected-size" value="unselected-size">
                    Not selected
                  </option>
                  {this.props.clothesSize.map((size) => (
                    <option value={size} key={size}>
                      {size}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <Button
                className="paragraph"
                type="submit"
                value="Submit"
                variant="outline-dark"
                key="save-item"
              >
                Save Settings
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Settings;
