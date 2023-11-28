function longestPalindrome(s) {
  // Transform the input string with special characters
  let t = "#";
  for (let i = 0; i < s.length; i++) {
    t += s[i] + "#";
  }

  // Initialize variables to track the right boundary and center of the current palindrome
  let center = 0;
  let right = 0;

  // Initialize an array to store the lengths of palindromes at each position
  const p = new Array(t.length).fill(0);

  // Variables to keep track of the center and right boundary of the longest palindrome found
  let maxLen = 0;
  let maxCenter = 0;

  for (let i = 1; i < t.length; i++) {
    if (i < right) {
      // Use previously computed information to determine the minimum palindrome length
      const mirror = 2 * center - i;
      p[i] = Math.min(right - i, p[mirror]);
    }

    // Expand around the current character and update p[i]
    let a = i + (1 + p[i]);
    let b = i - (1 + p[i]);
    while (a < t.length && b >= 0 && t[a] === t[b]) {
      p[i]++;
      a++;
      b--;
    }

    // Update the right boundary and center if necessary
    if (i + p[i] > right) {
      center = i;
      right = i + p[i];
    }

    // Check if the current palindrome is longer than the previous longest one
    if (p[i] > maxLen) {
      maxLen = p[i];
      maxCenter = i;
    }
    console.log(
      `center:${center}  right:${right}  p[i]:${p[i]}  maxcenter:${maxCenter}  maxLen:${maxLen}`
    );
  }

  // Extract the longest palindrome from the original string
  const start = (maxCenter - maxLen) / 2;
  const end = start + maxLen;

  return s.slice(start, end);
}

// Example usage:
console.log(longestPalindrome("babad")); // Output: "bab" or "aba" (either is acceptable)
// console.log(longestPalindrome("babbabbadb")); // Output: "bb"
