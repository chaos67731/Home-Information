/**
 * Format Google Calendar JSON output into human readable list
 *
 * Copyright 2015, Milan Kacurak
 *
 */
var formatGoogleCalendar = (function () {
    'use strict';
    var config;
    //Gets JSON from Google Calendar and transfroms it into html list items and appends it to past or upcoming events list
    var init = function (settings) {
        var result = [];
        config = settings;
        //Get JSON, parse it, transform into list items and append it to past or upcoming events list
        jQuery.getJSON(settings.calendarUrl, function (data) {
            // Remove any cancelled events
            data.items.forEach(function removeCancelledEvents(item) {
                if (item && item.hasOwnProperty('status') && item.status !== 'cancelled') {
                    result.push(item);
                }
            });
            result.sort(comp).reverse();
            var pastCounter = 0
                , upcomingCounter = 0
                , pastResult = []
                , upcomingResult = []
                , upcomingResultTemp = []
                , $upcomingElem = jQuery(settings.upcomingSelector)
                , $pastElem = jQuery(settings.pastSelector)
                , i;
            if (settings.pastTopN === -1) {
                settings.pastTopN = result.length;
            }
            if (settings.upcomingTopN === -1) {
                settings.upcomingTopN = result.length;
            }
            if (settings.past === false) {
                settings.pastTopN = 0;
            }
            if (settings.upcoming === false) {
                settings.upcomingTopN = 0;
            }
            for (i in result) {
                if (isPast(result[i].end.dateTime || result[i].end.date)) {
                    if (pastCounter < settings.pastTopN) {
                        pastResult.push(result[i]);
                        pastCounter++;
                    }
                }
                else {
                    upcomingResultTemp.push(result[i]);
                }
            }
            upcomingResultTemp.reverse();
            for (i in upcomingResultTemp) {
                if (upcomingCounter < settings.upcomingTopN) {
                    upcomingResult.push(upcomingResultTemp[i]);
                    upcomingCounter++;
                }
            }
            for (i in pastResult) {
                $pastElem.append(transformationList(pastResult[i], settings.itemsTagName, settings.format));
            }
            for (i in upcomingResult) {
                $upcomingElem.append(transformationList(upcomingResult[i], settings.itemsTagName, settings.format));
            }
            if ($upcomingElem.children().length !== 0) {
                jQuery(settings.upcomingHeading).insertBefore($upcomingElem);
            }
            if ($pastElem.children().length !== 0) {
                jQuery(settings.pastHeading).insertBefore($pastElem);
            }
        });
        
    };
    //Compare dates
    var comp = function (a, b) {
        return new Date(a.start.dateTime || a.start.date).getTime() - new Date(b.start.dateTime || b.start.date).getTime();
    };
    //Overwrites defaultSettings values with overrideSettings and adds overrideSettings if non existent in defaultSettings
    var mergeOptions = function (defaultSettings, overrideSettings) {
        var newObject = {}
            , i;
        for (i in defaultSettings) {
            newObject[i] = defaultSettings[i];
        }
        for (i in overrideSettings) {
            newObject[i] = overrideSettings[i];
        }
        return newObject;
    };
    var isAllDay = function (dateStart, dateEnd) {
        var dateStartFormatted = getDateFormatted(dateStart)
            , dateEndFormatted = getDateFormatted(dateEnd);
        //if start date is midnight and the end date a following day midnight as well
        if ((dateStartFormatted.getTime() === dateEndFormatted.getTime() - 86400000) && dateStartFormatted.getMinutes() === 0 && dateStartFormatted.getHours() === 0) {
            return true;
        }
        return false;
    };
    //Get all necessary data (dates, location, summary, description) and creates a list item
    var transformationList = function (result, tagName, format) {
        var dateStart = getDateInfo(result.start.dateTime || result.start.date)
            , dateEnd = getDateInfo(result.end.dateTime || result.end.date)
            , moreDaysEvent = (typeof result.end.date !== 'undefined')
            , dayNames = config.dayNames
            , isAllDayEvent = isAllDay(dateStart, dateEnd);
        if (moreDaysEvent) {
            dateStart = addOneDay(dateStart);
        }else{
            var cleanDateStart = dateStart.toString().replace(',', '');
            var cleanDateStart1 = cleanDateStart.replace(',', '');
            var cleanDateStart2 = cleanDateStart1.split(',')[0];
            var cleanDateEnd = dateEnd.toString().replace(',', '');
            var cleanDateEnd1 = cleanDateEnd.replace(',', '');
            var cleanDateEnd2 = cleanDateEnd1.split(',')[0];
        }
        if (isAllDayEvent) {
            dateEnd = subtractOneMinute(dateEnd);
        }else{
            var cleanDateStart = dateStart.toString().replace(',', '');
            var cleanDateStart1 = cleanDateStart.replace(',', '');
            var cleanDateStart2 = cleanDateStart1.split(',')[0];
            var cleanDateEnd = dateEnd.toString().replace(',', '');
            var cleanDateEnd1 = cleanDateEnd.replace(',', '');
            var cleanDateEnd2 = cleanDateEnd1.split(',')[0];            
        }
        var dateFormatted = getFormattedDate(dateStart, dateEnd, moreDaysEvent, isAllDayEvent, dayNames)
            , output = '<li class="CalListItem"' + 'data-productid=' + cleanDateStart2 + cleanDateEnd2 +'>'
            , summary = result.summary || ''
            , description = result.description || ''
            , location = result.location || ''
            , i;
        for (i = 0; i < format.length; i++) {
            format[i] = format[i].toString();
            if (format[i] === '*summary*') {
                output = output.concat('<span class="summary">' + summary + '</span> </div>');
            }
            else if (format[i] === '*date*') {
                output = output.concat('<span class="date">' + dateFormatted + '</span>');
            }
            else if (format[i] === '*time*') {
                output = output.concat('<div class="wraptimeSummary"> <span class="time">' + dateFormatted + '</span>');
            }
            else if (format[i] === '*description*') {
                output = output.concat('<span class="description">' + description + '</span>');
            }
            else if (format[i] === '*location*') {
                output = output.concat('<span class="location">' + location + '</span>');
            }
            else {
                if ((format[i + 1] === '*location*' && location !== '') || (format[i + 1] === '*summary*' && summary !== '') || (format[i + 1] === '*date*' && dateFormatted !== '') || (format[i + 1] === '*description*' && description !== '')) {
                    output = output.concat(format[i]);
                }
            }
        }
        return output + '</' + tagName + '>';
    };
    //Check if date is later then now
    var isPast = function (date) {
        var compareDate = new Date(date)
            , now = new Date();
        if (now.getTime() > compareDate.getTime()) {
            return true;
        }
        return false;
    };
    //Get temp array with information abou day in followin format: [day number, month number, year, hours, minutes]
    var getDateInfo = function (date) {
        date = new Date(date);
        return [date.getDate(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes(), 0, 0];
    };
    //Get month name according to index
    var getMonthName = function (month) {
        var monthNames = [
            'January', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '
        ];
        return monthNames[month];
    };
    var getDayName = function (day) {
        var dayNames = [
          '<span class=ThezDayz>Sunday</span>', '<span class=ThezDayz>Monday</span>', '<span class=ThezDayz>Tuesday</span>', '<span class=ThezDayz>Wednesday</span>', '<span class=ThezDayz>Thursday</span>', '<span class=ThezDayz>Friday</span>', '<span class=ThezDayz>Saturday</span>'
      ];
        return dayNames[day];
    };
    var getDayNameFormatted = function (dateFormatted) {
        return getDayName(getDateFormatted(dateFormatted).getDay()) + ' ';
    };
    var getDateFormatted = function (dateInfo) {
        return new Date(dateInfo[2], dateInfo[1], dateInfo[0], dateInfo[3], dateInfo[4] + 0, 0);
    };
    //Subtract one day
    var subtractOneDay = function (dateInfo) {
        var date = getDateFormatted(dateInfo);
        date.setTime(date.getTime() - 86400000);
        return getDateInfo(date) ;
    };
    //Subtract one minute
    var subtractOneMinute = function (dateInfo) {
        var date = getDateFormatted(dateInfo);
        date.setTime(date.getTime() - 60000);
        return getDateInfo(date);
    };
    //Transformations for formatting date into human readable format
    var formatDateSameDay = function (dateStart, dateEnd, moreDaysEvent, isAllDayEvent, dayNames) {
        var formattedTime = ''
            , dayNameStart = '';
        if (dayNames) {
            dayNameStart = getDayNameFormatted(dateStart);
        }
        if (config.sameDayTimes && !moreDaysEvent && !isAllDayEvent) {
            formattedTime = ' <span class="theTime"> ' + getFormattedTime(dateStart) + ' - ' + getFormattedTime(dateEnd) + '</span>';
        }else{
            formattedTime = ' <span class="theTime"> ' + ' All Day' + '</span>';
        }

        //month day, year time-time
        return  '<span class=CalMonths>' + getMonthName(dateStart[1]) + ' ' + dateStart[0] + ' , ' + dateStart[2] + formattedTime + '</span>' + '<span class=ThisDayz>' + dayNameStart + '</span>' ;
    };
    var formatDateOneDay = function (dateStart, dayNames) {
        var dayName = '';
        if (dayNames) {
            dayName = getDayNameFormatted(dateStart);
        }
        //month day, year
        return dayName + getMonthName(dateStart[1]) + ' ' + dateStart[0] + ' , ' + dateStart[2];
    };
    var formatDateDifferentDay = function (dateStart, dateEnd, dayNames) {
        var dayNameStart = ''
            , dayNameEnd = '';
        if (dayNames) {
            dayNameStart = getDayNameFormatted(dateStart);
            dayNameEnd = getDayNameFormatted(dateEnd);
        }
        //month day-day, year
        return '<span class=CalMonths>' + getMonthName(dateStart[1]) + dateStart[0] + ' / ' +  dateEnd[0] + ' , ' + dateStart[2] + '</span>' + '<span class=ThisDayz>' +  dayNameStart + ' - ' + dayNameEnd + '</span>';
    };
    var formatDateDifferentMonth = function (dateStart, dateEnd, dayNames) {
        var dayNameStart = ''
            , dayNameEnd = '';
        if (dayNames) {
            dayNameStart = getDayNameFormatted(dateStart);
            dayNameEnd = getDayNameFormatted(dateEnd);
        }
        //month day - month day, year
        return dayNameStart + getMonthName(dateStart[1]) + ' ' + dateStart[0] + ' - ' + dayNameEnd + getMonthName(dateEnd[1]) + ' ' + dateEnd[0] + ' , ' + dateStart[2];
    };
    var formatDateDifferentYear = function (dateStart, dateEnd, dayNames) {
        var dayNameStart = ''
            , dayNameEnd = '';
        if (dayNames) {
            dayNameStart = getDayNameFormatted(dateStart);
            dayNameEnd = getDayNameFormatted(dateEnd);
        }
        //month day, year - month day, year
        return dayNameStart + getMonthName(dateStart[1]) + ' ' + dateStart[0] + ' , ' + dateStart[2] + ' - ' + dayNameEnd + getMonthName(dateEnd[1]) + ' ' + dateEnd[0] + ' , ' + dateEnd[2];
    };
    //Check differences between dates and format them
    var getFormattedDate = function (dateStart, dateEnd, moreDaysEvent, isAllDayEvent, dayNames) {
        var formattedDate = '';
        if (dateStart[0] === dateEnd[0]) {
            if (dateStart[1] === dateEnd[1]) {
                if (dateStart[2] === dateEnd[2]) {
                    //month day, year
                    formattedDate = formatDateSameDay(dateStart, dateEnd, moreDaysEvent, isAllDayEvent, dayNames);
                }
                else {
                    //month day, year - month day, year
                    formattedDate = formatDateDifferentYear(dateStart, dateEnd, dayNames);
                }
            }
            else {
                if (dateStart[2] === dateEnd[2]) {
                    //month day - month day, year
                    formattedDate = formatDateDifferentMonth(dateStart, dateEnd, dayNames);
                }
                else {
                    //month day, year - month day, year
                    formattedDate = formatDateDifferentYear(dateStart, dateEnd, dayNames);
                }
            }
        }
        else {
            if (dateStart[1] === dateEnd[1]) {
                if (dateStart[2] === dateEnd[2]) {
                    //month day-day, year
                    formattedDate = formatDateDifferentDay(dateStart, dateEnd, dayNames);
                }
                else {
                    //month day, year - month day, year
                    formattedDate = formatDateDifferentYear(dateStart, dateEnd, dayNames);
                }
            }
            else {
                if (dateStart[2] === dateEnd[2]) {
                    //month day - month day, year
                    formattedDate = formatDateDifferentMonth(dateStart, dateEnd, dayNames);
                }
                else {
                    //month day, year - month day, year
                    formattedDate = formatDateDifferentYear(dateStart, dateEnd, dayNames);
                }
            }
        }
        return formattedDate;
    };
    var getFormattedTime = function (date) {
        var formattedTime = ''
            , period = 'am'
            , hour = date[3]
            , minute = date[4];
        // Handle afternoon.
        if (hour >= 12) {
            period = 'pm';
            if (hour >= 13) {
                hour -= 12;
            }
        }
        // Handle midnight.
        if (hour === 0) {
            hour = 12;
        }
        // Ensure 2-digit minute value.
        minute = (minute < 10 ? '0' : '') + minute;
        // Format time.
        formattedTime = hour + ':' + minute + period;
        return formattedTime;
    };
    //Add one day
    var addOneDay = function (dateInfo) {
        var date = getDateFormatted(dateInfo);
        date.setTime(date.getTime() + 86400000);
        return getDateInfo(date);
    };
    return {
        init: function (settingsOverride) {
            var settings = {
                past: true
                , upcoming: true
                , upcomingTopN: -1
                , pastSelector: '#events-past'
                , format: ['*date*', ': ', '*summary*', ' &mdash; ', '*description*', ' in ', '*location*']
            };
            settings = mergeOptions(settings, settingsOverride);
            init(settings);
        }
    };
})();