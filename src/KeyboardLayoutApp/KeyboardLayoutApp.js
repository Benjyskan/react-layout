import React, { Component } from "react";
import LayoutSelect from "LayoutSelect/LayoutSelect";
import "KeyboardLayoutApp/KeyboardLayoutApp.css";
import KeyboardLayout from "KeyboardLayout/KeyboardLayout";
import data from "keyboardLayouts.json";

// TODO save currentModIndex to localStorage

class KeyboardLayoutApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentModIndex: 0,
      loadedKeyboard: this.getKeyboardFromLocalStorage("savedKeyboardLayout"),
      loadedKeyboardName: "savedKeyboardLayout",
    };
    if (!this.state.loadedKeyboard) this.state.loadedKeyboard = data;
  }

  saveKeyboardToLocalStorage = (key) => {
    console.log("- saveKeyboardToLocalStorage: key:", key);
    localStorage.setItem(key, JSON.stringify(this.state.loadedKeyboard));
  };

  getKeyboardFromLocalStorage = (keyboardName) => {
    try {
      const items = localStorage.getItem(keyboardName);
      return JSON.parse(items, null, -1);
      // return JSON.parse(items);
    } catch (err) {
      return null;
    }
  };

  loadKeyboardFromFile = (keyboardName) => {
    this.setState({ loadedKeyboard: data, keyboardName: keyboardName });
  };

  logLocalStorage = (key) => {
    console.log("LOG:", localStorage.getItem(key));
  };

  render() {
    return (
      <div className="KeyboardLayoutApp">
        <LayoutSelect
          layouts={this.state.loadedKeyboard}
          updateSelectedLayout={(current) =>
            this.setState({ currentModIndex: current })
          }
        />
        <KeyboardLayout
          theTab={this.state.loadedKeyboard[this.state.currentModIndex]}
        />
        --------------------------------------------------------
        {this.theTab}
        <p>Ouech: {this.props.msg}</p>
        <button
          onClick={() =>
            this.saveKeyboardToLocalStorage(this.state.loadedKeyboardName)
          }
        >
          Save to localStorage
        </button>
        <button
          onClick={() =>
            this.loadKeyboardFromFile(this.state.loadedKeyboardName)
          }
        >
          Load from file
        </button>
        <button
          onClick={() => this.logLocalStorage(this.state.loadedKeyboardName)}
        >
          Log localStorage
        </button>
        <button
          onClick={() => {
            localStorage.clear();
          }}
        >
          Clear localStorage
        </button>
      </div>
    );
  }
}

export default KeyboardLayoutApp;
