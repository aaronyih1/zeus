import React from "react";
import Dashboard from "./Dashboard.js";

export default class Layout extends React.Component {
  render() {
  	const titleStyle= {
  		textTransform: 'uppercase',
  		color: '#D8D8D8',
  		fontSize:'37pt',
      paddingLeft: '55px'
  	}
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
