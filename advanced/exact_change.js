/*
Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Here are some helpful links:

    Global Object - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object]
*/

function drawer(price, cash, cid) {
  // calculate change due
  var change = cash - price;

  // calculate total amount of cid
  cidTotal = 0;
  for (var i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1];
  }

  // fix float number of decimal values
  cidTotal = cidTotal.toFixed(2);

  // return change
  if (change == cidTotal) {
    return "Closed";
  } else {
    // return change in coins and bills
    var changeDue = [
      ["ONE HUNDRED", 0.00],
      ["TWENTY", 0.00],
      ["TEN", 0.00],
      ["FIVE", 0.00],
      ["ONE", 0.00],
      ["QUARTER", 0.00],
      ["DIME", 0.00],
      ["NICKEL", 0.00],
      ["PENNY", 0.00]
    ];

    while (change > 0) {
      if ((change >= 100) && (cid[8][1] > 0)) {
        changeDue[0][1] += 100;
        change -= 100;
        cid[8][1] -= 100;
      } else if ((change >= 20) && (cid[7][1] > 0)) {
        changeDue[1][1] += 20;
        change -= 20;
        cid[7][1] -= 20;
      } else if ((change >= 10) && (cid[6][1] > 0)) {
        changeDue[2][1] += 10;
        change -= 10;
        cid[6][1] -= 10;
      } else if ((change >= 5) && (cid[5][1] > 0)) {
        changeDue[3][1] += 5;
        change -= 5;
        cid[5][1] -= 5;
      } else if ((change >= 1) && (cid[4][1] > 0)) {
        changeDue[4][1] += 1;
        change -= 1;
        cid[4][1] -= 1;
      } else if ((change >= 0.25) && (cid[3][1] > 0)) {
        changeDue[5][1] += 0.25;
        change -= 0.25;
        cid[3][1] -= 0.25;
      } else if ((change >= 0.1) && (cid[2][1] > 0)) {
        changeDue[6][1] += 0.1;
        change -= 0.1;
        cid[2][1] -= 0.1;
      } else if ((change >= 0.05) && (cid[1][1] > 0)) {
        changeDue[7][1] += 0.05;
        change -= 0.05;
        cid[1][1] -= 0.05;
      } else if ((change >= 0.01) && (cid[0][1] > 0)) {
        changeDue[8][1] += 0.01;
        change -= 0.01;
        cid[0][1] -= 0.01;
      } else {
        return "Insufficient Funds";
      }

      // fix decimal positions
      change = change.toFixed(2);
    }

    // delete changeDue array positions not used
    // and fix decimal positions used
    for (var j = 0; j < changeDue.length; j++) {
      if (changeDue[j][1] === 0.00) {
        changeDue.splice(j, 1);
        j--;
      }
    }
    return changeDue;
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

// console.log("array =? " + drawer(19.50, 20.00, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.10],
//   ["QUARTER", 4.25],
//   ["ONE", 90.00],
//   ["FIVE", 55.00],
//   ["TEN", 20.00],
//   ["TWENTY", 60.00],
//   ["ONE HUNDRED", 100.00]
// ]));

// console.log("string =? " + drawer(19.50, 20.00, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]));

// console.log("string =? " + drawer(19.50, 20.00, [
//   ["PENNY", 0.50],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]));

// console.log('[["QUARTER", 0.50]] =? ' + drawer(19.50, 20.00, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.10],
//   ["QUARTER", 4.25],
//   ["ONE", 90.00],
//   ["FIVE", 55.00],
//   ["TEN", 20.00],
//   ["TWENTY", 60.00],
//   ["ONE HUNDRED", 100.00]
// ]));

console.log('[ ["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]] = ? ' + drawer(3.26, 100.00, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]
]));

// console.log("Insufficient Funds =? " + drawer(19.50, 20.00, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]));

// console.log("Insufficient Funds =? " + drawer(19.50, 20.00, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 1.00],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]));

// console.log("Closed =? " + drawer(19.50, 20.00, [
//   ["PENNY", 0.50],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]));
