/*
  Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
  For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

  Here are some helpful links:
    String.split() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split]
*/

function titleCase(str) {
  //auxiliary function to capitalize the first character in a given word
  function capitalize(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
  }

  // convert given string to lower case
  str = str.toLowerCase();

  // convert given string into array of words
  str = str.split(' ');

  // apply capitalize function to every element of the array
  str = str.map(capitalize);

  // convert array into string
  str = str.join(' ');

  return str;
}
titleCase("I'm a little tea pot");
