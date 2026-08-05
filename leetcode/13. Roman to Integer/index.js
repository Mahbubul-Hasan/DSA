/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roadmap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let number = 0;
  let strArr = s.split("");

  for (let index = 0; index < strArr.length; index++) {
    const current = roadmap[strArr[index]];
    const next = roadmap[strArr[index + 1]];
    if (current < next) number -= roadmap[strArr[index]];
    else number += roadmap[strArr[index]];
  }

  return number;
};

console.log(romanToInt("III"));
