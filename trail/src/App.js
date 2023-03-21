import React, { Component } from "react";
import newfn from "./newfn";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTextValue: "",
      inputTextValue1:"",
    };
  }
  inputFieldHandler = (event) => {
    this.setState({ inputTextValue: event.target.value });
  };
  inputFieldHandler1=(event)=>{
    this.setState({inputTextValue1:event.target.value})
  }
  render() {
    
    return (
      <div>
        The full Name is : {this.state.inputTextValue +" "+ this.state.inputTextValue1}
        <br />
        Enter the First name<br/>
        <input type={"text"} onBlur={this.inputFieldHandler} />
        <br />
        Enter the Second Name<br/>
        <input type={"text"} onBlur={this.inputFieldHandler1}/>
        <button>click</button>
        <newfn
         propsValue={this.inputTextValue}
         propsValue1={this.inputTextValue1}

         />
      </div>
    );
  }
}
