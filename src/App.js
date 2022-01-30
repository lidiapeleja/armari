import ButtonPrimary from "./ButtonPrimary";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      babyName: "Laia",
      clothes: {
        type: ["Body", "Leggins", "Shirt", "Dress", "Pijamas", "Jacket"],
        size: [46, 48, 50, 52, 54, 56, 58, 60],
      },
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">
              Armari App - sort your baby clothes!
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Armari App - sort your baby clothes!
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
                      <Link to="/add-item">Add Item</Link>
                    </li>
                    <Routes>
                      <Route exact path="/">
                        Home
                      </Route>
                      <Route path="/add-item">Add Item</Route>
                      <Route path="/about">About</Route>
                    </Routes>
                  </Router>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <div className="App-header mt-3">
          <h3 className="pt-3">
            Add new clothes for <code>{this.state.babyName}</code>.
          </h3>
          <div className="mt-5">
            {this.state.clothes.type.map((types) => (
              <ButtonPrimary
                key={types}
                type={types}
                className={types}
              ></ButtonPrimary>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
