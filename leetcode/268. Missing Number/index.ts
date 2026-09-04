function missingNumber(nums: number[]): number {
  const length = nums.length;
  nums.sort((a, b) => a - b);
  console.log("🚀 ~ nums:", nums);
  let i = 0;
  while (i < length) {
    if (nums[i] != i) return i;

    i++;
  }

  return i;
}

// console.log("🚀 ~ missingNumber:", missingNumber([3, 0, 1]));
// console.log("🚀 ~ missingNumber:", missingNumber([0, 1]));
// console.log("🚀 ~ missingNumber:", missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(
  "🚀 ~ missingNumber:",
  missingNumber([
    45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
    4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34,
    30, 25, 47, 0, 31, 42, 24, 10, 14,
  ]),
);
