function reverse(x) {
  const isNegative = x < 0;

  const min32 = Math.pow(-2, 31);
  const max32 = Math.pow(2, 31) - 1;

  let num = Math.abs(x);
  let result = 0;

  while (num > 0) {
    const remaining = num % 10;
    result = result * 10 + remaining;
    num = Math.floor(num / 10);
  }
  if (min32 > result || result > max32) {
    return 0;
  }
  return isNegative ? -result : result;
}
console.log(reverse(121));
console.log(reverse(-121));
console.log(reverse(1534236469));
console.log(reverse(-1534236469));
