function search(arr: number[], target: number): number {
  function helper(start: number, end: number): number {
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] == target) return mid;

    if (arr[start] <= arr[mid]) {
      if (arr[mid] >= target) end = mid - 1;
      else start = mid + 1;
    } else {
      if (arr[mid] <= target) start = mid + 1;
      else end = mid - 1;
    }

    return helper(start, end);
  }

  return helper(0, arr.length - 1);
}

console.log("🚀 ~ search:", search([9, 8, 7, 1, 2, 3, 4], 3));
