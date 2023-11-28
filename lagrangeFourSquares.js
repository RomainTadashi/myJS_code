function lagrangeFourSquares(n) {
  return findSquares(n, 4); // Start with 4 squares
}

function findSquares(target, numSquares) {
  if (numSquares === 0) {
    if (target === 0) {
      return [[]]; // Successfully found a combination
    }
    return null; // No combination found
  }

  for (let i = Math.floor(Math.sqrt(target)); i >= 1; i--) {
    const square = i * i;
    const remainder = target - square;
    const result = findSquares(remainder, numSquares - 1);
    console.log(result);
    if (result !== null) {
      result.unshift(square); // Add the square to the combination
      return result;
    }
  }

  return null; // No combination found
}

const number = 25; // Change this to the number you want to represent
const result = lagrangeFourSquares(number);

if (result !== null) {
  console.log(`Lagrange's Four-Square Representation of ${number}:`);
  console.log(result);
} else {
  console.log(`No Four-Square Representation found for ${number}.`);
}
