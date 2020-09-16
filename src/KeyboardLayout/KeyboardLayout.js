import React, { Component } from "react";
import Row from "Row/Row";
import { v4 as uuidv4 } from "uuid";
import "KeyboardLayout/KeyboardLayout.css";

class KeyboardLayout extends Component {
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

export default KeyboardLayout;