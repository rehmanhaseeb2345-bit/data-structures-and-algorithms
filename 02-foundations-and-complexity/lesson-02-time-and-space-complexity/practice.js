/**
 * Practice: Time & Space Complexity
 *
 * For each function, state BOTH time and space complexity in the comment.
 * Run with:
 *   node 01-foundations-and-complexity/lesson-02-time-and-space-complexity/practice.js
 */

'use strict';

// Problem 1: Time O(?)  Space O(?)
function doubleEach(arr) {
  const result = [];
  for (const value of arr) {
    result.push(value * 2);
  }
  return result;
}

// Problem 2: Time O(?)  Space O(?)
function reverseInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

// Problem 3: Time O(?)  Space O(?)  (mind the recursion depth)
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

if (require.main === module) {
  console.log('doubleEach:', doubleEach([1, 2, 3]));
  console.log('reverseInPlace:', reverseInPlace([1, 2, 3, 4]));
  console.log('factorial(5):', factorial(5));
}

// Answers:
// doubleEach     -> Time O(n), Space O(n)   (builds a new array)
// reverseInPlace -> Time O(n), Space O(1)   (swaps in place)
// factorial      -> Time O(n), Space O(n)   (n stacked recursive calls)

module.exports = { doubleEach, reverseInPlace, factorial };
