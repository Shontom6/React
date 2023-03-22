import React from "react";

export default function ChildFuncComp() {
  const [value, setValue] = React.useState("Hello");
  const handler = () => {
    console.log("Changing value ");
    setValue("Hello World");
  };
  console.log(value);
  return (
    <div>
      ChildFuncComp has a value -{value}
      <button onClick={handler}>click to change value</button>
    </div>
  );
}
