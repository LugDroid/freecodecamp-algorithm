/*
  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {

  // add dashes between words
  var regExp1 = /([a-z])([A-Z])/g;
  str = str.replace(regExp1, "$1-$2");

  // replace spaces and low dashes
  var regExp2 = /\s|_(\w)/g;
  str = str.replace(regExp2, "-$1");

  // convert string to lower case
  str = str.toLowerCase();

  return str;
}



console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap")); // should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show")); // should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh")); // should return "teletubbies-say-eh-oh".
