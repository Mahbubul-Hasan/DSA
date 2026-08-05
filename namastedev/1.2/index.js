function secondHighest(s) {
  let numbers = [];
  Array.from(s).map((item) => {
    if (Number.isInteger(Number(item))) {
      numbers.push(Number(item));
    }
  });
  let arr = new Set(numbers.sort().reverse());
  return Array.from(arr)[1] ?? -1;
}
console.log(secondHighest("dfa12321afd"));
console.log(secondHighest("abc1111"));
console.log(secondHighest("ck077"));
