import React from "react";
import { FloatingLabel } from "react-bootstrap";
import { Form, Container } from "react-bootstrap";

class AddItem extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Add new Clothe</h1>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </>
        </Container>
      </div>
    );
  }
}

export default AddItem;
