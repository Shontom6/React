import React, { Component } from "react";

class ChildComponent extends Component {
  componentWillUnmount() {
    console.log(
      "ChildComponent is going to be removed from UI !!! please clear cached data here"
    );
  }
  render() {
    return <div>ChildComponent is here</div>;
  }
}
export default ChildComponent;
