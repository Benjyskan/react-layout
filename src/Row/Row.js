import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "Row/Row.css";
import Key from "Key/Key";

class Row extends Component {
  render() {
    return (
      <div className="Row">
        {this.props.theRow.map(
          (element, index) =>
            (this.props.theRow[index + 1] === "" && (
              <Key givenClass="double" text={element} key={uuidv4()} />
            )) ||
            (element.length > 0 && (
              <Key text={element} key={uuidv4()} />
            ))
        )}
      </div>
    );
  }
}

export default Row;
