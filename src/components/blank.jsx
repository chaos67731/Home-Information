import React, { Component } from 'react';

class Projects extends Component{
  render(){
  	// js
	function HideShowWeather() {
	}
	$(function() {
		HideShowWeather();
	});
	setInterval(function() { HideShowWeather(); }, 1000);

	// console log
    console.log('Things ran');
    return(
      <div className="Projects"> 
        My Projects
        <br />
        <b>{this.props.test}</b>
      </div>

    );
  }
}

export default Projects;