import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class LayoutSelect extends Component {
  constructor(props) {
    super(props);
    console.log("LayoutSelect.props:", props)
    this.state = {
      value: "initalValue"
    };
    // this.handleChange = this.handleChange.bind(this);// declare function by using arrow to avoid using .bind()
  }

  handleChange = (event) => {
    console.log("event.target.value:", event.target.value)
    this.setState({ value: event.target.value }, () => {
    });
    this.props.updateSelectedLayout(event.target.value);
  }


  render() {
    return (
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
    );
  }
}

export default LayoutSelect;
