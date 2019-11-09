function checkIcon(e){iconPath="wind"===e?"/images/weather-icons/wind.svg":"clear-day"===e?"/images/weather-icons/clear-day.svg":"cloudy"===e?"/images/weather-icons/cloudy.svg":"clear-night"===e?"/images/weather-icons/clear-night.svg":"rain"===e?"/images/weather-icons/rain.svg":"snow"===e?"/images/weather-icons/snow.svg":"sleet"===e?"/images/weather-icons/snow.svg":"fog"===e?"/images/weather-icons/fog.svg":"partly-cloudy-day"===e?"/images/weather-icons/partly-cloudy-day.svg":"partly-cloudy-night"===e?"/images/weather-icons/partly-cloudy-night.svg":"/images/weather-icons/clear-day.svg"}function checkIconAnimated(e){iconPath="wind"===e?"/images/weather-icons/wind.svg":"clear-day"===e?"/images/weather-icons/clear-day.svg":"cloudy"===e?"/images/weather-icons/cloudy.svg":"clear-night"===e?"/images/weather-icons/clear-night.svg":"rain"===e?"/images/weather-icons/rain.svg":"snow"===e?"/images/weather-icons/snow.svg":"sleet"===e?"/images/weather-icons/snow.svg":"fog"===e?"/images/weather-icons/fog.svg":"partly-cloudy-day"===e?"/images/weather-icons/partly-cloudy-day.svg":"partly-cloudy-night"===e?"/images/weather-icons/partly-cloudy-night.svg":"/images/weather-icons/clear-day.svg"}function dailyData(){for(i=0;i<dailyDataJson.length;i++)checkIcon(dailyDataJson[i].icon),$("#daily-icon-"+i).attr("src",iconPath),$("#day-"+i).html(unixTimeToDay()),$("#daily-deg-"+i).html(Math.round(dailyDataJson[i].temperatureMax)),$("#daily-deg-min-"+i).html(Math.round(dailyDataJson[i].temperatureMin))}function unixTimeToDay(){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(1e3*dailyDataJson[i].time).getDay()]}var mainIcon,dailyDataJson,iconPath,tempConvert=function(e){return Math.round(5*(e-32)/9)},now=new Date,minutes=now.getMinutes();minutes<10&&(minutes="0"+minutes);var date=now.toDateString()+" "+now.getHours()+":"+minutes,getForecast=function(e){console.log(e),$("#summary").html(e.currently.summary),$("#degree").html(tempConvert(e.currently.temperature)),$("#real-feel").text(tempConvert(e.currently.apparentTemperature)),$("#humidity").html(Math.round(100*e.currently.humidity)),$("#precip").html(Math.round(100*e.daily.data[0].precipProbability)),$("#wind-speed").html(Math.round(1.6*e.currently.windSpeed)),$(".conv-deg").html(" &deg;F"),$("#units").html(" mph"),$("#wind-speed").html(Math.round(e.currently.windSpeed)),$("#degree").html(Math.round(e.currently.temperature)),$("#degree-high").html(Math.round(e.daily.data[0].temperatureHigh)),$("#degree-low").html(Math.round(e.daily.data[0].temperatureLow)),$("#real-feel").html(Math.round(e.currently.apparentTemperature)),mainIcon=e.currently.icon,dailyDataJson=e.daily.data,checkIconAnimated(e.currently.icon),$("#main-icon").attr("src",iconPath),dailyData(),a=e.daily.data[0].sunriseTime;var a=moment.unix(a).format("LT");$("#sunriseTime").html(a),t=e.daily.data[0].sunsetTime;var t=moment.unix(t).format("LT");$("#sunsetTime").html(t)};