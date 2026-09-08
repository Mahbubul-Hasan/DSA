function nextPermutation(nums: number[]): number[] {
  let pivot = -1;
  const n = nums.length;

  //   Find pivot
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] > nums[i - 1]) {
      pivot = i - 1;
      break;
    }
  }

  if (pivot == -1) {
    let i = 0;
    let j = n - 1;
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      (i++, j--);
    }
    return nums;
  }

  // Find the nearest large index from n-1 to pivot+1
  for (let i = n - 1; i >= pivot + 1; i--) {
    if (nums[i] > nums[pivot]) {
      [nums[i], nums[pivot]] = [nums[pivot], nums[i]];
      break;
    }
  }

  // Reverse pivot+1 to rest
  let i = pivot + 1;
  let j = n - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    (i++, j--);
  }

  return nums;
}

// console.log("🚀 ~ nextPermutation:", nextPermutation([1, 2, 5, 4, 3]));
// console.log("🚀 ~ nextPermutation:", nextPermutation([1, 2, 3]));
// console.log("🚀 ~ nextPermutation:", nextPermutation([3, 2, 1]));
// console.log("🚀 ~ nextPermutation:", nextPermutation([1, 1, 5]));
console.log("🚀 ~ nextPermutation:", nextPermutation([2, 3, 1]));
