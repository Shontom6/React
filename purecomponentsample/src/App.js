import React, { Component } from "react";
import PureCompSample from "./PureCompSample";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTextValue: "",
    };
  }
  onTextInputFinishedHandler = (event) => {
    console.log("User finished input", event.target.value);
    this.setState({ inputTextValue: event.target.value });
  };
  render() {
    console.log("Parent rerendered !!");
    return (
      <div style={{ border: "1px solid red" }}>
        App<br></br>
        Inside App inputTextValue value : {this.state.inputTextValue}
        <br />
        <input type={"text"} onBlur={this.onTextInputFinishedHandler} />{" "}
        <button>Save Value</button>
        <PureCompSample propValue={this.state.inputTextValue} />
      </div>
    );
  }
}

export default App;
