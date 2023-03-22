import React, { Component } from "react";

export default class ListTasksComponent extends Component {
  handleCheckboxClick = (event, taskName) => {
    console.log(event.target.checked, taskName);
    this.props.sendTaskCompletedValueFromChild({
      taskName: taskName,
      completed: event.target.checked,
    });
  };

  handleDeleteButtonClick = (taskName) => {
    console.log("value received in handleDeleteButtonClick",taskName);
    this.props.sendTaskDeletedValueFromChild(taskName);
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.listOfTasks.map((task) => {
            return (
              <li key={task.taskName}>
                <input
                  type={"checkbox"}
                  onChange={(event) => {
                    this.handleCheckboxClick(event, task.taskName);
                  }}
                />
                {task.taskName} &nbsp;&nbsp;&nbsp;
                <button onClick={() => {this.handleDeleteButtonClick(task.taskName)}}>Delete</button>
              </li>
            );
          })}
          {/**
           * [
           * <li><input type={"checkbox"}> buy milk </li>
           * <li><input type={"checkbox"}> buy eggs </li>
           * <li><input type={"checkbox"}> buy veggies </li>
           * ]
           */}
        </ul>
      </div>
    );
  }
}
