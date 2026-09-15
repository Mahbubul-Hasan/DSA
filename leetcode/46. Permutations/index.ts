function permute(nums: number[]): number[][] {
  let result: number[][] = [];

  function backtrack(idx: number) {
    if (idx == nums.length) return result.push([...nums]);

    for (let i = idx; i < nums.length; i++) {
      [nums[idx], nums[i]] = [nums[i], nums[idx]];
      backtrack(idx + 1);

      [nums[i], nums[idx]] = [nums[idx], nums[i]];
    }
  }

  backtrack(0);
  return result;
}

console.log("🚀 ~ permute:", permute([1, 2, 3]));
