function numberOfSteps(num: number): number {
  function helper(n: number, step: number): number {
    if (n == 0) return step;
    if (n % 2 == 0) n = n / 2;
    else n--;

    return helper(n, ++step);
  }

  return helper(num, 0);
}

console.log("🚀 ~ numberOfSteps:", numberOfSteps(14));
console.log("🚀 ~ numberOfSteps:", numberOfSteps(8));
console.log("🚀 ~ numberOfSteps:", numberOfSteps(123));
