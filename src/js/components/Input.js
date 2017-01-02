import React from "react";
import Dashboard from "./Dashboard.js";

export default class Input extends React.Component {
  render() {
    const show ={
      display:'inline'
    }
    const hidden={
      display:'none'
    }
    console.log(this.props.inputStat);
    return (
    	<div style={(this.props.inputStat) ? show : hidden}>
        <input type="text" />
        <button type="button">health</button>
        <button type="button">work</button>
        <button type="button">love</button>
        <button type="button">play</button>
	    </div>
    );
  }
}
