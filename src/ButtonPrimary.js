import React from "react";
import Button from "react-bootstrap/Button";

class ButtonPrimary extends React.Component {
  render() {
    return (
      <Button size="lg" className="custom-btn mt-3">
        Add New {this.props.type}
      </Button>
    );
  }
}

export default ButtonPrimary;
