/*
  You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

  Here are some helpful links:
    Arguments object - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments]
    Array.filter() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter]
*/

function destroyer(arr) {
  var newArr = [];
  // iterate over array (first argument)
  for (var i = 0; i < arr.length; i++) {

    var mantain = true;

    // compare rest of arguments with every element of main array
    for (var j = 1; j < arguments.length; j++) {
      if (arguments[j] === arr[i]) {
        mantain = false;
      }
    }

    // if they aren´t the same add element to new array
    if (mantain === true) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
