/*
  Reverse the provided string.
  You may need to turn the string into an array before you can reverse it.
  Your result must be a string.

  Here are some helpful links:
    Global String Object - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String]
    String.split() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split]
    Array.reverse() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse]
    Array.join() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join]
*/

function reverseString(str) {
  arrayString = str.split('');
  arrayString = arrayString.reverse();
  str = arrayString.join('');
  return str;
}

reverseString("hello", "");
