function cic(P, r, t, n) {
  return (A = P * (1 + r / n) ** (n * t));
}

console.log(Math.floor(cic(1000, 0.5, 10, 4)));
