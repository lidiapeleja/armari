import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import AddItem from "./AddItem";

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
      totalStock: 0,
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
                  Armari App
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Router>
                    <li>
                      <Link key="home" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link key="about" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link key="additem" to="/add-item">
                        Add Item
                      </Link>
                    </li>
                    <Routes>
                      <Route exact path="/">
                        Home{" "}
                      </Route>
                      <Route path="/add-item">Add Item </Route>
                      <Route path="/about">About </Route>
                    </Routes>
                  </Router>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <div className="App-header pt-5">
          <h3 className="pt-5">
            Add new clothes for <code>{this.state.babyName}</code>.
          </h3>
          <div className="figures mt-5">
            <h4>Number of clothes in wardrobe: {this.state.totalStock}</h4>
          </div>
          <div className="mt-5">
            {this.state.clothes.type.map((types) => (
              <Router>
                <Link
                  to="/add-item"
                  className="custom-btn btn mt-5"
                  key={types}
                  type={types}
                >
                  Add New {types}
                </Link>
              </Router>
            ))}
          </div>
          <div>
            <AddItem></AddItem>
          </div>
        </div>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>Abooout</h2>
    </div>
  );
}

export default App;
