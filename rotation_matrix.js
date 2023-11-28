function rotate(matrix, direction) {
  const len_child = Array.isArray(matrix[0]) ? matrix[0].length : matrix.length;
  if (direction === "clockwise")
    return Array.from({ length: len_child }).map((element, index) =>
      matrix.map((row) => row[index]).reverse()
    );
  else if (direction === "counter-clocwise")
    return Array.from({ length: len_child }).map((element, index) =>
      matrix.map((row) => row[len_child - 1 - index])
    );
  //   else return `Invalid direction`;
}

console.log(
  rotate(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    "clockwise"
  )
);
console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9], "clockwise"));
console.log(
  rotate(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    "counter-clocwise"
  )
);
console.log(
  rotate(
    rotate(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12],
      ],
      "counter-clocwise"
    ),
    "clockwise"
  )
);
