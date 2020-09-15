import React, { Component } from "react";
import LayoutSelect from "./LayoutSelect";
import KeyboardLayout from "./KeyboardLayout";
import "./Penzo.css";
import data from "./keyboardLayouts.json";

class Penzo extends Component {
  constructor() {
    super();
		this.monTest = "11111";
		this.currentSelectedLayout = 0;
		this.myTab = data;
    // this.loadJson();
  }

  loadJson = () => {
    console.log("ouechhhhh");
    let myCheu = data;
    console.log(myCheu);
  };

  createObj = () => {
    console.log("myTab:", this.myTab);
    this.myTab.forEach((element) => {
      console.log(element.name);
    });
	};
	
	updateSelectedLayout = (arg) => {
		console.log("updateSelectedLayout:", arg);
		this.currentSelectedLayout = arg;
		// this.setState({ currentSelectedLayout: () => {return "hey"} })
		this.setState({});
		// this.penzo = value;
	}

  render() {
    return (
      <div className="Penzo">
				<h5>||{this.penzo}||</h5>
				<LayoutSelect layouts={this.myTab} myChange={(current) => this.updateSelectedLayout(current)} />
				<KeyboardLayout theTab={this.myTab[this.currentSelectedLayout]} />
        {/* {this.myTab.map((element, index) => (
          <div key={index}>
            <h3>{element.name}</h3>
            <KeyboardLayout theTab={element} />
          </div>
        ))} */}
        --------------------------------------------------------
        {this.theTab}
        <p>Ouech {this.props.msg}</p>
        <button onClick={this.createObj}>-------</button>
        <p>{this.monTest}</p>
      </div>
    );
  }
}

export default Penzo;