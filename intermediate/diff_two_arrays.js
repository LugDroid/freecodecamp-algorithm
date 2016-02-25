/*
  Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

  Here are some helpful links:
    Array.slice() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice]
    Array.filter() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter]
    Array.indexOf() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf]
    Array.concat() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat]
*/

function diff(arr1, arr2) {
  // callback function for arr.filter()
  // when called this function will return a new function with the array to compare with inside of it
  // when this returned function is called from arr.filter(), it receives the value parameter of arr
  // and compares it with the array already in the body of the callback function
  function callback(arr) {
    return function notInArray(value) {
      var result = true;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
          result = false;
        }
      }
      return result;
    };
  }

  // create temp arrays
  var newArr1 = [];
  var newArr2 = [];
  var resultArr = [];

  // get elements from second array not present inside first array
  newArr1 = arr1.filter(callback(arr2));
  // get elements from first array not present inside second array
  newArr2 = arr2.filter(callback(arr1));
  // concatenate two result arrays
  resultArr = newArr1.concat(newArr2);

  return resultArr;
}

console.log(diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return ["pink wool"].
console.log(diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return ["diorite", "pink wool"].
console.log(diff(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); // should return [].
console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return [4].
console.log(diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); // should return ["piglet", 4].
console.log(diff([], ["snuffleupagus", "cookie monster", "elmo"])); // should return ["snuffleupagus", "cookie monster", "elmo"].
console.log(diff([1, "calf", 3, "piglet"], [7, "filly"])); // should return [1, "calf", 3, "piglet", 7, "filly"].
