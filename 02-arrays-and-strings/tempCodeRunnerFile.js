let s = "helol";
let slow = 0;
let fast = 1;

while (slow < s.length) {
  if (fast === s.length) {
    fast = slow + 1;
    slow++;
    continue;
  }

  if (s[slow] === s[fast]) {
    console.log(s[slow]);
    fast = slow + 1;
    slow++;
    continue;
  }

  fast++;
}
