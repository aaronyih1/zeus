import React from "react";
import Dashboard from "./Dashboard.js";


export default class Event extends React.Component {
  render() {
    const width = (((this.props.end - this.props.start)/86400000)*100) + "%";
    const color = sortColor(this.props.category);
    const text = this.props.text
    function sortColor(category){
      switch(category){
        case "health":
          return("#D8495B");
        case "work":
          return("#5C92D1");
        case "love":
          return("#2CAF38");
        case "play":
          return("#FFB438")
        default :
          return("black");
      };
    }
  	const eventStyle = {
  		backgroundColor: color,
  		width: width,
  		height: '100%',
  		display: 'inline-block',
      overflow: 'hidden'
  	}
    return (
      <div style={eventStyle}>{text}</div>
    );
  }
}
