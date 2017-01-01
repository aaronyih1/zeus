import React from "react";
import Dashboard from "./Dashboard.js";
import Timeline from "./Timeline.js";
import Days from "./Days.js";

export default class Calendar extends React.Component {
  render() {
    const items = this.props.items;
    console.log(items);
  	const timelineStyle = {
  		height: '4px',
  		width: '100%',
  		backgroundColor: 'lightgrey'
  	}
  	const circleStyle = {
  		width:'20px',
  		height: '20px',
  		backgroundColor: 'lightgrey',
  		borderRadius: '50%',
  		position: 'relative',
  		top: '-8px',
  		left: '90%',
  		display: 'inline-block'
  	}
  	const leaveAt={
  		left: '70%'
  	}
    const DaysComponent = items.map((event)=>{
      return <Days key={event.date} events={event.events}/>
    });
    return (
      <div>
        <Timeline />
        { DaysComponent }
      </div>
    );
  }
}
