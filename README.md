## Demo

> https://chaos67731.github.io/Home-Information/

## Usage

> xcode-select --install

> npm install

> gem install middleman

> bundle install

> middleman server

# Start Style SASS

> npm run start

## IF you have problems with "middleman server" try

> bundle exec middleman server

# Build

///// middleman
middleman build
middleman build --verbose

# Use this one

bundle exec middleman build

## Setting Up

##### Below are the steps to set up your weather and calendar.

#### Weather

- Join https://darksky.net/dev
- Get API Key
- Go to /data/site.json
- find darksky_api_key
- Enter darksky API Key

##### Get longitude @ latitude

- https://www.latlong.net/
- Go to /data/site.json
- Enter Needed Information
- darksky_longitude
- darksky_latitude

#### Google Calendar

- Set your Google Calendar to be public
  - https://calendar.google.com/calendar/r
- Copy the Calendar ID
  - It will look something like this `duv2qiavgjlin85csle7s7megk@group.calendar.google.com`
- Get Google Calendar API Key
  - https://developers.google.com/maps/documentation/javascript/get-api-key
- Change the Calendar ID and API Key in the following file

  - `\data\site.json`

  `"calendar_API": "AIzaSyDXwY5XKNCh5Vxk3hPZ9cczEPX1sWmal94",`
  `"calendar_ID": "duv2qiavgjlin85csle7s7megk@group.calendar.google.com"`

## Change Log

**2.1.0**

- The move to MiddleManApp is done
- Trying to make all of the settings in the `\data\site.json`

**2.0.0**

- Moving away from React - A project like this does not need the headace of React
- Moving to MiddleManApp

**1.3.4**

- Removing old js/scss files
- Updating jQuery from v2.1.4 to v3.2.1

  **1.3.3**

- Update Calendar... Again..

  - Using `https://github.com/MilanLund/FormatGoogleCalendar`
  - Modified code a bit to better fit the needs of this project

  **1.3.2**

- Calendar gets rebuilt every hour.
  - Not to happy with the way this is being done. but for now, it works (\js\custom.js:26)
- Crypto was moved back to using jquery / removing fetch
- Changed the countdown to X-Mas

**1.3.1**

- Rebuild Calendar

  **1.2.0**

- Rebuild Upcoming Forecasts Section
  - Remove the need for weather.js
  - Call and update Yahoo Weather API every 60 seconds

**1.1.9**

- Rebuild Top Weather Section (CurrentWeather)
  - Remove the need for weather.js
  - Call and update Yahoo Weather API every 60 seconds

**1.1.8**

- Rebuild Crypto sections

**1.1.7**

- Removed unused images
- Moved Google Calendar API and Weather setting to /app\public\settings.js
- By default Weather is set to Las Vegas
- By default Calendar is using dummy information

**1.1.6**

- Cleaned up Quote List (Still needs to be better)
- Removed calling for js files and made files jsx... Whatever the point to that is...

**1.1.5**

- Moved Header to react
- Moved footer countdown to react
- Started using versions

**1.0.0**

- Built this in HTML

## Screenshot If You Want to See It

![Alt text](/data/screenshot.png)
