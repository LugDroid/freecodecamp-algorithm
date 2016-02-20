/*
  Return an English translated sentence of the passed binary string.
  The binary string will be space separated.

  Here are some helpful links:
      String.charCodeAt() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt]
      String.fromCharCode() - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode]
*/

function binaryAgent(str) {
  var arr = str.split(" ");

  // replace each element for its ASCII code
  for (var i = 0; i < arr.length; i++) {
    arr[i] = String.fromCharCode(binaryToDecimal(arr[i]));
  }

  return arr.join("");
}

/*
  Return a converted decimal value.
  The binary string will be a valid binary number.
*/

function binaryToDecimal(strBin) {
  strBin = strBin.split("");

  var decValue = 0;
  for (var i = 0; i < strBin.length; i++) {
    if (strBin[i] == 1) {
      decValue += Math.pow(2, (strBin.length - i - 1));
    }
  }

  return decValue;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); //should return "Aren't bonfires fun!?"

console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")); //should return "I love FreeCodeCamp!"
