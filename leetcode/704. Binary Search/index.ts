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
// console.log("🚀 ~ search:", search([-1, 0, 3, 5, 9, 12], 9));
// console.log("🚀 ~ search:", search([-1, 0, 3, 5, 9, 12], 2));

// Recursive BinarySearch
function recursiveSearch(nums: number[], target: number): number {
  return recursiveBinarySearch(nums, target, 0, nums.length - 1);
}

function recursiveBinarySearch(
  nums: number[],
  target: number,
  start: number,
  end: number,
): number {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (nums[mid] == target) return mid;

  return nums[mid] < target
    ? recursiveBinarySearch(nums, target, mid + 1, end)
    : recursiveBinarySearch(nums, target, start, mid - 1);
}

console.log("🚀 ~ search:", recursiveSearch([-1, 0, 3, 5, 9, 12], 9));
console.log("🚀 ~ search:", recursiveSearch([-1, 0, 3, 5, 9, 12], 2));
