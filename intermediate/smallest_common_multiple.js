/*
  Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily be in numerical order.
*/

function smallestCommons(arr) {
  var a, b;
  // order numbers from array
  if (arr[0] > arr[1]) {
    a = arr[0];
    b = arr[1];
  } else {
    a = arr[1];
    b = arr[0];
  }

  // the smallest common multiple can be find if we know the greatest common divisor
  var scm = (a * b) / greatestCommonDivisor(a, b);

  // find every number between a and b
  var numbersBetween = [];
  for (var i = b; i <= a; i++) {
    numbersBetween.push(i);
  }
  console.log(numbersBetween);
  // check if smallest common multiple is divisible for them
  var divisible = true;
  for (var j = 0; j < numbersBetween.length; j++) {
    if (!scm % numbersBetween[j] === 0) {
      divisible = false;
    }
  }

  console.log(divisible);
  return scm;
}

console.log("smallestCommons(1, 5) = 5 =? " + smallestCommons([1,5]));
console.log("smallestCommons(72, 50) = 1800 =? " + smallestCommons([72, 50]));

function greatestCommonDivisor(a, b) {
  /*
    return greatest common divisor of given numbers
    assume given numbers are ordered (a > b)
  */
  if ((a % b) === 0) {
    return (b);
  } else {
    return greatestCommonDivisor(b, (a % b));
  }
}

// console.log("greatestCommonDivisor(60, 48) = 12 =? " + greatestCommonDivisor(60, 48));
// console.log("greatestCommonDivisor(56, 42) = 14 =? " + greatestCommonDivisor(56, 42));
// console.log("greatestCommonDivisor(50, 72) = 2 =? " + greatestCommonDivisor(50, 72));
