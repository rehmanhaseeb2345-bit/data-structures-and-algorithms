let s = "helol";
let slow = 0;
let fast = 1;

while (slow < s.length) {
  if (fast == s.length) {
    slow++;
    fast = slow + 1;
    continue;
  }

  if (s[slow] == s[fast]) {
    console.log(s[slow]);
    slow++;
    fast = slow + 1;
    continue;
  }

  fast++;
}
