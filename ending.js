/*
  Check if a string (first argument) ends with the given target string (second argument).

  Here are some helpful links:
    String.substr() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr]
*/

function end(str, target) {
  if (str.substr(str.length - target.length, target.length) === target) {
    return true;
  } else {
    return false;
  }
}

end("Bastian", "n", "");
