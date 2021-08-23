// function fib(n) {
//   let phi = (1 + Math.sqrt(5)) / 2;
//   let asymp = Math.pow(phi, n) / Math.sqrt(5);

//   return Math.round(asymp);
// }

// lets use memoization

function fib(n, caches) {
  caches = caches || [];

  if (caches[n]) {
    return caches[n];
  } else {
    if (n < 3) return 1;
    else {
      caches[n] = fib(n - 1, caches) + fib(n - 2, caches);
    }
  }
  return caches[n];
}
console.log(fib(1001));
