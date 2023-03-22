import React, { Component } from "react";
import "./App.css";
import AddTaskComponent from "./components/AddTaskComponent";
import ListTasksComponent from "./components/ListTasksComponent";
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [], //[{taskName: "", completed: true/false }, {taskName: "", completed: true/false }]
    };
  }
  receiveValueFromChild = (inputText) => {
    console.log("Value received - new task name", inputText);
    this.setState({
      taskList: [
        ...this.state.taskList,
        {
          taskName: inputText,
          completed: false,
        },
      ],
    });
  };
  receiveTaskCompletedValueFromChild = (taskObject) => {
    let newTaskList = [...this.state.taskList];
    newTaskList = newTaskList.map((task) => {
      if (task.taskName === taskObject.taskName) {
        return {
          taskName: task.taskName,
          completed: taskObject.completed,
        };
      } else return task;
    });

    console.log("Received in parent as", taskObject);

    console.log("New task list is ", newTaskList);
    this.setState({ taskList: newTaskList });
  };

  receiveTaskDeletedValueFromChild = (taskName) => {
    console.log("Received in parent as", taskName);
    let newTaskList = [];
    this.state.taskList.forEach((task) => {
      if (taskName !== task.taskName) {
        newTaskList.push(task);
      }
    })
    this.setState({taskList:newTaskList});
  };
  render() {
    return (
      <div className="parent-wrapper">
        <AddTaskComponent receiveValueFromChild={this.receiveValueFromChild} />
        <ListTasksComponent
          listOfTasks={this.state.taskList}
          sendTaskCompletedValueFromChild={
            this.receiveTaskCompletedValueFromChild
          }
          sendTaskDeletedValueFromChild={
            this.receiveTaskDeletedValueFromChild
          }
        />
      </div>
    );
  }
}
export default ParentComponent;
