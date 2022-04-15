import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="Nav">
        <Navbar expand={false}>
          <Container fluid>
            <Navbar.Brand>
              <Link className="text-dark" to="/">
                {" "}
                Armari App
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <Link className="text-dark" to="/">
                    {" "}
                    Armari App
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className="text-dark" to="/">
                    Home
                  </Link>
                  <Link className="text-dark" to="/add-item">
                    Add New Clothe
                  </Link>
                  <Link className="text-dark" to="/settings">
                    Settings
                  </Link>
                  <Link className="text-dark" to="/about">
                    About Armari App
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
