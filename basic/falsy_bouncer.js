/*
  Remove all falsy values from an array.
  Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

  Here are some helpful links:
    Boolean Objects - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean]
    Array.filter() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter]
*/

function bouncer(arr) {
  function lookForFalsy(element, index, array) {
    var result = Boolean(element);
    return result;
  }
  return arr.filter(lookForFalsy);
}

bouncer([7, "ate", "", false, 9], "");
