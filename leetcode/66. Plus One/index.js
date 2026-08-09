/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) digits[i] = 0;
    else {
      digits[i] += 1;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
console.log("🚀 ~ plusOne:", plusOne([1, 2, 3]));
console.log("🚀 ~ plusOne:", plusOne([4, 3, 2, 1]));
console.log("🚀 ~ plusOne:", plusOne([9]));
console.log("🚀 ~ plusOne:", plusOne([9, 9, 9, 9]));
console.log("🚀 ~ plusOne:", plusOne([1, 9, 9, 9, 9]));
