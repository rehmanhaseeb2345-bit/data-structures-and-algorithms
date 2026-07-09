/**
 * Lesson: Big-O Notation
 * Module: 01 · Foundations & Complexity
 *
 * Each function below is a worked example of one complexity class.
 * Run with:  node 01-foundations-and-complexity/lesson-01-big-o-notation/implementation.js
 */

'use strict';

// O(1) — Constant. Work is the same no matter how big the array is.
function firstElement(arr) {
  return arr[0];
}

// O(n) — Linear. One pass over the input.
function sumAll(arr) {
  let total = 0;
  for (const value of arr) {
    total += value;
  }
  return total;
}

// O(n^2) — Quadratic. A loop inside a loop.
function allPairs(arr) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs;
}

// O(log n) — Logarithmic. The search space halves each step.
function countHalvings(n) {
  let steps = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    steps++;
  }
  return steps;
}

// --- Quick manual test -------------------------------------------------------
if (require.main === module) {
  const nums = [5, 2, 9, 1, 7];
  console.log('firstElement:', firstElement(nums)); // O(1)  -> 5
  console.log('sumAll:', sumAll(nums)); // O(n)  -> 24
  console.log('allPairs count:', allPairs(nums).length); // O(n^2) -> 10
  console.log('countHalvings(1024):', countHalvings(1024)); // O(log n) -> 10
}

module.exports = { firstElement, sumAll, allPairs, countHalvings };
