import React from "react";
import Dashboard from "./Dashboard.js";
import Event from "./Event.js";

export default class Days extends React.Component {
  render() {
  	const items = [{
  		"id": 1,
  		"text": "thing1",
  		"color": "red",
  		"duration": "100px",
  	},
  	{
  		"id": 2,
  		"text": "thing2",
  		"color": "blue",
  		"duration": "600px",
  	}];
  	const dayContainerStyle ={
  		width:'100%',
  		height: '40px',
  		backgroundColor:'grey',
  		whiteSpace: 'nowrap'
  	}
  	const dynanicDayStyle = {
  		backgroundColor: items[0].color,
  	}
  	const EventsComponent = items.map((event)=>{
  		console.log(event.color);
  		return <Event key={Date.now()} bgcolor={event.color}/>
  	});
    return (
    	<div style={dayContainerStyle}>
    		{EventsComponent}
	    </div>
    );
  }
}
