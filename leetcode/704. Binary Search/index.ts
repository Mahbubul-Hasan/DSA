function search(nums: number[], target: number): number {
  const length = nums.length;
  let start = 0;
  let end = length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] == target) return mid;
    else if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

console.log("🚀 ~ search:", search([-1, 0, 3, 5, 9, 12], 9));
console.log("🚀 ~ search:", search([-1, 0, 3, 5, 9, 12], 2));
