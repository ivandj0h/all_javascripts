function fib(n) {
  let phi = (1 + Math.sqrt(5)) / 2;
  let asymp = Math.pow(phi, n) / Math.sqrt(5);

  return Math.round(asymp);
}

console.log(fib(5));
