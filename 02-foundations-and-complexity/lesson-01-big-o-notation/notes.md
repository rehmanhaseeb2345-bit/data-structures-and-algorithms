# Lesson: Big-O Notation

**Module:** 01 · Foundations & Complexity
**Date:** <YYYY-MM-DD>

## 🎯 What I'm learning
How to describe how an algorithm's running time (or memory) grows as the input size `n` grows — independent of the specific machine it runs on.

## 💡 Key ideas
- **Big-O** describes the **upper bound** / worst-case growth rate.
- We care about **how it scales**, not exact operation counts.
- **Drop constants:** `O(2n)` → `O(n)`.
- **Drop lower-order terms:** `O(n² + n)` → `O(n²)`.
- Big-Ω = best case (lower bound), Big-Θ = tight bound (both).

## 📊 The common classes, fastest → slowest
| Notation   | Name         | "If n doubles, work…"          |
|------------|--------------|--------------------------------|
| O(1)       | Constant     | stays the same                 |
| O(log n)   | Logarithmic  | grows by a constant            |
| O(n)       | Linear       | doubles                        |
| O(n log n) | Linearithmic | a bit more than doubles        |
| O(n²)      | Quadratic    | quadruples                     |
| O(2ⁿ)      | Exponential  | squares (explodes)             |

## 🧠 In my own words
Big-O answers: *"As my input gets huge, roughly how fast does the work grow?"*
It lets me compare two algorithms without running them.

## 🔗 Related
- [`docs/big-o-cheatsheet.md`](../../docs/big-o-cheatsheet.md)
- [VisuAlgo](https://visualgo.net)
