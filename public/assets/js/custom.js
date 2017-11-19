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


/*  
	Calendar
	\src\components\CalendarView.js
*/ 
if (CalndUse === "fullCalendar") {
	$(function(){
		// Calendar 1
		$('#calendar1').fullCalendar({
			defaultView: 'listMonth',
			allDayText: 'All Day',

			eventRender: function(event, element, view) {
				var eventEnd = moment(event.end);
				var NOW = moment().subtract(6, 'hours');
				if (eventEnd.diff(NOW, 'seconds') <= 0) {
					return false;
				}
			},
			googleCalendarApiKey: CalndAPI,
			events: {
				googleCalendarId: CalndID
			}		                
		});
		// Calendar 1
	    // Calendar 2
			$('#calendar2').fullCalendar({
				defaultView: 'listMonth',
				allDayText: 'All Day',

				defaultDate: moment().add(1, 'months').endOf('month'),
				googleCalendarApiKey: CalndAPI,
				events: {
					googleCalendarId: CalndID
				}
			});
	    // Calendar 2
	});
	// Reload Both Calendars Every 15 mins
	$(function(){
		setInterval(oneSecondFunction, 900000);
		// setInterval(oneSecondFunction, 5000);
	});
	function oneSecondFunction() {
		$('#calendar1').fullCalendar( 'refetchEvents' );
		$('#calendar2').fullCalendar( 'refetchEvents' );
	}

	function showpanel() {
		var TheFuckingDate = moment().format('YYYY-M-DD');

		$('.fc-list-heading').each(function(){
			if ($(this).data('date') < TheFuckingDate) {
				$(this).addClass('calendarHide');
			}
		});
	}
	setInterval(showpanel, 30000)


 }else{




// Demo Calendar 
$(function() {
	var todayDate = moment().startOf('day');
	var YM = todayDate.format('YYYY-MM');
	var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
	var TODAY = todayDate.format('YYYY-MM-DD');
	var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

	$('#calendar1').fullCalendar({
		defaultView: 'listMonth',
		allDayText: 'All Day',
		
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay,listWeek'
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		navLinks: true,
		events: [
			{
				title: 'All Day Event',
				url: '',
				start: YM + '-01'
			},
			{
				title: 'Long Event',
				url: '',
				start: YM + '-07',
				end: YM + '-10'
			},
			{
				id: 999,
				title: 'Repeating Event',
				url: '',
				start: YM + '-09T16:00:00'
			},
			{
				id: 999,
				title: 'Repeating Event',
				url: '',
				start: YM + '-16T16:00:00'
			},
			{
				title: 'Conference',
				url: '',
				start: YESTERDAY,
				end: TOMORROW
			},
			{
				title: 'Meeting',
				url: '',
				start: TODAY + 'T10:30:00',
				end: TODAY + 'T12:30:00'
			},
			{
				title: 'Lunch',
				url: '',
				start: TODAY + 'T12:00:00'
			},
			{
				title: 'Meeting',
				url: '',
				start: TODAY + 'T14:30:00'
			},
			{
				title: 'Happy Hour',
				url: '',
				start: TODAY + 'T17:30:00'
			},
			{
				title: 'Dinner',
				url: '',
				start: TODAY + 'T20:00:00'
			},
			{
				title: 'Birthday Party',
				url: '',
				start: TOMORROW + 'T07:00:00'
			},
			{
				title: 'Click for Google',
				url: '',
				url: 'http://google.com/',
				start: YM + '-28'
			}
		]
	});
});

 }