import React from "react";
import Dashboard from "./Dashboard.js";

export default class Timeline extends React.Component {
  render() {
    const time = [];
    for(var i = 0; i<= 24; i++){
      time.push(i*100);
    }
    const Hours = time.map((hour) => {
      return <td key = {hour}>{hour}</td>;
    });
    const tableStyle = {
      width: '100%',
      marginTop:'100px'
    }
    return (
      <div> 
        <table style={tableStyle}>
          <tbody>
            <tr>
              {Hours}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
