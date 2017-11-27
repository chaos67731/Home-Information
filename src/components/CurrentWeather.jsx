import React, { Component } from 'react';
import WeatherIcon 			from "./parts/WeatherIcon";
import WindDirection 		from "./parts/WindDirection";

import $ 					from 'jquery';

const urlForUsername = weathernow => `https://query.yahooapis.com/v1/public/yql?q=select+*+from+weather.forecast+where+woeid=${weathernow}&format=json`

class CurrentWeather extends Component {

	constructor(props){
		super(props)
		this.state = {
			requestFailed: false
		}
		this.fetchWeatherResult = this.fetchWeatherResult.bind(this);
	}

	fetchWeatherResult = () => {
		// Dealing with json call
		fetch(urlForUsername(this.props.weathernow))
			.then(response =>{
				if(!response.ok){
					throw Error("Network request failed")
				}
				return response
			})
			.then(d => d.json())
			.then(d => {
				this.setState({
					weatherData: d['query'].results.channel
				})
			},() => {
				this.setState({
					requestFailed: true
				})
			})
		// Dealing With Weather Icon
	}

	componentDidMount(){
		this.fetchWeatherResult()
		setInterval(this.fetchWeatherResult, 60000) 
	}

  render(){
  	// jQuery
  	function HideShowWeather() {
  		// Hide Wind Chilld if current temp is the same or above 
		if($('.js-CurrentWeatherTemp').html() === $('.js-CurrentWeatherWindChill').html()){
			$("#TheWindChill").hide();
		}else if($('.js-CurrentWeatherTemp').html() < $('.js-CurrentWeatherWindChill').html()){
			$("#TheWindChill").hide();
		}else{
			$("#TheWindChill").show();
		}

		// Hide wind info if below 5mph
		if($('#CurrentWeatherSide .TheWindSpeed').html() === "1" || 
		   $('#CurrentWeatherSide .TheWindSpeed').html() === "2" || 
		   $('#CurrentWeatherSide .TheWindSpeed').html() === "3" || 
		   $('#CurrentWeatherSide .TheWindSpeed').html() === "4" || 
		   $('#CurrentWeatherSide .TheWindSpeed').html() === "5"){
			$("#CurrentWeatherSide .Speed").hide();
		}else{
			$("#CurrentWeatherSide .Speed").show();
		}		
	}

	$(function() {
		HideShowWeather();
	});
	setInterval(function() { HideShowWeather(); }, 5000);
	// End jQuery
	
	// if(this.state.requestFailed) return(
	// 	<div id="CurrentWeather">
	// 		<div id="TheCurrentWeather">
	// 			<center>
	// 				<h2>
	// 					<br />
	// 					Something Went wrong.... 
	// 					<br />
	// 					Did you forget to pay the internet bill??
	// 				</h2>					
	// 			</center>
	// 		</div>
	// 	</div>
	// );
	if(!this.state.weatherData) return <p>Loading...</p>

    return(
	<div id="CurrentWeather">

		<div id="TheCurrentWeather">
			<div className="CurrentlyItem" id="CurrentIcon">
				<div className="icon" id="WeatherIcon" data-currenticon={this.state.weatherData.item.condition.code}>
					<WeatherIcon theWeatherIcon={this.state.weatherData.item.condition.code}/>
				</div>
				<div className="desc">
					{this.state.weatherData.item.condition.text}
				</div>
			</div>
			<div className="CurrentlyItem" id="CurrentTemp">
				Curent <span className="temp">
					<span className="js-CurrentWeatherTemp">{this.state.weatherData.item.condition.temp}</span>°
				</span>
				<div id="TheWindChill">
					Windchill: <span className="js-CurrentWeatherWindChill">{this.state.weatherData.wind.chill}</span>°
				</div>	
			</div>
			<div className="CurrentlyItem" id="CurrentWeatherSide">
				<div className="highTemp"><b>High</b> <span className="high">{this.state.weatherData.item.forecast[0].high}°</span></div>
				<div className="lowTemp"><b>Low</b> <span className="low">{this.state.weatherData.item.forecast[0].low}°</span></div>
				<div className="Speed">
					<b>Wind</b> <span className="TheWindSpeed">{this.state.weatherData.wind.speed}</span> <small>mph</small>
					<small id="TheDirection" data-direction={this.state.weatherData.wind.direction}>
						<WindDirection theWindDirection={this.state.weatherData.wind.direction}/>
					</small>
				</div>
			</div>	
		</div>
		<div id="TheRiseSet">
			<div className="RiseSetItem TheSunrise">Sunrise {this.state.weatherData.astronomy.sunrise}</div>
			<div className="RiseSetItem TheSunset">Sunset {this.state.weatherData.astronomy.sunset}</div>
		</div>
	</div>
    );
  }
}

export default CurrentWeather;