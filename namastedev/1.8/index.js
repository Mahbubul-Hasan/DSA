function search(nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target == nums[mid]) return mid;

    if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;

    // console.log(left);
    // console.log(right);
  }
  return -1;
}
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// console.log(search([5, 9, 12], 9));
// console.log(
//   search(
//     [-1, 0, 3, 5, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
//     9,
//   ),
// );
