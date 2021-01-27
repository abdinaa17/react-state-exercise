import React, { Component } from "react";
import "./box.css";
import { choice } from "./Helpers";

class Box extends Component {
  static defaultProps = {
    allColors: ["yellow", "green", "tomato", "purple", "blue"]
  };
  constructor(props) {
    super(props);
    this.state = {
      bgColor: choice(this.props.allColors)
    };
    this.handleClick = this.handleClick.bind(this);
  }
  pickColor() {
    let newColor;
    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.bgColor);

    this.setState({ bgColor: newColor });
  }
  handleClick() {
    this.pickColor();
  }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.bgColor }}
        onClick={this.handleClick}
      >
        <h1>Maneno</h1>
      </div>
    );
  }
}

export default Box;
