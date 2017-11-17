(function() {
	'use strict';
	// https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
	// USER EDITABLE LINES - Change these to match your location and preferences!

	// Your Yahoo WOEID code
	// Find your WOEID code at http://zourbuth.com/tools/woeid/
	var woeid = WeatherLocation;
	// var woeid = 2436704;


	
	// Your temperature unit measurement
	// This bit is simple, 'c' for Celcius, and 'f' for Fahrenheit
	var unit = 'f';
	
	// Format for date and time
	var formatTime = 'h:mm:ss a'
	var formatDate = 'dddd, MMMM Do'

	// Yahoo! query interval (milliseconds)
	// Default is every 15 minutes. Be reasonable. Don't query Yahoo every 500ms.
	var waitBetweenWeatherQueriesMS = 900000;

	// You're done!
	function resolveTemp(temp) {
		if (unit === 'c' || unit === 'C') {
			temp = '' + Math.round((parseInt(temp) - 32) / 1.8);
		}
		temp += '&deg;'
		return temp;
	}

	function fillCurrently(currently) {
		// var icon = $('#currently .icon');
		// var desc = $('#currently .desc');
		// var temp = $('#currently .temp');

		// // Insert the current details. Icons may be changed by editing the icons array.
		// if (icon.length) {
		// 	icon.html(icons[currently.code]);
		// }
		// if (desc.length) {
		// 	desc.html(currently.text);
		// }
		// if (temp.length) {
		// 	temp.html(resolveTemp(currently.temp));
		// }
	}

	function fillForecast(day, forecast) {
		// Choose one of the five forecast cells to fill
		var forecastCell = '#forecast' + day + ' ';
		var day = $(forecastCell + '.day');
		var date = $(forecastCell + '.date');
		var icon = $(forecastCell + '.icon');
		var desc = $(forecastCell + '.desc');
		var high = $(forecastCell + '.high');
		var low = $(forecastCell + '.low');

		// If this is the first cell, call it "Today" instead of the day of the week
		if (day.length) {
			if (day === 1) {
				day.html('Today');
			} else {
				day.html(forecast.day);
			}
		}

		// Insert the forecast details. Icons may be changed by editing the icons array.
		if (icon.length) {
			icon.html(icons[forecast.code]);
		}
		if (desc.length) {
			desc.html(forecast.text);
		}
		if (date.length) {
			date.html(forecast.date);
		}
		if (high.length) {
			high.html(resolveTemp(forecast.high));
		}
		if (low.length) {
			low.html(resolveTemp(forecast.low));
		}
	}

	function WeatherMain(wind) {
		if ($('.WindSpeed').length) {
			$('.WindSpeed').html(wind);
		}
	}
	function WeatherMainChill(chill) {
		if ($('.windchill').length) {
			$('.windchill').html(chill + '&deg;');
		}
	}

	function WeatherMainSunRise(sunrise) {
		// Fix Yahoo Weather Bug
		var sunriseNew = sunrise;
		for(var i in sunriseNew)
		{
			if (/^\d{1,2}\:\d{1}\s/.test( sunriseNew ))
			{
				var value = /^\d{1,2}(\:\d)\s/.exec(sunriseNew)[1];
				sunriseNew = sunriseNew.replace( value, ':0' + value.substr(1) )
			}
		}
		// Fix Yahoo Weather Bug

		if ($('#Sunrise').length) {
			$('#Sunrise').html(sunriseNew);
		}
	}

	function WeatherMainSunSet(sunset) {
		if ($('#Sunset').length) {
			$('#Sunset').html(sunset);
		}
	}

	function WeatherMainDirection(Direction) {

		var WeatherMainDirectionNum = Direction;
 		// var WeatherMainDirectionNum = 215;


		if (WeatherMainDirectionNum>"022.5" && WeatherMainDirectionNum<"067.5"){
			var WindDir = "North East";
		}else if (WeatherMainDirectionNum>"067.5" && WeatherMainDirectionNum<"112.5"){
			var WindDir = "East";
		}else if (WeatherMainDirectionNum>"112.5" && WeatherMainDirectionNum<"157.5"){
			var WindDir = "South East";
		}else if (WeatherMainDirectionNum>"157.5" && WeatherMainDirectionNum<"202.5"){
			var WindDir = "South";
		}else if (WeatherMainDirectionNum>"202.5" && WeatherMainDirectionNum<"247.5"){
			var WindDir = "South West";
		}else if (WeatherMainDirectionNum>"247.5" && WeatherMainDirectionNum<"292.5"){
			var WindDir = "West";
		}else if (WeatherMainDirectionNum>"292.5" && WeatherMainDirectionNum<"337.5"){
			var WindDir = "North West";
		}else{
			var WindDir = "North"; 
		}

	 	if ($('#Direction').length) {
			// $('#Direction').html(WindDir);
		}
			// console.log(WindDir);
			// console.log(Direction);
	}

	function queryYahoo() {
		$.ajax({
			type: 'GET',
			url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D' + woeid + '&format=json',
			dataType: 'json'
		}).done(function (result) {
			// Drill down into the returned data to find the relevant weather information
			result = result.query.results.channel.item;

			fillCurrently(result.condition);
			fillForecast(1, result.forecast[0]);
			fillForecast(2, result.forecast[1]);
			fillForecast(3, result.forecast[2]);
			fillForecast(4, result.forecast[3]);
			fillForecast(5, result.forecast[4]);
			fillForecast(6, result.forecast[5]);
		}).then(function (resulttop) {
			resulttop = resulttop.query.results.channel;

			WeatherMain(resulttop.wind.speed);
			WeatherMainChill(resulttop.wind.chill);
			WeatherMainDirection(resulttop.wind.direction);
			WeatherMainSunRise(resulttop.astronomy.sunrise);
			WeatherMainSunSet(resulttop.astronomy.sunset);
		});
	}

	function queryYahooStuff() {
	}
	// Fallback icons - Do not edit. Icons should be edited in your current skin.
	// Fallback icons are from the weather icons pack on github at https://github.com/erikflowers/weather-icons
	// Position in array corresponds to Yahoo! Weather's condition code, which are commented below in plain English
	if (!icons) {
		var icons = [
			'<i class="wi wi-tornado"></i>',			//tornado
			'<i class="wi wi-rain-wind"></i>',			//tropical storm
			'<i class="wi wi-tornado"></i>',			//hurricane
			'<i class="wi wi-thunderstorm"></i>',		//severe thunderstorms
			'<i class="wi wi-thunderstorm"></i>',		//thunderstorms
			'<i class="wi wi-rain-mix"></i>',			//mixed rain and snow
			'<i class="wi wi-rain-mix"></i>',			//mixed rain and sleet
			'<i class="wi wi-rain-mix"></i>',			//mixed snow and sleet
			'<i class="wi wi-rain-mix"></i>',			//freezing drizzle
			'<i class="wi wi-cloudy"></i>',				//drizzle
			'<i class="wi wi-rain"></i>',				//freezing rain
			'<i class="wi wi-rain"></i>',				//showers
			'<i class="wi wi-rain"></i>',				//showers
			'<i class="wi wi-snow"></i>',				//snow flurries
			'<i class="wi wi-snow"></i>',				//light snow showers
			'<i class="wi wi-showers"></i>',			//blowing snow
			'<i class="wi wi-snow"></i>',				//snow
			'<i class="wi wi-hail"></i>',				//hail
			'<i class="wi wi-rain-mix"></i>',			//sleet
			'<i class="wi wi-dust"></i>',				//dust
			'<i class="wi wi-fog"></i>',				//foggy
			'<i class="wi wi-day-haze"></i>',			//haze
			'<i class="wi wi-smoke"></i>',				//smoky
			'<i class="wi wi-strong-wind"></i>',		//blustery
			'<i class="wi wi-strong-wind"></i>',		//windy
			'<i class="wi wi-snowflake-cold"></i>',		//cold
			'<i class="wi wi-cloudy"></i>',				//cloudy
			'<i class="wi wi-night-cloudy"></i>',		//mostly cloudy (night)
			'<i class="wi wi-day-cloudy"></i>',			//mostly cloudy (day)
			'<i class="wi wi-night-cloudy"></i>',		//partly cloudy (night)
			'<i class="wi wi-day-cloudy"></i>',			//partly cloudy (day)
			'<i class="wi wi-night-clear"></i>',		//clear (night)
			'<i class="wi wi-day-sunny"></i>',			//sunny
			'<i class="wi wi-night-clear"></i>',		//fair (night)
			'<i class="wi wi-day-sunny"></i>',			//fair (day)
			'<i class="wi wi-hail"></i>',				//mixed rain and hail
			'<i class="wi wi-hot"></i>',				//hot
			'<i class="wi wi-storm-showers"></i>',		//isolated thunderstorms
			'<i class="wi wi-storm-showers"></i>',		//scattered thunderstorms
			'<i class="wi wi-storm-showers"></i>',		//scattered thunderstorms
			'<i class="wi wi-showers"></i>',			//scattered showers
			'<i class="wi wi-sleet"></i>',				//heavy snow
			'<i class="wi wi-snow"></i>',				//scattered snow showers
			'<i class="wi wi-sleet"></i>',				//heavy snow
			'<i class="wi wi-cloudy"></i>',				//partly cloudy
			'<i class="wi wi-storm-showers"></i>',		//thundershowers
			'<i class="wi wi-snow"></i>',				//snow showers
			'<i class="wi wi-storm-showers"></i>'		//isolated thundershowers
		];
	}

	$(function() {
		// Fetch the weather data for right now
		queryYahoo();
		queryYahooStuff();
		// Query Yahoo! at the requested interval for new weather data
		setInterval(function() {
			queryYahoo();
			queryYahooStuff();
		}, waitBetweenWeatherQueriesMS);

		// Set the current time and date on the clock
		if ($('#time').length) {
			$('#time').html(moment().format(formatTime));
		}
		if ($('#date').length) {
			$('#date').html(moment().format(formatDate));
		}

		// Refresh the time and date every second
		setInterval(function(){
			if ($('#time').length) {
				$('#time').html(moment().format(formatTime));
			}
			if ($('#date').length) {
				$('#date').html(moment().format(formatDate));
			}
		}, 1000);
	});
}());
