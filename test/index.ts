function triangle(n: number) {
  function helper(row: number, col: number) {
    if (row == n) return;

    if (col <= n - 1 - row) {
      process.stdout.write("* ");
      helper(row, ++col);
    } else {
      console.log();
      helper(++row, 0);
    }
  }
  helper(0, 0);
}
triangle(4);
