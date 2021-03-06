import React from "react";
import { Card, Ratio, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import uploadImg from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/body.jpg";
import "./ClothesCard.css";

function ClothesCard(props) {
  return (
    <Card className="paragraph">
      <Card.Header>Body</Card.Header>
      <Ratio aspectRatio="1x1">
        <Card.Img variant="top" src={uploadImg} />
      </Ratio>
      <Card.Body className="text-center">
        <Card.Title>Body</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <strong>Owner:</strong> odio
          </ListGroupItem>
          <ListGroupItem>
            <strong>Size:</strong> ac facilisis in
          </ListGroupItem>
          <ListGroupItem>
            <strong>Season:</strong> at eros
          </ListGroupItem>
        </ListGroup>
        <Button className="paragraph" variant="outline-dark">
          Read more
        </Button>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <Card.Link className="text-muted small" href="#">
          Edit
        </Card.Link>
        <Card.Link className="text-danger small" href="#">
          Delate
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default ClothesCard;
