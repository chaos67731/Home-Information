function refreshAt(e,t,a){var n=new Date,s=new Date;(n.getHours()>e||n.getHours()==e&&n.getMinutes()>t||n.getHours()==e&&n.getMinutes()==t&&n.getSeconds()>=a)&&s.setDate(n.getDate()+1),s.setHours(e),s.setMinutes(t),s.setSeconds(a);var o=s.getTime()-n.getTime();setTimeout(function(){window.location.reload(!0)},o)}function LoadCleanCalendar(){$("#events-upcoming").empty(),formatGoogleCalendar.init({calendarUrl:"https://www.googleapis.com/calendar/v3/calendars/"+CalndID+"/events?orderBy=startTime&singleEvents=true&key="+CalndAPI,past:!1,upcoming:!0,sameDayTimes:!0,pastTopN:20,recurringEvents:!0,sameDayTimes:!0,dayNames:!0,upcomingTopN:15,pastTopN:1,upcomingSelector:"#events-upcoming",pastSelector:"#events-past",itemsTagName:"li",format:["*date*","*time*","*summary*"],timeMin:moment().subtract(12,"days").format(),timeMax:moment().add(3,"months").format()})}function LoadCleanCalendarClean(){var e={};$("#events-upcoming li").each(function(){var t=$(this).attr("data-productid");e[t]?$(this).addClass("EventsStack"):(e[t]=!0,$(this).addClass("EventsStackNOT"))})}refreshAt(24,0,0),refreshAt(14,11,0),$(function(){LoadCleanCalendar(),setInterval(LoadCleanCalendar,36e5)}),$(function(){LoadCleanCalendarClean(),setInterval(LoadCleanCalendarClean,500)}),function(e,t,a){var n,s=e.getElementsByTagName(t)[0];e.getElementById(a)||(n=e.createElement(t),n.id=a,n.src="https://weatherwidget.io/js/widget.min.js",s.parentNode.insertBefore(n,s))}(document,"script","weatherwidget-io-js");