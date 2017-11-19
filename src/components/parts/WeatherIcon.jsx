import React, { Component } from 'react';

class WeatherIcon extends Component{

  renderUserMessage(){
	if (this.props.theWeatherIcon === "0") {
		return (
			<span>
				<i className='wi wi-tornado'></i>
			</span>
		);
	} else if (this.props.theWeatherIcon === "1"){
		return (
			<span>
				<i className='wi wi-rain-wind'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "2"){
		return (
			<span>
				<i className='wi wi-tornado'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "3"){
		return (
			<span>
				<i className='wi wi-thunderstorm'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "4"){
		return (
			<span>
				<i className='wi wi-thunderstorm'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "5"){
		return (
			<span>
				<i className='wi wi-rain-mix'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "6"){
		return (
			<span>
				<i className='wi wi-rain-mix'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "7"){
		return (
			<span>
				<i className='wi wi-rain-mix'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "8"){
		return (
			<span>
				<i className='wi wi-rain-mix'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "9"){
		return (
			<span>
				<i className='wi wi-cloudy'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "10"){
		return (
			<span>
				<i className='wi wi-rain'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "11"){
		return (
			<span>
				<i className='wi wi-rain'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "12"){
		return (
			<span>
				<i className='wi wi-rain'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "13"){
		return (
			<span>
				<i className='wi wi-snow'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "14"){
		return (
			<span>
				<i className='wi wi-snow'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "15"){
		return (
			<span>
				<i className='wi wi-showers'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "16"){
		return (
			<span>
				<i className='wi wi-snow'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "17"){
		return (
			<span>
				<i className='wi wi-hail'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "18"){
		return (
			<span>
				<i className='wi wi-rain-mix'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "19"){
		return (
			<span>
				<i className='wi wi-dust'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "20"){
		return (
			<span>
				<i className='wi wi-fog'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "21"){
		return (
			<span>
				<i className='wi wi-day-haze'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "22"){
		return (
			<span>
				<i className='wi wi-smoke'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "23"){
		return (
			<span>
				<i className='wi wi-strong-wind'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "24"){
		return (
			<span>
				<i className='wi wi-strong-wind'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "25"){
		return (
			<span>
				<i className='wi wi-snowflake-cold'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "26"){
		return (
			<span>
				<i className='wi wi-cloudy'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "27"){
		return (
			<span>
				<i className='wi wi-night-cloudy'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "28"){
		return (
			<span>
				<i className='wi wi-day-cloudy'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "29"){
		return (
			<span>
				<i className='wi wi-night-cloudy'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "30"){
		return (
			<span>
				<i className='wi wi-day-cloudy'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "31"){
		return (
			<span>
				<i className='wi wi-night-clear'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "32"){
		return (
			<span>
				<i className='wi wi-day-sunny'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "33"){
		return (
			<span>
				<i className='wi wi-night-clear'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "34"){
		return (
			<span>
				<i className='wi wi-day-sunny'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "35"){
		return (
			<span>
				<i className='wi wi-hail'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "36"){
		return (
			<span>
				<i className='wi wi-hot'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "37"){
		return (
			<span>
				<i className='wi wi-storm-showers'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "38"){
		return (
			<span>
				<i className='wi wi-storm-showers'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "39"){
		return (
			<span>
				<i className='wi wi-storm-showers'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "40"){
		return (
			<span>
				<i className='wi wi-showers'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "41"){
		return (
			<span>
				<i className='wi wi-sleet'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "42"){
		return (
			<span>
				<i className='wi wi-snow'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "43"){
		return (
			<span>
				<i className='wi wi-sleet'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "44"){
		return (
			<span>
				<i className='wi wi-cloudy'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "45"){
		return (
			<span>
				<i className='wi wi-storm-showers'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "46"){
		return (
			<span>
				<i className='wi wi-snow'></i>
			</span>
		);
	}else if (this.props.theWeatherIcon === "47"){
		return (
			<span>
				<i className='wi wi-storm-showers'></i>
			</span>
		);
	} else {
		return (
			<span>
				<i className='wi wi-storm-showers'></i>
			</span>
		);
	}
  }
  render(){
    return(
      <span> 
  		{ this.renderUserMessage() }
      </span>

    );
  }
}
export default WeatherIcon;