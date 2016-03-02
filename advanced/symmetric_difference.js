/*
  Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
  Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/

function sym() {
  var resultArr = [];
  // iterate over arguments array
  for (var i = 0; i < arguments.length; i++) {
    console.log("Iterating over " + arguments[i]);

    // remove duplicated elements from arrays in arguments
    var tempArray = arguments[i].filter(deleteDuplicates);

    // iterate over each array
    for (var j = 0; j < tempArray.length; j++) {
      // if element is not already in result array add it
      // if it exists delete it
      if (resultArr.indexOf(tempArray[j]) === -1) {
        resultArr.push(tempArray[j]);
      } else {
        resultArr.splice(resultArr.indexOf(tempArray[j]), 1);
      }
      console.log("Actual state of resultArr = " + resultArr);
    }
  }

  // aux function to delete duplicated elements in arrays
  function deleteDuplicates(element, index, array) {
    // if element is found in rest of array
    if (array.indexOf(element, index + 1) !== -1) {
      return false;
    }
    return true;
  }

  return resultArr;
}

console.log("[3, 5, 4] =? " + sym([1, 2, 3], [5, 2, 1, 4]));
console.log("[1, 4, 5] =? " + sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log("[1, 4, 5] =? " + sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
console.log("[7, 4, 6, 2, 3] =? " + sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
console.log("[1, 2, 4, 5, 6, 7, 8, 9] =? " + sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
