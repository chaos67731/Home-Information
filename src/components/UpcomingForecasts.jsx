import React, { Component } 	from 'react';
import UpcomingForecastsItem 	from "./parts/UpcomingForecastsItem";
import $ 						from 'jquery';

const urlForUsername = weatherforecasts => `https://query.yahooapis.com/v1/public/yql?q=select+*+from+weather.forecast+where+woeid=${weatherforecasts}&format=json`

class UpcomingForecasts extends Component{

	constructor(props){
		super(props)
		this.state = {
			requestFailed: false
		}
		this.fetchWeatherResult = this.fetchWeatherResult.bind(this);
	}

	fetchWeatherResult = () => {
		// Dealing with json call
		fetch(urlForUsername(this.props.weatherforecasts))
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
	}

	componentDidMount(){
		this.fetchWeatherResult()
		setInterval(this.fetchWeatherResult, 60000) 
	}

  render(){
	// The Icons
	function ChangeTheWeatherIcon() {
	 	$('.TheIcon').each(function(i,elem) {	
			var TheWeatherIcon = $(this).data('currenticon');

			if (TheWeatherIcon === 0) {
				$(this).html("<i class='wi wi-tornado'></i>");
			}else if (TheWeatherIcon === 1) {
				$(this).html("<i class='wi wi-rain-wind'></i>");
			} else if (TheWeatherIcon === 2) {
				$(this).html("<i class='wi wi-tornado'></i>");
			} else if (TheWeatherIcon === 3) {
				$(this).html("<i class='wi wi-thunderstorm'></i>");
			} else if (TheWeatherIcon === 4) {
				$(this).html("<i class='wi wi-thunderstorm'></i>");
			} else if (TheWeatherIcon === 5) {
				$(this).html("<i class='wi wi-rain-mix'></i>");
			} else if (TheWeatherIcon === 6) {
				$(this).html("<i class='wi wi-rain-mix'></i>");
			} else if (TheWeatherIcon === 7) {
				$(this).html("<i class='wi wi-rain-mix'></i>");
			} else if (TheWeatherIcon === 8) {
				$(this).html("<i class='wi wi-rain-mix'></i>");
			} else if (TheWeatherIcon === 9) {
				$(this).html("<i class='wi wi-cloudy'></i>");
			} else if (TheWeatherIcon === 10) {
				$(this).html("<i class='wi wi-rain'></i>");
			} else if (TheWeatherIcon === 11) {
				$(this).html("<i class='wi wi-rain'></i>");
			} else if (TheWeatherIcon === 12) {
				$(this).html("<i class='wi wi-rain'></i>");
			} else if (TheWeatherIcon === 13) {
				$(this).html("<i class='wi wi-snow'></i>");
			} else if (TheWeatherIcon === 14) {
				$(this).html("<i class='wi wi-snow'></i>");
			} else if (TheWeatherIcon === 15) {
				$(this).html("<i class='wi wi-showers'></i>");
			} else if (TheWeatherIcon === 16) {
				$(this).html("<i class='wi wi-snow'></i>");
			} else if (TheWeatherIcon === 17) {
				$(this).html("<i class='wi wi-hail'></i>");
			} else if (TheWeatherIcon === 18) {
				$(this).html("<i class='wi wi-rain-mix'></i>");
			} else if (TheWeatherIcon === 19) {
				$(this).html("<i class='wi wi-dust'></i>");
			} else if (TheWeatherIcon === 20) {
				$(this).html("<i class='wi wi-fog'></i>");
			} else if (TheWeatherIcon === 21) {
				$(this).html("<i class='wi wi-day-haze'></i>");
			} else if (TheWeatherIcon === 22) {
				$(this).html("<i class='wi wi-smoke'></i>");
			} else if (TheWeatherIcon === 23) {
				$(this).html("<i class='wi wi-strong-wind'></i>");
			} else if (TheWeatherIcon === 24) {
				$(this).html("<i class='wi wi-strong-wind'></i>");
			} else if (TheWeatherIcon === 25) {
				$(this).html("<i class='wi wi-snowflake-cold'></i>");
			} else if (TheWeatherIcon === 26) {
				$(this).html("<i class='wi wi-cloudy'></i>");
			} else if (TheWeatherIcon === 27) {
				$(this).html("<i class='wi wi-night-cloudy'></i>");
			} else if (TheWeatherIcon === 28) {
				$(this).html("<i class='wi wi-day-cloudy'></i>");
			} else if (TheWeatherIcon === 29) {
				$(this).html("<i class='wi wi-night-cloudy'></i>");
			} else if (TheWeatherIcon === 30) {
				$(this).html("<i class='wi wi-day-cloudy'></i>");
			} else if (TheWeatherIcon === 31) {
				$(this).html("<i class='wi wi-night-clear'></i>");
			} else if (TheWeatherIcon === 32) {
				$(this).html("<i class='wi wi-day-sunny'></i>");
			} else if (TheWeatherIcon === 33) {
				$(this).html("<i class='wi wi-night-clear'></i>");
			} else if (TheWeatherIcon === 34) {
				$(this).html("<i class='wi wi-day-sunny'></i>");
			} else if (TheWeatherIcon === 35) {
				$(this).html("<i class='wi wi-hail'></i>");
			} else if (TheWeatherIcon === 36) {
				$(this).html("<i class='wi wi-hot'></i>");
			} else if (TheWeatherIcon === 37) {
				$(this).html("<i class='wi wi-storm-showers'></i>");
			} else if (TheWeatherIcon === 38) {
				$(this).html("<i class='wi wi-storm-showers'></i>");
			} else if (TheWeatherIcon === 39) {
				$(this).html("<i class='wi wi-storm-showers'></i>");
			} else if (TheWeatherIcon === 40) {
				$(this).html("<i class='wi wi-showers'></i>");
			} else if (TheWeatherIcon === 41) {
				$(this).html("<i class='wi wi-sleet'></i>");
			} else if (TheWeatherIcon === 42) {
				$(this).html("<i class='wi wi-snow'></i>");
			} else if (TheWeatherIcon === 43) {
				$(this).html("<i class='wi wi-sleet'></i>");
			} else if (TheWeatherIcon === 44) {
				$(this).html("<i class='wi wi-cloudy'></i>");
			} else if (TheWeatherIcon === 45) {
				$(this).html("<i class='wi wi-storm-showers'></i>");
			} else if (TheWeatherIcon === 46) {
				$(this).html("<i class='wi wi-snow'></i>");
			} else if (TheWeatherIcon === 47) {
				$(this).html("<i class='wi wi-storm-showers'></i>");
			} else{
				$(this).html("<i class='wi wi-snow'></i>");
			}
		});
	}
	$(function() {
		ChangeTheWeatherIcon();
	});
	setInterval(function() { ChangeTheWeatherIcon(); }, 10000);

	if(this.state.requestFailed) return <p>Failed...</p>
	if(!this.state.weatherData) return <p>Loading...</p>
    return(
		<div id="UpcomingForecasts">
			<UpcomingForecastsItem forecastsInfoz={this.state.weatherData.item.forecast[1]} forecastsday="1"/>
			<UpcomingForecastsItem forecastsInfoz={this.state.weatherData.item.forecast[2]} forecastsday="2"/>
			<UpcomingForecastsItem forecastsInfoz={this.state.weatherData.item.forecast[3]} forecastsday="3"/>
			<UpcomingForecastsItem forecastsInfoz={this.state.weatherData.item.forecast[4]} forecastsday="4"/>
			<UpcomingForecastsItem forecastsInfoz={this.state.weatherData.item.forecast[5]} forecastsday="5"/>
		</div>
    );
  }
}

export default UpcomingForecasts;