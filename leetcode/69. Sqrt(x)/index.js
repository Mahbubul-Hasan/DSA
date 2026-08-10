/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let start = 0;
  let end = x;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    const squire = mid * mid;
    if (squire == x) return mid;
    if (squire > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end;
};
console.log("🚀 ~ mySqrt:", mySqrt(4));
console.log("🚀 ~ mySqrt:", mySqrt(8));
console.log("🚀 ~ mySqrt:", mySqrt(16));
