/*
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}. You can read about orbital periods on wikipedia. The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(inputArr) {
  var outputArr = [];

  function calcPeriod(alt) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    return Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + alt, 3) / GM));
  }

  for (var i = 0, len = inputArr.length; i < len; i++) {
    var tempObj = {};

    tempObj.name = inputArr[i].name;
    tempObj.orbitalPeriod = calcPeriod(inputArr[i].avgAlt);
    outputArr.push(tempObj);
  }

  return outputArr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
