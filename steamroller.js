/*
  Flatten a nested array. You must account for varying levels of nesting.

  Here are some helpful links:
      Array.isArray()
*/

function steamroller(arr) {
  var flattenedArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flattenedArray = flattenedArray.concat(arr[i]);
    } else {
      flattenedArray = flattenedArray.concat(steamroller(arr[i]));
    }
  }

  return flattenedArray;
}

console.log(steamroller([1, 2, 3, [4, 5]]));
console.log(steamroller(["a", ["b", "c"], "d", ["e", ["f", "g"]]]));
console.log(steamroller([]));
console.log(steamroller([[0, [[[[[[[[[[[[[[1, 2, 3]]]]]]]]]]], 4]]]]]));
