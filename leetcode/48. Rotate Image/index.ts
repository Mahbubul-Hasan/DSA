function rotate(matrix: number[][]): number[][] {
  const n = matrix.length;

  for (let row = 0; row < n; row++) {
    for (let col = row + 1; col < n; col++) {
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }

  for (let row = 0; row < n; row++) {
    //   matrix[row].reverse();
    let left = 0;
    let right = n - 1;
    while (left < right) {
      let temp = matrix[row][left];
      matrix[row][left] = matrix[row][right];
      matrix[row][right] = temp;

      left++;
      right--;
    }
  }
  return matrix;
}

console.log(
  "🚀 ~ rotate:",
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
