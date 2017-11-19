import React, { Component } from 'react';
import Moment 				from 'react-moment';
import WeatherIcon 			from "./WeatherIcon";

class UpcomingForecastsItem extends Component{
  render(){
    return(
		<div className="TheForecast">
			<div className="TheForecastDate">
				 <Moment add={{ days: this.props.forecastsday}} format="ddd MMM Do"></Moment>
			</div>
			<div className="TheIcon THISZWeatherIcon">
				<WeatherIcon theWeatherIcon={this.props.forecastsInfoz.code}/>
			</div>
			<div className="TheDesc">
				{this.props.forecastsInfoz.text}
			</div>
			<div className="ThehighTemp ThelowTemp">
				<span className="Thehigh">
					{this.props.forecastsInfoz.high}°
				</span> 
					<span> / </span>
				<span className="Thelow">
					{this.props.forecastsInfoz.low}°
				</span>
			</div>
		</div>
    );
  }
}

export default UpcomingForecastsItem;