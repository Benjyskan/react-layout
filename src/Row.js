import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Key.css";
import "./Row.css"

class Row extends Component {
  render() {
    return (
      <div className="Row">
        {this.props.theRow.map(
          (element) =>
            element.length > 0 && (
              <span className="key" key={uuidv4()}>
                {element}
              </span>
            )
        )}
      </div>
    );
  }
}

export default Row;
