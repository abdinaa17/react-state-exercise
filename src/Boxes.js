import React, { Component } from "react";
import Box from "./Box";
import "./styles.css";

class Boxes extends Component {
  static defaultProps = {
    numBoxes: 18
  };
  render() {
    const allBoxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box bgColor={this.props.allColors} />
    ));

    return <div className="Boxes">{allBoxes}</div>;
  }
}

export default Boxes;
