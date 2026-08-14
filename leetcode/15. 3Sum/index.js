/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let result = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum == 0) {
        let temp = [nums[i], nums[left], nums[right]].sort((a, b) => a - b);
        result.add(temp.join(","));
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }

  return [...result].map((item) => item.split(",").map(Number));
};
console.log("🚀 ~ threeSum:", threeSum([-1, 0, 1, 2, -1, -4]));
