function searchInsert(nums: number[], target: number): number {
  const n = nums.length;
  let start = 0;
  let end = n - 1;
  let mid = end;
  let result = -1;

  if (nums[0] > target) return 0;
  if (nums[end] < target) return n;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) start = mid + 1;
    else {
      result = mid;
      end = mid - 1;
    }
  }
  return result;
}

console.log("🚀 ~ searchInsert:", searchInsert([1, 3, 5, 6], 5));
console.log("🚀 ~ searchInsert:", searchInsert([1, 3, 5, 6], 2));
console.log("🚀 ~ searchInsert:", searchInsert([1, 3, 5, 6], 7));
