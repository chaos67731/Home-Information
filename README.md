## npm install 
## npm start 
## npm run build  
## npm pack 
 
There is a settings file that you will need to edit, to get the right weather and connect your Google Calendar.  If you do not, it will show the weather for Las Vegas and it is using dummy data for the Calendar. 
 
``` 
\public\settings.js 
``` 
 
### Weather  
* Go here https://www.yahoo.com/news/weather 
* Change locatio  
* After the page updates, your numbers should be at the end of the URL
* Update weathernow and weatherforecasts in /src/Appjs
  * By default it is set to "12795450"
 
### Google Calendar 
* Follow the steps on this page from fullcalendar 
  * https://fullcalendar.io/docs/google_calendar/  
* In the settings.js file, make sure you change this var ```CalndUse``` to fullCalendar when you are ready to use fullcalendar.io 
 
 
 
 
--- Change Log --- 
 

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
* Moved footer count down to react  
* Started using versions  
 
 
**1.0.0** 
* Built this in HTML  
 
 
 
## Screenshot If You Want to See It 
![Alt text](/public/assets/img/screenshot.png) 
 
 