// let s = "helol";
// let slow = 0;
// let fast = 1;

// while (slow < s.length) {
//   if (fast == s.length) {
//     slow++;
//     fast = slow + 1;
//     continue;
//   }

//   if (s[slow] == s[fast]) {
//     console.log(s[slow]);
//     slow++;
//     fast = slow + 1;
//     continue;
//   }

//   fast++;
// }

function fibonacci(n) {
  // Base case: if n is 0 or 1, just return n
  if (n <= 1) {
    return n;
  }

  // The function calls ITSELF twice!
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(2100)); // Output: 10946
