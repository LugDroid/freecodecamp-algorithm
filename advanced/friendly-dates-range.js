
/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.
*/

function makeFriendlyDates(arr) {

  // extract dates information
  var initDate = arr[0].split('-');
  var endDate = arr[1].split('-');

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
  initDate[2] = fixDayFormat(initDate[2]);
  endDate[2] = fixDayFormat(endDate[2]);

  // fix month format
  var months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  initDate[1] = months[initDate[1] - 1];
  endDate[1] = months[endDate[1] - 1];

  // // add formatted information to return strings
  // var initFriendlyDate = initDate[1] + ' ' + fixDayFormat(initDate[2]);
  // if ((initYear != 2016) || (initYear != endYear)) {
  //   initFriendlyDate += ', ' + initYear;
  // }
  // var endFriendlyDate = '';
  // if (initMonth != endMonth) {
  //   endFriendlyDate += endMonth + ' ';
  // }
  // endFriendlyDate += fixDayFormat(endDay);
  // if (initYear != endYear) {
  //   endFriendlyDate += ', ' + endYear;
  // }
  // arr = [initFriendlyDate, endFriendlyDate];

  return [initDate.join(' '), endDate.join(' ')];
}

console.log(makeFriendlyDates(['2016-07-01', '2016-07-04'])); // should return ["July 1st","4th"]
console.log(makeFriendlyDates(["2016-12-01", "2017-02-03"])); // should return ["December 1st","February 3rd"]
console.log(makeFriendlyDates(["2016-12-01", "2018-02-03"])); // should return ["December 1st, 2016","February 3rd, 2018"]
console.log(makeFriendlyDates(["2017-03-01", "2017-05-05"])); // should return ["March 1st, 2017","May 5th"]
console.log(makeFriendlyDates(["2018-01-13", "2018-01-13"])); // should return ["January 13th, 2018"]
console.log(makeFriendlyDates(["2022-09-05", "2023-09-04"])); // should return ["September 5th, 2022","September 4th"]
console.log(makeFriendlyDates(["2022-09-05", "2023-09-05"])); // should return ["September 5th, 2022","September 5th, 2023"]
