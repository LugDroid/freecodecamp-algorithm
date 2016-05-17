
/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.
*/

function makeFriendlyDates(arr) {

  var tempDate;
  var rInitDate = '';
  var rEndDate = '';
  var months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // FUNCTION - fix day format
  function fixDayFormat(day) {
    day = parseInt(day);
    switch (day) {
      case 1:
      day += 'st';
      break;
      case 2:
      day += 'nd';
      break;
      case 3:
      day += 'rd';
      break;
      default:
      day += 'th';
    }
    return day;
  }
  // FUNCTION - check if date span is less than a year
  function isLessThanYear(initDate, returnDate) {
    if (initDate.numYear === endDate.numYear) {
      return true;
    } else if ((initDate.numYear + 1 === endDate.numYear) && ((endDate.numMonth + 12) - initDate.numMonth <= 12)) {
      return true;
    } else {
     return false;
    }
  }

  // create date objects with provided info
  tempDate = arr[0].split('-');
  var initDate = {
    numDay: parseInt(tempDate[2]),
    numMonth: parseInt(tempDate[1]),
    numYear: parseInt(tempDate[0]),
    strDay: fixDayFormat(tempDate[2]),
    strMonth: months[tempDate[1] - 1],
    strYear: tempDate[0]
  };
  tempDate = arr[1].split('-');
  var endDate = {
    numDay: parseInt(tempDate[2]),
    numMonth: parseInt(tempDate[1]),
    numYear: parseInt(tempDate[0]),
    strDay: fixDayFormat(tempDate[2]),
    strMonth: months[tempDate[1] - 1],
    strYear: tempDate[0]
  };

  // add month to formatted strings
  rInitDate = initDate.strMonth;
  rEndDate = ((initDate.numMonth === endDate.numMonth)? '' : endDate.strMonth);

  // add day
  rInitDate += ' ' + initDate.strDay;
  rEndDate += (((initDate.numYear === endDate.numYear) &&
                (initDate.numMonth === endDate.numMonth) &&
                (initDate.numDay === endDate.numMonth))? '' : ' ' + endDate.strDay);

  // add year
  rInitDate += (((initDate.numYear === 2016) && (isLessThanYear(initDate, endDate)))? '' : ', ' + initDate.strYear);
  rEndDate += (isLessThanYear(initDate, endDate)? '' : ', ' + endDate.strYear);

  return [rInitDate, rEndDate];
}

console.log(makeFriendlyDates(['2016-07-01', '2016-07-04'])); // should return ["July 1st","4th"]
console.log(makeFriendlyDates(["2016-12-01", "2017-02-03"])); // should return ["December 1st","February 3rd"]
console.log(makeFriendlyDates(["2016-12-01", "2018-02-03"])); // should return ["December 1st, 2016","February 3rd, 2018"]
console.log(makeFriendlyDates(["2017-03-01", "2017-05-05"])); // should return ["March 1st, 2017","May 5th"]
console.log(makeFriendlyDates(["2018-01-13", "2018-01-13"])); // should return ["January 13th, 2018"]
console.log(makeFriendlyDates(["2022-09-05", "2023-09-04"])); // should return ["September 5th, 2022","September 4th"]
console.log(makeFriendlyDates(["2022-09-05", "2023-09-05"])); // should return ["September 5th, 2022","September 5th, 2023"]
