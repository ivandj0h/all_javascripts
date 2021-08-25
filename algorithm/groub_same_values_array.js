const arr = [1, 7, 4, 3, 7, 1, 2, 2, 7].sort((a, b) => a - b),
  grouped = arr.reduce((r, v, i, a) => {
    if (v === a[i - 1]) {
      r[r.length - 1].push(v);
    } else {
      r.push(v === a[i + 1] ? [v] : [v]);
    }
    return r;
  }, []);

console.log(grouped);
