// Retrieve location and data from JSON on load.
var mainIcon;
var dailyDataJson;
var iconPath;
var tempConvert = function(temp) {
  return Math.round(((temp - 32) * 5) / 9);
};

// Date format.
var now = new Date();
var minutes = now.getMinutes();
if (minutes < 10) minutes = "0" + minutes;
var date = now.toDateString() + " " + now.getHours() + ":" + minutes;

// HTML data display from JSON.
var getForecast = function(data) {
  console.log(data);
  $("#summary").html(data.currently.summary);
  $("#degree").html(tempConvert(data.currently.temperature));
  //
  // $("#degree-high").html(tempConvert(data.currently.temperature));
  // $("#degree-low").html(tempConvert(data.currently.temperature));
  //
  $("#real-feel").text(tempConvert(data.currently.apparentTemperature));
  $("#humidity").html(Math.round(data.currently.humidity * 100));
  $("#precip").html(Math.round(data.daily.data[0].precipProbability * 100));
  $("#wind-speed").html(Math.round(data.currently.windSpeed * 1.6));
  //
  $(".conv-deg").html(" &deg;F");
  $("#units").html(" mph");
  $("#wind-speed").html(Math.round(data.currently.windSpeed));
  $("#degree").html(Math.round(data.currently.temperature));
  //
  $("#degree-high").html(Math.round(data.daily.data[0].temperatureHigh));
  $("#degree-low").html(Math.round(data.daily.data[0].temperatureLow));

  //
  $("#real-feel").html(Math.round(data.currently.apparentTemperature));
  mainIcon = data.currently.icon;
  dailyDataJson = data.daily.data;

  checkIconAnimated(data.currently.icon);
  $("#main-icon").attr("src", iconPath);
  //
  dailyData();
  //
  sunriseTime = data.daily.data[0].sunriseTime;
  // console.log(sunriseTime);
  var sunriseTime = moment.unix(sunriseTime).format("LT");
  // console.log(sunriseTime);
  $("#sunriseTime").html(sunriseTime);

  /***********/
  sunsetTime = data.daily.data[0].sunsetTime;
  // console.log(sunsetTime);
  var sunsetTime = moment.unix(sunsetTime).format("LT");
  // console.log(sunsetTime);
  $("#sunsetTime").html(sunsetTime);

  //
};

// Check icon status from JSON and append the right icon.
function checkIcon(icon) {
  if (icon === "wind") {
    iconPath = "/images/weather-icons/wind.svg";
  } else if (icon === "clear-day") {
    iconPath = "/images/weather-icons/clear-day.svg";
  } else if (icon === "cloudy") {
    iconPath = "/images/weather-icons/cloudy.svg";
  } else if (icon === "clear-night") {
    iconPath = "/images/weather-icons/clear-night.svg";
  } else if (icon === "rain") {
    iconPath = "/images/weather-icons/rain.svg";
  } else if (icon === "snow") {
    iconPath = "/images/weather-icons/snow.svg";
  } else if (icon === "sleet") {
    iconPath = "/images/weather-icons/snow.svg";
  } else if (icon === "fog") {
    iconPath = "/images/weather-icons/fog.svg";
  } else if (icon === "partly-cloudy-day") {
    iconPath = "/images/weather-icons/partly-cloudy-day.svg";
  } else if (icon === "partly-cloudy-night") {
    iconPath = "/images/weather-icons/partly-cloudy-night.svg";
  } else {
    iconPath = "/images/weather-icons/clear-day.svg";
  }
}

// Check icon status from JSON and append the right icon.
// @james Find good animated icons
function checkIconAnimated(icon) {
  if (icon === "wind") {
    iconPath = "/images/weather-icons/wind.svg";
  } else if (icon === "clear-day") {
    iconPath = "/images/weather-icons/clear-day.svg";
  } else if (icon === "cloudy") {
    iconPath = "/images/weather-icons/cloudy.svg";
  } else if (icon === "clear-night") {
    iconPath = "/images/weather-icons/clear-night.svg";
  } else if (icon === "rain") {
    iconPath = "/images/weather-icons/rain.svg";
  } else if (icon === "snow") {
    iconPath = "/images/weather-icons/snow.svg";
  } else if (icon === "sleet") {
    iconPath = "/images/weather-icons/snow.svg";
  } else if (icon === "fog") {
    iconPath = "/images/weather-icons/fog.svg";
  } else if (icon === "partly-cloudy-day") {
    iconPath = "/images/weather-icons/partly-cloudy-day.svg";
  } else if (icon === "partly-cloudy-night") {
    iconPath = "/images/weather-icons/partly-cloudy-night.svg";
  } else {
    iconPath = "/images/weather-icons/clear-day.svg";
  }
}

// Display hourly temperature, icon and time dynamically.
function dailyData() {
  for (i = 0; i < dailyDataJson.length; i++) {
    checkIcon(dailyDataJson[i].icon);
    $("#daily-icon-" + i).attr("src", iconPath);
    $("#day-" + i).html(unixTimeToDay());
    $("#daily-deg-" + i).html(Math.round(dailyDataJson[i].temperatureMax));
    $("#daily-deg-min-" + i).html(Math.round(dailyDataJson[i].temperatureMin));
  }
}

function unixTimeToDay() {
  var date = new Date(dailyDataJson[i].time * 1000);
  var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return dayName[date.getDay()];
}

//
