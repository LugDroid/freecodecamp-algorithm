/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

function permAlone(str) {
  var  permutations = [];
  
  // recursive function to generate permutations
  function generate(n, a) {
    if (n == 1) {
      permutations.push(a.join(''));
    } else {
      for (var i = 0; i < (n - 1); i++) {
        generate(n - 1, a);
        var temp;
        // if even
        if ((n % 2) === 0) {
          swap(i, n - 1);
        // if odd
        } else {
          swap(0, n - 1);
        }
      }
      generate(n - 1, a);
    }
    
    // swap elements function
    function swap(i, j) {
      var temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
  


  generate(str.length, str.split(''));
  return permutations;
}

permAlone('abc');
