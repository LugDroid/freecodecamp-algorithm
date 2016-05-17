
/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.
*/

function makeFriendlyDates(arr) {

  // extract dates information
  //var initDate = arr[0].split('-');
  //var endDate = arr[1].split('-');
  var tempDate;
  var rInitDate = '';
  var rEndDate = '';
  var months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
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
  
  // fix day format
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
  
  /*
  initDate[2] = fixDayFormat(initDate[2]);
  endDate[2] = fixDayFormat(endDate[2]);

  // fix month format
  var months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  initDate[1] = months[initDate[1] - 1];
  endDate[1] = months[endDate[1] - 1];

  // add formatted information to return strings 
  // check if date range is less than a year
  if ((initDate[0] === endDate[0]) || ((endDate[0] - initDate[0] === 1) && ((endDate[1] + 12) - initDate[1] < 12))) {
    rInitDate = initDate[1] + ' ' + initDate[2] + ', ' + initDate[0];
    rEndDate = endDate[1] + ' ' + endDate[2];
  // check if date range begins in current year and span is less than a year
  } else if ((initDate[0] === '2016') && ((endDate[0] - initDate[0] === 1) && ((endDate[1] + 12) - initDate[1] < 12))) {
    rInitDate = initDate[1] + ' ' + initDate[2];
    rEndDate = endDate[1] + ' ' + endDate[2] + ', ' + endDate[0];
  } else if((initDate[0] === endDate[0]) && (initDate[1] === endDate[1])) {
    rInitDate = initDate[1] + ' ' + initDate[2] + ', ' + initDate[0];
    rEndDate = endDate[2];
  } else {
    rInitDate = initDate[1] + ' ' + initDate[2] + ', ' + initDate[0];
    rEndDate = endDate[1] + ' ' + endDate[2] + ', ' + endDate[0];
  }
  
  console.log(((endDate[0] - initDate[0] === 0) && ((endDate[1] + 12) - initDate[1] < 12)));
  console.log((endDate[1] + 12));
  */
  
  console.log(initDate);
  return [initDate, initDate];
}

console.log(makeFriendlyDates(['2016-07-01', '2016-07-04'])); // should return ["July 1st","4th"]
console.log(makeFriendlyDates(["2016-12-01", "2017-02-03"])); // should return ["December 1st","February 3rd"]
console.log(makeFriendlyDates(["2016-12-01", "2018-02-03"])); // should return ["December 1st, 2016","February 3rd, 2018"]
console.log(makeFriendlyDates(["2017-03-01", "2017-05-05"])); // should return ["March 1st, 2017","May 5th"]
console.log(makeFriendlyDates(["2018-01-13", "2018-01-13"])); // should return ["January 13th, 2018"]
console.log(makeFriendlyDates(["2022-09-05", "2023-09-04"])); // should return ["September 5th, 2022","September 4th"]
console.log(makeFriendlyDates(["2022-09-05", "2023-09-05"])); // should return ["September 5th, 2022","September 5th, 2023"]
