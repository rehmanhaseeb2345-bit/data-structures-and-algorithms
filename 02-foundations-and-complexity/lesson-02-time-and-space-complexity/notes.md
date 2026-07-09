# Lesson: Time & Space Complexity

**Module:** 01 · Foundations & Complexity
**Date:** <YYYY-MM-DD>

## 🎯 What I'm learning
How to actually **analyze** a piece of code and assign it a time complexity, and how to measure the **extra memory** (space complexity) it uses.

## 💡 Key ideas — analyzing time
- Count the operations as a function of input size `n`.
- **Sequential** statements add: `O(a) + O(b)`.
- **Nested** loops multiply: `O(a) × O(b)`.
- Keep only the dominant term.

## 💡 Key ideas — analyzing space
- Space complexity = **extra** memory beyond the input.
- A few variables → `O(1)` (constant / "in-place").
- A new array of size `n` → `O(n)`.
- Recursion uses stack space: depth `d` → `O(d)`.

## ⏱️ Worked examples
| Code shape                          | Time     | Space |
|-------------------------------------|----------|-------|
| single loop                         | O(n)     | O(1)  |
| loop that builds a new array        | O(n)     | O(n)  |
| nested loop                         | O(n²)    | O(1)  |
| recursion, depth n                  | O(n)     | O(n)  |

## 🧠 In my own words
Time = *how many steps*. Space = *how much extra memory*. There's often a
trade-off: I can spend memory (a hash map) to save time, or vice versa.

## 🔗 Related
- [`../lesson-01-big-o-notation`](../lesson-01-big-o-notation)
- [`docs/big-o-cheatsheet.md`](../../docs/big-o-cheatsheet.md)
