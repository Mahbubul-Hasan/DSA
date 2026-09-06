function isPowerOfTwo(n: number): boolean {
  let x = 1;
  while (x <= n) {
    if (x == n) return true;
    x *= 2;
  }
  return false;
}

function isPowerOfTwoV2(n: number): boolean {
  return n > 0 && (n & (n - 1)) == 0;
}

console.log("🚀 ~ isPowerOfTwoV2:", isPowerOfTwoV2(1));
console.log("🚀 ~ isPowerOfTwoV2:", isPowerOfTwoV2(4));
console.log("🚀 ~ isPowerOfTwoV2:", isPowerOfTwoV2(16));
console.log("🚀 ~ isPowerOfTwoV2:", isPowerOfTwoV2(3));
