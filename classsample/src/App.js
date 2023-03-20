import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Add any states if required.
      counter: 0,
    };
    console.log("constructor executed");
  }
  componentDidMount() {
    // after first time UI is rendered
    console.log("componentDidMount executed");
  }
  incrementValue = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate executed");
    return this.state.counter % 2 === 0 ? false : true;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate executed");
  }
  componentWillUnmount() {
    console.log(
      "App is going to be removed from UI !!! please clear cached data here"
    );
  }
  render() {
    console.log("render executed");
    console.log("New value is ", this.state.counter);
    return (
      <div>
        <button onClick={this.incrementValue}>Increment</button>
        {this.state.counter}
        <br />
        {this.state.counter < 10 ? <ChildComponent /> : ""}
      </div>
    );
  }
}
export default App;
