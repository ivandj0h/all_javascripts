const arr = [
  [1, 3, 2],
  [5, 2, 1, 4],
  [2, 1],
];

const groupAndSort = (arr) => {
  const res = [];
  const map = Object.create(null);
  Array.prototype.forEach.call(arr, (item) => {
    item.forEach((el) => {
      if (!(el in map)) {
        map[el] = [];
        res.push(map[el]);
      }
      map[el].push(el);
    });
  });
  res.sort((a, b) => {
    return a[0] - b[0];
  });
  return res;
};
console.log(groupAndSort(arr));
