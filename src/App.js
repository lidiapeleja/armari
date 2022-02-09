import "./App.css";
import React from "react";
import Navigation from "./Navigation";
import AddItem from "./AddItem";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/hamburgers/dist/hamburgers.css";
import Breadcrumbs from "./Breadcrumb";
import bodyURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-onesies-100.png";
import legginsURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-red-children's-tights-100.png";
import pijamasURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-sleep-100.png";
import shirtURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-t-shirt-100.png";
import dressURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-dress-front-view-100.png";
import jacketURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-jacket-100.png";
import socksURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-pair-of-socks-100.png";
import shoesURL from "/Users/lidiapeleja/Documents/webProjects/armari-laia/armari/src/img/icons8-pair-of-sneakers-100.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      babyName: "Laia",
      totalStock: 0,
      clothesSize: [
        46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80,
      ],
      shoesSize: [4, 6, 8, 10, 12, 14, 16, 18, 20],
      owners: [
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

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Breadcrumbs />
          <Routes>
            <Route
              index
              element={
                <Home
                  babyName={this.state.babyName}
                  totalStock={this.state.totalStock}
                  typeOfClothes={this.state.clothesType}
                  clothesURL={this.state.clothesType.img}
                />
              }
            />
            <Route
              path="add-item"
              element={
                <AddItem
                  clothesSize={this.state.clothesSize}
                  babyName={this.state.babyName}
                />
              }
            />
            <Route path="about" element={<About />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
