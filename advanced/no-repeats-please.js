/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

function permAlone(str) {
  // split string into array of characters
  var arr = str.split('');

  // generate all possible permutations
  generate(arr.length, arr);
  return arr;
}

function generate(n, a) {
  if (n == 1) {
    console.log(a);
    return;
  } else {
    for (var i = 0; i < (n - 1); i++) {
      generate(n - 1, a);
      var temp;
      // if even
      if ((n % 2) == 0) {
        temp = a[i];
        a[i] = a[n - 1];
        a[n - 1] = temp;
      // if odd
      } else {
        temp = a[0];
        a[0] = a[n - 1];
        a[n - 1] = temp;
      }
    }
    generate(n - 1, a);
  }
}

permAlone('abc');
