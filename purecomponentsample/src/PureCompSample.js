import React, { PureComponent } from "react";

class PureCompSample extends PureComponent {
  render() {
    console.log('Pure component is rerendered !!')
    return (
      <div style={{ border: "1px solid green", margin: "10px" }}>
        PureCompSample <br />
        Pure component received prop as : {this.props.propValue}
      </div>
    );
  }
}
export default PureCompSample;
