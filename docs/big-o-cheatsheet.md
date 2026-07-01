# ⚡ Big-O Cheat Sheet

## Complexity classes (best → worst)

| Notation   | Name         | Example                                   |
|------------|--------------|-------------------------------------------|
| O(1)       | Constant     | Array index access, hash map lookup       |
| O(log n)   | Logarithmic  | Binary search                             |
| O(n)       | Linear       | Single loop over an array                 |
| O(n log n) | Linearithmic | Merge sort, quick sort (avg), heap sort   |
| O(n²)      | Quadratic    | Nested loops (bubble sort)                |
| O(2ⁿ)      | Exponential  | Naive recursive Fibonacci, subsets        |
| O(n!)      | Factorial    | Permutations, brute-force travelling sales |

## Common data structure operations (average case)

| Structure          | Access | Search | Insert | Delete |
|--------------------|:------:|:------:|:------:|:------:|
| Array              | O(1)   | O(n)   | O(n)   | O(n)   |
| Dynamic array      | O(1)   | O(n)   | O(1)*  | O(n)   |
| Linked list        | O(n)   | O(n)   | O(1)   | O(1)   |
| Stack / Queue      | O(n)   | O(n)   | O(1)   | O(1)   |
| Hash table         | O(1)   | O(1)   | O(1)   | O(1)   |
| Binary search tree | O(log n)| O(log n)| O(log n)| O(log n)|
| Heap               | —      | O(n)   | O(log n)| O(log n)|

\* Amortized. Occasional resize is O(n).

## Sorting algorithms

| Algorithm      | Best       | Average    | Worst      | Space   | Stable |
|----------------|:----------:|:----------:|:----------:|:-------:|:------:|
| Bubble sort    | O(n)       | O(n²)      | O(n²)      | O(1)    | ✅ |
| Selection sort | O(n²)      | O(n²)      | O(n²)      | O(1)    | ❌ |
| Insertion sort | O(n)       | O(n²)      | O(n²)      | O(1)    | ✅ |
| Merge sort     | O(n log n) | O(n log n) | O(n log n) | O(n)    | ✅ |
| Quick sort     | O(n log n) | O(n log n) | O(n²)      | O(log n)| ❌ |
| Heap sort      | O(n log n) | O(n log n) | O(n log n) | O(1)    | ❌ |

## Rules of thumb
- Drop constants: O(2n) → O(n).
- Drop lower-order terms: O(n² + n) → O(n²).
- Different inputs get different variables: O(a + b), not O(n).
- Nested loops multiply; sequential loops add.
