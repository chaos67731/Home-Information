### Works On Windows
This has been tested on Windows with NPM...  Want to test it on a Mac for me? 

Let me know how it goes! 

## Demo
> https://chaos67731.github.io/Home-Information/


##Usage
### `npm install` 
>This installs the needed modules

### `npm start` 
> Starts the local server, you can view the site at `http://localhost:3000/`

### `npm run build`
> Makes a build folder that holds the files that you can deploy to your server

### `npm pack` 
> This packs up the files in a zip file for you. 

 


## Setting Up
##### Below are the steps to set up your weather and calendar.
#### Weather  
* Go here https://www.yahoo.com/news/weather 
* Change location  
* After the page updates, your numbers should be at the end of the URL
* Update weathernow and weatherforecasts in /src/App.js
  * By default it is set to "12795450"
 
#### Google Calendar 
* Set your Google Calendar to be public 
  * https://calendar.google.com/calendar/r
*  Copy the Calendar ID 
   *   It will look something like this `duv2qiavgjlin85csle7s7megk@group.calendar.google.com`
* Get Google Calendar API Key 
  * https://developers.google.com/maps/documentation/javascript/get-api-key
* Change the Calendar ID and API Key in the following file
  * `\public\settings.js`

 
 
 
 
## Change Log

 **1.3.4** 
* Removing old js/scss files
* Updating jQuery from v2.1.4 to v3.2.1

 **1.3.3** 
* Update Calendar... Again.. 
    * Using `https://github.com/MilanLund/FormatGoogleCalendar`
    * Modified code a bit to better fit the needs of this project

 **1.3.2** 
* Calendar gets rebuilt every hour.
    * Not to happy with the way this is being done. but for now, it works (\js\custom.js:26)
* Crypto was moved back to using jquery / removing fetch 
* Changed the countdown to X-Mas


 **1.3.1** 
* Rebuild Calendar

 **1.2.0** 
* Rebuild Upcoming Forecasts Section  
  * Remove the need for weather.js 
  * Call and update Yahoo Weather API every 60 seconds 


**1.1.9** 
* Rebuild Top Weather Section (CurrentWeather) 
  * Remove the need for weather.js 
  * Call and update Yahoo Weather API every 60 seconds 
 
 
**1.1.8** 
* Rebuild Crypto sections  
 
**1.1.7** 
* Removed unused images  
* Moved Google Calendar API and Weather setting to /app\public\settings.js 
 * By default Weather is set to Las Vegas 
 * By default Calendar is using dummy information  
 
**1.1.6** 
* Cleaned up Quote List (Still needs to be better) 
* Removed calling for js files and made files jsx... Whatever the point to that is... 
 
**1.1.5** 
* Moved Header to react  
* Moved footer countdown to react  
* Started using versions  
 
 
**1.0.0** 
* Built this in HTML  
 
 
 
## Screenshot If You Want to See It 
![Alt text](/public/assets/img/screenshot.png) 