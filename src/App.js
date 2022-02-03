import "./App.css";
import React from "react";
import Navigation from "./Nav";
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
      clothes: {
        type: ["Body", "Leggins", "Shirt", "Dress", "Pijamas", "Jacket"],
        logoURL:
          "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-clothes-baby-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
        size: [46, 48, 50, 52, 54, 56, 58, 60],
      },
      totalStock: 0,
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
