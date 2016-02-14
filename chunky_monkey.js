/*
  Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

  Here are some helpful links:
    Array.push() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push]
    Array.slice() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice]
*/

function chunk(arr, size) {
  var splitArr = [];
  for (var i = 0; i < arr.length; i = i + size) {
    var tempArr = [];
    for (var j = 0; j < size; j++) {
      if (i + j < arr.length) {
        tempArr.push(arr[i + j]);
      }
    }
    splitArr.push(tempArr);
  }
  return splitArr;
}

console.log(chunk([0, 1, 2, 3, 4, 5], 5));
chunk(["a", "b", "c", "d"], 2, "");
