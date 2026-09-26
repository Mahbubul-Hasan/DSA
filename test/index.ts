function selectionSort(arr: number[]): number[] {
  const n = arr.length;
  function helper(row: number, col: number): number[] {
    if (row == n) return arr;

    if (col <= n - 1) {
      if (arr[row] > arr[col]) {
        [arr[row], arr[col]] = [arr[col], arr[row]];
      }
      helper(row, ++col);
    } else {
      row = row + 1;
      col = row;
      helper(row, col);
    }

    return arr;
  }
  return helper(0, 0);
}

console.log("🚀 ~ selectionSort:", selectionSort([4, 3, 2, 1]));
