/*
  Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

  Here are some helpful links:
    Global String Object - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String]
*/

function repeat(str, num) {
  if (num < 0) {
    return '';
  } else {
    var newStr = '';
    while (num > 0) {
      newStr += str;
      num--;
    }
    return newStr;
  }
}

console.log(repeat("casa", -2));
console.log(repeat("home, 0"));
repeat("abc", 3, "");
