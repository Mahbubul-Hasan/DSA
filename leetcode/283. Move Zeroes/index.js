/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let k = nums.indexOf(0);
  if (k == -1) return nums;

  for (let i = k; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[nums.indexOf(0)] = nums[i];
      nums[i] = 0;
    }
  }
  return nums;
};
console.log("🚀 ~ moveZeroes:", moveZeroes([0, 1, 0, 3, 12]));
console.log("🚀 ~ moveZeroes:", moveZeroes([0]));
console.log("🚀 ~ moveZeroes:", moveZeroes([1]));
console.log("🚀 ~ moveZeroes:", moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]));
console.log(
  "🚀 ~ moveZeroes:",
  moveZeroes([
    45192, 0, -659, -52359, -99225, -75991, 0, -15155, 27382, 59818, 0, -30645,
    -17025, 81209, 887, 64648,
  ]),
);
