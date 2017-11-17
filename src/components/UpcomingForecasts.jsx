import React, { Component } from 'react';
import UpcomingForecastsItem 	from "./parts/UpcomingForecastsItem";
// import $ from 'jquery';

class UpcomingForecasts extends Component{
  render(){
  // JS

    return(
		<div id="UpcomingForecasts">
			<UpcomingForecastsItem forecast="forecast2" date="date2"/>
			<UpcomingForecastsItem forecast="forecast3" date="date3"/>
			<UpcomingForecastsItem forecast="forecast4" date="date4"/>
			<UpcomingForecastsItem forecast="forecast5" date="date5"/>
			<UpcomingForecastsItem forecast="forecast6" date="date6"/>
		</div>
    );
  }
}

export default UpcomingForecasts;