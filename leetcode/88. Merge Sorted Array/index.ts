function merge1(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): number[] {
  let i = m - 1;
  let j = n - 1;
  let idx = m + n - 1;

  while (j >= 0) {
    console.log("🚀 ~ nums1:", nums1);
    if (nums1[i] > nums2[j]) {
      nums1[idx] = nums1[i];
      i--;
    } else {
      nums1[idx] = nums2[j];
      j--;
    }
    idx--;
  }
  return nums1;
}
console.log("🚀 ~ merge:", merge1([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log("🚀 ~ merge:", merge1([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
console.log("🚀 ~ merge:", merge1([1], 1, [], 0));
console.log("🚀 ~ merge:", merge1([0], 0, [1], 1));
