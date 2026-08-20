function searchRange(nums: number[], target: number): number[] {
  const lowerBound = searchItem(nums, target, "LOWER");
  const upperBound = searchItem(nums, target, "UPPER");

  return [lowerBound, upperBound];
}

function searchItem(
  nums: number[],
  target: number,
  bound: "UPPER" | "LOWER",
): number {
  let result = -1;
  const length = nums.length;
  let start = 0;
  let end = length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] == target) {
      result = mid;
      if (bound == "LOWER") end = mid - 1;
      else start = mid + 1;
    } else if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return result;
}

console.log("🚀 ~ searchRange:", searchRange([5, 7, 7, 8, 8, 10], 8));
console.log("🚀 ~ searchRange:", searchRange([5, 7, 7, 8, 8, 10], 6));
