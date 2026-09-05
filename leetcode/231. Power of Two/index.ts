function isPowerOfTwo(n: number): boolean {
  let x = 1;
  while (x <= n) {
    if (x == n) return true;
    x *= 2;
  }
  return false;
}

console.log("🚀 ~ isPowerOfTwo:", isPowerOfTwo(1));
console.log("🚀 ~ isPowerOfTwo:", isPowerOfTwo(4));
console.log("🚀 ~ isPowerOfTwo:", isPowerOfTwo(16));
console.log("🚀 ~ isPowerOfTwo:", isPowerOfTwo(3));
