// Heap's method

function permute(permutation) {
  var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

console.log(permute([1, 2, 3]));

========================================================

function permute(input) {
  var permArr = [],
      usedChars = [];
  return (function main() {
    for (var i = 0; i < input.length; i++) {
      var ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length == 0) {
        permArr.push(usedChars.slice());
      }
      main();
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  })();
}

console.log(permute([5, 3, 7, 1]));
//document.write(JSON.stringify(permute([5, 3, 7, 1])));

==========================================================

const rotations = ([l, ...ls], right=[]) =>
  l ? [[l, ...ls, ...right], ...rotations(ls, [...right, l])] : []

const permutations = ([x, ...xs]) =>
  x ? permutations(xs).flatMap((p) => rotations([x, ...p])) : [[]]
  
console.log(permutations("cat"))