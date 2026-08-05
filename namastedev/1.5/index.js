function countNegatives(arr) {
  if (!Array.isArray(arr)) return false;
  let count = 0;
  for (let index = 0; index <= arr.length - 1; index++) {
    if (
      typeof arr[index] != "number" ||
      Number.isNaN(arr[index]) ||
      !Number.isFinite(arr[index])
    ) {
      return false;
    }
    if (arr[index] < 0) count++;
  }

  return count;
}
console.log(countNegatives([-1, 0, 1]));
console.log(countNegatives([-2, -5, -7]));
console.log(countNegatives({}));
console.log(countNegatives([1, "a"]));
console.log(countNegatives(Infinity));
console.log(countNegatives(-Infinity));
console.log(countNegatives([Infinity]));
console.log(countNegatives([-Infinity]));
