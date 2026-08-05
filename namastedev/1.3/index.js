function isPalindrome(x) {
  const num = x;
  let sum = 0;
  while (x > 0) {
    const remaining = x % 10;
    sum = sum * 10 + remaining;
    x = Math.floor(x / 10);
  }
  return sum;
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
