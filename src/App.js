import "./App.css";
import React from "react";
import Navigation from "./Navigation";
import AddItem from "./AddItem";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/hamburgers/dist/hamburgers.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      babyName: "Laia",
      totalStock: 0,
      clothes: {
        type: ["Body", "Leggins", "Shirt", "Dress", "Pijamas", "Jacket"],
        logoURL:
          "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-clothes-baby-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
      },
      clothesSize: [
        46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80,
      ],
      shoesSize: [4, 6, 8, 10, 12, 14, 16, 18, 20],
      clothesType: [
        {
          type: "body",
          img: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-clothes-baby-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
        },
        { type: "leggins" },
        { type: "shirt" },
        { type: "dress" },
        { type: "pijamas" },
        { type: "jaquet" },
        { type: "socks" },
        { type: "shoes" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route
              index
              element={
                <Home
                  babyName={this.state.babyName}
                  totalStock={this.state.totalStock}
                  globalState={this.state}
                  clothesType={this.state.clothes.type}
                />
              }
            />
            <Route path="add-item" element={<AddItem />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
