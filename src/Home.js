import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="App-header pt-5">
        <h3 className="pt-5">
          Add new clothes for <code>{this.props.babyName}</code>.
        </h3>
        <div className="figures mt-5">
          <h4>Number of clothes in wardrobe: {this.props.totalStock}</h4>
        </div>
        <div className="mt-5">
          {this.props.clothesType.map((types) => (
            <a
              href="/add-item"
              className="custom-btn btn mt-5"
              key={types}
              type={types}
            >
              Add New {types}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
