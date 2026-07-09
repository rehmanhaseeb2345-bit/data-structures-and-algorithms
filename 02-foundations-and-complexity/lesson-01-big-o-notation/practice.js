/**
 * Practice: Big-O Notation
 *
 * For each function, write down its time complexity in a comment BEFORE
 * checking. Then implement/verify. Run with:
 *   node 01-foundations-and-complexity/lesson-01-big-o-notation/practice.js
 */

'use strict';

// Problem 1: What is the time complexity of this function? Write it here: O(?)
function mystery1(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  return count;
}

// Problem 2: What is the time complexity? O(?)
// (Careful: two separate loops, not nested.)
function mystery2(n) {
  let count = 0;
  for (let i = 0; i < n; i++) count++;
  for (let j = 0; j < n; j++) count++;
  return count;
}

// Problem 3: What is the time complexity? O(?)
function mystery3(n) {
  let count = 0;
  for (let i = 1; i < n; i *= 2) {
    count++;
  }
  return count;
}

if (require.main === module) {
  console.log('mystery1(4) =', mystery1(4)); // guess the growth as n grows
  console.log('mystery2(4) =', mystery2(4));
  console.log('mystery3(16) =', mystery3(16));
}

// Answers (no peeking first!):
// mystery1 -> O(n^2)   mystery2 -> O(n)   mystery3 -> O(log n)

module.exports = { mystery1, mystery2, mystery3 };
