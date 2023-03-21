import React, { Component } from "react";
import FuncCompSample from "./FuncCompSample";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTextValue: "",
    };
  }
  inputFieldHandler = (event) => {
    this.setState({ inputTextValue: event.target.value });
  };
  render() {
    console.log("Parent is rerendered");
    return (
      <div>
        Parent's input field value : {this.state.inputTextValue}
        <br />
        <input type={"text"} onBlur={this.inputFieldHandler} />
        <br />
        <button>click</button>
        <FuncCompSample
          propValue={this.state.inputTextValue}
          propValue2={"Hello World"}
        />
      </div>
    );
  }
}
