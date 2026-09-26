function triangle(n: number) {
  function helper(row: number, col: number) {
    if (row == n) return;

    if (col <= row) {
      helper(row, ++col);
      process.stdout.write("* ");
    } else {
      helper(++row, 0);
      console.log();
    }
  }
  helper(0, 0);
}
triangle(4);
