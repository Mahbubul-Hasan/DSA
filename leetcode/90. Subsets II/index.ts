function subsetsWithDup(nums: number[]): number[][] {
  let result: number[][] = [];
  let output: number[] = [];
  nums.sort((a, b) => a - b);

  function backtrack(start: number) {
    result.push([...output]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;

      output.push(nums[i]);
      backtrack(i + 1);
      output.pop();
    }
  }

  backtrack(0);
  return result;
}

console.log("🚀 ~ subsetsWithDup:", subsetsWithDup([1, 2, 2]));
