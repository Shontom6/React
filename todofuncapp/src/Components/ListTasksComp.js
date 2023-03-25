import React from "react";

export default function ListTasksComp(props) {
  const sendDeleteTask =(taskName)=>{
    console.log("the value in child class to delete",taskName);
    props.sendDeleteTask(taskName);
   };
  return (
    <div>
      <ul>
        {props.taskList.map((task) => {
          return (
            <li key={task.taskName}>
              <input
                type={"checkbox"}
                onChange={(event) => {
                  props.sendTaskCompletedValue(
                    task.taskName,
                    event.target.checked
                  );
                }}
              />
              {task.taskName}
              <button onClick={()=>{
                
                props.sendDeleteTask(task.taskName);
              }
              }>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
