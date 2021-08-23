// The Fibonacci Sequence

function generateFibonecciNumber(targetNum) {
  for (var fibonacci = [0, 1], i = 1; i < targetNum; i++)
    fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
  return fibonacci;
}

console.log(generateFibonecciNumber(10));
