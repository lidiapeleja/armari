import "./App.css";
import React from "react";
import Navigation from "./Navigation";
import AddItem from "./AddItem";
import Home from "./Home";
import Settings from "./Settings";
import About from "./About";
import Clothes from "./Clothes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../node_modules/hamburgers/dist/hamburgers.css";
import Breadcrumbs from "./Breadcrumb";
import bodyURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-onesies-100.png";
import legginsURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-red-children's-tights-100.png";
import pijamasURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-men's-pajama-100.png";
import shirtURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-t-shirt-100.png";
import dressURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-dress-front-view-100.png";
import jacketURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-jacket-100.png";
import socksURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-pair-of-socks-100.png";
import shoesURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-pair-of-sneakers-100.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);

    this.state = {
      apiResponse: "",
      babyName: "Laia",
      currentBabySize: 50,
      totalStock: 0,
      clothesSize: [
        46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80,
      ],
      clothesSeason: ["Summer", "Fall/Spring", "Winter"],
      clothesState: ["new", "used"],
      shoesSize: [4, 6, 8, 10, 12, 14, 16, 18, 20],
      owner: [
        {
          name: "Lorena",
          phoneNumber: +4917621660725,
          email: "lidiapeleja@gmail.com",
        },
        {
          name: "Mireia",
          phoneNumber: +4917621660725,
          email: "lidiapeleja@gmail.com",
        },
        {
          name: "Laia",
          phoneNumber: +4917621660725,
          email: "lidiapeleja@gmail.com",
        },
        {
          name: "Eva",
          phoneNumber: +4917621660725,
          email: "lidiapeleja@gmail.com",
        },
      ],
      clothesType: [
        {
          type: "body",
          imgUrl: String(bodyURL),
        },
        {
          type: "leggins",
          imgUrl: String(legginsURL),
        },
        {
          type: "shirt",
          imgUrl: String(shirtURL),
        },
        {
          type: "dress",
          imgUrl: String(dressURL),
        },
        {
          type: "pijamas",
          imgUrl: String(pijamasURL),
        },
        {
          type: "jaquet",
          imgUrl: String(jacketURL),
        },
        {
          type: "socks",
          imgUrl: String(socksURL),
        },
        {
          type: "shoes",
          imgUrl: String(shoesURL),
        },
      ],
    };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  callHelloAPI() {
    fetch("http://localhost:9000/hello")
      .then((res) => res.text())
      .then((res) => this.setState({ apiHelloResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
    this.callHelloAPI();
  }

  handleNameChange(event) {
    this.setState({ babyName: event.target.value });
  }
  handleNameSubmit(event) {
    alert("A name was submitted: " + this.state.babyName);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Breadcrumbs />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  babyName={this.state.babyName}
                  currentBabySize={this.state.currentBabySize}
                  totalStock={this.state.totalStock}
                  typeOfClothes={this.state.clothesType}
                  clothesURL={this.state.clothesType.img}
                  clothesType={this.state.clothesType}
                />
              }
            ></Route>
            <Route
              exact
              path="/clothes/"
              element={
                <Clothes
                  babyName={this.state.babyName}
                  currentBabySize={this.state.currentBabySize}
                  totalStock={this.state.totalStock}
                  clothesURL={this.state.clothesType.img}
                  clothesType={this.state.clothesType}
                  clothesSeason={this.state.clothesSeason}
                  owner={this.state.owner}
                  clothesSize={this.state.clothesSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/clothes/:clothes"
              element={
                <AddItem
                  clothesSize={this.state.clothesSize}
                  babyName={this.state.babyName}
                  clothesSeason={this.state.clothesSeason}
                  clothesState={this.state.clothesState}
                  clothesType={this.state.clothesType}
                  owner={this.state.owner}
                />
              }
            />
            <Route
              path="/settings"
              element={
                <Settings
                  clothesSize={this.state.clothesSize}
                  handleNameChange={this.handleNameChange}
                  handleNameSubmit={this.handleNameSubmit}
                />
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Router>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
