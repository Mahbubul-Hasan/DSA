function subsets(nums: number[]): number[][] {
  let result: number[][] = [];
  let current: number[] = [];

  function backtrack(start: number) {
    result.push([...current]);

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      backtrack(i + 1);
      current.pop();
    }
  }
  backtrack(0);
  return result;
}

console.log("🚀 ~ subsets:", subsets([1, 2, 3]));
