const palindrome = (str) => {
  let k = [...str].length - 1;
  let i = 0;
  while (i < k) {
    // if ([...str][i] === " ") {
    //   i++;
    //   continue;
    // }
    // if ([...str][k] === " ") {
    //   k--;
    //   continue;
    // }
    if ([...str][i] !== [...str][k]) return false;
    i++;
    k--;
  }
  return true;
};
const longestPalindrome = (str) => {
  let len = [...str].length;
  let len_result = len;
  let first = 0;
  while (len_result > 2) {
    const substr = str.substring(first, first + len_result);
    if (palindrome(substr)) {
      return substr;
    }
    if (first + len_result === len) {
      len_result--;
      first = 0;
    } else first++;
  }
  return null;
};
console.log(longestPalindrome("abcbab"));
