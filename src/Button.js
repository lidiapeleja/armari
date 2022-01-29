import React from "react";
import Button from "react-bootstrap/Button";

class ButtonPrimary extends React.Component {
  render() {
    return (
      <Button size="lg" variant="outline-info" className="mt-3">
        Add new {this.props.clothes.type.body}
      </Button>
    );
  }
}

export default ButtonPrimary;
