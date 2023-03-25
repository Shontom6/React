import React from "react";

export default function AddTaskComp(props) {
  const [newTask, setNewTask] = React.useState("");
  const saveNewTask = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <div>
      Enter task Name : <br />
      <input type={"text"} onBlur={saveNewTask} />
      <button
        onClick={() => {
          props.sendNewTaskValue(newTask);
        }}
      >
        Add Task
      </button>
    </div>
  );
}
