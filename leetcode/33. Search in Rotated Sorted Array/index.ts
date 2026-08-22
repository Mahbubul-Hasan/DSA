function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  let mid: number;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] == target) return mid;

    if (nums[start] <= nums[mid]) {
      // left sorted
      if (nums[start] <= target && target <= nums[mid]) end = mid - 1;
      else start = mid + 1;
    } else {
      // right sorted
      if (nums[mid] <= target && target <= nums[end]) start = mid + 1;
      else end = mid - 1;
    }
  }
  return -1;
}

console.log("🚀 ~ search:", search([4, 5, 6, 7, 0, 1, 2], 0));
console.log("🚀 ~ search:", search([4, 5, 6, 7, 0, 1, 2], 3));
console.log("🚀 ~ search:", search([1], 0));
console.log("🚀 ~ search:", search([3, 5, 1], 3));
