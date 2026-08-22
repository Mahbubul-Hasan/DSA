function nextGreatestLetter(letters: string[], target: string): string {
  const n = letters.length;
  let start = 0;
  let end = n - 1;
  let mid: number;
  let result = -1;

  if (letters[0] > target || letters[end] <= target) return letters[0];

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (letters[mid] <= target) {
      start = mid + 1;
    } else {
      result = mid;
      end = mid - 1;
    }
  }

  if (result == -1) return letters[0];
  return letters[result];
}

console.log(
  "🚀 ~ nextGreatestLetter:",
  nextGreatestLetter(["c", "f", "j"], "a"),
);
console.log(
  "🚀 ~ nextGreatestLetter:",
  nextGreatestLetter(["c", "f", "j"], "c"),
);
console.log(
  "🚀 ~ nextGreatestLetter:",
  nextGreatestLetter(["c", "f", "j"], "d"),
);
console.log(
  "🚀 ~ nextGreatestLetter:",
  nextGreatestLetter(["c", "f", "j"], "j"),
);
console.log(
  "🚀 ~ nextGreatestLetter:",
  nextGreatestLetter(["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"], "e"),
);
