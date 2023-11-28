// function nextPalin(number) {
//   if (number === BigInt(Array.from({ length: 1001 }).fill(9).join("")))
//     return null;
//   number += 1n;
//   const numArr = ("" + number).split("");
//   let k = numArr.length - 1,
//     i = 0;
//   k = numArr.length - 1;
//   let carry = false;
//   while (1) {
//     var temp = carry
//       ? parseInt(numArr[k - 1]) + 1
//       : parseInt(numArr[k - 1]) + 0;
//     if (parseInt(numArr[i]) < parseInt(numArr[k])) {
//       temp++;
//     }
//     if (temp > 9) {
//       numArr[k - 1] = `${temp - 10}`;
//       carry = true;
//     } else {
//       numArr[k - 1] = `${temp}`;
//       carry = false;
//     }

//     numArr[k] = numArr[i];
//     i++;
//     k--;
//     if (k <= i && !carry) {
//       if (k > 0) numArr[i] = numArr[k];
//       break;
//     }
//   }
//   return BigInt(numArr.join(""));
// }
// console.log(nextPalin(2n));

function nextPalin(number) {
  const s = number + "",
    n = s.length,
    h = s.slice(0, (n + 1) >> 1);
  const x = BigInt(
    h +
      [...h]
        .reverse()
        .join("")
        .slice(n % 2)
  );
  if (x > number) return x;
  const t = BigInt(h) + 1n + "";
  return t.length > h.length
    ? BigInt("1" + "0".repeat(n - 1) + "1")
    : BigInt(
        t +
          [...t]
            .reverse()
            .join("")
            .slice(n % 2)
      );
}
console.log(nextPalin(12399333n));
