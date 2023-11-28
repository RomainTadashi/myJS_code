const additionWithoutCarrying = (a, b) =>
  +[...`${a}`.padStart(5)]
    .map((val, idx) => (+val + +`${b}`.padStart(5)[idx]) % 10)
    .join(``);
console.log(additionWithoutCarrying(2459, 2458));
