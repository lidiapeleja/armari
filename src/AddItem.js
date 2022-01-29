import React from "react";
import Button from "react-bootstrap/Button";

class AddItem extends React.Component {
  render() {
    return (
      <div>
        <h1>Add new {this.state.clothes.type.body}</h1>
      </div>
    );
  }
}

export default AddItem;
