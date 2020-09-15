// import { TouchBarSlider } from "electron";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class LayoutSelect extends Component {
  constructor(props) {
    super(props);
    // super();
    console.log("eee:", props)
    this.oeunt = "osef";
    this.state = { value: "initalValue" };

    this.handleChange = this.handleChange.bind(this);

    console.log(":", this.props.layouts[0].name);
  }

  handleChange(event) {
    console.log("state before:", this.state.value);
    this.setState({ value: event.target.value }, () => {
      console.log("callback:", this.state.value);
    });
    console.log("state after:", this.state.value);
    console.log("event:", event.target.value);
    this.props.myChange(event.target.value);
  }


  render() {
    return (
      // ({ onChange }) => (
        <form>
          <label>
            <select value={this.state.value} onChange={this.handleChange} >
              {this.props.layouts.map((element, index) => (
                <option key={uuidv4()} value={index}>
                  {element.name}
                </option>
              ))}
            </select>
          </label>
        </form>
      // )
    );
  }
}

export default LayoutSelect;
