import React from "react";
import Dashboard from "./Dashboard.js";
import Event from "./Event.js";
import Input from "./Input.js";

export default class Days extends React.Component {
  render() {
  	const events = this.props.events;
  	const dayContainerStyle ={
  		width:'100%',
  		height: '40px',
  		backgroundColor:'grey',
  		whiteSpace: 'nowrap',
      marginBottom: '30px'
  	}
  	// const dynanicDayStyle = {
  	// 	backgroundColor: items[0].color,
  	// }
  	const EventsComponent = events.map((event)=>{
  		return <Event key={event.startTime} category={event.category} start={event.startTime} end={event.endTime} text={event.text}/>
  	});
    return (
      <div>
      	<div style={dayContainerStyle}>
      		{EventsComponent}
  	    </div>
        <Input inputStat={this.props.inputStat} />
      </div>
    );
  }
}
