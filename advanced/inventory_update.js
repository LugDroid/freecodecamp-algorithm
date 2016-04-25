/*
  Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery. Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.

  Here are some helpful links:
    Global Array Object - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array]
*/

function updateInventory(arr1, arr2) {
  // add new elements to current inventory
  for (var i = 0, len2 = arr2.length; i < len2; i++) {
    var inInventory = false;
    for (var j = 0, len1 = arr1.length; j < len1; j++) {
      // if element is already in inventory update quantity
      if (arr2[i][1] === arr1[j][1]) {
        inInventory = true;
        arr1[j][0] += arr2[i][0];
      }
    }
    // if element is not in inventory
    if (!inInventory) {
      console.log(arr2[i][1] + ' is not found in current inventory');
      arr1.push(arr2[i]);
    }
  }

  // sort array alphabetically
  arr1.sort(function(a, b) {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });

  return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
