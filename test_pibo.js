const pibonacci = (n) => {
  if (n < 1) {
    return [];
  }
  if (n === 1) {
    return [1];
  }
  return Array.from({ length: n - 2 })
    .reduce((prev) => [prev[0] + prev[1], ...prev], [1, 1])
    .reverse();
};

console.log(pibonacci(10));
