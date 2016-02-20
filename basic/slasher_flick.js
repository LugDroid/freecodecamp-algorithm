/*
  Return the remaining elements of an array after chopping off n elements from the head.
  The head means the beginning of the array, or the zeroth index.

  Here are some helpful links:
    Array.slice() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice]
    Array.splice() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice]
*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr = arr.slice(howMany, arr.length);
  return arr;
}

slasher([1, 2, 3], 2, "");
