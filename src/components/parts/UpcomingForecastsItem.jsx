import React, { Component } from 'react';

class UpcomingForecastsItem extends Component{
  render(){
  	// js
    return(
		<div className="forecast" id={this.props.forecast}>
			<div className="forcastDate" id={this.props.date}></div>
			<div className="icon"></div>
			<div className="desc"></div>
			<div className="highTemp lowTemp"><span className="high"></span> / <span className="low"></span></div>
		</div>
    );
  }
}

export default UpcomingForecastsItem;