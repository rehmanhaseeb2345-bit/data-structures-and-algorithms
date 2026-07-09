/**
 * Lesson: Time & Space Complexity
 * Module: 01 · Foundations & Complexity
 *
 * Same task, different trade-offs — a concrete look at time vs space.
 * Run with:
 *   node 01-foundations-and-complexity/lesson-02-time-and-space-complexity/implementation.js
 */

'use strict';

// Task: does the array contain two numbers that add up to `target`?

// Approach A — brute force.
// Time:  O(n^2)  (check every pair)
// Space: O(1)    (no extra structures)
function hasPairBruteForce(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return true;
    }
  }
  return false;
}

// Approach B — hashing. Trade memory for speed.
// Time:  O(n)    (single pass)
// Space: O(n)    (the Set can hold up to n items)
function hasPairWithSet(arr, target) {
  const seen = new Set();
  for (const value of arr) {
    if (seen.has(target - value)) return true;
    seen.add(value);
  }
  return false;
}

// --- Quick manual test -------------------------------------------------------
if (require.main === module) {
  const nums = [2, 7, 11, 15];
  console.log('brute force, target 9:', hasPairBruteForce(nums, 9)); // true
  console.log('with set,     target 9:', hasPairWithSet(nums, 9)); // true
  console.log('with set,     target 3:', hasPairWithSet(nums, 3)); // false
  console.log('\nBoth are correct — B is faster (O(n)) but uses O(n) memory.');
}

module.exports = { hasPairBruteForce, hasPairWithSet };
