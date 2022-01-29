import "./App.css";
import "./App.css";
import ButtonPrimary from "./Button";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      babyName: "Laia",
      clothes: {
        type: { body: "body", leggins: "leggins", shirt: "shirt" },
        size: {
          50: 50,
          52: 52,
          54: 54,
          56: 56,
          58: 58,
          60: 60,
          62: 62,
          64: 64,
          66: 66,
        },
      },
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">Armari App</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Armari App
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Router>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <Routes>
                      <Route exact path="/">
                        Home
                      </Route>
                      <Route path="/about">About</Route>
                      <Route path="/dashboard">Dashboard </Route>
                    </Routes>
                  </Router>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <div className="App-header">
          <h3 className="mt-3">
            Add new clothes for <code>{this.state.babyName}</code>.
          </h3>
          <ButtonPrimary clothes={this.state.clothes}></ButtonPrimary>
        </div>
      </div>
    );
  }
}

export default App;
