import React from "react";
import Dashboard from "./Dashboard.js";


export default class Event extends React.Component {
  render() {
  	console.log(this.props.bgcolor);
  	const eventStyle = {
  		backgroundColor: this.props.bgcolor,
  		width: '200px',
  		height: '100%',
  		display: 'inline-block'
  	}
    return (
      <div style={eventStyle}></div>
    );
  }
}
