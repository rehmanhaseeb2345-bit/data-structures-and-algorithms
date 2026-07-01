# 📚 Data Structures & Algorithms

My structured journey through **Data Structures and Algorithms**, implemented in **JavaScript (Node.js)**.

The repo is split into **modules** (topic areas). Each module contains **lessons**, and every lesson keeps its notes, a clean implementation, and practice problems together in one folder.

---

## 🗺️ Roadmap

Legend: ✅ Done &nbsp;·&nbsp; 🚧 In progress &nbsp;·&nbsp; ⬜ Not started

| #  | Module | Focus | Status |
|----|--------|-------|:------:|
| 01 | [Foundations & Complexity](./01-foundations-and-complexity) | Big-O, time & space complexity | 🚧 |
| 02 | [Arrays & Strings](./02-arrays-and-strings) | Two pointers, sliding window | ⬜ |
| 03 | [Searching Algorithms](./03-searching-algorithms) | Linear & binary search | ⬜ |
| 04 | [Sorting Algorithms](./04-sorting-algorithms) | Merge, quick, heap sort… | ⬜ |
| 05 | [Recursion & Backtracking](./05-recursion-and-backtracking) | Call stack, backtracking | ⬜ |
| 06 | [Linked Lists](./06-linked-lists) | Singly, doubly, circular | ⬜ |
| 07 | [Stacks & Queues](./07-stacks-and-queues) | LIFO, FIFO, deque | ⬜ |
| 08 | [Hashing & Hash Tables](./08-hashing-and-hash-tables) | Hash maps & sets | ⬜ |
| 09 | [Trees & Binary Search Trees](./09-trees-and-binary-search-trees) | Traversals, BST ops | ⬜ |
| 10 | [Heaps & Priority Queues](./10-heaps-and-priority-queues) | Min/max heaps | ⬜ |
| 11 | [Graphs](./11-graphs) | BFS, DFS, shortest paths | ⬜ |
| 12 | [Greedy Algorithms](./12-greedy-algorithms) | Greedy strategy | ⬜ |
| 13 | [Dynamic Programming](./13-dynamic-programming) | Memoization, tabulation | ⬜ |
| 14 | [Tries & Advanced Topics](./14-tries-and-advanced-topics) | Tries, union-find, more | ⬜ |

> Full breakdown in [`docs/roadmap.md`](./docs/roadmap.md) · Track your progress in [`docs/progress-tracker.md`](./docs/progress-tracker.md)

---

## 📁 How each module is organized

```
NN-module-name/
├── README.md                    # what the module covers + list of lessons
└── lesson-NN-topic/
    ├── notes.md                 # concept notes, complexity, key ideas
    ├── implementation.js        # clean, commented reference implementation
    └── practice.js              # problems you solve yourself to practice
```

The `NN-` number prefixes keep everything in learning order in your file explorer.

---

## ▶️ Running the code

You need [Node.js](https://nodejs.org) installed. Run any file directly:

```bash
node 01-foundations-and-complexity/lesson-01-big-o-notation/implementation.js
```

---

## 🧰 Starting a new lesson

Copy the template folder and rename it:

```bash
# Windows (PowerShell)
Copy-Item -Recurse templates/lesson-template 02-arrays-and-strings/lesson-01-two-pointers

# macOS / Linux / Git Bash
cp -r templates/lesson-template 02-arrays-and-strings/lesson-01-two-pointers
```

Then fill in `notes.md`, write the `implementation.js`, and solve `practice.js`.

---

## 📌 Suggested workflow per lesson

1. **Learn** the concept → write it in your own words in `notes.md`.
2. **Implement** it from scratch in `implementation.js`.
3. **Practice** with 2–4 problems in `practice.js`.
4. **Commit** with a clear message, e.g. `feat(arrays): add two-pointer technique lesson`.
5. **Update** the status in this README and in `docs/progress-tracker.md`.
