import React from "react";
import { useParams } from "react-router-dom";
import {
  Form,
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import "./AddItem.css";
import uploadImg from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-image-100.png";

function AddItem(props) {
  const { clothes } = useParams();
  return (
    <Container className="section">
      <h1>
        Add New <span className="text-capitalize">{clothes}</span>{" "}
      </h1>
      <Container fluid="md">
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={4}>
            <div className="section">
              <FloatingLabel controlId="floatingSize" label="Select size*">
                <Form.Select aria-label="Size">
                  <option key="unselected-size" value="unselected-size">
                    Not selected
                  </option>
                  {props.clothesSize.map((size) => (
                    <option value={size} key={size}>
                      {size}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="paragraph">
              Select Clothe's season*
              <ButtonGroup className="mb-2">
                {props.clothesSeason.map((season) => (
                  <Button variant="outline-dark" value={season} key={season}>
                    {season}
                  </Button>
                ))}
              </ButtonGroup>
            </div>
            <div className="paragraph">
              <FloatingLabel controlId="floatingOwner" label="Belongs to*">
                <Form.Select aria-label="Belongs to">
                  <option key="unselected-owner" value="unselected-owner">
                    Not selected
                  </option>
                  {props.owner.map((owner) => (
                    <Button
                      variant="outline-dark"
                      key={owner.name}
                      value={owner.name}
                    >
                      {owner.name}
                    </Button>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="paragraph d-flex flex-column">
              Select Clothe's State
              <ButtonGroup className="mb-2">
                {props.clothesState.map((state) => (
                  <Button variant="outline-dark" value={state} key={state}>
                    {state}
                  </Button>
                ))}
              </ButtonGroup>
            </div>

            <div className="paragraph">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </div>
            <div className="paragraph">
              <Form.Group controlId="formFileLg" className="mb-1">
                <Form.Label>Upload Clothe's Picture</Form.Label>
                <Form.Control type="file" size="lg" />
              </Form.Group>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="paragraph upload-image">
              <img alt="bla blabla" src={String(uploadImg)} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="article d-flex justify-content-center">
              <Button size="lg" key="save-item">
                Save Item
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AddItem;
