import React from "react";
import Dashboard from "./Dashboard.js";

export default class Header extends React.Component {
  render() {
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

    return (
      <div> 
      	<h3>It's time for (Insert action here) at (insert location here)</h3>
      	<div style ={timelineStyle}> 
      		<div style={circleStyle}>
      			<p>(insert location) <br/> eta (insert eta)</p>
      		</div>
      		<div style={{...circleStyle, ...leaveAt}}>
      			<p>(insert location) <br/> eta (insert eta)</p>
      		</div>
      	</div>
      </div>
    );
  }
}
