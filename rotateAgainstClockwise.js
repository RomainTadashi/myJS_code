function rotateAgainstClockwise(matrix, times) {
  times = times % 4;
  console.log(matrix);
  if (times < 1) return matrix;
  else
    return rotateAgainstClockwise(
      Array.from({ length: matrix.length }).map((element, index) =>
        matrix.map((row) => row[matrix.length - 1 - index])
      ),
      --times
    );
}

// Example usage:
const rotatedMatrix = rotateAgainstClockwise(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  1
);
console.log(
  rotateAgainstClockwise(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
);
