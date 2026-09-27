function mergeSort(arr: number[]): number[] {
  const n = arr.length;
  function helper(nums: number[]): number[] {
    const length = nums.length;
    if (length <= 1) return nums;

    const mid = Math.floor(length / 2);
    const left = helper(nums.slice(0, mid));
    const right = helper(nums.slice(mid));

    return merge(left, right);
  }

  function merge(left: number[], right: number[]): number[] {
    let i = 0;
    let j = 0;
    let k = 0;

    const newArr: number[] = [];
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        newArr[k++] = left[i++];
      } else newArr[k++] = right[j++];
    }
    // return [...newArr, ...left.slice(i), ...right.slice(j)];
    
    while (i < left.length) {
      newArr[k++] = left[i++];
    }
    while (j < right.length) {
      newArr[k++] = left[j++];
    }
    return newArr;
  }
  return helper(arr);
}

console.log("🚀 ~ mergeSort:", mergeSort([5, 4, 3, 2, 1]));
