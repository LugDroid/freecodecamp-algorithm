/*
  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
  A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
  Write a function which takes a ROT13 encoded string as input and returns a decoded string.
  All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

  Here are some helpful links:
    String.charCodeAt() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt]
    String.fromCharCode() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode]
*/

function rot13(str) { // LBH QVQ VG!
  var decrypted = "";

  for (var i = 0; i < str.length; i++) {
    // get ascii code
    var asciiCode = str.charCodeAt(i);

    // check if character is uppercase letter
    if ((asciiCode >= 65) && (asciiCode <= 90)) {
      // move to 0 index
      asciiCode = asciiCode - 65;
      // decrypt character
      decryptedChar = (String.fromCharCode(((asciiCode + 13) % 26) + 65));
    } else {
      // if character isn't uppercase letter don't change it
      decryptedChar = str[i];
    }

    // create decrypted string
    decrypted = decrypted.concat(decryptedChar);
  }
 return decrypted;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
