function rotate(matrix, direction) {
  const len_child = Array.isArray(matrix[0]) ? matrix[0].length : matrix.length;
  if (direction === "clockwise")
    return Array.from({ length: len_child }).map((element_1, index_1) =>
      matrix
        .flat()
        .filter((element, index_2) => index_2 % len_child === index_1)
        .reverse()
    );
  else if (direction === "counter-clocwise")
    return Array.from({ length: len_child }).map((element_1, index_1) =>
      matrix
        .flat()
        .filter(
          (element, index_2) => index_2 % len_child === len_child - 1 - index_1
        )
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
