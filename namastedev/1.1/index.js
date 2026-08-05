function sum(...args) {
  let sum = 0;
  args.map((item) => {
    sum += item;
  });
  console.log(sum);
}
sum(100, 200, 300, 400);
