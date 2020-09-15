import React, { Component } from "react";
import Row from "./Row";
import { v4 as uuidv4 } from "uuid";
import "./KeyboardLayout.css";

class Keyboardlayout extends Component {
  constructor() {
    super();
    this.osef = "osef";
  }

  loadJson = () => {};

  render() {
    return (
      <div className="KeyboardLayout">
        {this.props.theTab.layout.map((element) => (
          <Row key={uuidv4()} theRow={element} />
        ))}
      </div>
    );
  }
}

export default Keyboardlayout;
