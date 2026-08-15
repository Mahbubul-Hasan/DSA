function maxSubArray(nums: number[]): number {
  let sum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(sum, maxSum);
    if (sum < 0) sum = 0;
  }

  return maxSum;
}

console.log("🚀 ~ maxSubArray:", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log("🚀 ~ maxSubArray:", maxSubArray([1]));
console.log("🚀 ~ maxSubArray:", maxSubArray([5, 4, -1, 7, 8]));
console.log("🚀 ~ maxSubArray:", maxSubArray([-1]));
console.log("🚀 ~ maxSubArray:", maxSubArray([-2, -1]));
