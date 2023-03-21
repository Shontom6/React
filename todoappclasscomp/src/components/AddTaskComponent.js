import React, { Component } from "react";

export default class AddTaskComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }
  addTaskInputHandler = (event) => {
    this.setState({ inputText: event.target.value });
  };
  onAddClick=()=>{
    this.props.receiveValueFromChild(this.state.inputText)
  }
  render() {
    return (
      <div>
        <input type={"text"} onBlur={this.addTaskInputHandler} />
        <button onClick={this.onAddClick}>Add Task</button>
      </div>
    );
  }
}
