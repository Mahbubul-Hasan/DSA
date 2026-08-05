function countNegatives(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length <= 0) return null;
  let count = 0;
  for (let index = 0; index <= arr.length - 1; index++) {
    if (
      typeof arr[index] != "number" ||
      Number.isNaN(arr[index]) ||
      !Number.isFinite(arr[index])
    ) {
      return false;
    }
  }
  return Math.min(...arr);
}
console.log(countNegatives([3, 2, 1]));
console.log(countNegatives([-2, -5, -7]));
console.log(countNegatives([]));
console.log(countNegatives({}));
console.log(countNegatives([1, "a"]));
console.log(countNegatives(Infinity));
console.log(countNegatives(-Infinity));
console.log(countNegatives([Infinity]));
console.log(countNegatives([-Infinity]));
