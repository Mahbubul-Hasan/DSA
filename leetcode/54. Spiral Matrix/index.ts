function spiralOrder(matrix: number[][]): number[] {
  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;
  let result: number[] = [];

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result.push(matrix[startRow][i]);
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      result.push(matrix[i][endCol]);
    }
    endCol--;

    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        result.push(matrix[endRow][i]);
      }
      endRow--;
    }

    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        result.push(matrix[i][startCol]);
      }
      startCol++;
    }
  }
  return result;
}

console.log(
  "🚀 ~ spiralOrder:",
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);

console.log(
  "🚀 ~ spiralOrder:",
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
);
