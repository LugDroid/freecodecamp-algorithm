/*
  Return the length of the longest word in the provided sentence.
  Your response should be a number.

  Here are some helpful links:
    String.split() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split]
    String.length - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length]
*/

function findLongestWord(str) {
  // Split string into array of words
  array = str.split(" ");
  console.log(array);
  // Copy first word of array into new string
  str = array[0];
  // iterate over array comparing word lengths
  for (var i = 1; i < array.length; i++) {
    if (array[i].length > str.length) {
      str = array[i];
    }
  }
  console.log(str);
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
