function smallestCommons(arr) {
  // find smallest common multiple
  var scm = smallestCommonMultiple(arr[0], arr[1]);

  // create array of all numbers between arr[0] and arr[1]
  var list = [];
  if (arr[0] > arr[1]) {
    for (var i = arr[1]; i <= arr[0]; i++) {
      list.push(i);
    }
  } else {
    for (var j = arr[0]; j <= arr[1]; j++) {
      list.push(j);
    }
  }

  // divide smallest common multiple and multiples until one of them
  // is divisible between all numbers in array
  var result = 0;
  var module;
  do {
    module = 0;
    result += scm;
    // console.log(result);
    for (var k = 0; k < list.length; k++) {
      module += result % list[k] !== 0;
      // console.log(module, list[k]);
    }
  } while (module !== 0);

  return result;
}


console.log("smallestCommons([1, 5]) = 60 =? " + smallestCommons([1, 5]));
console.log("smallestCommons([5, 1]) = 60 =? " + smallestCommons([5, 1]));
console.log("smallestCommons([1, 13]) = 360360 =? " + smallestCommons([1, 13]));

function greatestCommonDivisor(a, b) {
  /*
    return the greates common divisor of a and b
    assume the numbers are ordered; a > b
  */

  if ((a % b) === 0) {
    return b;
  } else {
    return greatestCommonDivisor(b, (a % b));
  }
}

//console.log("gcd(60,48) = 12 =? " + greatestCommonDivisor(60, 48));
//console.log("gcd(56,42) = 14 =? " + greatestCommonDivisor(56, 42));
//console.log("gcd(2366,273) = 91 =? " + greatestCommonDivisor(2366, 273));

function smallestCommonMultiple(a, b) {
  /*
    return the smallest common multiple of a and b
    depends on greatestCommonDivisor()
  */
  if (a > b) {
    return ((a * b) / greatestCommonDivisor(a, b));
  } else {
    return ((a * b) / greatestCommonDivisor(b, a));
  }
}

// console.log("scm(1,5) = 5 =? " + smallestCommonMultiple(1, 5));
// console.log("scm(7,3) = 21 =? " + smallestCommonMultiple(7, 3));
// console.log("scm(50,72) = 1800 =? " + smallestCommonMultiple(50, 72));
