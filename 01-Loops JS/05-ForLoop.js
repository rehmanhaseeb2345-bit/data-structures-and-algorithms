function isStrongNumber(n) {
  num = n;
  digit = [];
  sum = 0;

  while (num > 0) {
    extrnum = num % 10;

    let result = 1;

    for (i = 2; i <= extrnum; i++) {
      result *= i;
    }
    sum += result;
    num = Math.floor(num / 10);
  }

  if (sum === n) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

isStrongNumber(145);
