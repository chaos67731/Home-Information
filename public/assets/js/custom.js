/**
	Refreash the page at midnight and noon - Just to clan up cache
	* Maybe not needed
**/
	function refreshAt(hours, minutes, seconds) {
		var now = new Date();
		var then = new Date();
		if(now.getHours() > hours ||
		(now.getHours() == hours && now.getMinutes() > minutes) ||
		now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
			then.setDate(now.getDate() + 1);
		}
		then.setHours(hours);
		then.setMinutes(minutes);
		then.setSeconds(seconds);

		var timeout = (then.getTime() - now.getTime());
		setTimeout(function() { window.location.reload(true); }, timeout);
	}
	refreshAt(24,00,0);
	refreshAt(14,11,0);


 

 function LoadCleanCalendarzzz () {    
    formatGoogleCalendar.init({
        calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/'+ CalndID +'/events?orderBy=startTime&singleEvents=true&key=' + CalndAPI ,
        past: false,
        upcoming: true,
        sameDayTimes: true,
        pastTopN: 20,
        recurringEvents: true,
        sameDayTimes: true,
        dayNames: true,
    	upcomingSelector: '#events-upcoming',
        itemsTagName: 'li',
        format: ['*date*', '*time*','*summary*'],
        timeMin: moment().subtract(12, 'hours').format(),
        timeMax: moment().add(3, 'months').format()
    });
}

$(function () {
	LoadCleanCalendarzzz();
    setInterval(LoadCleanCalendarzzz, 15000);
});




function LoadCleanCalendar () {
 	var productIds={};
	$('#events-upcoming li').each(function(){
	    var prodId = $(this).attr('data-productid');
	    if(productIds[prodId]){
	       $(this).addClass("EventsStack");
	    }else{
	       productIds[prodId] = true;
	    }
	});
}	

$(function () {
	LoadCleanCalendar();
    setInterval(LoadCleanCalendar, 500);
});
