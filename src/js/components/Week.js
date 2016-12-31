import React from "react";
import Dashboard from "./Dashboard.js";
import Days from "./Days.js";

export default class Week extends React.Component {
  render() {
  	const dayContainerStyle ={
  		width:'100%',
  		height: '40px',
  		backgroundColor:'grey'
  	}
    return (
      <div> 
        <Days />
      </div>
    );
  }
}
