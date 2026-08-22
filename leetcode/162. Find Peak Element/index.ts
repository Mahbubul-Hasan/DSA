function findPeakElement(nums: number[]): number {
  const n = nums.length;
  let start = 0;
  let end = n - 1;
  let mid: number;
  let ans = -1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] < nums[mid + 1]) start = mid + 1;
    else {
      ans = mid;
      end = mid - 1;
    }
  }
  return ans;
}

console.log("🚀 ~ findPeakElement:", findPeakElement([1, 2, 3, 1]));
console.log("🚀 ~ findPeakElement:", findPeakElement([1, 2, 1, 3, 5, 6, 4]));
