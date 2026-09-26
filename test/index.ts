function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  function helper(row: number, col: number): number[] {
    if (row == n) return arr;

    if (col < n - 1) {
      if (arr[col] > arr[col + 1]) {
        [arr[col], arr[col + 1]] = [arr[col + 1], arr[col]];
      }
      helper(row, ++col);
    } else helper(++row, 0);

    return arr;
  }
  return helper(0, 0);
}

console.log("🚀 ~ bubbleSort:", bubbleSort([4, 3, 2, 1]));
