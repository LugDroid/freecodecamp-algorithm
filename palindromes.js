/*
  Return true if the given string is a palindrome. Otherwise, return false.
  A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
  You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

  Here are some helpful links:
    String.replace() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace]
    String.toLowerCase() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase]
*/

function palindrome(str) {
  // clean original string
  str = str.replace(/\/| |,|\.|_|-|:|\(|\)/gi, '').toLowerCase();
  console.log(str);
  // Make copy and reverse
  strCopy = str;
  array = strCopy.split('');
  array = array.reverse();
  strCopy = array.join('');
  console.log(strCopy);
  // compare original string with copy
  if (str === strCopy)
    return true;
  else
    return false;
}



palindrome("eye");
palindrome("not a palindrome");
palindrome("0_0 (: /-\ :) 0-0")
palindrome("A man, a plan, a canal. Panama");
