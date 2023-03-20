import React from "react";

function FuncCompSample(props) {
//   console.log("Func component received props as ", props);
  console.log('Functional comp rerendered !!')
  return (
    <div>
      FuncCompSample
      <br />
      Functional comp received value as : {props.propValue}
    </div>
  );
}
export default FuncCompSample;
