function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);

  let result = nums[0] + nums[1] + nums[2];
  let minDiff = Number.MAX_VALUE;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum == target) return sum;
      else if (sum < target) left++;
      else right--;

      const sumToTargetDiff = Math.abs(sum - target);
      if (sumToTargetDiff < minDiff) {
        result = sum;
        minDiff = sumToTargetDiff;
      }
    }
  }
  return result;
}

console.log("🚀 ~ threeSumClosest:", threeSumClosest([-1, 2, 1, -4], 1));
console.log("🚀 ~ threeSumClosest:", threeSumClosest([1, 1, 1, 0], 100));
