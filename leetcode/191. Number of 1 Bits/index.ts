function hammingWeight(n: number): number {
  let count = 0;
  while (n > 0) {
    if (Math.floor(n % 2)) count++;
    n = Math.floor(n / 2);
  }
  return count;
}
function hammingWeightV2(n: number): number {
  let count = 0;
  while (n != 0) {
    count++;
    n = n & (n - 1);
  }
  return count;
}

console.log("🚀 ~ hammingWeight:", hammingWeightV2(128));
