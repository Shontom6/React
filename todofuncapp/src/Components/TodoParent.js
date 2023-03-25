import React from "react";
import AddTaskComp from "./AddTaskComp";
import ListTasksComp from "./ListTasksComp";

export default function TodoParent() {
  const [taskList, setTaskList] = React.useState([]);
  const getNewTaskValue = (taskName) => {
    console.log(taskName, "Received");
    setTaskList([...taskList, { taskName: taskName, completed: false }]);
  };
  const getDeleteTask = (taskName) => {
    console.log("Recieved in parent delete value", taskName);
    let newTaskList = [];
    taskList.forEach((task) => {
      if (taskName !== task.taskName){
        newTaskList.push(task);}
    })
    setTaskList(newTaskList);
  };

  /*const getDeleteTask = (taskName) => {
    console.log("Recieved in parent delete value", taskName);
    const newTaskList = taskList.filter((task) => task.taskName !== taskName);
  setTaskList(newTaskList);
  };*/


  const getTaskCompletedValue = (taskName, completed) => {
    console.log(taskName, completed, "Received");
    const newTaskList = [...taskList];
    newTaskList.forEach((task) => {
      if (task.taskName === taskName) task.completed = completed;
    });
    setTaskList(newTaskList)
  };
  return (
    <div>
      <AddTaskComp sendNewTaskValue={getNewTaskValue} />
      <ListTasksComp
        taskList={taskList}
        sendTaskCompletedValue={getTaskCompletedValue}
        sendDeleteTask={getDeleteTask}
      />
    </div>
  );
}
