/*
  We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
  The lowest number will not always come first.

  Here are some helpful links:
    Math.max() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max]
    Math.min() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min]
    Array.reduce() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce]
*/

function sumAll(arr) {
  // sort by default sorts number as strings
  // so 10 < 5
  function compareNumbers(a, b) {
    return a - b;
  }

  arr.sort(compareNumbers);

  var sum = 0;
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }

  return sum;
}

sumAll([5, 10]);

console.log(sumAll([1, 4])); // should return 10.
console.log(sumAll([4, 1])); // should return 10.
console.log(sumAll([5, 10])); // should return 45.
console.log(sumAll([10, 5])); // should return 45.
