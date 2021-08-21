// The Fibonacci Sequence

const generateFibonecciNumber = (targetNum) => {
  var seqOne = 0;
  var seqTwo = 1;

  for (let i = 3; i <= targetNum; i++) {
    seqThree = seqOne + seqTwo;
    seqOne = seqTwo;
    seqTwo = seqThree;

    console.log(seqThree);
  }
};

generateFibonecciNumber(14);
