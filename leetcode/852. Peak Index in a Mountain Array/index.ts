function peakIndexInMountainArray(arr: number[]): number {
  const n = arr.length;
  let start = 0;
  let end = n - 1;
  let mid: number;
  let ans = -1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] < arr[mid + 1]) start = mid + 1;
    else {
      ans = mid;
      end = mid - 1;
    }
  }
  return ans;
}

console.log(
  "🚀 ~ peakIndexInMountainArray:",
  peakIndexInMountainArray([0, 1, 0]),
);
console.log(
  "🚀 ~ peakIndexInMountainArray:",
  peakIndexInMountainArray([0, 2, 1, 0]),
);
console.log(
  "🚀 ~ peakIndexInMountainArray:",
  peakIndexInMountainArray([0, 10, 5, 2]),
);
